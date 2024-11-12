interface Props {
    className?: string;
}

export const InstagramIcon = ({className}:Props) => {

    function handleHover () {
        return (
            <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_74_5755)">
                <rect x="1.5" y="1" width="45" height="45" rx="22.5" fill="#87CEFA"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0078 35.2902C30.5172 35.2902 35.794 30.0135 35.794 23.5045C35.794 16.9954 30.5172 11.7188 24.0078 11.7188C17.4985 11.7188 12.2217 16.9954 12.2217 23.5045C12.2217 30.0135 17.4985 35.2902 24.0078 35.2902ZM24.002 29.9353C27.5525 29.9353 30.4308 27.0571 30.4308 23.5067C30.4308 19.9563 27.5525 17.0781 24.002 17.0781C20.4514 17.0781 17.5731 19.9563 17.5731 23.5067C17.5731 27.0571 20.4514 29.9353 24.002 29.9353Z" fill="white"/>
                <ellipse cx="35.791" cy="11.7098" rx="2.67867" ry="2.67857" fill="white"/>
                </g>
                <rect x="1.5" y="1" width="45" height="45" rx="22.5" stroke="#87CEFA" stroke-width="2"/>
                <defs>
                <clipPath id="clip0_74_5755">
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
        <path id="Subtract" 
        fillRule="evenodd" clipRule="evenodd" 
        d="M22.5078 34.5128C29.0172 34.5128 34.294 29.2362 34.294 22.7271C34.294 16.2181 29.0172 10.9414 22.5078 10.9414C15.9985 10.9414 10.7217 16.2181 10.7217 22.7271C10.7217 29.2362 15.9985 34.5128 22.5078 34.5128ZM22.502 29.1579C26.0525 29.1579 28.9308 26.2798 28.9308 22.7294C28.9308 19.179 26.0525 16.3008 22.502 16.3008C18.9514 16.3008 16.0731 19.179 16.0731 22.7294C16.0731 26.2798 18.9514 29.1579 22.502 29.1579Z" fill="#87CEFA"/>
        <ellipse id="Ellipse 69" cx="34.291" cy="10.9325" rx="2.67867" ry="2.67857" fill="#87CEFA"/>
        </g>
        </svg>
    )
}