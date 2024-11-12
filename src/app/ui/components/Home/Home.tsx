import Image from "next/image";
import { Header } from "../Header/Header";
import { SellCard } from "../Product/SellCard";
import { Footer } from "../Footer/Footer";

export default function Home () {
    return (
        <main>
            <Header variant="no-logo"/>
            <SellCard></SellCard>
            <Footer></Footer>
        </main>
    )
}