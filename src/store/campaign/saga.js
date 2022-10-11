import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  handleGetCampaignRecent,
  handleGetCampaigns,
  handleGetCampaignSearch,
} from "./handlers";
import { getCampaign, getCampaignRecent, getCampaignSearch } from "./slice";

export default function* newSaga() {
  yield takeLatest(getCampaign.type, handleGetCampaigns);
  yield takeEvery(getCampaignSearch.type, handleGetCampaignSearch);
  yield takeLatest(getCampaignRecent.type, handleGetCampaignRecent);
}
