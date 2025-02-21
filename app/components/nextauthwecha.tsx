import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaApple } from "react-icons/fa6";
//import { signIn } from "next-auth/react";

export default function AppleSigninButton(){
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
        >
            <Button 
                variant="outline" 
                className="w-full py-7 bg-neutral-900 text-5sm rounded-lg border border-spacing-1 border-gray-700 text-zinc-400 font-semibold hover:bg-black hover:text-white mb-3" 
            > 
                <FaApple size={24} className="text-white" />
                Apple
            </Button>
            {isHovered && (
                <div className="absolute bottom-full mb-2 px-2 py-1 bg-black text-white text-sm rounded-lg  font-bold">
                    Reserve for Apple users ! <br/> 
                </div>
            )}
        </div>
    )
}