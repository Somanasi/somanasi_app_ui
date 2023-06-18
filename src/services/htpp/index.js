import client from "./client/client";
 /**
  * 
  * @param {*} requestType -> request HTTP method: GET, POST, PUT, DELETE, PATCH, OPTIONS,
  * @param {*} url  -> segement of the url: To be prepended with the baseURL. baseURL should be configured in config,env, file
  * @param {*} payload  -> This is the payload or data to be sent, it's optional
  * @param {*} params  -> Optional parameters to be passed to the request
  * @param {*} headers -> Optional headers to be sent with the request
  * @returns > an instance of axios that is to be intercepted
  */
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