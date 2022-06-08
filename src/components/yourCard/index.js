import React from "react";

const IndexCard = () => {
    return(
        <div className="flex flex-col lg:flex-row w-full gap-20 lg:gap-10 text-white bg-black-violet px-10 py-36 mt-32 justify-between items-center">
            <div className="flex flex-col w-10/12 lg:w-5/12 gap-8">
                <h1 className="text-4xl font-bold">Title</h1>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in urna, a habitant. Ornare sagittis, blandit blandit erat at sed. Diam consectetur sit condimentum metus, suspendisse elementum diam semper proin. Sem volutpat suspendisse pretium dis non laoreet diam eget. Vestibulum nisi morbi faucibus pellentesque.</p>
            </div>
            <div className="hidden sm:flex flex-col w-11/12 sm:w-10/12 lg:w-7/12 px-10 items-center relative">
                <div className="flex flex-col w-full sm:w-[500px] rounded-2xl p-6 bg-indigo-500">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-sm">Titular de la Tarjeta</p>
                            <p className="text-2xl font-bold mt-2">PEDRO GOMEZ</p>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/images/payment/Enmascarar grupo 206.png'} className='object-contain w-24' alt="visa"/>
                    </div>
                    <div className="flex flex-col mt-10 gap-4 w-full">
                        <p className="text-sm">Numero de Tarjeta</p>
                        <div className="w-9/12 flex flex-row gap-4 items-center">
                            <div className="w-1/4 h-4 rounded-2xl bg-gray-300"></div>
                            <div className="w-1/4 h-4 rounded-2xl bg-gray-300"></div>
                            <div className="w-1/4 h-4 rounded-2xl bg-gray-300"></div>
                            <div className="w-1/4 h-4 rounded-2xl text-lg text-center flex items-center">7899</div>
                        </div>
                    </div>
                    <div className="mt-14 flex flex-col">
                        <p className="text-sm">Fecha de Expiracion</p>
                        <p className="text-lg">05/30</p>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/assets/Ellipse.png'} className='absolute -bottom-10' alt="ellipse" />
            </div>
        </div>
    );
};

export default IndexCard;