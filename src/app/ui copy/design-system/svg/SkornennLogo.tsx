import { Link } from "react-router-dom";

interface Props {
    className?: string;
}

export const SkornennLogo = ({className}: Props) => {
    return (
        <Link to="/">
            <svg width="900" 
            height="206" 
            viewBox="0 0 900 206" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={className}>
<rect width="900" 
height="205.823" 
fill="url(#pattern0_599_33413)"/>
<defs>
<pattern id="pattern0_599_33413" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_599_33413" transform="matrix(0.000521105 0 0 0.00227863 0 -0.0126911)"/>
</pattern>
</defs>
</svg>

        </Link>
    )
}