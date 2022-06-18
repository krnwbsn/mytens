import axios, { AxiosResponse } from 'axios';

import type { IPayloadAPI, IDefaultHeaders } from 'interfaces/iapi';

export const callAPI = async ({ method, uri, params }: IPayloadAPI) => {
  const hostApi: string = process.env.NEXT_PUBLIC_API_URL || '';
  const hostApiToken: string = process.env.NEXT_PUBLIC_API_TOKEN || '';

  let defaultHeaders: IDefaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `ghp_${hostApiToken}`,
  };

  const url = `${hostApi}/${uri}`;

  const headers = { ...defaultHeaders };

  const dataOrParams = ['GET'].includes(method.toUpperCase())
    ? 'params'
    : 'data';
  let defaultConfig = { method, headers, url };
  const config = { ...defaultConfig, [dataOrParams]: params };

  try {
    const response: AxiosResponse = await axios(config);

    return response;
  } catch (error) {
    if (error.message === 'Network Error') {
      console.error(error);
    }
  }
};
