import axios from "axios";
const call = (methodType, url, payload, options={}) => {
    axios.[methodType](
        url,
        payload,
        options
    )
};