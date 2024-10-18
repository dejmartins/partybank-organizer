import { catchError, from, map, Observable } from "rxjs";
import http, { handleError } from "./http";
import authHttp from "./auth-http";

export const loginWithEmail = (payload: {
  username: string;
}): Observable<any> => {
  return from(authHttp.post("/auth/login", payload)).pipe(
    map((response: any) => response),
    catchError(handleError)
  );
};
