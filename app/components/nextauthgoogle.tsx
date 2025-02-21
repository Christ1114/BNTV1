import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";


export default function GoogleSigninButton (){

    return(
        <Button variant="outline"  className="w-[400px]  py-7 bg-neutral-900 text-5sm rounded-lg text-zinc-400 border border-spacing-1 border-gray-700 font-semibold hover:bg-white mb-3"
        onClick={()=> signIn("google")}
        > 
          <FcGoogle /> Google
        </Button>
    )
}