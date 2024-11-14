import Image from "next/image";
import clsx from "clsx";
import types from "next/types";
import { Button } from "../../design-system/buttons/Buttons";
import { SkornennLogo } from "../../design-system/svg/SkornennLogo";

export const MenuBurger = ({}) => {
    return (
        <main className="absolute z-[60] inset-0">
            <div className="grid grid-cols-6 grid-rows-1">
                <div>
                    <Image
                    src=""
                    alt=""
                    className=""
                    />
                    <div>
                    <Image
                    src=""
                    alt=""
                    className=""
                    />
                    <Typo></Typo>
                    </div>
                </div>
            </div>  
        </main>
    )
} 