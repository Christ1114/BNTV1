"use client";
import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa6";


//import { signIn } from "next-auth/react";

export default function FacebookSigninButton (){
    return(
        <Button variant="outline"  className="w-[400px]  py-7 bg-neutral-900 text-5sm rounded-lg text-zinc-400 border border-spacing-1 border-gray-700 font-semibold hover:bg-blue-800 mb-3 hover:text-white"> 
          <FaFacebook />
          FaceBook
        </Button>
    )
}