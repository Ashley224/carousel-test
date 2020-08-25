import Constants from "../constants";
import axios from "axios";
export default class ImagesFetchService {
  constructor() {
    if (!process.env.REACT_APP_ImageFetch_ApiKey)
      throw new Error(
        "ApiKey Envrionment Variable Not set before running the Application"
      );
    console.log(process.env);
    this.apiKey = process.env.REACT_APP_ImageFetch_ApiKey;
    this.apiUrl = Constants.apiUrl;
  }
  async getData() {
    const type = Constants.dataType;
    const response = await axios.get(
      `${this.apiUrl}/?key=${this.apiKey}&q=beautiful+landscape&image_type=${type}`
    );
    if (response.status >= 400) {
      throw new Error("Error fetching Images");
    } else {
      return await response;
    }
  }
}
