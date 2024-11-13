import Image from "next/image";
import { Header } from "../Header/Header";
import { SellCard } from "../Product/SellCard";
import { Typo } from "../../design-system/typography/Typo";
import { SkornennLogo } from "../../design-system/svg/SkornennLogo";
import { VectorForest } from "../../design-system/svg/VectorForest";
import { VectorIce } from "../../design-system/svg/VectorIce";
import { Button } from "../../design-system/buttons/Buttons";
import { Footer } from "../Footer/Footer";
import { useInsertionEffect } from "react";
useInsertionEffect

export default function Home() {
    

    return (
        <main>
            <Header variant="logo" />
            <div className="relative -z-[5] h-screen w-screen ">
                <div className="h-full w-full -z-[5] flex flex-col items-center justify-center">
                    <div className="w-full h-[100%] fixed  top-100 inset-x-0 ">
                        <Image
                            src="/img/frozen-lake-snow-placeholder.webp"
                            alt="lac glacier"
                            layout="fill"
                            className="brightness-50 h-full w-full "
                        />
                    </div>
                    <div className="absolute">
                        <video autoPlay muted width={1440} height={900}
                            className="brightness-50 shadow-home-video-inset fixed inset-0 w-full "
                        >
                            <source src="/video/header-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="absolute z-10 inset-x-0  bottom-[16%] flex flex-col items-center w-full">
                    <SkornennLogo className="w-full mb-[5rem]" />
                    <Button
                        variant="primary"
                    >
                        <Typo
                            variant="h4"
                            color="white"
                            font="noto"
                        >
                            Nos produits
                        </Typo>
                    </Button>
                    <div className="mt-[2.5rem] text-center">
                        <Typo
                            variant="h4"
                            color="white"
                            font="noto"
                            className="hero-after"
                        >
                            Continuez
                        </Typo>
                    </div>
                </div>
            </div>
            <section className="bg-home-product-gradient shadow-home-products-white sticky w-full h-fit pt-[7.5rem] pb-[6.25rem] backdrop-blur-[2px]">
                <div className="grid grid-cols-3 grid-rows-2 gap-[2.5rem] my-5.62rem py-[5rem] px-[6.25rem]" id="product-section-one">
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                </div>
            </section>
            <div className="h-fit absolute z-[6] shadow-vector-shadow">
                <VectorForest
                    className="w-full shadow-vector-shadow "
                />
            </div>
            <div className="relative h-full">
                <section className="relative z-10 w-full h-fit py-[11.25rem] px-[6.25rem]">
                    <div className="w-[38.8rem] h-fit flex flex-col mr-auto">
                        <Typo
                            variant="h1"
                            color="white"
                            font="noto"
                        >
                            Skornenn
                        </Typo>
                        <Typo
                            variant="p"
                            color="white"
                            font="noto"
                            className="mt-[2.5rem]"
                        >
                            Au cœur de la Bretagne, terre de légendes et de traditions, la distillerie Skornenn se distingue par son engagement à produire des cidres d'exception. Fondée par des passionnés du terroir breton, Skornenn allie savoir-faire ancestral et innovation moderne pour offrir une gamme de cidres doux et parfumés, disponibles avec et sans alcool, en canette et en bouteille.
                        </Typo>
                        <Typo
                            variant="p"
                            color="white"
                            font="noto"
                            className="mt-[2.5rem]">
                            Les vergers de Skornenn, situés dans les vallons verdoyants de la Bretagne, bénéficient d'un climat tempéré idéal pour la culture des pommes à cidre. Chaque pomme est sélectionnée pour sa qualité et son goût unique, garantissant ainsi un cidre authentique et savoureux.
                        </Typo>
                        <Typo
                            variant="p"
                            color="white"
                            font="noto"
                            className="mt-[2.5rem]">

                            À Skornenn, la production du cidre est un véritable art. Les pommes, récoltées à la main, sont pressées selon des méthodes traditionnelles pour en extraire le meilleur jus. La fermentation est réalisée lentement, permettant de développer des arômes riches et complexes. Cette attention portée à chaque étape de la production assure un cidre doux et parfumé, reflet du terroir breton. (textes générés par Chat GPT)
                        </Typo>
                        <Button
                            variant="primary"
                            className="px-[5rem] mt-[3.16rem]"
                        >
                            <Typo
                                variant="h4"
                                color="white"
                                font="noto"
                            >
                                Découvrir notre histoire
                            </Typo>
                        </Button>
                    </div>
                </section>
                <div className="w-full h-fit relative z-20">
                    <VectorIce
                        className="w-full"
                    />
                </div>
            </div>
            <section className="relative w-full h-fit px-[10rem] py-[7.5rem] bg-white z-20 flex justify-center items-center">
                <Image
                    src="/img/sellcard-background.webp"
                    alt="Arrière plan effet glace"
                    layout="fill"
                    className="absolute w-full h-full opacity-50 "
                />
                <div className="w-full h-full bg-radial-white-sellcard absolute inset-0 "></div>
                <div className="max-w-[30rem] h-fit py-[5rem] px-[2.5rem] sticky ">
                    <Typo
                        variant="h2"
                        color="primary"
                        font="noto"
                        className="mb-[2.5rem] w-full h-fit text-left"
                    >
                        Un vent frais pour le cidre breton
                    </Typo>
                    <div className="flex flex-col items-start justify-center gap-[1.5rem] w-full h-fit text-left">
                        <Typo
                            variant="p"
                            color="gray"
                            font="noto"
                        >
                            Lorem ipsum dolor sit amet consectetur. Est donec lorem neque ultrices. Bibendum vitae donec augue viverra pulvinar pharetra platea nunc dui. Molestie vel purus porttitor mi eget vel sit orci nunc.
                        </Typo>
                        <Typo
                            variant="p"
                            color="gray"
                            font="noto"
                        >
                            Facilisis est egestas enim amet dapibus in malesuada pellentesque. Gravida ornare justo arcu integer habitant tellus. Leo velit tellus convallis interdum orci faucibus. Eleifend pellentesque a odio adipiscing lacinia morbi egestas ornare. Sed ornare fermentum aliquam platea pellentesque eu risus. Eget nisl nulla sagittis scelerisque.
                        </Typo>
                        <Typo
                            variant="p"
                            color="gray"
                            font="noto"
                        >
                            Id nec viverra elementum ac. Neque id ante dignissim pellentesque nisl.
                        </Typo>
                        <Typo
                            variant="p"
                            color="gray"
                            font="noto"
                        >
                            Habitant in eu ultrices sed. Ut varius libero massa commodo. Vestibulum aenean mattis commodo sagittis amet feugiat urna eget pellentesque.
                        </Typo>
                    </div>
                </div>
                <div className="w-[40%] h-[34.2rem] object-fit relative">
                    <Image
                        src="/img/cidre-orange-product.webp"
                        alt="Canette de cidre à l'orange de la marque Skornenn"
                        fill
                        className="w-full h-fit mt-[5rem] mb-[2.5rem] mr-[5rem]"
                    />
                </div>
            </section>
            <Footer></Footer>
        </main>
    )
}