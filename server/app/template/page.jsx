'use client';

import { useState } from "react";

export default function TemplateEmail(){
    const [name, setName] = useState()
    const [age, setAge] = useState()

    async function sendEmail(){
        try{
            await fetch('/api/template', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, age})
            })
            setName('');
            setAge('')
        } catch(e){
            console.error(e);
        }
    }


    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold text-white">
                    Send an Email Template
                </h2>
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-400">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
                />
            </div>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-400">Age</label>
                <input
                   type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="mt-1 p-2 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"                />
            </div>
            <div className="mt-4">
                <button
                    onClick={sendEmail}
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Send Email
                </button>
            </div>
        </div>
    </div>
    )

}