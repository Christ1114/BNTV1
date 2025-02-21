"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Cross } from 'lucide-react';
import GoogleSigninButton from "@/app/components/nextauthgoogle";
import KakaoTalkSigninButton from "@/app/components/nextauthkakaotalk";
import LineSigninButton from "@/app/components/nextauthline";
import { useRouter } from "next/navigation";


export default  function LogIn() {
    const router=useRouter();
    return (
        <div className="mt-24 rounded-lg  bg-black/65 py-10 px-36 md:mt-0 max-w-lg md:px-14 flex flex-col justify-center items-center debug-screens z-50">
            <form>
                 <div className=" flex flex-col justify-center items-center">
                 <h1 className="text-3xl font-bold text-white flex justify-center items-center "> <Cross className="mr-3"/>ACCEDE A TON COMPTE</h1>
                 </div> 
            <div className="space-y-4 mt-5 w-full">
            <Button onClick={() => router.push("/bntvid/login")} type="button" className="w-[400px] bg-neutral-900 text-white font-bold hover:bg-blue-700   py-7 border border-spacing-1 border-gray-600">BNTV ID</Button>
            </div>
            </form>
            <div className="flex flex-col justify-center items-center">
                <hr/><p className="text-2xs font-medium text-white text-center mt-3 mb-3"> OU </p>
                
                <div className=" w-full">
                    <GoogleSigninButton/>
                    <KakaoTalkSigninButton/>
                    <LineSigninButton/>
                </div>
            </div>
            <div className="  flex gap-x-3 text-zinc-300 font-medium text-2xs mt-3">
             Votre première fois ? <a href="/signin" className="text-white font-bold mr-3 hover:underline">Créer un compte</a>
            </div>
        </div>
    );
}