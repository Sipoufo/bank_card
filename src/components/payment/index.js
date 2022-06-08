import React from "react";

const Payment = () => {
    return(
        <div className="flex w-full justify-center py-6 bg-slate-200">
            <div className="flex flex-row w-8/12 lg:w-4/12 justify-between items-center">
                <img src={process.env.PUBLIC_URL + '/images/payment/VISA.png'} alt="visa" />
                <img src={process.env.PUBLIC_URL + '/images/payment/American Express.png'} alt="visa" />
                <img src={process.env.PUBLIC_URL + '/images/payment/vuesax-bold-paypal.png'} alt="visa" />
            </div>
        </div>
    );
};

export default Payment;