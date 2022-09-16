import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddClient = () => {
    const imageStorageKey = 'dda575c25e356160f275a5e36cd35bbd';

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const blog = {
                        image: img
                    }
                    fetch('https://webbackend-production.up.railway.app/client', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(data1 => {
                            toast(`Client added!!!`);
                            reset();
                        })
                }
            })

    };

    return (
        <div className=' h-screen justify-center items-center mt-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-center text-2xl text-bold '>Add Client</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Image</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Image"
                                class="input w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    }
                                })}
                            />
                            {errors.image?.type === 'required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
                        </div>
                        <br />
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Add' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClient;