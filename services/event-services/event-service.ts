import { catchError, from, map, Observable } from "rxjs";
import http, { handleError } from "../http";
import { IEventDTO } from "../models/event-dto";

export const createEvent = (payload: IEventDTO): Observable<any> => {
  return from(http.post("/event", payload)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};

export const getOrgEvents = (payload: any): Observable<any> => {
  return from(
    http.get("/event/organizer", {
      params: { ...payload },
    })
  ).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};
