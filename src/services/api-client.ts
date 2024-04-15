import axios, { AxiosRequestConfig } from "axios";

export type FetchResponse<T> = {
  count: number;
  next: string | null;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c9ab77b7ebed4f6081b56aa66aafcce3",
  },
});

class APIClient<T> {
  private readonly endpoint;

  public constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public getAll = (config?: AxiosRequestConfig<T>) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(response => response.data);
}

export default APIClient;
