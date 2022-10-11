import { Button } from "components/button";
import React, { Fragment, useEffect, useState } from "react";
import parse from "html-react-parser";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignViewAuthor from "./parts/CampaignViewAuthor";
import { v4 as uuidv4, v4 } from "uuid";
import { useParams } from "react-router-dom";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
import Heading from "components/common/Heading";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import { useDispatch, useSelector } from "react-redux";
import { getCampaign } from "store/campaign/slice";
import { calculateDate } from "utils/helper";

const listFunction = [
  {
    id: uuidv4(),
    url: "#",
    name: "Campgain",
  },
  {
    id: uuidv4(),
    url: "#",
    name: "Risks",
  },
  {
    id: uuidv4(),
    url: "#",
    name: "FAQ",
  },
  {
    id: uuidv4(),
    url: "#",
    name: "Updates",
  },
  {
    id: uuidv4(),
    url: "#",
    name: "Comments",
  },
];
const CampaignDetails = () => {
  const { campaignData } = useSelector((state) => state.campaign);
  const [campaignInfo, setCampaignInfo] = useState({});
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampaign());
    function detailsData(slug) {
      if (!slug) return;
      campaignData.forEach((item) => {
        if (item.slug === slug) {
          setCampaignInfo(item);
          console.log(item);
        }
      });
    }
    detailsData(slug);
  }, [dispatch, slug]);
  const {
    title,
    featured_image,
    amount,
    goal,
    prefilled,
    story,
    category,
    endDate,
  } = campaignInfo;
  let now = new Date();
  let days = calculateDate(now, endDate);
  const campaignContent = parse(story || "");
  return (
    <Fragment>
      <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center mb-10 gradient-banner">
        <h1 className="font-bold text-white text-[40px] capitalize">
          {category}
        </h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampaignImage
            imgLink={featured_image?.medium || featured_image?.thumb}
            className="h-[398px] mb-8"
          ></CampaignImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampaignCategory
            text={category}
            className="text-sm font-medium mb-4"
          ></CampaignCategory>
          <CampaignTitle className="text-xl font-bold mb-4">
            {title}
          </CampaignTitle>
          <CampaignDesc className="text-sm mb-6 title-clip-2"></CampaignDesc>
          <CampaignViewAuthor authorName="Saiful Islam"></CampaignViewAuthor>
          <div className="w-full h-1 rounded-full bg-[#EFEFEF] mb-6">
            <div className="h-full w-2/4 bg-primary rounded-full"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mb-4">
            <CampaignMeta
              amount={amount}
              text={`Raised of $${goal}`}
              size="large"
            ></CampaignMeta>
            <CampaignMeta
              size="large"
              amount={prefilled}
              text="Total backers"
            ></CampaignMeta>
            <CampaignMeta
              size="large"
              text="Days left"
              amount={days}
            ></CampaignMeta>
          </div>
          <Button type="button" className="w-full" kind="primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-24 bg-white p-5 shadow-sm border-b-slate-100 mb-6">
        <ul className="flex items-center gap-x-14 text-sm text-text3">
          {listFunction.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
        <Button type="button" kind="primary" className="px-9">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <div className="text-lg font-semibold uppercase mb-5">STORY</div>
          <div className="w-full bg-white entry-content p-4 rounded-lg shadow">
            {campaignContent}
          </div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mt-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <Heading className="mb-10 text-xl">You also may be interested in</Heading>
      <CampaignGrid>
        {campaignData.length > 0 &&
          campaignData.map((item) => (
            <CampaignItem key={item.id} data={item}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignDetails;
