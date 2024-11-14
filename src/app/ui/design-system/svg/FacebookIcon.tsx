import clsx from "clsx";

interface Props {
    className?: string;
}

export const FacebookIcon = ({className}:Props) => {

    return (
        <svg 
        width="45" 
        height="46" 
        viewBox="0 0 45 46" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
            <g id="Component 2">
                <path id="facebook" 
                d="M25.2454 25.0977H28.3706L29.6206 20.0977H25.2454V17.5977C25.2454 16.3102 25.2454 15.0977 27.7455 15.0977H29.6206V10.8977C29.2131 10.8439 27.6743 10.7227 26.0492 10.7227C22.6553 10.7227 20.2453 12.7939 20.2453 16.5977V20.0977H16.4951V25.0977H20.2453V35.7227H25.2454V25.0977Z" 
                fill="#87CEFA" className={clsx("hover:fill-white transition-all ease-in-out delay-[0.1s] duration-[0.5s]",className)}/>
            </g>
        </svg>
    )
}