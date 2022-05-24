import React from 'react';

const PurchaseModal = ({ purchase }) => {

    console.log(purchase);
    const { name, price } = purchase || {};

    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Customer Name : {name}</h3>
                    <form className='grid grid-cols-1 gap-4 mt-3'>
                        <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                        <input type="submit" value="submit" placeholder="Type here" class="btn btn-secondary input-success w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;