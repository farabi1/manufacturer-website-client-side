import React from 'react';

const InvestOption = () => {
    return (
        <div>
            <h1 className='text-center text-5xl hover:underline font-bold my-24'> InvestOption</h1>
            <div className="my-8 grid content-center">
                <ul className="steps">
                    <li className="step step-info">Know Our Business</li>
                    <li className="step step-info">Research Your Data</li>
                    <li className="step step-info">Select Options</li>
                    <li className="step step-info">Consult With Us</li>
                    <li className="step step-info">Decisions</li>
                    <li className="step step-error" data-content="?">Make Deal</li>
                </ul>
            </div>
            <div className="flex justify-center my-10">
                <div class="carousel rounded-box">
                    <div class="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=8B7BCDC2" alt="Burger" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=500B67FB" alt="Burger" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=A89D0DE6" alt="Burger" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=225E6693" alt="Burger" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://api.lorem.space/image/burger?w=400&h=300&hash=9D9539E7" alt="Burger" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InvestOption;