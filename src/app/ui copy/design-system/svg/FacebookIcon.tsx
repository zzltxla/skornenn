interface Props {
    className?: string;
}

export const FacebookIcon = ({className}:Props) => {

    function handleHover () {
        return (
            <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_74_5784)">
                <rect x="1.5" y="1" width="45" height="45" rx="22.5" fill="#87CEFA"/>
                <path d="M26.7454 25.875H29.8706L31.1206 20.875H26.7454V18.375C26.7454 17.0875 26.7454 15.875 29.2455 15.875H31.1206V11.675C30.7131 11.6213 29.1743 11.5 27.5492 11.5C24.1553 11.5 21.7453 13.5712 21.7453 17.375V20.875H17.9951V25.875H21.7453V36.5H26.7454V25.875Z" fill="white"/>
                </g>
                <rect x="1.5" y="1" width="45" height="45" rx="22.5" stroke="#87CEFA" stroke-width="2"/>
                <defs>
                <clipPath id="clip0_74_5784">
                <rect x="1.5" y="1" width="45" height="45" rx="22.5" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        )
    }

    return (
        <svg 
        width="45" 
        height="46" 
        viewBox="0 0 45 46" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        onMouseEnter={() => handleHover()}>
            <g id="Component 2">
                <path id="facebook" 
                d="M25.2454 25.0977H28.3706L29.6206 20.0977H25.2454V17.5977C25.2454 16.3102 25.2454 15.0977 27.7455 15.0977H29.6206V10.8977C29.2131 10.8439 27.6743 10.7227 26.0492 10.7227C22.6553 10.7227 20.2453 12.7939 20.2453 16.5977V20.0977H16.4951V25.0977H20.2453V35.7227H25.2454V25.0977Z" 
                fill="#87CEFA"/>
            </g>
        </svg>
    )
}