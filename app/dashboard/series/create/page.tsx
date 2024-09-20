'use client'
import { useState } from "react";
import { BackButton } from "@/app/ui/series/buttons"
import { CreateSeries } from "@/app/ui/series/buttons"
import Preview from '@/app/ui/series/preview';
import SeriesDetails from '@/app/ui/series/series-details';
import CoverImageUpload from '@/app/ui/series/cover-image';

export default function Page() {
    const [selectedImage, setSelectedImage] = useState('/defaultImage.png');
    const [backgroundPosition, setBackgroundPosition] = useState({ x: 50, y: 50 });
    const [seriesName, setSeriesName] = useState('Series Name');
    const [seriesDescription, setSeriesDescription] = useState('Add Description');

    return (
        <div className="flex flex-col min-h-[calc(100vh-170px)] border-[var(--pb-c-soft-grey)]">
            <div className="sticky top-0 z-10 w-full">
                <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
                    <h3 className="font-[700] text-[25px]">Series</h3>
                </div>

                <div className="flex items-center py-3 px-6 justify-between border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
                    <div className='flex items-center gap-7'>
                        <BackButton href="/dashboard/series" />
                        <p className="text-[23px] md:text-[30px] md:font-[700]">Create Series</p>
                    </div>
                    <div className='hidden md:block'>
                        <CreateSeries className='w-[210px] h-[40px]' />
                    </div>
                </div>
            </div>

            <div className="flex flex-grow overflow-hidden">
                <Preview
                    selectedImage={selectedImage}
                    backgroundPosition={backgroundPosition}
                    seriesName={seriesName}
                    seriesDescription={seriesDescription}
                />

                <div className="border-0 md:border-l border-[var(--pb-c-soft-grey)] flex-grow overflow-y-auto p-6 max-h-[calc(100vh-170px)] md:basis-[60%] lg:basis-[70%]">
                    <CoverImageUpload
                        selectedImage={selectedImage}
                        backgroundPosition={backgroundPosition}
                        onImageChange={setSelectedImage}
                        onPositionChange={setBackgroundPosition}
                    />

                    <SeriesDetails
                        seriesName={seriesName}
                        seriesDescription={seriesDescription}
                        onSeriesNameChange={(e) => setSeriesName(e.target.value)}
                        onSeriesDescriptionChange={(e) => setSeriesDescription(e.target.value)}
                    />

                    <CreateSeries className='w-full h-[40px] my-10 block md:hidden' />
                </div>
            </div>
        </div>
    )
}