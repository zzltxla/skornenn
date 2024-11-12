"use client";

import clsx from "clsx";
import { Typo } from "../../design-system/typography/Typo";

import { MagnifyGlassIcon } from "../../design-system/svg/MagnifyGlassIcon";
import { AccountIcon } from "../../design-system/svg/AccountIcon";
import { MenuBurgerIcon } from "../../design-system/buttons/MenuBurgerIcon";
import { ShoppingCart } from "../../design-system/svg/ShoppingCart";
import { SkornennLogo } from "../../design-system/svg/SkornennLogo";

interface Props {
    variant?: "logo" | "no-logo";
}


export const Header = ({variant}:Props) => {
    switch (variant) {
        case "logo":
        return ( 
            <header className="w-full h-fit bg-transparent shadow-header-white-inner backdrop-blur-[2px] flex flex-row justify-between items-center px-[2.5rem] py-[1rem] fixed">
                <SkornennLogo className="w-[10.93169rem] h-fit"></SkornennLogo>
                <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit">
                    <MagnifyGlassIcon></MagnifyGlassIcon>
                    <AccountIcon></AccountIcon>
                    <ShoppingCart></ShoppingCart>
                    <MenuBurgerIcon></MenuBurgerIcon>
                </div>
            </header>
        );
        case "no-logo":
        return ( 
            <header className="w-full h-fit bg-transparent shadow-header-white-inner backdrop-blur-[2px] flex flex-row justify-between items-center px-[2.5rem] py-[1rem] fixed">
                <div className="flex gap-[0.62rem] items-center justify-between w-fit h-fit ml-auto">
                    <MagnifyGlassIcon></MagnifyGlassIcon>
                    <AccountIcon></AccountIcon>
                    <ShoppingCart></ShoppingCart>
                    <MenuBurgerIcon></MenuBurgerIcon>
                </div>
            </header>
        );
    }
}
