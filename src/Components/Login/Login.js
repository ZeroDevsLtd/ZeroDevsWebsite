import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Loading from '../Sheare/Loading';
import {useNavigate} from "react-router-dom"


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    if(loading || gLoading){
        return <Loading></Loading>
    }
    let signError;
    if(error || gError){
         signError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password);
        navigate('/dashboard');
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-center text-2xl text-bold'>Login</h1>


                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a vailid email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt">{errors.email.message}</span>}
                            </label>

                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Provide minimum 6 charecters password'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt">{errors.password.message}</span>}
                            </label>

                        </div>
                                {signError}
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Login' />
                    </form>
                        {/* <p><small>New to Zero-Devs <Link className='text-primary' to='/signup'>Create a new account</Link></small></p> */}
                    {/* <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline flex justify-items-center"
                    >continue With Google</button> */}
                </div>
            </div>
        </div>
    );
};

export default Login;