import { catchError, from, map, Observable } from "rxjs";
import http, { handleError } from "../http";
import payHttp from "../pay-http";
import { IEventDTO } from "../models/event-dto";

export const createEvent = (payload: IEventDTO): Observable<any> => {
  return from(http.post("/event", payload)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};

export const updateEvent = ({ payload, id }: any): Observable<any> => {
  return from(http.put(`/event/${id}`, payload)).pipe(
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

export const publishEvents = ({ id }: any): Observable<any> => {
  return from(http.get(`/event/publish/${id}`)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};
export const unpublishEvents = ({ id, payload }: any): Observable<any> => {
  return from(http.put(`/event/unpublish/${id}`, payload)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};

export const getEventAnalytics = ({ ref, ...payload }: any): Observable<any> => {
  return from(
    payHttp.get(`/details/${ref}`, {
      params: payload,
    })
  ).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};

export const deleteEvent = ({ id }: any): Observable<any> => {
  return from(http.delete(`/event/delete/${id}`)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};
export const getEventByRef = ({ ref }: any): Observable<any> => {
  return from(http.get(`/event/reference/${ref}`)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};
