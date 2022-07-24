import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({
  name = "",
  className = "",
  placeholder = "",
  children,
  control,
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <textarea
      className="px-6 py-4 border w-full resize-none min-h-[140px] outline-none text-text1 bg-transparent placeholder:text-text4 dark:placeholder:text-text2 border-strock dark:border-darkStroke dark:text-white rounded-xl"
      placeholder={placeholder}
      {...props}
      {...field}
    ></textarea>
  );
};

export default Textarea;
