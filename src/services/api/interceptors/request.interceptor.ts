import { AxiosRequestConfig } from 'axios'

export const requestInterceptor = async (requestConfig: AxiosRequestConfig) => {
  if (requestConfig.headers) {
    requestConfig.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
  }

  return requestConfig
}
