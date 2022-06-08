import React from "react";

const IndexContent = () => {
    return(
        <div className="w-10/12 flex flex-col gap-16">
            <div className="flex flex-row items-center justify-between">
                <img src={process.env.PUBLIC_URL + '/images/assets/Moneyverse Buy Online.png'} className="w-1/2 object-contain hidden sm:flex" alt="picture1"/>
                <div className="grow flex flex-col items-center sm:items-end">
                    <h1 className="text-violet-800 text-6xl font-bold">Title</h1>
                    <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in urna, a habitant. Ornare sagittis, blandit blandit erat at sed. Diam consectetur sit condimentum metus, suspendisse elementum diam semper proin. Sem volutpat suspendisse pretium dis non laoreet diam eget. Vestibulum nisi morbi faucibus pellentesque.
Sed elit pretium pulvinar quis sit. Neque amet sed habitant elementum sit lectus nibh. Ac sagittis scelerisque potenti pharetra ullamcorper. In lectus amet, dolor condimentum purus arcu, tortor. Eget mauris, at vestibulum eget odio sit eget et. Aliquam sed venenatis sed aliquam a massa tempor. Donec donec ut interdum mauris consectetur. Ultricies aliquam consectetur id ante mi varius aliquet.</p>
                    <div className="w-full flex justify-center mt-4">
                        <img src={process.env.PUBLIC_URL + '/images/assets/Waves Line.png'} alt="picture1"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col items-center sm:items-start">
                    <h1 className="text-violet-800 text-6xl font-bold">Title</h1>
                    <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in urna, a habitant. Ornare sagittis, blandit blandit erat at sed. Diam consectetur sit condimentum metus, suspendisse elementum diam semper proin. Sem volutpat suspendisse pretium dis non laoreet diam eget. Vestibulum nisi morbi faucibus pellentesque.
Sed elit pretium pulvinar quis sit. Neque amet sed habitant elementum sit lectus nibh. Ac sagittis scelerisque potenti pharetra ullamcorper. In lectus amet, dolor condimentum purus arcu, tortor. Eget mauris, at vestibulum eget odio sit eget et. Aliquam sed venenatis sed aliquam a massa tempor. Donec donec ut interdum mauris consectetur. Ultricies aliquam consectetur id ante mi varius aliquet.</p>
                    <div className="w-full flex justify-center mt-4">
                        <img src={process.env.PUBLIC_URL + '/images/assets/Waves Line.png'} alt="picture1"/>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/images/assets/Moneyverse Home Office.png'} className="w-1/2 object-contain hidden sm:flex" alt="picture1"/>
            </div>
            <div className="flex flex-row items-center justify-between gap-4">
                <img src={process.env.PUBLIC_URL + '/images/assets/Moneyverse Crypto Galaxy 2.png'} className="w-1/2 object-contain hidden sm:flex" alt="picture1"/>
                <div className="flex flex-col items-center sm:items-end">
                    <h1 className="text-violet-800 text-6xl font-bold">Title</h1>
                    <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in urna, a habitant. Ornare sagittis, blandit blandit erat at sed. Diam consectetur sit condimentum metus, suspendisse elementum diam semper proin. Sem volutpat suspendisse pretium dis non laoreet diam eget. Vestibulum nisi morbi faucibus pellentesque.
Sed elit pretium pulvinar quis sit. Neque amet sed habitant elementum sit lectus nibh. Ac sagittis scelerisque potenti pharetra ullamcorper. In lectus amet, dolor condimentum purus arcu, tortor. Eget mauris, at vestibulum eget odio sit eget et. Aliquam sed venenatis sed aliquam a massa tempor. Donec donec ut interdum mauris consectetur. Ultricies aliquam consectetur id ante mi varius aliquet.</p>
                    <div className="w-full flex justify-center mt-4">
                        <img src={process.env.PUBLIC_URL + '/images/assets/Waves Line.png'} alt="picture1"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexContent;