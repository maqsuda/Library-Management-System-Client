import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='md:w-3/12 py-10 text-center mx-auto'>
            <p className='text-amber-700 flex justify-center items-center uppercase font-bold'  >
            <FaArrowAltCircleRight /> <FaArrowAltCircleRight /><FaArrowAltCircleRight /> { subHeading} </p>
            <h3 className='border-y-2 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle; 