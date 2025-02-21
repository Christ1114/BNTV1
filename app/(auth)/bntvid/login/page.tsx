"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { RiLoginBoxLine } from "react-icons/ri";
import { SiSimplelogin } from "react-icons/si";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineCloseCircle } from "react-icons/ai";

export default function BntvIdLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="z-50 flex flex-col items-center justify-center gap-y-7">
            <div className="mt-24 md:mt-0 bg-black/70 max-w-lg md:px-14 flex flex-col justify-center items-center px-14 py-10 rounded-lg">
                <form>
                    <div className="mb-10 text-center">
                        <h1 className="text-white text-2xl font-bold">UTILISER VOTRE IDENTIFIANT</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full max-w-sm space-y-3">
                        <div className="relative w-full">
                            <Input 
                                type="email" 
                                placeholder="ADRESSE EMAIL" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-[400px] bg-neutral-900 text-white font-bold py-7 border border-gray-500 pr-24' 
                            />
                            {email && (
                                <AiOutlineCloseCircle 
                                    className="absolute inset-y-6 right-12 flex items-center text-white cursor-pointer" 
                                    size={17} 
                                    onClick={() => setEmail("")}
                                />
                            )}
                        </div>
                        <div className="relative w-full">
                            <Input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="MOT DE PASSE" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-[400px] bg-neutral-900 text-white font-bold py-7 border border-gray-500  pr-24' 
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-400" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiFillEye size={24} /> : <AiFillEyeInvisible size={24} />}
                            </button>
                            {password && (
                                <AiOutlineCloseCircle 
                                    className="absolute inset-y-6 right-12 flex items-center text-white cursor-pointer" 
                                    size={17} 
                                    onClick={() => setPassword("")}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-5 mb-5">
                        <Button type="submit" className="w-[300px] bg-blue-800 text-white font-bold hover:bg-blue-950 py-7 border border-gray-600">
                            connexion
                            <FaArrowRightToBracket />
                        </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button className="flex items-center justify-center text-gray-500 font-bold hover:underline underline-offset-4 gap-x-2">
                            <RiLoginBoxLine className="text-blue-600" /> <a href='/bntvid/signin'>Créer un compte</a>
                        </button>
                        ||
                        <button className="flex items-center justify-center text-gray-500 font-bold hover:underline underline-offset-4 gap-x-2">
                            <SiSimplelogin className="text-blue-600" /> <a href='/forgotpassword'>Mot de passe oublié</a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}