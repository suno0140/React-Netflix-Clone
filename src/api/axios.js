import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "621c219c122a27bd62e0f3ef337f7f18",
    language: "ko-KR",
  },
});

export default instance;
