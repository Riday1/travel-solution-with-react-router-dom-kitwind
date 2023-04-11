import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    // const countryDetails = ;
    // console.log(countryDetails)
    const { capital, continents, flags, independent, landlocked, name, population } = useLoaderData()[0];
    console.log(capital)

    return (
        <div className='border-4 rounded-xl shadow-md w-[500px] h-[510px] mx-auto my-5 '>
            <img className='w-full rounded-lg' src={flags.png} alt="" />
            <div className='pl-3'>
                <h1 className='font-bold text-center mt-2 text-gray-500 text-2xl'>{name.common}</h1>
                <p>Continent : {continents}</p>
                <p>Capital : {capital}</p>


                {
                    landlocked ? <p className='text-lg '>LLandlock : Yes0</p> : <p className='text-lg '>Landlock : No</p>
                }
                {
                    independent ? <p>Independent .</p> : <p>Not Independent</p>
                }
                <p>Population : {population}</p>

            </div>
        </div>
    );
};

export default CountryDetails;