import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddResponsibility = () => {

    const { register, handleSubmit, reset } = useForm();

    const responseSubmit = data => {
        const respon = {
            responsibility: data.responsibility
        }
        fetch('https://webbackend-production.up.railway.app/responsibility', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(respon)
        })
            .then(res => res.json())
            .then(data1 => {
                toast(`Circular responsibility added!!!`);
                reset();
            })
    };
    return (
        <div className=' h-screen justify-center items-center mt-48'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    
                <h2 className='mt-4'>Job responsibility</h2>
                    <form onSubmit={handleSubmit(responseSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Responsibility of job</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Responsibility of job"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("responsibility")}
                            />
                        </div>
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Add' />

                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default AddResponsibility;