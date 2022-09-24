import React, { useState, useEffect } from 'react';

const JobView = () => {

    const [contents, setContents] = useState([]);
    const [responsibilities, setResponsibilities] = useState([]);
    const [benefits, setBenefits] = useState([]);
    const [requirements, setRequirements] = useState([]);

    useEffect(() => {
        fetch('http://51.159.105.249:18520/circular')
            .then(res => res.json())
            .then(data => setContents(data))
    }, []);
    useEffect(() => {
        fetch('http://51.159.105.249:18520/benefit')
            .then(res => res.json())
            .then(data => setBenefits(data))
    }, []);
    useEffect(() => {
        fetch('http://51.159.105.249:18520/responsibility')
            .then(res => res.json())
            .then(data => setResponsibilities(data))
    }, []);
    useEffect(() => {
        fetch('http://51.159.105.249:18520/requirement')
            .then(res => res.json())
            .then(data => setRequirements(data))
    }, []);

    return (
        <div className='container mt-20'>
            {
                contents.map(content => {
                    return (
                        <p className='text-4xl mb-5'>{content.name}</p>
                    )
                })
            }
            <div>
                <div>
                    <h3 className='uppercase '>Job Description</h3>
                    <p>If you are passionate about well-conceived user experiences and beautifully crafted products and want to join the best professionals in creating them - this opportunity is perfect for you! As a UI/UX designer, you will be involved in the core process of creating our great products. You will use your artistic and creative skills to create innovative and intuitive user experiences, jaw-dropping, eye-catching interfaces that will free our user's creativity. With bigger and bigger frontiers to conquer, we’re looking for two passionate, bright, and driven UI/UX Designers that are eager to bring our apps to the next level. </p>
                </div>
                <div>
                    <h3 className=''>Job Responsibility :</h3>
                    <ul>
                        {
                            responsibilities.map(responsibility => {
                                return (
                                    <li>
                                        {responsibility.responsibility}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h4 className='uppercase '>Requirements and Qualification :</h4>
                    <ul>
                        {
                            requirements.map(requirement => {
                                return (
                                    <li>
                                        {requirement.requirement}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h4 className='uppercase '>COMPENSATION AND OTHER BENEFITS :</h4>
                    <ul>
                        {
                            benefits.map(benefit => {
                                return (
                                    <li>
                                        {benefit.benefit}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    contents.map(content => {
                        return (
                            <>
                                
                                <p><b>Salary :</b> {content.salary} </p>
                                <p><b>Office location :</b> {content.office} </p>
                                <p><b>Office Hour :</b> {content.hour} </p>
                                <p><b>Apply Here :</b> {content.apply} </p>
                                <p><b>Application Deadline :</b> {content.deadline} </p>
                                <p><b>Note :</b> {content.note} </p>
                            </>
                        )
                    })
                }

            </div>
            <button className='btn btn-success mb-2'>Apply</button>
        </div>
    );
};

export default JobView;