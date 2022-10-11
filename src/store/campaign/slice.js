import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "campaign",
  initialState: {
    campaignData: [],
    query: "",
    campaignDataSearch: [],
    campaignDataRecent: [],
  },
  reducers: {
    setCampaign: (state, action) => ({
      ...state,
      campaignData: action.payload,
    }),
    getCampaign() {},
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
    getCampaignSearch() {},
    setCampaignSearch: (state, action) => ({
      ...state,
      campaignDataSearch: action.payload,
    }),
    getCampaignRecent() {},
    setCampaignRecent: (state, action) => ({
      ...state,
      campaignDataRecent: action.payload,
    }),
  },
});
export const {
  getCampaign,
  setCampaign,
  setQuery,
  getCampaignSearch,
  setCampaignSearch,
  setCampaignRecent,
  getCampaignRecent,
} = slice.actions;
export default slice.reducer;
