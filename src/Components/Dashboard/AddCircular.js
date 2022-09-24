import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddBenefit from './AddBenefit';
import AddRequirement from './AddRequirement';
import AddResponsibility from './AddResponsibility';

const AddCircular = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = {
            name: data.name,
            salary: data.salary,
            office: data.office,
            hour: data.hour,
            apply: data.apply,
            deadline: data.deadline,
            note: data.note
        }
        fetch('http://51.159.105.249:18520/circular', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data1 => {
                toast(`New circular part added!!!`);
                reset();
            })

    };


    return (
        <>
        <div className=' h-screen justify-center items-center mt-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-center text-2xl text-bold'>Add Circular</h1>


                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Job Name <small className='text-red-600'>*</small></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Job Name"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>

                            <label class="label">
                                {errors.title?.type === 'required' && <span class="label-text-alt text-red-500">{errors.title.message}</span>}
                            </label>
                            <label class="label">
                                <span class="label-text">Salary</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Salary range"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("salary")}
                            />
                            <label class="label">
                                <span class="label-text">Office Location<small className='text-red-600'>*</small></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Office Location"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("office", {
                                    required: {
                                        value: true,
                                        message: 'Office location is required'
                                    }
                                })}
                            />
                            {errors.phone1?.type === 'required' && <span class="label-text-alt text-red-500">{errors.phone1.message}</span>}

                            <label class="label">
                                <span class="label-text">Office Hour<small className='text-red-600'>*</small></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Office Hour"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("hour", {
                                    required: {
                                        value: true,
                                        message: 'Office hour is required'
                                    }
                                })}
                            />
                            {errors.nid?.type === 'required' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}

                            <label class="label">
                                <span class="label-text">Apply Here</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Apply Here"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("apply")}
                            />

                            <label class="label">
                                <span class="label-text">Application Deadline</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Application Deadline"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("deadline")}
                            />
                            <label class="label">
                                <span class="label-text">Note</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Note please"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("note")}
                            />

                        </div>
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Add' />
                    </form>
                    {/* <h2 className='mt-4'>Job responsibility</h2>
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

                    </form> */}
                    {/* <h2 className='mt-4'>Requirements and Qualifications</h2>
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
                    </form> */}
                    {/* <h2 className='mt-4'>Other benefits</h2>
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
                    </form> */}
                </div>
            </div>
        </div>
        <AddResponsibility></AddResponsibility>
        <AddRequirement></AddRequirement>
        <AddBenefit></AddBenefit>
        </>
    );
};

export default AddCircular;