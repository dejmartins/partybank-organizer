import Link from "next/link";
import { EditSeries } from "./buttons";
import { useDispatch } from "@/store/store";
import { loadSeries } from "@/store/series-slice/series-slice";
import { createEllipsis } from "@/shared/utils/helper";

export default function Card({
  imageUrl,
  name,
  description,
  id,
  data,
}: {
  imageUrl: string | null;
  name: string;
  description: string;
  id: string;
  data?: any;
}) {
  const backgroundImageUrl = imageUrl || "/defaultImage.png";
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col border p-4 h-[320px] rounded-[10px]"
      onClick={() => {
        dispatch(loadSeries(data));
      }}
    >
      {/* <Link href={`/dashboard/series/${id}/events`}> */}
      <div
        className="h-[200px] border bg-cover bg-center rounded-[10px] overflow-hidden cursor-pointer"
        style={{
          backgroundImage: `url("${backgroundImageUrl}")`,
        }}
      ></div>
      {/* </Link> */}
      <div className="flex items-center justify-between pt-3 relative">
        <div className="mr-12">
          <h4 className="text-xl font-bold line-clamp-1">{name}</h4>
          <p className="text-[15px] line-clamp-2">
            {createEllipsis(description, 30)}
          </p>
        </div>

        <EditSeries id={id} />
      </div>
    </div>
  );
}
