"use client";

import clsx from "clsx";
import Image from "next/image";
import { HeartIcon } from "../../design-system/svg/HeartIcon";
import { Typo } from "../../design-system/typography/Typo";
import { useEffect, useState } from "react";
import React from "react";
import { Button } from "../../design-system/buttons/Buttons";
import { Link } from "react-router-dom";

type VariantType = "hovered" | "not-hovered";
interface Props {
    favorie?: boolean;
    className?: string;
    variant?: VariantType;
}

export const SellCard = ({ favorie = false, className }: Props) => {

    const [isFavorie, setIsFavorie] = useState(favorie);

    const handleToggleFavorie = () => {
        setIsFavorie(!isFavorie);
    };

    useEffect(() => {

    }, [isFavorie])

    const [variant, setVariant] = useState<VariantType>("not-hovered");

    const handleVariantChange = (newVariant: "hovered" | "not-hovered") => {

        setVariant(currentVariant => currentVariant === newVariant ? "not-hovered" : newVariant); // Toggle to "closed" if clicking on the same variant
    };

    switch (variant) {
        case "hovered":
        return (
            <article className="shadow-sellcard-boxshadow-hover bg-radial-white-sellcard overflow-hidden relative transition-all ease-in-out duration-800 delay-100 rounder-[0.31rem]"
            onMouseEnter={ () => handleVariantChange("hovered")}
            onMouseLeave={ () => handleVariantChange("not-hovered")}
            >
                <Image 
                src="/img/sellcard-background.webp"
                alt="Arrière plan effet glace"
                layout="fill"
                className="absolute w-full h-full fadein-background-sellcard"
                />
                <div className="w-full h-full bg-radial-white-sellcard absolute "></div>
                <div className="relative w-full h-[13.3125rem]">
                <div className="flex justify-end z-10">
                    <button 
                    className="relative min-h-[24px] right-[5%] inset-y-5"
                    onClick={() => handleToggleFavorie()}>
                        <HeartIcon/>
                    </button>
                    </div>
                        <Link to="/product">
                            <Image
                            src="/img/cidre-orange-product.webp"
                            alt="Canette de cidre à l'orange"
                            layout="fill"
                            className="mb-[0.62rem] w-full relative object-contain pt-[1.5rem] z-10"
                            />
                            <div className="left-0 top-[1.85625rem] z-5 absolute w-[25.5rem]">
                                <Typo
                                variant="bg-text"
                                font="noto"
                                >
                                    CIDRE <br/> PARFUMÉ
                                </Typo>
                            </div>
                        </Link>
                </div>
                <div className="p-[1.5rem] absolute">
                    <div className="items-start flex flex-col">
                        <Typo 
                        variant="h3"
                        color="primary"
                        font="noto"
                        className="mb-[0.94rem] font-bold"
                        >
                            Canette Orange Sanguines
                        </Typo>
                        <Typo
                        variant="p"
                        color="gray"
                        font="noto"
                        className="mb-[2.19rem] font-normal"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus error ex cupiditate rerum eum totam voluptatibus rem iste quas cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nobis!
                        </Typo>
                        <div className="flex gap-[0.31rem] justify-between items-center">
                            <Typo
                            variant="h3"
                            color="primary"
                            font="noto"
                            className="font-bold"
                            >
                                1.70$
                            </Typo>
                            <span color="midgray">/</span>
                            <Typo
                            variant="p"
                            color="gray"
                            font="noto"
                            className="font-semibold"
                            >
                                33CL
                            </Typo>
                        </div>
                    </div>
                    <Button
                    variant="secondary"
                    className="w-full mt-[2.5rem] px-auto"
                    >
                        <Typo
                        variant="h4"
                        color="primary"
                        font="noto"
                        >
                            Ajouter au panier
                        </Typo>
                    </Button>
                </div>
            </article>
        );
        case "not-hovered": 
        return (

            <article className="shadow-sellcard-boxshadow bg-white overflow-hidden relative transition-all ease-in-out duration-800 delay-100 rounder-[0.31rem]" 
            onMouseEnter={ () => handleVariantChange("hovered")}
            onMouseLeave={ () => handleVariantChange("not-hovered")}
            >
                <div className="relative w-full h-[13.3125rem]">
                <div className="flex justify-end z-10">
                    <button 
                    className="relative min-h-[24px] right-[5%] inset-y-5"
                    onClick={() => handleToggleFavorie()}>
                        <HeartIcon/>
                    </button>
                </div>
                    <Link to="/product">
                        <Image
                        src="/img/cidre-orange-product.webp"
                        alt="Canette de cidre à l'orange"
                        layout="fill"
                        className="mb-[0.62rem] w-full relative object-contain pt-[1.5rem] z-10"
                        />
                        <div className="left-0 top-[1.85625rem] z-5 absolute w-[25.5rem]">
                            <Typo
                            variant="bg-text"
                            font="noto"
                            >
                                CIDRE <br/> PARFUMÉ
                            </Typo>
                        </div>
                    </Link>
                </div>
                <div className="p-[1.5rem]">
                    <div className="items-start flex flex-col">
                        <Typo 
                        variant="h3"
                        color="primary"
                        font="noto"
                        className="mb-[0.94rem] font-bold"
                        >
                            Canette Orange Sanguines
                        </Typo>
                        <Typo
                        variant="p"
                        color="gray"
                        font="noto"
                        className="mb-[2.19rem] font-normal"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus error ex cupiditate rerum eum totam voluptatibus rem iste quas cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nobis!
                        </Typo>
                        <div className="flex gap-[0.31rem] justify-between items-center">
                            <Typo
                            variant="h3"
                            color="primary"
                            font="noto"
                            className="font-bold"
                            >
                                1.70$
                            </Typo>
                            <span color="midgray">/</span>
                            <Typo
                            variant="p"
                            color="gray"
                            font="noto"
                            className="font-semibold"
                            >
                                33CL
                            </Typo>
                        </div>
                    </div>
                    <Button
                    variant="secondary"
                    className="w-full mt-[2.5rem] px-auto"
                    >
                        <Typo
                        variant="h4"
                        color="primary"
                        font="noto"
                        >
                            Ajouter au panier
                        </Typo>
                    </Button>
                </div>
    
            </article>
        )
    }
};
