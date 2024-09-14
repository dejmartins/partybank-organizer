import React from 'react';

interface SeriesDetailsProps {
  seriesName: string;
  seriesDescription: string;
  onSeriesNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSeriesDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SeriesDetails({
    seriesName,
    seriesDescription,
    onSeriesNameChange,
    onSeriesDescriptionChange,
  }: SeriesDetailsProps ) {

  return (
    <div className="mt-4 w-full xl:w-[650px]">
        <h2 className='font-[700] text-[20px] mb-2'>Series Details</h2>
        <div className='border border-[#DDE0E3] p-5 rounded-[10px] bg-[#F8F9F9]'>
            <input
            value={seriesName}
            onChange={onSeriesNameChange}
            className="border w-full p-2 my-2 rounded-[10px] outline-0 focus:outline-2 focus:outline-[#080D18] transition-all duration-300 ease-in-out transform focus:scale-105"
            />

            <input
            value={seriesDescription}
            onChange={onSeriesDescriptionChange}
            className="border w-full p-2 my-2 rounded-[10px] outline-0 focus:outline-2 focus:outline-[#080D18] transition-all duration-300 ease-in-out transform focus:scale-105"
            />
        </div>
    </div>
  );
};