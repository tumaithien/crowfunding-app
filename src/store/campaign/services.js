import axios from "axios";
import { apiURL } from "config/config";
export function requestGetCampaign() {
  return axios.request({
    method: "GET",
    url: `${apiURL}/campaigns`,
  });
}
export function requestGetCampaignSearch(param) {
  return axios.request({
    method: "GET",
    url: `${apiURL}/campaigns?q=${param}`,
  });
}
export function requestGetCampaignRecent(page = 1, limit = 4) {
  return axios.request({
    method: "GET",
    url: `${apiURL}/campaigns?_page=${page}&_limit=${limit}`,
  });
}
