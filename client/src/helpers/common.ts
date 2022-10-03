/* eslint-disable no-useless-escape */
import { toast } from 'react-toastify';

const common: any = {
  /***** Axios base URL *****/
  apiURL:
    process.env.NODE_ENV === 'development'
      ? `http://${window.location.hostname}:5000`
      : `https://${window.location.hostname}`,

  /***** Hardcoded RegEx for Email validations *****/
  validEmail: (email: string): boolean => {
    let valid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let specials = /[*|\":<>[\]{}`\\()';&$]/;

    return valid.test(email) && !specials.test(email);
  },

  /***** Toast for Base Error Messages by using React Toastify library *****/
  alertToastHandling: (message: string, position: string = 'top-right') => {
    toast(message, {
      position: 'top-right' || position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  },
};

export default common;
