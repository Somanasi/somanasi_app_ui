import client from './client';

const call = async(
    requestType,
    url,
    payload = null,
    params = null,
    headers = null,
  ) => {
    return client[requestType]({
      url,
      params: params,
      headers: headers,
      data: payload
    });
  };

  export default call;