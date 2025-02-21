"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaLine } from "react-icons/fa6";

export default function LineSigninButton(){
    const [isHovered, setIsHovered] =useState(false);

    return(

          <div 
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
          className="relative">
            <Button   variant="outline" className="w-full py-7 bg-neutral-900 text-5sm rounded-lg border  border-spacing-1 border-gray-600 text-zinc-400 font-semibold hover:bg-green-600 mb-3" 
            onClick={()=>signIn('line')}
            
            >
                <FaLine size={25}/>Line 
            </Button>
            {
                isHovered && (
                    <div className="absolute bottom-full mb-2 px-2 py-1 bg-green-600 text-black text-sm rounded-lg font-bold">
                        Reserve for Japan People !
                    </div>
                )
            }
          </div>


    )
}