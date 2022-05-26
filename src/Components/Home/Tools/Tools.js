import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTool from '../../Hooks/useTool';
import Loading from '../../Shared/Loading/Loading';

const Tools = () => {
    const [tools, setTools] = useTool();
    const { _id, name, price, minorder, quantity, description, img } = tools;
    const navigate = useNavigate();


    const navigateToPurchase = (_id) => {
        navigate(`/tools/${_id}`)
    };

    return (
        <div className=' bg-base-200 py-5'>
            <h2 className='text-3xl font-bold'>Tools</h2>
            <div className='flex flex-col lg:flex-row mx-3 my-5 gap-5 grid grid-cols-1 lg:grid-cols-3 '>
                {
                    tools.length === 0 ? <Loading></Loading>
                        : tools.slice(0, 6).map(tool => <div key={tool._id} class="card w-full bg-base-100 shadow-xl">
                            <figure class="h-48 w-48 mx-auto">
                                <img src={tool.img}
                                    alt={tool.name} class="rounded-xl" />

                            </figure>
                            <div class="card-body items-center p-2">
                                <h2><b>Name:</b> {tool.name}</h2>
                                <p><b>Price:</b> ${tool.price}per unit</p>
                                <p><b>Minimum Order:</b> {tool.minorder}</p>
                                <p><b>Quantity:</b> {tool.quantity}</p>
                                <p><b>Description:</b> {tool.description}</p>
                                <div class="card-actions">
                                    <button onClick={() => navigateToPurchase(tool._id)} class="btn">Buy Now</button>
                                </div>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Tools;