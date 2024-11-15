"use client";

import clsx from "clsx";
import Image from "next/image";
import { HeartIcon } from "../../design-system/svg/HeartIcon";
import { Typo } from "../../design-system/typography/Typo";
import { useEffect, useState } from "react";
import React from "react";
import { Button } from "../../design-system/buttons/Buttons";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "@/app/WindowDimension";

type VariantType = "hovered" | "not-hovered" | "mobile";
interface Props {
    favorie?: boolean;
    className?: string;
    variant?: VariantType;
}



export const SellCard = ({ favorie = false, className }: Props) => {

    const [isFavorie, setIsFavorie] = useState(favorie); //heartIcon button toggle 

    const handleToggleFavorie = () => {
        setIsFavorie(!isFavorie); //toggle to filled or not filled
    };

    useEffect(() => {

    }, [isFavorie])

    const [variant, setVariant] = useState<VariantType>("not-hovered");

    const handleVariantChange = (newVariant: "hovered" | "not-hovered") => {

        setVariant(currentVariant => currentVariant === newVariant ? "not-hovered" : newVariant); // Toggle to "closed" if clicking on the same variant
    };

    const { height, width } = useWindowDimensions();

    switch (variant) {
        case "hovered":
            return (
                <article className={clsx("shadow-sellcard-boxshadow-hover bg-radial-white-sellcard overflow-hidden relative transition-all ease-in-out duration-800 delay-100 rounded-[0.31rem] hover:cursor-pointer will-change-auto", className)}
                onMouseLeave={() => handleVariantChange("not-hovered")}
                >
                    <Image
                        src="/img/sellcard-background.webp"
                        alt="Arrière plan effet glace"
                        layout="fill"
                        className="absolute w-full h-full fadein-background-sellcard opacity-0 max-sm:opacity-50"
                    />
                    <div className="w-full h-full bg-radial-white-sellcard absolute"></div>
                    <div className="relative w-full h-[13.3125rem]">
                        <div className="flex justify-end z-[100]">
                            <button
                                className="relative min-h-[24px] right-[5%] inset-y-5 z-50"
                                onClick={() => handleToggleFavorie()}>
                                <HeartIcon filled={isFavorie} className="z-[100]" />
                            </button>
                        </div>
                        <Link to="/product">
                            <Image
                                src="/img/cidre-orange-product.webp"
                                alt="Canette de cidre à l'orange"
                                layout="fill"
                                className="mb-[0.62rem] w-full relative object-contain pt-[1.5rem] z-10 zoomin-img-sellcard"
                            />
                            <div className="left-0 top-[1.85625rem] z-5 absolute w-[25.5rem]">
                                <Typo
                                    variant="bg-text"
                                    font="noto"
                                >
                                    CIDRE <br /> PARFUMÉ
                                </Typo>
                            </div>
                        </Link>
                    </div>
                    <div className="p-[1.5rem] absolute">
                        <div className="items-start flex flex-col">
                            <Typo
                                variant="h3"
                                font="noto"
                                className="mb-[0.94rem] font-bold text-primary"
                            >
                                Canette Orange Sanguines
                            </Typo>
                            <Typo
                                variant="p"
                                font="noto"
                                className="mb-[2.19rem] font-normal text-gray max-md:hidden"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus error ex cupiditate rerum eum totam voluptatibus rem iste quas cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nobis!
                            </Typo>
                            <div className="flex gap-[0.31rem] justify-between items-center">
                                <Typo
                                    variant="h3"
                                    font="noto"
                                    className="font-bold text-primary"
                                >
                                    1.70$
                                </Typo>
                                <span color="midgray">/</span>
                                <Typo
                                    variant="p"
                                    font="noto"
                                    className="font-semibold text-gray"
                                >
                                    33CL
                                </Typo>
                            </div>
                        </div>
                        <Button
                            variant="secondary"
                            className="w-full mt-[2.5rem] px-auto"
                        >
                            {
                                width < 901 ? 
                                (<Typo
                                    variant="h4"
                                    font="noto"
                                >
                                Acheter
                                </Typo>) 
                                : 
                                (<Typo
                                    variant="h4"
                                    font="noto"
                                >
                                Ajouter au panier
                                </Typo>)
                            }
                            
                        </Button>
                    </div>
                </article>
            );
        case "not-hovered":
            return (
                <article className={clsx("shadow-sellcard-boxshadow bg-white overflow-hidden relative rounded-[0.31rem] transition-all ease-in-out duration-800 delay-100 hover:cursor-pointer will-change-auto", className)}
                    onMouseEnter={() => handleVariantChange("hovered")}
                >
                    <div className="relative w-full h-[13.3125rem]">
                        <div className="flex justify-end z-[100]">
                            <button
                                className="relative min-h-[24px] right-[5%] inset-y-5 z-50"
                                onClick={() => handleToggleFavorie()}>
                                <HeartIcon filled={isFavorie} className="z-[100]"/>
                            </button>
                        </div>
                        <Link to="/product">
                            <Image
                                src="/img/cidre-orange-product.webp"
                                alt="Canette de cidre à l'orange"
                                layout="fill"
                                className="mb-[0.62rem] w-full relative object-contain pt-[1.5rem] z-10 will-change-transform"
                            />
                            <div className="left-0 top-[1.85625rem] z-5 absolute w-[25.5rem]">
                                <Typo
                                    variant="bg-text"
                                    font="noto"
                                >
                                    CIDRE <br /> PARFUMÉ
                                </Typo>
                            </div>
                        </Link>
                    </div>
                    <div className="p-[1.5rem]">
                        <div className="items-start flex flex-col">
                            <Typo
                                variant="h3"
                                font="noto"
                                className="mb-[0.94rem] font-bold text-primary"
                            >
                                Canette Orange Sanguines
                            </Typo>
                            <Typo
                                variant="p"
                                font="noto"
                                className="mb-[2.19rem] font-normal text-gray max-md:hidden"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus error ex cupiditate rerum eum totam voluptatibus rem iste quas cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nobis!
                            </Typo>
                            <div className="flex gap-[0.31rem] justify-between items-center">
                                <Typo
                                    variant="h3"
                                    font="noto"
                                    className="font-bold text-primary"
                                >
                                    1.70$
                                </Typo>
                                <span color="midgray">/</span>
                                <Typo
                                    variant="p"
                                    font="noto"
                                    className="font-semibold text-gray"
                                >
                                    33CL
                                </Typo>
                            </div>
                        </div>
                        <Button
                            variant="secondary"
                            className="w-full mt-[2.5rem] px-auto"
                        >
                            {
                                width < 901 ? 
                                (<Typo
                                    variant="h4"
                                    font="noto"
                                >
                                Acheter
                                </Typo>) 
                                : 
                                (<Typo
                                    variant="h4"
                                    font="noto"
                                >
                                Ajouter au panier
                                </Typo>)
                            }
                        </Button>
                    </div>

                </article>
            );
            case "mobile":
            return (
                <article className="shadow-sellcard-boxshadow-hover bg-radial-white-sellcard overflow-hidden relative transition-all ease-in-out duration-800 delay-100 rounded-[0.31rem] hover:cursor-pointer will-change-auto"
                >
                    <Image
                        src="/img/sellcard-background.webp"
                        alt="Arrière plan effet glace"
                        layout="fill"
                        className="absolute w-full h-full opacity-50 inset-0"
                    />
                    <div className="w-full h-full bg-radial-white-sellcard absolute"></div>
                    <div className="relative w-full h-[13.3125rem]">
                        <div className="flex justify-end z-10">
                            <button
                                className="relative min-h-[24px] right-[5%] inset-y-5 z-50"
                                onClick={() => handleToggleFavorie()}>
                                <HeartIcon filled={isFavorie} className="z-[100]" />
                            </button>
                        </div>
                        <Link to="/product">
                            <Image
                                src="/img/cidre-orange-product.webp"
                                alt="Canette de cidre à l'orange"
                                layout="fill"
                                className="mb-[0.62rem] w-full relative object-contain pt-[1.5rem] z-10 zoomin-img-sellcard"
                            />
                            <div className="left-0 top-[1.85625rem] z-5 absolute w-[25.5rem]">
                                <Typo
                                    variant="bg-text"
                                    font="noto"
                                >
                                    CIDRE <br /> PARFUMÉ
                                </Typo>
                            </div>
                        </Link>
                    </div>
                    <div className="p-[1.5rem] absolute">
                        <div className="items-start flex flex-col">
                            <Typo
                                variant="h3"
                                font="noto"
                                className="mb-[0.94rem] font-bold text-primary"
                            >
                                Canette Orange Sanguines
                            </Typo>
                            <Typo
                                variant="p"
                                font="noto"
                                className="mb-[2.19rem] font-normal text-gray max-md:hidden"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus error ex cupiditate rerum eum totam voluptatibus rem iste quas cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nobis!
                            </Typo>
                            <div className="flex gap-[0.31rem] justify-between items-center">
                                <Typo
                                    variant="h3"
                                    font="noto"
                                    className="font-bold text-primary"
                                >
                                    1.70$
                                </Typo>
                                <span color="midgray">/</span>
                                <Typo
                                    variant="p"
                                    font="noto"
                                    className="font-semibold text-gray"
                                >
                                    33CL
                                </Typo>
                            </div>
                        </div>
                        <Button
                            variant="secondary"
                            className="w-full mt-[2.5rem] px-auto"
                        >
                            {
                                width < 901 ? 
                                (<Typo
                                    variant="h4"
                                    font="noto"
                                >
                                Acheter
                                </Typo>) 
                                : 
                                (<Typo
                                    variant="h4"
                                    font="noto"
                                >
                                Ajouter au panier
                                </Typo>)
                            }
                            
                        </Button>
                    </div>
                </article>
            );
    }
};
