import axios from "axios";
//import { API_BASE_URL } from "./constants";

class ApiClient {
  constructor(remoteHostUrl) {
    this.token = null;
    this.remoteHostUrl = remoteHostUrl; //Alter later?
  }

  setToken(token) {
    this.token = token;
  }

  async request({ endpoint, method, data = {} }) {
    // Initializes axios url with remoteHostUrl and endpoint from front end
    const url = `${this.remoteHostUrl}/${endpoint}`;
    console.debug("API Call:", endpoint, data, method);
    // If the method is get, then we set the params to data
    const params = method === "get" ? data : {};
    const headers = {
      "Content-Type": "application/json",
    };
    // Pushes token into authorization key value pair
    if (this.token) {
      headers["bearer"] = this.token;
    }
    // Attempt to make axios request with url and return that data
    try {
      const res = await axios({ url, method, data, params, headers }); // LOOK AT DOCUMENTATION LATER !!!
      return { data: res.data, error: null, message: null };
    } catch (error) {
      console.error("APIclient.makeRequest.error", error.response);
      // If failed, we check for a 404 error, otherwise we return the error
      if (error?.response?.status === 404)
        return { data: null, error: "Not found" };
      // Checking that error message exists -- Syntax thing
      const message = error?.response?.data?.error?.message;
      return { data: null, error: error?.response, message };
    }
  }

  async signUp(creds) {
    // Make register post request using generalized request method above with creds
    return await this.request({
      endpoint: `user/register`,
      method: `POST`,
      data: creds,
    });
  }

  async login(creds) {
    // Make login post request using generalized request method above with creds
    return await this.request({
      endpoint: `user/login`,
      method: `POST`,
      data: creds,
    });
  }

  async fetchUserFromToken() {
    // Make me get request using generalized request method above with userId
    return await this.request({
      endpoint: `user/me`,
      method: `GET`,
    });
  }
}

// Export class -- hardcoded localhost
export default new ApiClient("http://localhost:3001");
