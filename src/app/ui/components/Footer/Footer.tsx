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
        <footer className="w-full h-fit pt-[5rem] pb-[7.5rem] bg-white bg-[url('../public/img/panoramic-snowy-view-placeholder.webp') no-reapeat left top, radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%)] flex flex-col items-center justify-center">
            <div className="text-center flex flex-col items-center justify-center gap-[1.25rem] mb-[2.5rem]">
                <SkornennLogo
                className="w-[18.75rem] h-[4.288rem]"/>
                <Typo
                variant="p"
                color="midgray"
                font="noto"
                >
                © Skornenn 2024 - all right reserved
                </Typo>
            </div>
            <nav className="">
                <ul className="list-none flex flex-row gap-[2.5rem] items-center justify-center">
                    <li>
                        <Link to="/">
                            <Typo 
                            variant="h4"
                            color="midgray"
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
                            color="midgray"
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
                            color="midgray"
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
                            color="midgray"
                            font="noto"
                            >
                                Cidres sans alcool
                            </Typo>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className="list-none flex flex-row gap-[0.94rem] items-center justify-center">
                    <li>
                        <Link to="/">
                            <Typo
                            variant="p"
                            color="primary"
                            font="noto"
                            className="hidden"
                            >
                                Instagram
                            </Typo>
                            <InstagramIcon/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo
                            variant="p"
                            color="primary"
                            font="noto"
                            className="hidden"
                            >
                                Facebook
                            </Typo>
                            <FacebookIcon/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo
                            variant="p"
                            color="primary"
                            font="noto"
                            className="hidden"
                            >
                                Twitter
                            </Typo>
                            <TwitterIcon/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Typo
                            variant="p"
                            color="primary"
                            font="noto"
                            className="hidden"
                            >
                                Linkedin
                            </Typo>
                            <LinkedinIcon/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}