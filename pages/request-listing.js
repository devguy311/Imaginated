import React, { useState } from 'react';
import Image from 'next/image'
import personUsingComputer from '../public/request-category/person-using-computer.png'


export default function RequestListing() {
    
    return (
        <div>
            <div className="bg-white xl:px-0">
                <div className="w-full bg-white">
                    <div className="px-4 sm:px-0">
                        <div className="max-w-5xl py-6 mx-auto sm:py-12 sm:mx-0">
                            <div className="mt-10 sm:mt-0">
                                <div className="md:grid md:grid-cols-7 md:gap-6">
                                    <div className="md:col-span-4">
                                        <div className="px-4 py-5 sm:p-6">
                                            <div className="px-4 sm:px-0">
                                                <h3 className="text-lg font-semibold leading-6 text-gray-900">Can't find a category on the directory that you think should be here?</h3>
                                                <Image className="object-cover object-center sm:justify-center" 
                                                src={personUsingComputer}
                                                alt="Person Using Computer"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:mt-0 md:col-span-3">
                                        <form action="#" method="POST">
                                            <div className="overflow-hidden">
                                                <div className="px-4 py-5 bg-light-grey sm:p-6">
                                                    <div className="grid grid-cols-6 gap-6">
                                                        <div className="col-span-6">
                                                            <h4 className='mb-4'>Request a category</h4>
                                                            <label htmlFor="street-address" className="block mb-2 text-sm font-medium">
                                                                Name of the category you would like to be listed                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="request-category"
                                                                autoComplete=""
                                                                placeholder="Enter here"
                                                                className="items-center justify-start order-1 block w-full px-2 py-2 text-sm text-gray-900 border text-ellipsis border-very-light-grey focus:outline-none"
                                                            />
                                                            <p className="block mt-2 text-sm font-medium">Are you looking to be listed ? Request a listing after submitting this request</p>
                                                            <div className="py-3 text-left ">
                                                                <button
                                                                type="submit"
                                                                className="inline-flex justify-center px-8 py-2 text-sm font-medium text-white border border-transparent sm:px-16 bg-dark-blue"
                                                                >
                                                                Submit
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    )}