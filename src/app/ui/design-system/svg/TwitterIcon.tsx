interface Props {
    className?: string;
}

export const TwitterIcon = ({className}:Props) => {
    return (
        <svg width="45" 
        height="46" 
        viewBox="0 0 45 46" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
            <g id="Component 2">
                <path id="Vector" 
                d="M30.2634 10.5117H34.4036L25.3583 20.8505L36 34.9163H27.668L21.1427 26.3843L13.6747 34.9163H9.53229L19.2077 23.8576L8.99902 10.5128H17.5426L23.4412 18.3113L30.2634 10.5117ZM28.811 32.4391H31.105L16.296 12.8596H13.8345L28.811 32.4391Z" 
                fill="#87CEFA"/>
            </g>
        </svg>
    )
}