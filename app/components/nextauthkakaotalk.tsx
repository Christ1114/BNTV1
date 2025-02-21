"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RiKakaoTalkFill } from "react-icons/ri";
import { signIn } from "next-auth/react";


export default function KakaoTalkSigninButton(){
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
        >
            <Button 
                variant="outline" 
                className="w-full py-7 bg-neutral-900 text-5sm rounded-lg border border-spacing-1 border-gray-700 text-zinc-400 font-semibold hover:bg-yellow-600 mb-3" 
                onClick={()=>signIn('kakao')}
            > 
                <RiKakaoTalkFill />KakaoTalk 
            </Button>
            {isHovered && (
                <div className="absolute bottom-full mb-2 px-2 py-1 bg-yellow-600 text-black text-sm rounded-lg  font-bold">
                    Reserve for Korean people ! <br/> 
                </div>
            )}
        </div>
    )
}