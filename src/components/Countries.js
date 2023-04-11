import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country';

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries)
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>

            <div className='grid grid-cols-3 gap-6'>
                {
                    countries.map((country) => <Country country={country} key={country.cca3} />)
                }

            </div>


        </div>
    );
};

export default Countries;