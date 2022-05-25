import React from 'react';

const Loading = () => {
    return (
        <div className='flex flex-col justify-center'>
            <progress class="progress w-56 mx-auto"></progress>
        </div>
    );
};

export default Loading;