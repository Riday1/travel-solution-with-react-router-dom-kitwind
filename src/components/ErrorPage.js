import React from 'react';

const ErrorPage = () => {
    return (
        <div className="w-[500px] h-screen mx-auto  text-center flex items-center justify-center text-3xl font-bold py-[100px] ">
            <p >404 <span className='text-purple-600'>|</span> Page Not Found</p>
        </div>
    );
};

export default ErrorPage;