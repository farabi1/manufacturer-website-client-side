import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="divider"></div>

            <div className="hero min-h-screen bg-base-200 gap-40">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.lorem.space/image/movie?w=500&h=400" className="max-w-sm rounded-lg shadow-2xl" />
                    <div >
                        <h1 className="text-5xl font-bold">FR Manufacturer House</h1>
                        <p className="py-6 pr-20">Get best Product in Your City</p>
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </div></>
    );
};

export default Banner;