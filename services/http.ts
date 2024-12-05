import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { throwError } from "rxjs";
import { getStoredAuthToken } from "@/shared/utils/ls";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

http.interceptors.request.use(
  async (request: any) => {
    request.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: (await getStoredAuthToken())
        ? `Bearer ${await getStoredAuthToken()}`
        : "",
    };
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Promised-based Error handler
export const handleAxiosError = (error: AxiosError) => {
  const axiosError = error as AxiosError<any>;
  return axiosError.response?.data?.error;
};
//Observable Error handler
export const handleError = (errorResponse: any) => {
  if (errorResponse?.response?.status === 403) {
    toast.error(
      errorResponse?.response?.data?.message
        ? errorResponse?.response?.data?.message
        : errorResponse?.response?.data?.error
    );
    localStorage.clear();
    window.location.href = "/";
  }

  const annonErr = errorResponse?.response?.status === 412;
  if (annonErr) {
    localStorage.clear();
    window.location.href = "/";
  }
  const unExpectedError = errorResponse?.response?.status >= 500;
  if (unExpectedError) {
    toast.error("Oops, something went wrong.");
  }

  return throwError(() => errorResponse);
};
export default http;
