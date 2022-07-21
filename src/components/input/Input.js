import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = ({
  name = "",
  type = "text",
  className = "",
  control,
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        className={`px-6 py-4 border w-full text-text1 placeholder:text-text4 border-strock rounded-xl ${className}`}
        id={name}
        {...field}
        {...props}
      />
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
