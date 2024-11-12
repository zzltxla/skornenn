"use client";

import clsx from "clsx";
import Image from "next/image";
import { HeartIcon } from "../../design-system/svg/HeartIcon";
import { Typo } from "../../design-system/typography/Typo";
import { useEffect, useState } from "react";
import React from "react";
import { Buttons } from "../../design-system/buttons/Buttons";
import { Link } from "react-router-dom";


interface Props {
    favorie?: boolean;
    className?: string;
}

export const SellCard = ({ favorie = false, className }: Props) => {

    const [isFavorie, setIsFavorie] = useState(favorie);

    const handleToggleFavorie = () => {
        setIsFavorie(!isFavorie);
    };

    useEffect(() => {

    }, [isFavorie])


    return (
        <article className="shadow-sellcard-boxshadow bg-radial-white-sellcard">
            <div className="relative w-[13.3125rem] h-[13.3125rem]">
                <Link to="/product">
                    <Image
                    src="/img/cidre-orange-product.webp"
                    alt="Canette de cidre à l'orange"
                    layout="fill"
                    className="mb-[0.62rem]"
                    />
                </Link>
            </div>
            <div className="inset-y-2 left-0 z[-10]">
                <Typo
                variant="bg-text"
                color="primary20"
                font="noto"
                className="inset-y-2 left-0"
                >
                    CIDRE PARFUMÉ
                </Typo>
            </div>
            <div className="flex justify-end z-10">
                <button 
                className="relative min-h-[24px]"
                onClick={() => handleToggleFavorie()}>
                    <HeartIcon/>
                </button>
            </div>
            <div>
                <div className="items-start flex flex-col">
                    <Typo 
                    variant="h3"
                    color="primary"
                    font="noto"
                    className="mb-[0.94rem]"
                    >
                        Canette Orange Sanguines
                    </Typo>
                    <Typo
                    variant="p"
                    color="midgray"
                    font="noto"
                    className="mb-[2.19rem]"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus error ex cupiditate rerum eum totam voluptatibus rem iste quas cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nobis!
                    </Typo>
                    <div className="flex gap-[0.31rem] justify-between items-center">
                        <Typo
                        variant="h3"
                        color="midgray"
                        font="noto"
                        >
                            1.70$
                        </Typo>
                        <span color="midgray">/</span>
                        <Typo
                        variant="p"
                        color="midgray"
                        font="noto"
                        >
                            33CL
                        </Typo>
                    </div>
                </div>
                <div>
                    <Buttons 
                    variant="secondary"
                    className="w-full"
                    />
                </div>
            </div>

        </article>
    );
};
