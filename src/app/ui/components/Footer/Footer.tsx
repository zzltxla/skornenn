import clsx from "clsx";
import Image from "next/image";
import { Typo } from "../../design-system/typography/Typo";
import { Link } from "react-router-dom";
import { SkornennLogo } from "../../design-system/svg/SkornennLogo";
import { FacebookIcon } from "../../design-system/svg/FacebookIcon";
import { LinkedinIcon } from "../../design-system/svg/LinkedinIcon";
import { TwitterIcon } from "../../design-system/svg/TwitterIcon";
import { InstagramIcon } from "../../design-system/svg/InstagramIcon";

export const Footer = ({}) => {
    return (
        <footer className="w-full h-fit pt-[5rem] pb-[7.5rem] relative left top,  flex flex-col items-center justify-center overflow-hidden">
            <Image src="/img/panoramic-snowy-view-placeholder.webp" alt="Vue panoramique d'une banquise" layout="fill" className="object-cover absolute z-[1] "/>
            <div className="bg-radial-footer absolute z-[2] w-full h-full"></div>
            <div className="text-center flex flex-col items-center justify-center gap-[1.25rem] mb-[2.5rem] text-gray sticky z-[2]">
                <SkornennLogo
                className="w-[18.75rem] h-[4.288rem]"/>
                <Typo
                variant="p"
                font="noto"
                >
                © Skornenn 2024 - all right reserved
                </Typo>
            </div>
            <nav className="">
                <ul className="list-none flex flex-row gap-[2.5rem] items-center justify-center text-gray sticky z-[2] my-[3.75rem]">
                    <li>
                        <Link to="/">
                            <Typo 
                            variant="h4"
                            font="noto"
                            >
                                Cidres parfumés
                            </Typo>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo 
                            variant="h4"
                            font="noto"
                            >
                                Cidres natures
                            </Typo>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo 
                            variant="h4"
                            font="noto"
                            >
                                Cidres BIO
                            </Typo>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo 
                            variant="h4"
                            font="noto"
                            >
                                Cidres sans alcool
                            </Typo>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo 
                            variant="h4"
                            font="noto"
                            >
                                Cidres glace
                            </Typo>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="list-none flex flex-row gap-[1.88rem] items-center justify-center sticky z-[2]">
                    <li>
                        <Link to="/">
                            <Typo
                            variant="p"
                            font="noto"
                            className="hidden text-primary"
                            >
                                Instagram
                            </Typo>
                            <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
                                <InstagramIcon/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo
                            variant="p"
                            font="noto"
                            className="hidden text-primary"
                            >
                                Facebook
                            </Typo>
                            <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
                                <FacebookIcon/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo
                            variant="p"
                            font="noto"
                            className="hidden text-primary"
                            >
                                Twitter
                            </Typo>
                            <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
                                <TwitterIcon/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo
                            variant="p"
                            font="noto"
                            className="hidden text-primary"
                            >
                                Linkedin
                            </Typo>
                            <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
                                <LinkedinIcon/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}