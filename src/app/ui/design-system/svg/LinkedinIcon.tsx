import clsx from "clsx";

interface Props {
    className?: string;
}

export const LinkedinIcon = ({className}:Props) => {
    return (
        <svg 
        width="45" 
        height="46" 
        viewBox="0 0 45 46" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("hover:",className)}>
            <g id="Component 2">
            <path id="Vector" d="M15.5461 13.0912C15.5457 13.8206 15.2556 14.5199 14.7396 15.0354C14.2236 15.5508 13.524 15.8402 12.7946 15.8398C12.0653 15.8395 11.3659 15.5494 10.8504 15.0334C10.3349 14.5174 10.0455 13.8178 10.0459 13.0885C10.0463 12.3591 10.3364 11.6598 10.8524 11.1443C11.3684 10.6289 12.068 10.3395 12.7974 10.3398C13.5267 10.3402 14.2261 10.6303 14.7416 11.1463C15.2571 11.6623 15.5465 12.3619 15.5461 13.0912ZM15.6286 17.8762H10.1284V35.0912H15.6286V17.8762ZM24.3189 17.8762H18.8462V35.0912H24.2639V26.0575C24.2639 21.025 30.8229 20.5575 30.8229 26.0575V35.0912H36.2544V24.1875C36.2544 15.7037 26.5465 16.02 24.2639 20.1862L24.3189 17.8762Z" fill="#87CEFA"
            className={clsx("hover:fill-white transition-all ease-in-out delay-[0.1s] duration-[0.5s]",className)}/>
            </g>
        </svg>

    )
}