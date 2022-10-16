import USER from './../store/USER';
import { mode, api_url } from '../config.json';
import axios from "axios";

const api = axios.create({
  baseURL: `${api_url[mode]}/api`
});

const headers = () => {
  if (USER().getToken === "null") return {};
  return {
    Authorization: `Bearer ${USER().getToken}`
  }
};

api.interceptors.request.use(config => {
  const newHeaders = { ...config.headers, ...headers() };
  config.headers = newHeaders;
  return config;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

api.interceptors.response.use(response => response.data, error => Promise.reject(error));

export default api;

export const registerApi = (username, password, confirmedPassword) => {
  return api.post("/account/register/", {
    username,
    password,
    confirmedPassword
  });
};

export const loginApi = (username, password) => {
  return api.post("/account/token/", {
    username, password
  });
};

export const getInfoApi = () => {
  return api.get("/account/getInfo", {
    headers: headers()
  });
};

export const getAllGameApi = () => {
  return api.get("/game/getAll");
};

export const getAllLangApi = () => {
  return api.get("/lang/getAll");
};

export const getRecordListApi = gameId => {
  return api({
    url: "/record/getListByGameId",
    type: "GET",
    params: {
      gameId
    },
    headers: headers()
  });
};

export const getBotApi = gameId => {
  return api({
    url: "/bot/getByGame",
    type: "GET",
    params: {
      gameId
    },
    headers: headers()
  });
};

export const getAllBotApi = () => {
  return api({
    url: "/bot/getAll",
    type: "GET",
    headers: headers()
  });
};

export const addBotApi = (title, langId, gameId, description, code) => {
  return api.post("/bot/add", {
    title, langId, gameId, description, code
  }, {
    headers: headers()
  });
};

export const deleteBotApi = id => {
  return api({
    url: "/bot/delete",
    method: "DELETE",
    headers: headers(),
    params: { id }
  });
};

export const updateBotApi = (id, info) => {
  return api.post("/bot/update", {
    id, ...info
  }, {
    headers: headers()
  });
};

export const getRatingApi = game => {
  return api({
    url: `/getrating/${game}`,
    method: "GET"
  });
};

export const updateHeadIconApi = data => {
  return api.post("/updateHeadIcon", data);
};

export const phoneAuthApi = phone => {
  return api.post("/account/phoneauth/", {phone});
};

export const phoneLoginApi = (phone, authCode) => {
  return api.post("/account/phonelogin/", { phone, authCode });
};

export const getGroupListApi = () => {
  return api({
    url: "/group/list",
    method: "GET"
  });
};

export const createGroupApi = data => {
  return api.post("/group/create/", data);
};

export const getGroupByIdApi = id => {
  return api({
    url: "/group/getById",
    method: "GET",
    params: { id }
  });
};

export const deleteGroupApi = id => {
  return api.post("/group/delete/", {id});
}