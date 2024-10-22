import { catchError, from, map, Observable } from "rxjs";
import payHttp, { handleError } from "../pay-http";

export const getOrgStats = (id: any): Observable<any> => {
  return from(payHttp.get(`/organizer/events/${id}`)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};
