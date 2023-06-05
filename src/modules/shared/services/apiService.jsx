import axios from "axios";
export const call = (requestType, url, payload = {}, params = {}, headers = {},) => {
  return axios.request({
    method: requestType,
    url: /*`${import.meta.env.REACT_APP_BASE_API_URL}${url}`*/url,
    params: params,
    headers: headers,
    data: payload
  });
};
