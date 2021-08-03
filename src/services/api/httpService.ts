import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import {
  requestInterceptor,
  responseInterceptor,
  errorInterceptor
} from './interceptors'

// require('dotenv').config()

class HttpService {
  private apiUrl: string
  private axios = {} as AxiosInstance

  constructor (apiUrl?: string) {
    this.apiUrl = apiUrl ? apiUrl: "";
    this.createAxiosInstance()
    this.registerInterceptors()
  }

  private createAxiosInstance () {
    this.axios = axios.create()
  }

  private registerInterceptors () {
    this.axios.interceptors.response.use(
      (res: AxiosResponse) => responseInterceptor(res),
      (err: AxiosError) => errorInterceptor(err)
    )

    this.axios.interceptors.request.use(requestInterceptor)
  }

  setApiUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  get<T> (url: string, config?: AxiosRequestConfig) {
    return this.axios.get<T>(this.apiUrl + url, config)
  }

  put<T> (url: string, payload?: object, config?: AxiosRequestConfig) {
    return this.axios.put<T>(this.apiUrl + url, payload, config)
  }

  post<T> (url: string, payload?: object, config?: AxiosRequestConfig) {
    return this.axios.post<T>(this.apiUrl + url, payload, config)
  }

  patch<T> (url: string, payload: object, config?: AxiosRequestConfig) {
    return this.axios.patch<T>(this.apiUrl + url, payload, config)
  }

  delete<T> (url: string, config?: AxiosRequestConfig) {
    return this.axios.delete<T>(this.apiUrl + url, config)
  }
}

export const http = new HttpService(process.env.REACT_APP_API_URL)
