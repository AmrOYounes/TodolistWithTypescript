import axios from "axios";
import {PostRequstPayload, postResultResult} from './Actions.types';
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;



export const POST: (url: string, params: PostRequstPayload) => Promise<postResultResult> = (
  url: string,
  params: PostRequstPayload
) => {
  console.log(process.env.REACT_APP_API_ENDPOINT)
  return axios.post(url, params).then((res) => res.data);
};
