import clsx from "clsx";

interface Props {
    className?: string;
}

export const InstagramIcon = ({className}:Props) => {


    return (
        <svg 
        width="45" 
        height="46" 
        viewBox="0 0 45 46" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <g id="Component 2" className={clsx("group-hover:fill-white transition-all ease-in-out delay-[0.1s] duration-[0.5s] w-full h-full",className)}>
            <path id="Subtract" 
            fillRule="evenodd" clipRule="evenodd" 
            d="M22.5078 34.5128C29.0172 34.5128 34.294 29.2362 34.294 22.7271C34.294 16.2181 29.0172 10.9414 22.5078 10.9414C15.9985 10.9414 10.7217 16.2181 10.7217 22.7271C10.7217 29.2362 15.9985 34.5128 22.5078 34.5128ZM22.502 29.1579C26.0525 29.1579 28.9308 26.2798 28.9308 22.7294C28.9308 19.179 26.0525 16.3008 22.502 16.3008C18.9514 16.3008 16.0731 19.179 16.0731 22.7294C16.0731 26.2798 18.9514 29.1579 22.502 29.1579Z" fill="#87CEFA" 
            />
            <ellipse id="Ellipse 69" cx="34.291" cy="10.9325" rx="2.67867" ry="2.67857" fill="#87CEFA" />
        </g>
        </svg>
    )
}