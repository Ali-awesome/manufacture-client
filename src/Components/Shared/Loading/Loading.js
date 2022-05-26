import React from 'react';

const Loading = () => {
    return (
        <div className='flex flex-col justify-center'>
            <progress className="progress w-56 mx-auto"></progress>
        </div>
    );
};

export default Loading;