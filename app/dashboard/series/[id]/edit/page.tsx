'use client'

import { useState } from 'react';
import { BackButton, SaveSeries } from "@/app/ui/series/buttons";

export default function Page() {
    const [selectedImage, setSelectedImage] = useState('/defaultImage.png');
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 50, y: 50 });
    const [seriesName, setSeriesName] = useState('Series Name');
    const [seriesDescription, setSeriesDescription] = useState('Add Description');

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleDrag = (event: any) => {
        let isDragging = false;
        let startX = 0, startY = 0, initialX = 0, initialY = 0;

        const onMouseDown = (e: any) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialX = backgroundPosition.x;
            initialY = backgroundPosition.y;
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (e: any) => {
            if (isDragging) {
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;
                setBackgroundPosition({
                    x: Math.max(Math.min(initialX + deltaX, 100), 0),
                    y: Math.max(Math.min(initialY + deltaY, 100), 0),
                });
            }
        };

        const onMouseUp = () => {
            isDragging = false;
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };

        event.currentTarget.addEventListener('mousedown', onMouseDown);
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-170px)] border-[var(--pb-c-soft-grey)]">
            <div className="sticky top-0 z-10 w-full">
                <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                    <h3 className="font-[700] text-[25px]">Series</h3>
                </div>

                <div className="flex items-center py-3 px-6 justify-between border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                    <div className='flex items-center gap-7'>
                        <BackButton href="/dashboard/series" />
                        <p className="text-[23px] md:text-[30px] md:font-[700]">Edit Series</p>
                    </div>
                    <div className='hidden md:block'>
                        <SaveSeries className='w-[180px] h-[40px]' />
                    </div>
                </div>
            </div>

            <div className="flex flex-grow overflow-hidden">
                
                <div className="border p-10 flex-grow flex flex-col hidden md:block md:basis-[40%] lg:basis-[30%]">
                    <h3 className='font-[700] text-[20px] mb-1'>Preview</h3>
                    <div className="border flex flex-col p-4 h-[300px] w-full rounded-[10px]">
                        <div className="h-[200px] border bg-cover bg-center rounded-[10px] overflow-hidden"
                            style={{
                                backgroundImage: `url("${selectedImage}")`,
                                backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`
                            }}
                        >
                        </div>
                        <div className="flex items-center justify-between pt-3 relative">
                            <div className="mr-12">
                                <h4 className="text-xl font-bold line-clamp-1">{seriesName}</h4>
                                <p className="text-[15px] line-clamp-2">{seriesDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-0 md:border-l border-[var(--pb-c-soft-grey)] flex-grow overflow-y-auto p-6 max-h-[calc(100vh-170px)] md:basis-[60%] lg:basis-[70%]">
                    <h2 className='font-[700] text-[20px] mb-1'>Add Cover</h2>
                    <p className='mb-2'>Upload a high-quality image to represent your collection at the top of the page and in ad campaigns. Images should be at least 1272px wide, and will be cropped at a 3:1 aspect ratio.</p>

                    <div 
                        className="relative border border-dashed border-[var(--pb-c-soft-grey)] rounded-lg h-[180px] md:h-[220px] flex items-center justify-center bg-cover bg-center cursor-grab"
                        style={{
                            backgroundImage: `url("${selectedImage}")`,
                            backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`
                        }}
                        onMouseDown={handleDrag}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleImageChange}
                        />
                        <button
                            className="bg-[#F8F9F9] border-2 border-[#E2DEDE] text-black px-6 py-2 rounded-[20px]"
                        >
                            Add a series image
                        </button>
                    </div>

                    <div className="mt-4 w-full xl:w-[650px]">
                        <h2 className='font-[700] text-[20px] mb-2'>Series Details</h2>
                        <div className='border border-[#DDE0E3] p-5 rounded-[10px] bg-[#F8F9F9]'>
                            <input 
                                value={seriesName} 
                                onChange={(e) => setSeriesName(e.target.value)}
                                className="border w-full p-2 my-2 rounded-[10px] outline-0 focus:outline-2 focus:outline-[#080D18] transition-all duration-300 ease-in-out transform focus:scale-105"
                            />

                            <input 
                                value={seriesDescription} 
                                onChange={(e) => setSeriesDescription(e.target.value)}
                                className="border w-full p-2 my-2 rounded-[10px] outline-0 focus:outline-2 focus:outline-[#080D18] transition-all duration-300 ease-in-out transform focus:scale-105"
                            />
                        </div>
                        <SaveSeries className='w-full h-[40px] my-10 block md:hidden' />
                    </div>
                </div>
            </div>
        </div>
    );
}
