import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../HookTitle/useTitle';


const Login = () => {
     useTitle('Login')
     const {lgoinAccountWithEmail,
           createUserWithGoogle,
               user, loading,
            createUserWithGithub} = useContext(AuthContext)

     // make a google provider and github provider
     const googleProvider =new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

     const navigate = useNavigate()
     // using location to go uer current targeted location
     const location = useLocation()
     const from = location.state?.from?.pathname || '/'

     // if page is loading than loader icon show
     if(loading){
          return <div className='text-center my-60'><button className="btn loading ">loading</button></div>
     }

     const singInHandler = (event)=>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;

          lgoinAccountWithEmail(email, password)
          .then(result => {
               const user = result.user;
               toast.success('Login Successfully')
               if(user?.uid){
                    navigate(from, {replace:true})
               }
          })
          .catch(error => {
               console.error(error)
               toast.error('Something wrong check you email and password')
          });
     }

     const googleHandler = ()=>{
          createUserWithGoogle(googleProvider)
          .then(result =>{
               const user = result.user;
               toast.success('Login Successfully')
               if(user?.uid){
                    navigate(from, {replace:true})
               }
               
          })
          .catch(error => console.error(error))
     }

     const githubHandler = ()=>{
          createUserWithGithub(githubProvider)
          .then(result => {
               const user = result.user;
               toast.success('Login Successfully')
               if(user?.uid){
                    navigate(from, {replace:true})
               }
          })
          .catch(error => console.error(error))
     }

     return (
          <div>
               <div className="hero my-20">
               <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                    <form onSubmit={singInHandler} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <div  className="card-body">
                              <h1 className="text-5xl font-bold">Login now!</h1>

                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                   <label className="label">
                                        <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Login</button>
                              </div>
                         </div >
                         <p className='mb-10 text-center'>
                              If new user<Link className='text-orange-600' to='/register'> Create Account </Link>
                         </p>
                    </form>
                    <div className="mx-auto">
                              <button onClick={googleHandler} className="flex  btn my-5 border-2 rounded-md px-4 py-2 text-center">
                                   <FaGoogle className='mt-1 mx-2'></FaGoogle>
                                   Sing in with google
                              </button>
                              <button onClick={githubHandler} className="flex  btn border-2 rounded-md px-4 py-2 text-center">
                                   <FaGithub className='mt-1 mx-2'> </FaGithub>
                                   Sing in with Github
                              </button>
                         </div>
               </div>
          </div>
          </div>
     );
};

export default Login;