import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../HookTitle/useTitle';

const Register = () => {
     useTitle('Register')
     const { createAccountWithEmail,
          createUserWithGithub,
          loading,
          createUserWithGoogle,
          setUserProfile } = useContext(AuthContext)

     //  create google and github auth provider
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

     // use navigate to send user another page
     const navigate = useNavigate()

     // if page data loading than show loading button
     // if(loading){
     //      return <div className='text-center my-60'><button className="btn loading ">loading</button></div>
     // }

     const submitRegister = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const imgURL = form.imgURL.value;

          createAccountWithEmail(email, password)
               .then(result => {
                    const user = result.user;
                    toast.success('Register Successfully')
                    navigate('/');
                    console.log(user)
                    const userNamePhoto = {
                         displayName: name,
                         photoURL: imgURL
                    }
                    setUserProfile(userNamePhoto)
                         .then(() => { })
                         .catch(error => console.error(error))

               })
               .catch(error => {
                    console.error(error)
                    toast.error('Something wrong check you email and password')
               });
     }

     const googleHandler = () => {
          createUserWithGoogle(googleProvider)
               .then(result => {
                    const user = result.user;
                    toast.success('Login Successfully')
                    navigate('/');
               })
               .catch(error => console.error(error))
     }

     const githubHandler = () => {
          createUserWithGithub(githubProvider)
               .then(result => {
                    const user = result.user;
                    toast.success('Login Successfully')
                    navigate('/');
               })
               .catch(error => console.error(error))
     }


     return (
          <div>
               <div>
                    {/* <img src="https://i.ibb.co/6gw2QMM/join-background.jpg" alt="" /> */}
                    <div className="hero my-10  top-20 ">
                         <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                              <form onSubmit={submitRegister} className="card flex-shrink-0 w-full max-w-sm border-2 border-x-cyan-700 bg-base-100">
                                   <div className="card-body">
                                        <h1 className="text-5xl font-bold">Register now!</h1>

                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Name</span>
                                             </label>
                                             <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">imgURL</span>
                                             </label>
                                             <input type="text" name='imgURL' placeholder="image url" className="input input-bordered" />
                                        </div>
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
                                             <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                             <label className="label">

                                             </label>
                                        </div>
                                        <div className="form-control mt-6">
                                             <button className="btn btn-primary">Register</button>
                                        </div>
                                   </div >
                                   <p className='mb-10 text-center'>
                                        Already you have account<Link className='text-orange-600' to='/login'> Login </Link>
                                   </p>
                              </form>

                              <div className="mx-auto">
                                   <button onClick={googleHandler} className="flex  btn my-5 border-2 rounded-md px-4 py-2 text-center">
                                        <FaGoogle className='mt-1 mx-2'></FaGoogle>
                                        Continue with google
                                   </button>
                                   <button onClick={githubHandler} className="flex  btn border-2 rounded-md px-4 py-2 text-center">
                                        <FaGithub className='mt-1 mx-2'> </FaGithub>
                                        Continue with Github
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Register;