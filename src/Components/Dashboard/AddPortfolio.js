import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPortfolio = () => {

    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

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
                        name: data.name,
                        category: data.category,
                        image: img,
                        twitter:data.twitter,
                        facebook:data.facebook
                    }
                    fetch('http://localhost:5000/portfolio', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(data1 => {
                            toast(`Portfolio item added!!!`);
                            reset();
                        })
                }
            })

    };

    return (
        <div className=' h-screen justify-center items-center mt-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-center text-2xl text-bold '>Add Portfolio</h1>


                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                class="input input-border border-black w-full max-w-xs"
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
                                <span class="label-text">Category</span>
                            </label>
                               <select class="input input-border border-black w-full max-w-xs"
                                {...register("category")}>
                               {
                                categories.map(category => <option
                                    key={category._id}
                                    value={category.category}> {category.category}
                                    
                                </option>)
                               }
                               </select>
                            

                            <label class="label">
                                {errors.title?.type === 'required' && <span class="label-text-alt text-red-500">{errors.title.message}</span>}
                            </label>
                           
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
                            <label class="label">
                                <span class="label-text">Twitter Link</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Twitter link"
                                class="input input-border border-black w-full max-w-xs"
                                {...register("twitter",{
                                    required:{
                                        value:true,
                                        message:'Twitter field is required'
                                    }
                                })}
                            />
                           {errors.twitter?.type === 'required' && <span class="label-text-alt text-red-500">{errors.twitter.message}</span>}
                            <label class="label">
                                <span class="label-text">Facebook Link</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your facebook link"
                                class="input input-border border-black w-full max-w-xs"
                                {...register("facebook",{
                                    required:{
                                        value:true,
                                        message:'facebook field is required'
                                    }
                                })}
                            />
                           {errors.facebook?.type === 'required' && <span class="label-text-alt text-red-500">{errors.facebook.message}</span>}
                        </div>
                        <br />
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Add' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPortfolio;