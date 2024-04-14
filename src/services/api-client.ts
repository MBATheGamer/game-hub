import axios from "axios";

export type FetchResponse<T> = {
  count: number;
  results: T[];
};

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c9ab77b7ebed4f6081b56aa66aafcce3",
  },
});
