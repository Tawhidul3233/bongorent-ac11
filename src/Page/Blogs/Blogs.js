import React from 'react';

const Blogs = () => {
     return (
          <div className='m-5'>
               <div className=''>
                    <h2 className='text-3xl my-3'> A. Difference between SQL and NoSQL?</h2>
                    <div className="overflow-x-auto">
                         <table className="table w-full">
                              <thead>
                                   <tr>
                                        <th></th>
                                        <th>SQL</th>
                                        <th>NoSQL</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr>
                                        <th>1</th>
                                        <td>RELATIONAL DATABASE MANAGEMENT SYSTEM </td>
                                        <td>Non-relational or distributed database system.</td>
                                   </tr>
                                   <tr>
                                        <th>2</th>
                                        <td>These databases have fixed or static or predefined schema</td>
                                        <td>They have dynamic schema</td>
                                   </tr>
                                   <tr>
                                        <th>3</th>
                                        <td>These databases are not suited for hierarchical data storage.</td>
                                        <td>These databases are best suited for hierarchical data storage.</td>
                                   </tr>
                                   <tr>
                                        <th>4</th>
                                        <td>These databases are best suited for complex queries</td>
                                        <td>These databases are not so good for complex queries</td>
                                   </tr>
                                   <tr>
                                        <th>5</th>
                                        <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc </td>
                                        <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
               <div className='mt-5'>
                    <h2 className='text-3xl my-3'>B. What is JWT, and how does it work? </h2>
                    <p>
                     JWT is JSON Web Token. an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). <br />
                    Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.
                    </p>
               </div>
               <div className='mt-5'>
                    <h2 className='text-3xl my-3'>C. What is the difference between javascript and NodeJS? </h2>
                    <div className="overflow-x-auto">
                         <table className="table w-full">
                              <thead>
                                   <tr>
                                        <th></th>
                                        <th>javascript</th>
                                        <th>NodeJS</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr>
                                        <th>1</th>
                                        <td>Javascript is a programming language that is used for writing scripts on the website.  </td>
                                        <td>NodeJS is a Javascript runtime environment.</td>
                                   </tr>
                                   <tr>
                                        <th>2</th>
                                        <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                                        <td>Nodejs does not have capability to add HTML tags.</td>
                                   </tr>
                                   <tr>
                                        <th>3</th>
                                        <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </td>
                                        <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </td>
                                   </tr>
                                   <tr>
                                        <th>4</th>
                                        <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                                        <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                                   </tr>
                                   <tr>
                                        <th>5</th>
                                        <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.  </td>
                                        <td>Nodejs is written in C, C++ and Javascript.</td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>
               <div className='mt-5'>
                    <h2 className='text-3xl my-3'>D. How does NodeJS handle multiple requests at the same time? </h2>
                    <p>
                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.<br />
                    Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations. As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO(First In First Out) order.
                    </p>
               </div>
          </div>
     );
};

export default Blogs;