import { catchError, from, map, Observable } from "rxjs";
import http, { handleError } from "../http";

export const createSeries = (payload: any): Observable<any> => {
  return from(http.post("/series", payload)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};

export const updateSeries = ({ payload, id }: any): Observable<any> => {
  return from(http.put(`/series/${id}`, payload)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};
