import React from 'react';
import Apply from './Apply';
import Banner from './Banner';
import Company from './Company';
import CompanyAbout from './CompanyAbout';
import WorkType from './WorkType';

const Career = () => {
    return (
        <div>
            <Banner></Banner>
            <CompanyAbout></CompanyAbout>
            <WorkType></WorkType>
            <Apply></Apply>
            <Company></Company>
        </div>
    );
};

export default Career;