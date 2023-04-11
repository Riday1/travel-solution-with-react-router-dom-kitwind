import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
    const { capital, flags, name, cca3 } = country;
    return (
        <Link title='show details' to={`/country/${cca3}`}>
            <div className='border-2 rounded-lg p-3 shadow-md text-center'>
                <img className='rounded-xl h-[200px] mx-auto' src={flags.png} alt="" />
                <h1 className='mt-4 font-bold text-2xl '>{name.common}</h1>
                <p className=' mt-4 text-lg'>capital : {capital}</p>
                <p className='text-sm mt-4' >Click on it for Show Details</p>
            </div>
        </Link>
    );
};

export default Country;