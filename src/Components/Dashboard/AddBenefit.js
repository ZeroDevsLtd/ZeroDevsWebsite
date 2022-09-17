import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBenefit = () => {
    const { register, handleSubmit, reset } = useForm();

    const benefitsSubmit = data => {
        const benefits = {
            benefit: data.benefit
        }
        fetch('https://webbackend-production.up.railway.app/benefit', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(benefits)
        })
            .then(res => res.json())
            .then(data1 => {
                toast(`Circular benefit added!!!`);
                reset();
            })
    };
    
    return (
        <div className=' h-screen justify-center items-center mt-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    
                <h2 className='mt-4'>Other benefits</h2>
                    <form onSubmit={handleSubmit(benefitsSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Benefits</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Job Benefits"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("benefit")}
                            />
                        </div>
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Add' />
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default AddBenefit;