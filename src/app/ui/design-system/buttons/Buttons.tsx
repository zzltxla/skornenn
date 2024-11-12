import { Typo } from "../typography/Typo";
import clsx from "clsx";
import React, { Children } from "react";

interface Props {
    variant?: "primary" | "secondary" | "tertiary" | "setting" | "save" | "buy"
    className?: string;
    children?: React.ReactNode;
}

export const Button = ({
    className,
    variant,
    children,
}:Props) => {
    switch (variant) {
        case "primary":
        return (
            <button className={clsx("flex items-center justify-center bg-transparent border-[1px] border-white border-solid rounded-[0.19rem] w-fit h-fit px-[5rem] py-[0.5rem] text-white text-center transition-all duration-800 ease-out delay-100", className,
            "hover:bg-white hover:text-primary hover:shadow-button-shadow-hover")}>
                {children}
            </button>
        );

        case "secondary":
        return (
            <button className={clsx("flex items-center justify-center bg-transparent border-[1px] border-primary border-solid rounded-[0.19rem] w-fit h-fit px-[5rem] py-[0.5rem] text-primary text-center transition-all duration-800 ease-out delay-100", className,
            "hover:bg-primary hover:text-white hover:shadow-button-shadow-hover hover:backdrop-blur-[2px]" )}
            >
                {children}
            </button>
        );

        case "tertiary":
        return (
            <button className="flex items-center justify-center gap-[0.62rem] px-[1.25rem] py-[0.5rem]">
                {children}
            </button>
        );

        case "buy":
        return (
            <button className="flex items-center justify-between px-[1.25rem] py-[0.5rem] rounded-[0.19rem] bg-primary text-white 
            transition-all duration-800 ease-out delay-100
            group-hover:bg-white group-hover:border-0 group-hover:border-primary group-hover:border-solid group-hover:shadow-button-shadow-hover
            ">
                {children}
            </button>
        );

        case "setting":
        return (
            <button className="flex items-center justify-center px-[1.25rem] py-[0.5rem] bg-transparent text-black border-0 border-black 
            border-solid rounded-[0.19rem]
            transition-all duration-800 ease-out delay-100
            group-hover:bg-black group-hover:text-white 
            ">
                {children}
            </button>
        );

        case "save":
        return (
            <button className="flex items-center justify-center px-[1.25rem] py-[0.5rem] bg-black text-white rounded-[0.19rem]
            transition-all duration-300 ease-out delay-100
            group-hover:bg-gray 
            ">
                {children}
            </button>
        );
    }
}