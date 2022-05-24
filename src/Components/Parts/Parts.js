import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/purchase')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])


    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-12'>Parts</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    parts.map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;