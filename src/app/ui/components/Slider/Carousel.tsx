import React, { useState, useEffect } from 'react';
import { Button } from "../../design-system/buttons/Buttons";
import { ArrowLeftIcon } from "../../design-system/svg/ArrowLeftIcon";

interface Props {
    className: string;
    autoSlide?: boolean;
    autoSlideInterval?: number;
    images: { id: number; url: string; title: string }[];
}

export const Carousel = ({ className, images, autoSlide = true, autoSlideInterval = 5000 }: Props) => {

    useEffect(() => {
        if (autoSlide) {
            const slideInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, autoSlideInterval);
            return () => clearInterval(slideInterval);
        }
    }, [autoSlide, autoSlideInterval, images.length]);

    const [currentIndex, setCurrentIndex] = useState(0);

    let translate = "translate-x-full";

    const next = () => {

        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prev = () => {

        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    return (
        <div className="relative w-fit h-full">
            <div className={`flex transition-transform duration-500 w-fit h-full`}
            style={{transform: `translateX(-${currentIndex * 100}vw)`}}>
                {
                    images.map((image) => (
                        <figure
                            key={image.id}
                            className={`w-screen h-full flex-shrink-0 relative transition-transform duration-500 transform`}
                        >
                            <img src={image.url} alt={image.title} layout="fill" className='absolute inset-0 block w-full h-full object-cover object-top' />

                        </figure>
                    ))
                }
            </div>

            {/* Previous Button */}
            <Button variant="icon" onClick={prev} className='prev cursor-pointer absolute w-auto mt-[-22px] transition-[0.6s] duration-[ease] p-4 top-2/4 left-5 z-50'>
                <ArrowLeftIcon />
            </Button>

            {/* Next Button */}
            <Button variant="icon" onClick={next} className='next rotate-180 cursor-pointer absolute w-auto mt-[-22px] transition-[0.6s] duration-[ease] p-4 top-2/4 left-[95vw] z-50'>
                <ArrowLeftIcon />
            </Button>
            <div className='flex justify-center absolute bottom-5 left-[50vw] transition-all duration-75 delay-[0.1s]'>
                {images.map((image) => (
                    <span
                        key={image.id}
                        // highlight the dot that corresponds to the current photo
                        className={
                            images[currentIndex].id === image.id ?
                                'relative cursor-pointer h-[10px] w-[10px] mx-[5px] bg-white rounded-full inline-block transition-all duration-75 delay-[0.1s] z-[100]'
                                :
                                'dot cursor-pointer h-[10px] w-[10px] mx-[5px] bg-transparent border-white border-[1px] border-solid rounded-full inline-block transition-all duration-75 delay-[0.1s] z-[100]'
                        }
                        // when the user clicks on a dot, go to the corresponding photo
                        onClick={() => setCurrentIndex(images.indexOf(image))}
                    ></span>
                ))}
            </div>
        </div>


    )
}
