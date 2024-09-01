// import { EditSeries } from "./buttons";

export default function Card(
    { imageUrl, name, series, id, location, date, startTime }:
    { imageUrl: string | null, name: string, series: string, id?: string, location: any, date: string, startTime: string }) {
  
    const backgroundImageUrl = imageUrl || '/defaultImage.png';

    return (
      <div className="flex flex-col border p-4 h-[320px] rounded-[10px]">
        <div className="h-[200px] border bg-cover bg-center rounded-[10px] overflow-hidden"
                style={{
                    backgroundImage: `url("${backgroundImageUrl}")`,
                }}
            >
        </div>
        <div className="flex items-center justify-between pt-3 relative">
            <div className="mr-12">
                <h4 className="text-xl font-bold line-clamp-1">{name}</h4>
                <p className="text-[15px] line-clamp-2">{series}</p>
                <p className="text-[15px] line-clamp-2">{location.state}</p>
                <p className="text-[15px] line-clamp-2">{date}</p>
                <p className="text-[15px] line-clamp-2">{startTime}</p>
            </div>
            {/* <EditSeries id={id} /> */}
        </div>
      </div>
    );
  }
  