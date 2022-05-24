import React from 'react';

const PurchaseModal = ({ purchase }) => {

    const { name, price } = purchase || {};

    const handlePurchase = event => {
        event.preventDefault();
        console.log(name);
    }

    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Customer Name : {name}</h3>
                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-4 mt-3'>
                        <input type="text" readOnly value={price} class="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email address" className="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Home Address" className="input input-bordered input-success w-full max-w-xs" />
                        <input type="submit" value="submit" placeholder="Type here" className="btn btn-secondary input-success w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;