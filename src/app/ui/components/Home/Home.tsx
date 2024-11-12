import Image from "next/image";
import { Header } from "../Header/Header";
import { SellCard } from "../Product/SellCard";
import { Footer } from "../Footer/Footer";

export default function Home () {
    return (
        <main>
            <Header variant="logo"/>
            <div>
                <video autoPlay loop muted>
                    <source src="/video/header-video.mp4"/>
                </video>
            </div>
            <SellCard></SellCard>
            <Footer></Footer>
        </main>
    )
}