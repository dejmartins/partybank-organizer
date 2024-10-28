"use client";
import { series } from "@/app/lib/placeholder-data";
import AddMore from "@/app/ui/dashboard/add-more";
import EmptyState from "@/app/ui/dashboard/empty-state";
import Loader from "@/app/ui/loaders/loader";
import Card from "@/app/ui/series/card";
import { ISeriesResponse } from "@/services/models/series-response";
import { getOrgSeries } from "@/services/series-services/series-service";
import useAuth from "@/shared/hooks/useAuth";
import { saveMySeries } from "@/store/series-slice/series-slice";
import { useDispatch } from "@/store/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const { USER } = useAuth();
  const [currentPage, setcurrentPage] = useState(1);
  const [isLoaderModalOpen, setIsLoaderModalOpen] = useState(true);
  const [seriesList, setseriesList] = useState<ISeriesResponse[]>([]);
  const seriesOfEvent = series;
  const dispatch = useDispatch();

  const fetchSeries = () => {
    setIsLoaderModalOpen(true);
    return getOrgSeries({
      organizerId: USER.id,
      page: currentPage,
      size: 10,
    }).subscribe({
      next: (res) => {
        if (res) {
          const transformed = res.data.map((obj: ISeriesResponse) => {
            return {
              image_url: obj.image_url ?? "/defaultImage.png",
              name: obj.name,
              description: obj.description,
              id: obj.series_id,
              event: obj.events,
              organizer_id: obj.organizer_id,
              data: obj,
            };
          });
          dispatch(saveMySeries(transformed));
          setseriesList(transformed);
        } else {
          toast.info(res.error);
          setIsLoaderModalOpen(false);
        }
      },
      error: (msg) => {
        toast.error(msg.message);
        setIsLoaderModalOpen(false);
      },
      complete: () => {
        setIsLoaderModalOpen(false);
      },
    });
  };

  useEffect(() => {
    const subscription = fetchSeries();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col border-0 md:border-x-[20px] border-[var(--pb-c-soft-grey)]">
        <div className="sticky top-0 z-10 w-full">
          <div className="inline-block md:hidden bg-[var(--pb-c-soft-grey)] w-full px-6 py-3">
            <h3 className="font-[700] text-[25px]">Series</h3>
          </div>

          <div className="py-3 px-6 border-0 border-b-[3px] border-[var(--pb-c-soft-grey)]">
            <p className="text-[23px] md:text-[30px] md:font-[700]">
              My Series
            </p>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-6 lg:p-8">
          {series.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
              <div>
                <AddMore
                  href="series/create"
                  mainText="New Series"
                  subText="Create a series to keep your events put together"
                  size="320px"
                />
              </div>
              {seriesList.length ? (
                seriesList.map((serie, index: number) => (
                  <div key={index}>
                    <Card
                      imageUrl={serie.image_url}
                      name={serie.name}
                      description={serie.description}
                      id={serie.id}
                      data={serie}
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className="md:mt-20">
              <EmptyState title="No records yet!" />
            </div>
          )}
        </div>
      </div>
      {isLoaderModalOpen && (
        <Loader isOpen={isLoaderModalOpen} message="fetching series" />
      )}
    </>
  );
}
