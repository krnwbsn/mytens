export interface IDefaultHeaders {
  Accept?: string;
  'Content-Type'?: string;
  'Access-Control-Allow-Origin'?: string;
  Authorization?: string;
}

export interface IUseFetch {
  status: string;
  data: Object[];
}

export interface IResponseDetail {
  fetching: boolean;
  data: any;
}

export interface IPayloadAPI {
  method: string;
  uri: string;
  params?: object;
  additionalHeader?: object;
  isCustomUri?: boolean;
  autocomplete?: boolean;
  isAuthorized?: boolean;
}
