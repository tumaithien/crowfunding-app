import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { useState } from "react";

Quill.register("modules/imageUploader", ImageUploader);
const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });
  const [story, setStory] = useState("");
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
            url: "https://api.imgbb.com/1/upload?key=8cdbe4cec7ae6f5d83147a2c17b60b98",
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
  const handleAddNewCampaign = (values) => {};
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
              placeholder="Write a titel"
              className="text-sm"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                className="text-sm"
                placeholder="Select the category"
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Options>Teacher</Dropdown.Options>
                <Dropdown.Options>IT</Dropdown.Options>
                <Dropdown.Options>Streamer</Dropdown.Options>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
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
      </form>
    </div>
  );
};

export default CampaignAddNew;
