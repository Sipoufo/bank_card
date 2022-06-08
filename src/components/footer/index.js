import React from "react";

const IndexFooter = () => {
    return(
        <div className="w-full flex justify-center items-center bg-black-violet py-8">
            <div className="w-11/12 flex flex-row justify-between">
                <p className="text-sm font-semibold text-white">@tianmunooz 2022 All rights reserved</p>
                <div className="flex flex-row gap-4">
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/meta.png'} className="w-7 h-7 object-contain" alt="meta" />
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/snapchat.png'} className="w-7 h-7 object-contain" alt="meta" />
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/tiktok.png'} className="w-7 h-7 object-contain" alt="meta" />
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/printering.png'} className="w-7 h-7 object-contain" alt="meta" />
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/youtub.png'} className="w-7 h-7 object-contain" alt="meta" />
                </div>
            </div>
        </div>
    );
};

export default IndexFooter;