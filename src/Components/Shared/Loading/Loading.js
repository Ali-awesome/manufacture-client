import React from 'react';

const Loading = () => {
    return (
        <div className='grid-cols-1 mx-auto my-10'>
            <progress className="progress w-56 my-auto"></progress>
        </div>
    );
};

export default Loading;