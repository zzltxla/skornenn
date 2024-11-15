import Image from "next/image";
import { Header } from "../Header/Header";
import { SellCard } from "../Product/SellCard";
import { Typo } from "../../design-system/typography/Typo";
import { SkornennLogo } from "../../design-system/svg/SkornennLogo";
import { VectorForest } from "../../design-system/svg/VectorForest";
import { VectorIce } from "../../design-system/svg/VectorIce";
import { VectorSliderTop } from "../../design-system/svg/VectorSliderTop";
import { Button } from "../../design-system/buttons/Buttons";
import { Footer } from "../Footer/Footer";
import React, { useState, useEffect } from 'react';
import { Carousel } from "../Slider/Carousel";
import Link from "next/link";
import { useWindowDimensions } from "@/app/WindowDimension";
import clsx from "clsx";


export default function Home() {
    const { height, width } = useWindowDimensions();

    const images = [ //images from the carousel (slide)
        {
            id: '1',
            title: 'Canette de cidre parfumé à la fraise',
            url: '/img/canette-cidre-fraise.webp',
        },
        {
            id: '2',
            title: 'Canette de cidre parfumé à la poire',
            url: '/img/canette-cidre-poire.webp',
        },
        {
            id: '3',
            title: 'Canette de cidre parfumé au fruit de la passion',
            url: '/img/canette-cidre-passion.webp',
        },
        {
            id: '4',
            title: "Canette de cidre parfumé à l'orange",
            url: '/img/canette-cidre-orange.webp',
        },
        {
            id: '5',
            title: 'Bouteille de cidre parfumé',
            url: '/img/bouteille-cidre-parfume.png',
        },
    ];


    const [isSection, setIsInSection] = useState(false);
    const [isFreshSection, setIsInFreshSection] = useState(false);
    const [isSkornennSection, setIsSkornennSection] = useState(false)

    useEffect(() => {
        const handleScroll = () => {

            const section = document.getElementById("product-section-one");
            const freshSection = document.getElementById("fresh-section");
            const skornennSection = document.getElementById("skornenn-section")
            const windowHeight = window.innerHeight;

            if (section) {
                const sectionTop = section.getBoundingClientRect().top;

                if (sectionTop <= windowHeight / 2) {
                    setIsInSection(true);
                } else {
                    setIsInSection(false);
                }
            }

            if (freshSection) {
                const freshSectionTop = freshSection.getBoundingClientRect().top;

                if (freshSectionTop <= windowHeight / 2) {
                    setIsInFreshSection(true);
                } else {
                    setIsInFreshSection(false);
                }
            }
            if (skornennSection) {
                const skornennSectionTop = skornennSection.getBoundingClientRect().top;
                
                if (skornennSectionTop <= windowHeight / 2) {
                    setIsSkornennSection(true)
                } else {
                    setIsSkornennSection(false)
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return (
        <main className="overflow-x-hidden">
            {
                isSection ? 
                <Header variant="logo"/>
                :
                <Header variant="no-logo"/>
            }
            <div className="relative -z-[3] h-screen w-screen mb-[1rem] overflow-y-scroll">
                <div className="h-screen w-full -z-[1] ">
                    <div className="sticky">
                        {isSection ? (
                            <div className="w-full h-[100%] fixed  top-100 inset-x-0 ">
                                <Image
                                    src="/img/frozen-lake-snow-placeholder.webp"
                                    alt="lac glacier"
                                    layout="fill"
                                    className="brightness-50 h-full w-full object-cover"
                                />
                            </div>
                        ) : (
                            <div className="min-w-full h-screen fixed top-100 inset-0">
                                <video autoPlay muted loop
                                    className="aspect-auto responsive-video brightness-50 shadow-home-video-inset absolute inset-0 min-w-full min-h-full bg-cover object-cover"
                                >
                                    <source src="/video/header-video.mp4" type="video/mp4" className="w-full h-auto"/>
                                </video>
                            </div>
                        )}
                    </div>
                </div>
                <div className="absolute z-10 inset-x-0  bottom-[30%] flex flex-col items-center w-full">
                    <SkornennLogo className="w-full mb-[5rem] h-[clamp(5rem, 2.3787rem + 11.6503vw, 12.86394rem)] animate-logo-home" />
                </div>
            </div>
            <section className="bg-home-product-gradient sticky z-[15] w-full h-fit pt-[7.5rem] pb-[6.25rem] backdrop-blur-[2px] shadow-home-products-white"
            >
                <Typo
                variant="h1"
                font="noto"
                className="text-gray title-section-before-after flex items-center justify-center gap-[1.88rem] text-center text-balance max-md:px-[1.25rem] max-sm:gap-[0.94rem]">
                    Les nouveautés
                </Typo>
                <div className="grid grid-cols-3 grid-rows-2 gap-[2.5rem] my-[5.62rem] py-[5rem] px-[6.25rem] max-md:grid-cols-2 max-md:grid-rows-3 max-md:px-[0.62rem]" id="product-section-one">
                        <SellCard variant="hovered"/>
                        <SellCard variant="hovered"/>
                        <SellCard variant="hovered"/>
                        <SellCard variant="hovered"/>
                        <SellCard variant="hovered"/>
                        <SellCard variant="hovered"/>
                </div>
                <Link href="/">
                    <Typo
                    variant="p"
                    font="noto"
                    className="text-gray font-semibold link-before-after text-right ml-auto mr-[6.25rem] flex items-center justify-center gap-[0.62rem] w-fit">
                        En voir plus
                    </Typo>
                </Link>
            </section>
            <div className="h-fit absolute z-[20] shadow-vector-shadow">
                <VectorForest
                    className="w-full shadow-vector-shadow "
                />
            </div>
            <div className="sticky w-full h-full" id="skornenn-section">
                <section className="relative w-full h-fit py-[11.25rem] px-[6.25rem] max-md:px-[1.25rem]">
                    <div className="w-[38.8rem] h-fit flex flex-col mr-auto max-md:w-full"
                            >
                        <Typo
                            variant="h1"
                            font="noto"
                            className={clsx(
                                isSkornennSection ?
                                "text-white show-section-title"
                                :
                                "text-white opacity-0"
                            )}
                        >
                            Skornenn
                        </Typo>
                        <div className={clsx(
                            isSkornennSection ? 
                            "left-right-anim"
                            : 
                            "opacity-0 -translate-x-[150%]"
                        )}>
                            <Typo
                                variant="p"
                                font="noto"
                                className="mt-[2.5rem] text-white"
                            >
                                Au cœur de la Bretagne, terre de légendes et de traditions, la distillerie Skornenn se distingue par son engagement à produire des cidres d'exception. Fondée par des passionnés du terroir breton, Skornenn allie savoir-faire ancestral et innovation moderne pour offrir une gamme de cidres doux et parfumés, disponibles avec et sans alcool, en canette et en bouteille.
                            </Typo>
                            <Typo
                                variant="p"
                                font="noto"
                                className="mt-[2.5rem] text-white">
                                Les vergers de Skornenn, situés dans les vallons verdoyants de la Bretagne, bénéficient d'un climat tempéré idéal pour la culture des pommes à cidre. Chaque pomme est sélectionnée pour sa qualité et son goût unique, garantissant ainsi un cidre authentique et savoureux.
                            </Typo>
                            <Typo
                                variant="p"
                                font="noto"
                                className="mt-[2.5rem] text-white">

                                À Skornenn, la production du cidre est un véritable art. Les pommes, récoltées à la main, sont pressées selon des méthodes traditionnelles pour en extraire le meilleur jus. La fermentation est réalisée lentement, permettant de développer des arômes riches et complexes. Cette attention portée à chaque étape de la production assure un cidre doux et parfumé, reflet du terroir breton. (textes générés par Chat GPT)
                            </Typo>
                        </div>
                        <Button
                            variant="primary"
                            className={clsx(
                                isSkornennSection ?
                                "px-[5rem] mt-[3.16rem] animate-logo-home"
                                :
                                "px-[5rem] mt-[3.16rem]"
                            )}
                        >
                            <Typo
                                variant="h4"
                                font="noto"
                            >
                                Découvrir notre histoire
                            </Typo>
                        </Button>
                    </div>
                </section>
                <div className="w-screen h-fit relative z-20">
                    <VectorIce className=""></VectorIce>
                </div>
            </div>
            <section id="fresh-section" className="relative w-full h-fit px-[clamp(1.25rem, -1.6667rem + 12.963vw, 10rem)] py-[7.5rem] bg-white z-20 flex justify-center items-center max-md:flex-col-reverse">
                <Image
                    src="/img/sellcard-background.webp"
                    alt="Arrière plan effet glace"
                    layout="fill"
                    className="absolute w-full h-full opacity-50"
                />
                <div className="w-full h-full bg-radial-white-sellcard absolute inset-0 "></div>
                <div className="max-w-[30rem] h-fit py-[5rem] px-[2.5rem] sticky ">
                    <Typo
                        variant="h2"
                        font="noto"
                        className={clsx(
                            isFreshSection ? 
                            "mb-[2.5rem] w-full h-fit text-left text-primary show-section-title"
                            : 
                            "mb-[2.5rem] w-full h-fit text-left text-primary opacity-0"
                        )}
                    >
                        Un vent frais pour le cidre breton
                    </Typo>
                    <div className={clsx(
                        isFreshSection ? 
                        "flex flex-col items-start justify-center gap-[1.5rem] w-full h-fit text-left text-gray left-right-anim"
                        : 
                        "flex flex-col items-start justify-center gap-[1.5rem] w-full h-fit text-left text-gray opacity-0"
                        
                        )}>
                        <Typo
                            variant="p"
                            font="noto"
                        >
                            Lorem ipsum dolor sit amet consectetur. Est donec lorem neque ultrices. Bibendum vitae donec augue viverra pulvinar pharetra platea nunc dui. Molestie vel purus porttitor mi eget vel sit orci nunc.
                        </Typo>
                        <Typo
                            variant="p"
                            font="noto"
                        >
                            Facilisis est egestas enim amet dapibus in malesuada pellentesque. Gravida ornare justo arcu integer habitant tellus. Leo velit tellus convallis interdum orci faucibus. Eleifend pellentesque a odio adipiscing lacinia morbi egestas ornare. Sed ornare fermentum aliquam platea pellentesque eu risus. Eget nisl nulla sagittis scelerisque.
                        </Typo>
                        <Typo
                            variant="p"
                            font="noto"
                        >
                            Id nec viverra elementum ac. Neque id ante dignissim pellentesque nisl.
                        </Typo>
                        <Typo
                            variant="p"
                            font="noto"
                        >
                            Habitant in eu ultrices sed. Ut varius libero massa commodo. Vestibulum aenean mattis commodo sagittis amet feugiat urna eget pellentesque.
                        </Typo>
                    </div>
                </div>
                <div className="w-[40%] max-md:w-full max-md:h-[25rem]  h-[34.2rem] object-fit relative">
                    <Image
                        src="/img/cidre-orange-product.webp"
                        alt="Canette de cidre à l'orange de la marque Skornenn"
                        fill
                        className={clsx(
                            isFreshSection ?
                            "w-full h-full mt-[5rem] mb-[2.5rem] mr-[5rem] object-contain object-center right-left-anim"
                            :
                            "w-full h-full mt-[5rem] mb-[2.5rem] mr-[5rem] object-contain object-center -translate-x-[150%]"
                        )}
                    />
                </div>
            </section>
            <div className="h-fit absolute z-[20] shadow-vector-shadow">
                <VectorForest
                    className="w-full shadow-vector-shadow "
                />
            </div>
            <div className="sticky w-full h-fit z-[15]">
                <Carousel className="sticky w-full h-full -z-[1]" images={images}></Carousel>
            </div>
            <section className="bg-home-product-gradient sticky z-[15] w-full h-fit pt-[7.5rem] pb-[6.25rem] backdrop-blur-[2px]"
            >
                <Typo
                variant="h2"
                font="noto"
                className="text-gray title-section-before-after flex items-center justify-center gap-[1.88rem] text-center text-balance max-md:px-[1.25rem] max-sm:gap-[0.94rem]">
                    Nos produits phares
                </Typo>
                <div className="grid grid-cols-3 grid-rows-2 gap-[2.5rem] my-[5.62rem] py-[5rem] px-[6.25rem] max-md:grid-cols-2 max-md:grid-rows-3 max-md:px-[0.62rem]">
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                </div>
                <Link href="/">
                    <Typo
                    variant="p"
                    font="noto"
                    className="text-gray font-semibold link-before-after text-right ml-auto mr-[6.25rem] flex items-center justify-center gap-[0.62rem] w-fit">
                        En voir plus
                    </Typo>
                </Link>
            </section>
            <div className="grid grid-cols-2 grid-flow-row grid-rows-[repeat(auto,minmax(0,1fr))] auto-cols-auto gap-[1.25rem] p-[1.25rem] bg-white max-sm:grid-cols-1 max-sm:grid-rows-[repeat(auto,minmax(0,1fr))]">
            <div className="h-[50rem] relative">
                    <Image src="/img/cidre-orange-canette-placeholder.webp" alt="Canette de cidre parfumé à l'orange au milieu d'un environement glacier" layout="fill" className="brightness-75 w-full h-full object-cover object-center absolute inset-0 transition-all ease-in-out duration-150 delay-100 hover:brightness-50"/>
                    <div className="absolute z-50 -inset-x-1/2 top-52 flex flex-col items-center justify-center text-center gap-[0.62rem] min-w-[33.1rem] max-md:px-[2.25rem] max-sm:w-full max-md:inset-x-auto">
                        <Typo
                        variant="h2"
                        font="noto"
                        className="text-white font-extrabold"
                        >
                            Cidre parfumé
                        </Typo>
                        <Button variant="primary" className="w-fit max-md:w-full">
                            <Typo variant="h4" font="noto">
                            Découvrir la sélection
                            </Typo>
                        </Button>
                    </div>
                </div>
                <div className="h-[50rem] relative">
                    <Image src="/img/cidre-parfume-canette-placeholder.webp" alt="Verre de jus de pomme avec un quartier de pomme" layout="fill" className="brightness-75 w-full h-full object-cover object-center absolute inset-0 transition-all ease-in-out duration-150 delay-100 hover:brightness-50"/>
                    <div className="absolute z-50 -inset-x-1/2 top-52 flex flex-col items-center justify-center text-center gap-[0.62rem] min-w-[33.1rem] max-md:px-[2.25rem] max-md:w-full max-md:inset-x-auto">
                        <Typo
                        variant="h2"
                        font="noto"
                        className="text-white font-extrabold"
                        >
                            Cidre BIO
                        </Typo>
                        <Button variant="primary" className="w-fit max-md:w-full">
                            <Typo variant="h4" font="noto" >
                            Découvrir la sélection
                            </Typo>
                        </Button>
                    </div>
                </div >
                <div className="h-[37.5rem] col-span-2 relative place-self-stretch justify-self-stretch max-sm:col-span-1">
                    <Image src="/img/verre-jus-pomme-placeholder.webp" alt="Verre de jus de pomme avec un quartier de pomme" layout="fill" className="brightness-75 w-full h-full object-cover object-center absolute inset-0 transition-all ease-in-out duration-150 delay-100 hover:brightness-50"/>
                    <div className="absolute z-50 inset-x-1/3 top-52 flex flex-col items-center justify-center text-center gap-[0.62rem] max-md:px-[2.25rem] max-md:w-full max-md:inset-x-auto">
                        <Typo
                        variant="h2"
                        font="noto"
                        className="text-white font-extrabold"
                        >
                            Cidre sans alcool
                        </Typo>
                        <Button variant="primary" className="w-fit max-md:w-full">
                            <Typo variant="h4" font="noto">
                            Découvrir la sélection
                            </Typo>
                        </Button>
                    </div>
                </div>
                <div className="h-[50rem] relative">
                    <Image src="/img/cidre-nature-canette-placeholder.webp" alt="Canette de cidre nature enfoncée dans de la neige" layout="fill" className="brightness-75 w-full h-full object-cover object-center absolute inset-0 transition-all ease-in-out duration-150 delay-100 hover:brightness-50"/>
                    <div className="absolute z-50 -inset-x-1/2 top-52 flex flex-col items-center justify-center text-center gap-[0.62rem] min-w-[33.1rem] max-md:px-[2.25rem] max-sm:w-full max-md:inset-x-auto">
                        <Typo
                        variant="h2"
                        font="noto"
                        className="text-white font-extrabold"
                        >
                            Cidre nature
                        </Typo>
                        <Button variant="primary" className="w-fit max-md:w-full">
                            <Typo variant="h4" font="noto" className="">
                            Découvrir la sélection
                            </Typo>
                        </Button>
                    </div>
                </div>
                <div className="h-[50rem] relative">
                    <Image src="/img/pomme-neige-placeholder.webp" alt="Pomme enfoncée dans de la neige" layout="fill" className="brightness-75 w-full h-full object-cover object-center absolute inset-0 transition-all ease-in-out duration-150 delay-100 hover:brightness-50"/>
                    <div className="absolute z-50 -inset-x-1/2 top-52 flex flex-col items-center justify-center text-center gap-[0.62rem] min-w-[33.1rem] max-md:px-[2.25rem] max-sm:w-full max-md:inset-x-auto">
                        <Typo
                        variant="h2"
                        font="noto"
                        className="text-white font-extrabold"
                        >
                            Cidre glacé
                        </Typo>
                        <Button variant="primary" className="w-fit max-md:w-full">
                            <Typo variant="h4" font="noto" >
                                Découvrir la sélection
                            </Typo>
                        </Button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}