import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";

export async function classify_review(review: string) {
  let result = "";

  await axios
    .post("/classifier/predict", { feedback: review })
    .then((r) => {
      result = r.data.result;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
