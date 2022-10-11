import useOnChange from "hooks/useOnChange";
import ReactQuill, { Quill } from "react-quill";
import React, { useMemo } from "react";
import ImgUpload from "components/ImgUpload";
import ImageUploader from "quill-image-uploader";
import FormRow from "components/common/FormRow";
import FormGroup from "components/common/FormGroup";
import DatePicker from "react-date-picker";
import Button from "components/button/Button";
import axios from "axios";
import { v4 } from "uuid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { Dropdown } from "components/dropdown";
import { apiURL } from "config/config";
import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageUploader", ImageUploader);
var slugify = require("slugify");
const category = ["architecture", "education"];
const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm({
    mode: "onSubmit",
  });
  const getDropdownLabel = (name, defaultValue = "") => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const [story, setStory] = useState("");
  const [countries, setCountries] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //Custom modules react quill
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: "https://api.imgbb.com/1/upload?key=b6966f06a934a424151d59268667309f",
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };
  const resetValue = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setCountries([]);
    reset({});
  };
  const handleAddNewCampaign = async (values) => {
    try {
      values.slug = slugify(values.title || values.slug, {
        lower: true,
        locale: "vi",
        trim: true,
        remove: /[*+~.()'"!:@]/g,
      });
      axios.post(`${apiURL}/campaigns`, {
        ...values,
        story,
        startDate,
        endDate,
      });
      toast.success("Create Campaign successfully!");
      resetValue();
    } catch (error) {
      toast.error("Can not create new Campaign");
    }
  };
  const { value: filterCountry, handleOnChange: setFilterCountry } =
    useOnChange(500);
  useEffect(() => {
    if (!filterCountry) return;
    async function fetchCountries() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center mb-10">
        <h1 className="py-4 px-[60px] text-[25px] inline-block text-text2 font-bold bg-text4 bg-opacity-5">
          Start a Campaign
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              name="title"
              control={control}
              placeholder="Write a title"
              className="text-sm"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                className="text-sm"
                placeholder={getDropdownLabel(
                  "category",
                  "Select the category"
                )}
              ></Dropdown.Select>
              <Dropdown.List>
                {category.map((item) => (
                  <Dropdown.Options
                    key={v4()}
                    onClick={() => handleSelectDropdownOption("category", item)}
                  >
                    <span className="capitalize">{item}</span>
                  </Dropdown.Options>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Slug</Label>
            <Input
              name="slug"
              control={control}
              className="text-sm"
              placeholder="Enter your slug"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Featured Image</Label>
            <ImgUpload name="featured_image" onChange={setValue}></ImgUpload>
          </FormGroup>
          <FormGroup></FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            control={control}
            name="short_description"
            placeholder="Write a short description...."
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            modules={modules}
            theme="snow"
            value={story}
            onChange={setStory}
            placeholder="Write your story......"
          />
        </FormGroup>

        <div className="bg-secondary mb-10 bg-opacity-70 rounded-[10px] py-5 px-5 lg:py-8 lg:px-11 flex items-center bg-[url('/public/Union.png')] bg-no-repeat bg-center-right-7">
          <img
            srcSet="/money-bag.png 2x"
            className="lg:w-10 lg:mr-5 mr-3"
            alt="crowfunding-app"
          />
          <span className="lg:text-2xl font-bold text-white">
            You will get 90% of total raised
          </span>
        </div>
        <FormRow>
          <FormGroup>
            <Label htmlFor="goal">Goal *</Label>
            <Input
              name="goal"
              control={control}
              placeholder="$0.00 USD"
              className="text-sm"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount">Raised Amount *</Label>
            <Input
              name="amount"
              control={control}
              placeholder="$0.00 USD"
              className="text-sm"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="prefilled">Amount Prefilled</Label>
            <Input
              name="prefilled"
              control={control}
              placeholder="Amount Prefilled"
              className="text-sm"
            ></Input>
            <p className="text-left text-text3 text-sm">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="video">Video</Label>
            <Input
              name="video"
              control={control}
              placeholder="Video"
              className="text-sm"
            ></Input>
            <p className="text-left text-text3 text-sm">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="campain">Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select
                className="text-sm"
                placeholder="Select one"
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Options>Teacher</Dropdown.Options>
                <Dropdown.Options>IT</Dropdown.Options>
                <Dropdown.Options>Streamer</Dropdown.Options>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="campain">Counrty</Label>
            <Dropdown>
              <Dropdown.Select
                className="text-sm"
                placeholder={getDropdownLabel("country", "Select country")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search country"
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((country) => (
                    <Dropdown.Options
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Options>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="startDate">Start Date</Label>
            {/* <Input
              name="startDate"
              control={control}
              placeholder="Start Date"
              className="text-sm"
            ></Input> */}
            <DatePicker
              onChange={setStartDate}
              value={startDate}
              format="dd-MM-yyyy"
              dayPlaceholder="Start date"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="endDate">End Date</Label>
            {/* <Input
              name="endDate"
              control={control}
              placeholder="End Date"
              className="text-sm"
            ></Input> */}
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              format="dd-MM-yyyy"
              dayPlaceholder="Start date"
            />
          </FormGroup>
        </FormRow>
        <div className="mt-4">
          <Button kind="primary" type="submit" className="px-10 mx-auto">
            Submit new campaign{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
