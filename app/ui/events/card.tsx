// import { EditSeries } from "./buttons";

import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/solid";

export default function Card(
    { imageUrl, name, series, id, location, date, startTime, venue }:
    { imageUrl: string | null, name: string, series: string, id?: string, location: any, date: string, startTime: string, venue: string }) {
  
    const backgroundImageUrl = imageUrl || '/defaultImage.png';

    return (
      <div className="flex flex-col border p-4 h-[250px] rounded-[10px]">
        <div className="flex items-center gap-2 bg-[#F7F6F7] rounded-[10px]">
            <div className="min-w-[80px] min-h-[80px] border bg-cover bg-center rounded-[10px] overflow-hidden"
                    style={{
                        backgroundImage: `url("${backgroundImageUrl}")`,
                    }}
                >
            </div>
            <div>
                <p className="text-[15px] line-clamp-1">{series}</p>
                <h4 className="text-xl font-bold line-clamp-1">{name}</h4>
            </div>
        </div>

        <div className="flex items-center justify-between pt-3 relative">
            <div className="mr-12 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <MapPinIcon className="w-6" />
                    <div>
                        <p className="text-[17px] line-clamp-1 font-[500]">{location.city}, {location.country}</p>
                        <p className="text-[15px] line-clamp-1">{venue}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarIcon className="w-6" />
                    <p className="text-[15px] line-clamp-2">{date}</p>
                </div>
                <div className="flex items-center gap-2">
                    <ClockIcon className="w-6" />
                    <p className="text-[15px] line-clamp-2">{startTime}</p>
                </div>
            </div>
            {/* <EditSeries id={id} /> */}
        </div>
      </div>
    );
  }
  