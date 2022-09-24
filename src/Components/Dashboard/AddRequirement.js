import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddRequirement = data => {

    const { register, handleSubmit, reset } = useForm();

    const qualificationSubmit = data => {
        const requirements = {
            requirement: data.requirement
        }
        fetch('http://51.159.105.249:18520/requirement', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requirements)
        })
            .then(res => res.json())
            .then(data1 => {
                toast(`Circular requirement added!!!`);
                reset();
            })
    };

    return (
        <div className=' h-screen justify-center items-center mt-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    
                <h2 className='mt-4'>Requirements and Qualifications</h2>
                    <form onSubmit={handleSubmit(qualificationSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Qualification and requirement</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Qualification and requirement"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("requirement")}
                            />
                        </div>
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Add' />
                    </form>
                   
                </div>
            </div>
        </div>
    );
};
export default AddRequirement;