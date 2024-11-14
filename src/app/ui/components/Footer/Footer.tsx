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
    const underlineAnimationGray =
    "bg-left-bottom bg-gradient-to-r from-gray to-gray bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-in-out";

    return (
        <footer className="w-full h-fit pt-[5rem] pb-[0.94rem] relative left top,  flex flex-col items-center justify-center overflow-hidden">
            <Image src="/img/panoramic-snowy-view-placeholder.webp" alt="Vue panoramique d'une banquise" layout="fill" className="object-cover absolute z-[1] inset-0"/>
            <div className="bg-radial-footer absolute z-[2] w-full h-full inset-0"></div>
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
                <ul className="list-none flex flex-row gap-[2.5rem] items-center justify-center text-gray sticky z-[3] my-[3.75rem]">
                    <li>
                        <Link to="/">
                            <Typo 
                            variant="h4"
                            font="noto"
                            className={clsx(underlineAnimationGray)}
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
                            className={clsx(underlineAnimationGray)}
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
                            className={clsx(underlineAnimationGray)}
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
                            className={clsx(underlineAnimationGray)}
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
                            className={clsx(underlineAnimationGray)}
                            >
                                Cidres glace
                            </Typo>
                        </Link>
                    </li>
                </ul>
            </nav>
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
                        <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center footer-social-animation">
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
                        <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center footer-social-animation">
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
                        <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center footer-social-animation">
                            <TwitterIcon/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        <Typo
                        variant="p"
                        font="noto"
                        className="hidden text-primary"
                        >
                            Linkedin
                        </Typo>
                        <div className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center footer-social-animation">
                            <LinkedinIcon />
                        </div>
                    </Link>
                </li>
            </ul>
            <ul className="w-full h-fit text-white flex flex-row items-center justify-center gap-[1.56rem] list-none mt-[7.5rem] pt-[3.75rem]  relative z-[2]">
                <li>
                    <Link to="">
                        <Typo>
                            CGU
                        </Typo>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <Typo>
                            CGV
                        </Typo>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <Typo>
                            Politique de confidentialité
                        </Typo>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <Typo>
                            Mentions légales
                        </Typo>
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <Typo>
                            Contacts
                        </Typo>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}