import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>

            <div className="h-screen bg-gradient-to-br from-blue-400 to-indigo-500 flex justify-center items-center w-full">
                <form>
                    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
                            <div>
                                <label htmlFor="username" className="block mb-1 text-gray-600 font-semibold">Username</label>
                                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
                                <input type="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
                                <input type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                        </div>
                        <button className="mt-4 w-full bg-gradient-to-tr bg-indigo-500 text-white py-2 rounded-md text-lg tracking-wide">Register</button>

                        <p className='text-center my-2'>Or</p>

                        <button className="w-full bg-gradient-to-tr bg-indigo-500  text-white py-2 rounded-md text-lg tracking-wide">Continue with Google</button>

                        <p className='text-center mt-3'>Already have an account? <Link className='text-indigo-700 font-bold' to="/login">Log in</Link></p>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default Signup;