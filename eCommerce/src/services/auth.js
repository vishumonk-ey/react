class AuthService {
  BaseUrl = "https://api.freeapi.app/api/v1/users/";

  async registerUser(data) {
    try {
      const url = `${this.BaseUrl}/register`;
      const datainJson = JSON.stringify(data);
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: datainJson,
      };
      const response = await fetch(url, options);
      const responseData = await response.json();
    //   if (!response.ok) {
    //     throw new Error(responseData.message || "API request failed");
    //   }
      return responseData;
    } catch (error) {
      console.error("Failed to register:", error.message);
      throw error;
    }
  }
}
export default new AuthService();
