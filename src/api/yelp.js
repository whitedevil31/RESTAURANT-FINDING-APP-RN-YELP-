import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer hmN5bP3clKqTjGh4mtcNu-RG84iAlIWoGV6PAOQEYMDlM_iIIK7b6I_VHpZM_nZzve7592MCdoV0vL_2Suf81cmreP3xsmw0aL8MfmvGxeXPirBuKBCMUOvgQVTPXnYx",
  },
});
