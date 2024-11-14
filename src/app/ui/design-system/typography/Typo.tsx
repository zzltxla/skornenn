import { clsx } from "clsx";
import { Children } from "react";

interface Props {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "bg-text";
    font?: "noto";
    className?: string;
    children?: React.ReactNode;
}

export const Typo = ({
    variant = "p",
    font = "noto",
    className,
    children,
}: Props) => {
    switch (variant) {
        case "h1":
            return (
                <h1
                    className={clsx(
                        `font-${font} h1-clamp tracking-widest`,
                        className,
                    )}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    className={clsx(
                        `font-${font} h2-clamp tracking-widest`,
                        className,
                    )}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    className={clsx(
                        `font-${font} h3-clamp tracking-widest`,
                        className,
                    )}
                >
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4
                    className={clsx(
                        `font-${font} font-[1rem] tracking-normal`, className,
                    )}
                >
                    {children}
                </h4>
            );
        case "p":
            return (
                <p
                    className={clsx(
                        `font-${font} font-[0.938rem] tracking-normal`, className,
                    )}
                >
                    {children}
                </p>
            );
        case "span":
        return (
            <span className={clsx(className)}>{children}</span>
        );

        case "bg-text":
            return (
                <p
                className="uppercase bg-text-clamp text-left font-noto font-bold leading-[100%] text-primary20"
                >
                    {children}
                </p>
            )
    }
}