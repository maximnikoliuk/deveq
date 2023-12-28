import axios from "axios";

const BACKEND_URL = "https://deveq-api.onrender.com";

const postPrompt = async (text) => {
  try {
    const endpoint = BACKEND_URL + "/api/send-prompt";
    const body = { message: text };
    const res = await axios.post(endpoint, body);
    return res.data.data;
  } catch (error) {
    console.log("Error in postPrompt prompt.js:", error);
  }
};

export { postPrompt };
