import clsx from "clsx";
import { useState } from "react";

interface Props {
    className?: string;
}



export const MenuBurgerIcon = ({className}:Props) => {

    const [active, setActive] = useState(false);

    return (
        <button 
        className={clsx(active ?
            "menu-button active bg-none w-[28px] h-[20px] block relative rotate-0 transition-[0.5s] duration-[ease-in-out] hover:cursor-pointer" 
            : 
            "menu-button bg-none w-[28px] h-[20px] block relative rotate-0 transition-[0.5s] duration-[ease-in-out] hover:cursor-pointer")}
        onClick={() => setActive(!active)}
        >
            <div className="block absolute h-[3px] w-full opacity-100 rounded-[1px] left-0 bg-black"/>
            <div className="block absolute h-[3px] w-full opacity-100 rounded-[1px] left-0 bg-black"/>
            <div className="block absolute h-[3px] w-full opacity-100 rounded-[1px] left-0 bg-black"/>
            <div className="block absolute h-[3px] w-full opacity-100 rounded-[1px] left-0 bg-black"/>
        </button>
    )
}