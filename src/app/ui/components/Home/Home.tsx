import Image from "next/image";
import { Header } from "../Header/Header";
import { SellCard } from "../Product/SellCard";
import { Typo } from "../../design-system/typography/Typo";
import { SkornennLogo } from "../../design-system/svg/SkornennLogo";
import { Button } from "../../design-system/buttons/Buttons";
import { Footer } from "../Footer/Footer";

export default function Home () {

    

    return (
        <main>
            <Header variant="logo"/>
            <div className="relative h-screen">
                <video autoPlay muted
                className="brightness-50 shadow-home-video-inset fixed"
                >
                    <source src="/video/header-video.mp4"/>
                </video>
                <div className="absolute z-10 inset-x-0 bottom-[16%] flex flex-col items-center ">
                    <SkornennLogo className="w-full mb-[5rem]"/>
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
            <section className="bg-white shadow-home-products-white absolute w-full h-fit  ">
                <div className="grid grid-cols-3 grid-rows-2 gap-[2.5rem] my-5.62rem py-[5rem] px-[6.25rem]">
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                    <SellCard></SellCard>
                </div>
            </section>
            <Footer></Footer>
        </main>
    )
}