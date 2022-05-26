import React from 'react';
import { toast } from 'react-toastify';

const Career = () => {
    const jobApply = () => {
        toast.success(`You applied For this Job`);
    }
    return (
        <>
            <h1 className='text-center text-5xl hover:underline font-bold mt-12 mb-14'> Career</h1>
            <div className='flex justify-center' >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="">
                        <div className="indicator">
                            <div className="indicator-item indicator-bottom">
                                <button onClick={jobApply} className="btn btn-primary">Apply</button>
                            </div>
                            <div className="card border">
                                <div className="card-body">
                                    <h2 className="card-title">Senior Engineer</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="indicator">
                            <div className="indicator-item indicator-bottom">
                                <button onClick={jobApply} className="btn btn-primary">Apply</button>
                            </div>
                            <div className="card border">
                                <div className="card-body">
                                    <h2 className="card-title">Production Manager</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="indicator">
                            <div className="indicator-item indicator-bottom">
                                <button onClick={jobApply} className="btn btn-primary">Apply</button>
                            </div>
                            <div className="card border">
                                <div className="card-body">
                                    <h2 className="card-title">Marketing Officer</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="indicator">
                            <div className="indicator-item indicator-bottom">
                                <button onClick={jobApply} className="btn btn-primary">Apply</button>
                            </div>
                            <div className="card border">
                                <div className="card-body">
                                    <h2 className="card-title">Sales Executive</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="indicator">
                            <div className="indicator-item indicator-bottom">
                                <button onClick={jobApply} className="btn btn-primary">Apply</button>
                            </div>
                            <div className="card border">
                                <div className="card-body">
                                    <h2 className="card-title">Area Manager</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="indicator">
                            <div className="indicator-item indicator-bottom">
                                <button onClick={jobApply} className="btn btn-primary">Apply</button>
                            </div>
                            <div className="card border">
                                <div className="card-body">
                                    <h2 className="card-title">Security Officer</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;