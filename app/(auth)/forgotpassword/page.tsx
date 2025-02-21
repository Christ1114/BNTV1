"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useState } from "react";
import {  AiOutlineCloseCircle } from "react-icons/ai";

export default function BntvIdLogin() {
    const [email, setEmail] = useState("");

    return (
        <div className="z-50">
            <div className="mt-24 md:mt-0 bg-black/70 max-w-lg md:px-14 flex  justify-center items-center lg:px-40 py-10 rounded-lg sm:bg-black sm:px-14">
                <form>
                    <div className="mb-10 text-center">
                        <h1 className="text-white text-2xl font-bold">OBTENER UN NOUVEL ID</h1> 
                    </div>
                    <div className="flex items-center justify-center w-full max-w-sm space-x-2"> 
                        <div className="relative w-full">
                            <Input 
                                type="email" 
                                placeholder="ADRESSE EMAIL" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-[350px] bg-neutral-900 text-white font-bold py-7 border border-gray-500 pr-24' 
                            />
                            {email && (
                                <AiOutlineCloseCircle 
                                    className="absolute inset-y-6 right-12 flex items-center text-white cursor-pointer" 
                                    size={17} 
                                    onClick={() => setEmail("")}
                                />
                            )}
                        </div>
                        <Button type="submit" className="w-[300px] bg-blue-800 text-white font-bold hover:bg-blue-950 py-7 border border-gray-600">
                            connexion
                            <FaArrowRightToBracket />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}