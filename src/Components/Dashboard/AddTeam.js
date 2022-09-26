import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Sheare/Loading';



const AddTeam = () => {
    const [genders, setGenders] = useState([]);

    const { data: statuses, isLoading } = useQuery('statuses', () => fetch('//51.159.105.249:18520/status').then(res => res.json()))
    useEffect(() => {
        fetch('//51.159.105.249:18520/gender')
            .then(res => res.json())
            .then(data => setGenders(data))
    }, []);

    const imageStorageKey = 'dda575c25e356160f275a5e36cd35bbd';
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
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
                console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const blog = {
                        name: data.name,
                        email: data.email,
                        title: data.title,
                        position: data.position,
                        image: img,
                        present: data.addressPre,
                        permanent: data.addressPer,
                        phone: data.phone1,
                        alrPhone: data.phone2,
                        nid: data.nid,
                        gender: data.gender,
                        blood: data.blood,
                        twitter: data.twitter,
                        facebook: data.facebook,
                        linkedIn: data.linkedIn,
                        github: data.github,
                        motto: data.motto,
                        favorite: data.things,
                        join: data.date,
                        status: data.status
                    }
                    fetch('//51.159.105.249:18520/add-team-member', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(data1 => {
                            toast(`New team member added!!!`);
                            reset();
                        })
                }
            })

    };
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' h-screen justify-center items-center mt-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='text-center text-2xl text-bold'>Add Team Member</h1>


                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name <small className='text-red-600'>*</small></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
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
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("email")}
                            />
                            <label class="label">
                                <span class="label-text">Title <small className='text-red-600'>*</small></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Title"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: 'Title is required'
                                    }
                                })}
                            />

                            <label class="label">
                                {errors.title?.type === 'required' && <span class="label-text-alt text-red-500">{errors.title.message}</span>}
                            </label>
                            <label class="label">
                                <span class="label-text">Position</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Position"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("position")}
                            />
                            <label class="label">
                                <span class="label-text">Image <small className='text-red-600'>*</small></span>
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
                                <span class="label-text">Present Address</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Present address"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("addressPre")}
                            />
                            <label class="label">
                                <span class="label-text">Permanent Address</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Permanent address"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("addressPer")}
                            />

                            <label class="label">
                                <span class="label-text">Phone Number <small className='text-red-600'>*</small></span>
                            </label>
                            <input
                                type="text"
                                placeholder="Phone"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("phone1", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    },
                                    pattern: {
                                        value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                                        message: 'Provide a valid input'
                                    }
                                })}
                            />
                            {errors.phone1?.type === 'required' && <span class="label-text-alt text-red-500">{errors.phone1.message}</span>}
                            {errors.phone1?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.phone1.message}</span>}
                            <label class="label">
                                <span class="label-text">Alternative Phone Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Alternative phone number"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("phone2", {
                                    pattern: {
                                        value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                                        message: 'Provide a valid input'
                                    }
                                })}
                            />
                            {errors.phone2?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.phone2.message}</span>}
                            <label class="label">
                                <span class="label-text">National ID Number <small className='text-red-600'>*</small></span>
                            </label>
                            <input
                                type="text"
                                placeholder="NID"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("nid", {
                                    required: {
                                        value: true,
                                        message: 'NID is required'
                                    },
                                    pattern: {
                                        value: /[0-9]/,
                                        message: 'Provide a valid input'
                                    }
                                })}
                            />
                            {errors.nid?.type === 'required' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
                            {errors.nid?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
                            <label class="label">
                                <span class="label-text">Gender</span>
                            </label>
                            <select {...register("gender")} class="input input-border border-primary w-full max-w-xs">
                                {
                                    genders.map(gender => <option
                                        key={gender._id}
                                        value={gender.gender}>{gender.gender}
                                    </option>)
                                }
                            </select>
                            <label class="label">
                                <span class="label-text">Blood Group</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Blood group"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("blood")}
                            />

                            <label class="label">
                                <span class="label-text">Twitter link</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Twitter link"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("twitter")}
                            />
                            <label class="label">
                                <span class="label-text">Facebook Link</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Facebook link"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("facebook")}
                            />
                            <label class="label">
                                <span class="label-text">LinkedIn Link</span>
                            </label>
                            <input
                                type="text"
                                placeholder="LinkedIn link"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("linkedIn")}
                            />
                            <label class="label">
                                <span class="label-text">Github Link</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your github link"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("github")}
                            />
                            <label class="label">
                                <span class="label-text">Motto</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Motto"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("motto")}
                            />
                            <label class="label">
                                <span class="label-text">Favorite Things</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Favorite things"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("things")}
                            />
                            <label class="label">
                                <span class="label-text">Join Date</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Join Date"
                                class="input input-border border-primary w-full max-w-xs"
                                {...register("date")}
                            />
                            <label class="label">
                                <span class="label-text">Status <small className='text-red-600'>*</small></span>
                            </label>
                            <select {...register("status", {
                                required: {
                                    value: true,
                                    message: 'status is required'
                                }
                            })} class="input input-border border-primary w-full max-w-xs">
                                {
                                    statuses.map(status => <option
                                        key={status._id}
                                        value={status.status}>{status.status}
                                    </option>)
                                }
                            </select>
                        </div>
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Add' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTeam;