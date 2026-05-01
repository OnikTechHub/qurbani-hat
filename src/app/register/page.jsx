"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaImage, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const handleRegisterFunc = async (data) => {
        console.log(data, "data");
        const { email, name, photo, password } = data;
        console.log(name, photo);


        const { data: res, error  } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });

        if (error) {
            console.error(error);
            return toast.error(error.message || "Signup failed! Please try again.");
        }

        if (res) {
            toast.success("Registration successful! Welcome to QurbaniHat.");
            console.log( res, "Signup res:");
        }
    };

    


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100 animate__animated animate__fadeInUp">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-gray-500 mt-2">Join our Qurbani marketplace today</p>
                </div>

                <form onSubmit={handleSubmit(handleRegisterFunc)} className="space-y-4">

                    {/* Full Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Full Name</span>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                <FaUser />
                            </span>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full pl-10 focus:border-orange-500 outline-none"
                                {...register("name", { required: true })}
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                <FaImage />
                            </span>
                            <input
                                type="text"
                                placeholder="Enter your photo url"
                                className="input input-bordered w-full pl-10 focus:border-orange-500 outline-none"
                                {...register("photo", { required: true })} // 
                            />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                <FaEnvelope />
                            </span>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="input input-bordered w-full pl-10 focus:border-orange-500 outline-none"
                                {...register("email", { required: true })}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                                <FaLock />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="input input-bordered w-full pl-10 pr-10 focus:border-orange-500 outline-none"
                                {...register("password", { required: true })}
                            />
                            <span
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 hover:text-orange-600 transition-colors"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <button className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full text-lg shadow-lg mt-4">
                        Sign Up
                    </button>
                </form>

                <div className="divider my-6 text-gray-400 text-xs">ALREADY HAVE AN ACCOUNT?</div>

                <Link href="/login" className="btn btn-outline w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:border-orange-600 font-bold">
                    Log In to Your Account
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;