import React, { useState, useEffect } from 'react';
import { Button } from "../../design-system/buttons/Buttons";
import { ArrowLeftIcon } from "../../design-system/svg/ArrowLeftIcon";

interface Props {
    className: string;
    images: { id: number; url: string; title: string }[]; 
}

export const Carousel = ({ className, images }: Props) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    }; //previous slide function

    const prev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };  //next slide function

    return (
        <div className="relative w-screen h-[56.25rem] box-border mx-auto bg-white">
            {images.map((image) => (
                <div
                    key={image.id}

                    // if the image is the current image, show it
                    className={
                        images[currentIndex].id === image.id ? 
                        'absolute inset-0 opacity-0 animate-[slideAnimation_3.5s_forwards] ' 
                        : 
                        'absolute top-0 left-[calc(50%_-_100px)] opacity-0 '
                    }
                >
                    <img src={image.url} alt={image.title} className='w-full h-full object-cover' />
                </div>
            ))}

            {/* Previous Button */}
            <Button variant="icon" onClick={prev} className='prev cursor-pointer absolute w-auto mt-[-22px] transition-[0.6s] duration-[ease] p-4 top-2/4 left-5 z-50'>
                <ArrowLeftIcon/>
            </Button>

            {/* Next Button */}
            <Button variant="icon" onClick={next} className='next rotate-180 right-0 cursor-pointer absolute w-auto mt-[-22px] transition-[0.6s] duration-[ease] p-4 top-2/4 right-5 z-50'>
                <ArrowLeftIcon/>
            </Button>
            <div className='flex justify-center absolute bottom-5 inset-x-0'>
                {images.map((image) => (
                    <span
                        key={image.id}
                        // highlight the dot that corresponds to the current photo
                        className={
                            images[currentIndex].id === image.id ? 
                            'dot-active-after relative cursor-pointer h-[20px] w-[2.5rem] mx-[5px] bg-[#ccc] rounded-[3.75rem] inline-block transition-all duration-75 delay-[0.1s]' 
                            :
                            'dot cursor-pointer h-[20px] w-[20px] mx-[5px] bg-[#ccc] rounded-[50%] inline-block transition-all duration-75 delay-[0.1s]'
                        }
                        // when the user clicks on a dot, go to the corresponding photo
                        onClick={() => setCurrentIndex(images.indexOf(image))}
                    ></span>
                ))}
            </div>
        </div>


    )
}
