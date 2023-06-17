import client from './client';


export default  const call = async(
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