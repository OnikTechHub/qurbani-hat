"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLoginFunc = async (data) => {
        console.log(data, "data");

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Login failed!", {
                duration: 4000, 
            });
        } else {
            toast.success("Login Successful! Welcome back.", {
                duration: 3000,
            });
        }
        console.log(res, error);
    };

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data, "data");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100 animate__animated animate__fadeIn">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
                    <p className="text-gray-500 mt-2">Log in to manage your bookings</p>
                </div>

                <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-6">
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

                    <button type="submit" className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full text-lg shadow-lg">
                        Log In
                    </button>
                </form>

                <div className="divider my-8 text-gray-400 text-sm uppercase tracking-wider">OR</div>

                
                <button 
                    onClick={handleGoogleSignin} 
                    className="btn btn-outline w-full border-gray-300 hover:bg-gray-50 hover:text-gray-800 flex items-center justify-center gap-3"
                >
                    <FaGoogle className="text-red-500 text-xl" />
                    Continue with Google
                </button>

                <p className="text-center mt-8 text-gray-600">
                    Don't have an account? <Link href="/register" className="text-orange-600 font-bold hover:underline">Register Now</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;