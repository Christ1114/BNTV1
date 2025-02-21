"use client";
import Image from "next/image";
import React from "react";
import { ReactNode } from "react";
import BG5 from "@/public/assets/images/BG55.webp";
import Logo from "@/public/assets/logo/logo1.png";

export default function AuthLayout({ children }: { children: ReactNode }) {

    return (
        <main>
            <div className="relative h-screen w-screen flex flex-col md:items-center md:justify-center bg-transparent">
                <Image
                    src={BG5}
                    alt="backgroundimage1"
                    className="hidden sm:flex sm:object-cover -z-10 endomorphisme"
                    priority
                    fill
                />
               <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg"></div>
                <div className="">
                    <Image
                        src={Logo}
                        width={130}
                        height={130}
                        priority
                        alt="logo here"
                        className="absolute left-2 top-2 object-contain md:left-4 md:top-2"
                    />
                </div>
                <div className="flex w-full">
                    <div className="w-full mt-5 lg:mt-10 lg:w-full flex justify-center items-center sm:justify-center sm:items-center">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}