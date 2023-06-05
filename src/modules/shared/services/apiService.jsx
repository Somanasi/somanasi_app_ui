import axios from "axios";
const call = (requestType, url, params = {}, headers = {}, payload = {}) => {
  return axios.request({
    method: requestType,
    url: url,
    params: params,
    headers: headers,
    data: payload
  });
};
