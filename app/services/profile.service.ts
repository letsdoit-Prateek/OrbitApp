
import axios, { AxiosError, AxiosResponse } from 'axios';

import Config from 'react-native-config';

import StorageService from './storage.service';

export default class ProfileAPI {
  static tokenType: 'api' | 'user' = 'user';
  static init() {
    // Add a request interceptor
    axios.interceptors.request.use(
      async (config: any) => {
        const originalRequest = config;
        const apiToken = Config.API_KEY;
        const userToken = await StorageService.check.getAuthToken();

        if (ProfileAPI.tokenType === 'api' && apiToken) {
          originalRequest.headers.Authorization = `APIKEY-${apiToken}`;
        } else if (ProfileAPI.tokenType === 'user' && userToken) {
          originalRequest.headers.Authorization = `${userToken}`;
        }

        return config; // Modify and return other requests
      },
      (error) => Promise.reject(error),
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        console.log('error response', error);

        if (error.response?.status === 403) {
          return Promise.resolve(error.response);
        }
        if (error.response?.status === 401) {
          console.log('redirect to login');
          // In React Native, you may navigate to your login screen using navigation or other appropriate mechanisms
        }

        return Promise.reject(error);
      },
    );
  }

  static addProfile(data: any, success: (data: any) => void, failure: (error: AxiosError) => void) {
    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    axios
      .post(Config.NODE_API_URL + '/api/educationServices/user/studentProfile/', data, {
        headers,
      })
      .then(
        (response: AxiosResponse) => {
          if (success) {
            success(response.data);
          }
        },
        (error: AxiosError) => {
          if (failure) {
            failure(error);
          }
        },
      );
  }

  static upateProfile(
    userProfileId: any,
    data: any,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = {
      'Content-Type': 'multipart/form-data',
    };

    axios
      .put(
        Config.NODE_API_URL + '/api/educationServices/user/studentProfile/' + userProfileId,
        data,
        { headers },
      )
      .then(
        (response) => {
          if (success) {
            success(response.data);
          }
        },
        (error) => {
          if (failure) {
            failure(error);
          }
        },
      );
  }

  static async getStudentProfileList(success: (data: any) => void, failure: (error: any) => void) {
    // Set the headers to specify JSON content
    const token1: any = await StorageService.check.getAuthToken();

    const headers = {
      'Content-Type': 'application/json',
      Authorization: token1,
    };

    axios
      .get(Config.NODE_API_URL + '/api/educationServices/user/studentProfiles/all/', {
        headers: headers,
      })
      .then(
        (response) => {
          if (success) {
            success(response.data);
          }
        },
        (error) => {
          if (failure) {
            failure(error);
          }
        },
      );
  }

  static deleteStudentProfile(
    studentProfileId: any,
    success: (data: any) => void,
    failure: (error: any) => void,
  ) {
    // Set the headers to specify JSON content
    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .delete(
        Config.NODE_API_URL + `/api/educationServices/user/studentProfile/${studentProfileId}`,
        { headers },
      )
      .then(
        (response) => {
          if (success) {
            success(response.data);
          }
        },
        (error) => {
          if (failure) {
            failure(error);
          }
        },
      );
  }

  static updateProfileStatus(
    studentProfileId: any,
    success: (data: any) => void,
    failure: (error: any) => void,
  ) {
    // Set the headers to specify JSON content
    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .patch(
        Config.NODE_API_URL + `/api/educationServices/user/studentProfile/${studentProfileId}`,
        { headers },
      )
      .then(
        (response) => {
          if (success) {
            success(response.data);
          }
        },
        (error) => {
          if (failure) {
            failure(error);
          }
        },
      );
  }

  static updateUserProfileId(
    profileID: any,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    // Set the headers to specify JSON content
    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .patch(
        Config.NODE_API_URL + '/api/educationServices/studentProfile/' + profileID + '/userId/',
        { headers },
      )
      .then(
        (response) => {
          if (success) {
            success(response.data);
          }
        },
        (error) => {
          if (failure) {
            failure(error);
          }
        },
      );
  }

  static submitPreCounsellingForm(
    data: any,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post(Config.NODE_API_URL + '/api/counselling/studentProfile/details/', data, {
        headers,
      })
      .then(
        (response) => {
          if (success) {
            success(response);
          }
        },
        (error) => {
          if (failure) {
            console.log('error got is: ', error);
            failure(error);
          }
        },
      );
  }

  static saveCounsellingBasedOnReportCode(
    data,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    const url = Config.NODE_API_URL + '/api/counselling/report';

    axios.post(url, data, { headers }).then(
      (response) => {
        if (success) {
          success(response.data);
        }
      },
      (error) => {
        if (failure) {
          failure(error);
        }
      },
    );
  }

  static getPreCounsellingForm(
    studentProfileID: number,
    additionalDetails: boolean,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    const url =
      Config.NODE_API_URL +
      `/api/educationServices/user/studentProfile/${studentProfileID}/?additionalDetails=${additionalDetails}`;

    axios.get(url, { headers }).then(
      (response) => {
        if (success) {
          success(response.data);
        }
      },
      (error) => {
        if (failure) {
          failure(error);
        }
      },
    );
  }

  static uploadProfile(
    data: any,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = {
      'Content-Type': 'application/json',
    };

    axios.post(Config.NODE_API_URL + '/api/educationServices/profileImg', data, { headers }).then(
      (response) => {
        if (success) {
          success(response.data);
        }
      },
      (error) => {
        if (failure) {
          failure(error);
        }
      },
    );
  }

  static studentProfileDetails(
    studentProfileID: number,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    const url =
      Config.NODE_API_URL + `/api/educationServices/user/studentProfile/${studentProfileID}/`;

    axios
      .get(url, { headers })
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        failure(error);
      });
  }

  static studentProfileTimeline(
    studentProfileID: number,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    const url =
      Config.NODE_API_URL +
      `/api/educationServices/user/studentProfile/${studentProfileID}/generate-timeline/`;

    axios
      .get(url, { headers })
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        failure(error);
      });
  }

  static studentProfileGradeCostBreakup(
    studentProfileID: number,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    const url =
      Config.NODE_API_URL +
      `/api/educationServices/user/studentProfile/${studentProfileID}/grade-cost-breakup/`;

    axios
      .get(url, { headers })
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        failure(error);
      });
  }

  static synopsisReport(
    studentId: any,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    const url =
      Config.NODE_API_URL +
      `/api/educationServices/user/studentProfile/${studentId}/education-journey/0`;

    axios
      .get(url, { headers })
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        failure(error);
      });
  }

  static currencyConverter(
    currencyFrom,
    currencyCode,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    const url =
      Config.NODE_API_URL +
      `/api/common/currency-converter/${currencyFrom}/?to=${currencyCode}&amount=1`;

    axios
      .get(url, { headers })
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        failure(error);
      });
  }

  static costReference(success: (data: any) => void, failure: (error: AxiosError) => void) {
    const headers = { 'Content-Type': 'application/json' };
    const url = Config.NODE_API_URL + '/api/educationServices/institute-cost-refernce/';

    axios
      .get(url, { headers })
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        failure(error);
      });
  }

  static affordabiltyCalculator(
    body: any,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    const url = Config.NODE_API_URL + '/api/financialServices/affordability/';

    axios
      .post(url, body, { headers })
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        failure(error);
      });
  }

  static commonYears(success: (data: any) => void, failure: (error: AxiosError) => void) {
    const headers = { 'Content-Type': 'application/json' };
    const url = Config.NODE_API_URL + '/api/common/years/20/';

    axios
      .get(url, { headers })
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        failure(error);
      });
  }

  static calculateEduAbacus(
    body: any,
    success: (data: any) => void,
    failure: (error: AxiosError) => void,
  ) {
    const headers = { 'Content-Type': 'application/json' };
    const url = Config.NODE_API_URL + '/api/educationServices/edu-abacus/';

    axios
      .post(url, body, { headers })
      .then((response) => {
        success(response.data);
      })
      .catch((error) => {
        failure(error);
      });
  }
}
