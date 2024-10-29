"use client";
import { ISeriesResponse } from "@/services/models/series-response";
import { getOrgSeries } from "@/services/series-services/series-service";
import { useDispatch, useSelector } from "@/store/store";
import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { toast } from "react-toastify";
import { saveMySeries } from "@/store/series-slice/series-slice";

export default function useSeries() {
  const { USER } = useAuth();
  const loadedSeries: ISeriesResponse = useSelector(
    (state) => state.series
  ).data;
  const mySeries = useSelector((state) => state.series).myseries;
  const dispatch = useDispatch();

  const [isSeriesLoading, setseriesLoading] = useState(false);
  const [seriesArr, setseriesList] = useState<any>([]);

  const fetchSeries = () => {
    setseriesLoading(true);
    return getOrgSeries({
      organizerId: USER.id,
      page: 1,
      size: 100,
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
        } else {
          toast.info(res.error);
        }
      },
      error: (msg) => {
        toast.error(msg.message);
      },
      complete: () => {
        setseriesLoading(false);
      },
    });
  };

  useEffect(() => {
    if (mySeries !== undefined && mySeries.length) {
      const arr = mySeries.map((obj: any) => {
        return { label: obj?.name, id: obj?.id };
      });
      setseriesList(arr);
    }
    return () => {};
  }, [mySeries]);

  return { fetchSeries, isSeriesLoading, loadedSeries, mySeries, seriesArr };
}
