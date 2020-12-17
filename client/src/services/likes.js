import api from "./apiConfig";
let CircularJson = require("circular-json");

export const getAllLikes = async () => {
  const resp = await api.get("/likes");
  return resp.data;
};

export const getOneLike = async (id) => {
  const resp = await api.get(`/likes/${id}`);
  return resp.data;
};

export const postLike = async (likeData) => {
  console.log(likeData);
  const resp = await api.post("/likes", CircularJson.stringify(likeData));
  return resp.data;
};

export const destroyLike = async (id) => {
  const resp = await api.delete(`/likes/${id}`);
  return resp;
};