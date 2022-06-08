import React from "react";

const IndexContact = () => {
    return(
        <div className="px-10 py-20 flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <div className="flex flex-col gap-10 w-10/12 lg:w-2/5">
                <div className="flex flex-col gap-2">
                    <label className="text-xl font-bold">Name</label>
                    <input type='text' className="w-full px-6 py-4 bg-slate-200 text-black text-sm" placeholder="Ingrese el nombre de la idea" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl font-bold">Description</label>
                    <textarea className="w-full h-40 px-6 py-4 bg-slate-200 text-sm" placeholder="Por favor ingresa una descripción de la Idea"/>
                </div>
            </div>
            <div className="flex flex-col gap-10 w-10/12 lg:w-2/5">
                <div className="flex flex-col gap-2">
                    <label className="text-xl font-bold">Tags</label>
                    <input type='text' className="w-full px-6 py-4 bg-slate-200 text-black text-sm" placeholder="Ejemplo: #innovación" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl font-bold">Email</label>
                    <input type='text' className="w-full px-6 py-4 bg-slate-200 text-black text-sm" placeholder="Ejemplo: #innovación" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl font-bold">Phone Number</label>
                    <input type='text' className="w-full px-6 py-4 bg-slate-200 text-black text-sm" placeholder="Ejemplo: #innovación" />
                </div>
                <button type='submit' className="bg-black-violet py-2 text-white">Submit</button>
            </div>
        </div>
    );
};

export default IndexContact;