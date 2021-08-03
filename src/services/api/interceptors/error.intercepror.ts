import { AxiosError } from 'axios'

let invalidCredentials = false

export const errorInterceptor = async (error: AxiosError) => {
  const loggedIn = localStorage.getItem('accessToken') ? true : false;

  if (error.response?.status === 401) {
    if (loggedIn) {
      invalidCredentials = true;
    }

    localStorage.clear();

    // if (invalidCredentials) {
    //   notification.open({
    //     message: 'Not authorized',
    //     description: 'Your session has expired or is invalid, Please reconnect!',
    //   });

    //   setTimeout(() => {
    //     invalidCredentials = false;
    //     window.location.href = '/auth/login';
    //   }, 2000);
    // } else {
    //   notification.open({
    //     message: 'Invalid credentials',
    //     description: '',
    //   });
    // }
  } else {
  }

  // global error handler
  return Promise.reject(error)
}
