// Modules
import React from "react";

const IndexHeader = () => {
    return(
        <div className="px-20 mt-28 w-full h-full flex flex-col">
            <div className="w-full flex flex-row gap-16">
                {/* Info */}
                <div className="w-full lg:w-4/12 h-full flex flex-col gap-10 items-center">
                    <h1 className="text-6xl xl:text-7xl 2xl:text-8xl bg-gradient-to-l to-fuchsia-700 from-purple-800 text-transparent bg-clip-text font-extrabold">You're Welcome</h1>
                    <p className="text-sm text-black lg:text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam integer iaculis sollicitudin turpis proin maecenas. Quis potenti dignissim cras volutpat quis faucibus id hac. Turpis pellentesque bibendum nibh faucibus pretium nec. Nulla natoque montes, suspendisse suspendisse.</p>
                    <div className="flex gap-4">
                        <button className="py-4 px-12 bg-black-violet text-white text-xl rounded-xl">Try Free</button>
                        <img src={process.env.PUBLIC_URL + '/images/assets/Arrow_04.png'} className="translate-y-8" alt="arrow" />
                    </div>
                </div>
                {/* Statistics information */}
                <div className="grow h-full hidden lg:flex">
                    
                </div>
            </div>
            <div className="w-full flex flex-row mt-24 lg:mt-12 items-center justify-center">
                <div className="flex flex-row gap-4">
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/meta.png'} className="w-7 h-7 object-contain" alt="meta" />
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/snapchat.png'} className="w-7 h-7 object-contain" alt="meta" />
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/tiktok.png'} className="w-7 h-7 object-contain" alt="meta" />
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/printering.png'} className="w-7 h-7 object-contain" alt="meta" />
                    <img src={process.env.PUBLIC_URL + '/images/socialMedia/youtub.png'} className="w-7 h-7 object-contain" alt="meta" />
                </div>
                <div className="hidden lg:flex grow justify-center">
                    <img src={process.env.PUBLIC_URL + '/images/assets/Arrow_10.png'} className="w-40 h-40 object-contain" alt="meta" />
                </div>
            </div>
        </div>
    );
};

export default IndexHeader;