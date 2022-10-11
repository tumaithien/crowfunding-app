import { call, put } from "redux-saga/effects";
import {
  requestGetCampaign,
  requestGetCampaignRecent,
  requestGetCampaignSearch,
} from "./services";
import { setCampaign, setCampaignRecent, setCampaignSearch } from "./slice";
export function* handleGetCampaigns({ payload, type }) {
  try {
    const response = yield call(requestGetCampaign);
    const campaignData = response.data;
    yield put(setCampaign(campaignData));
  } catch (error) {
    console.log(error.message);
  }
}
export function* handleGetCampaignSearch({ payload: query, type }) {
  try {
    const response = yield call(requestGetCampaignSearch, query);
    const campaignData = response.data;
    yield put(setCampaignSearch(campaignData));
  } catch (error) {
    console.log(error.message);
  }
}
export function* handleGetCampaignRecent({ payload, type }) {
  try {
    const response = yield call(requestGetCampaignRecent, payload);
    const campaignData = response.data;
    yield put(setCampaignRecent(campaignData));
  } catch (error) {
    console.log(error.message);
  }
}
