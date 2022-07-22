import React from "react";
import PropTypes from "prop-types";

const Label = ({ htmlFor = "", children, className = "", ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block font-medium text-text2 dark:text-text3 cursor-pointer lg:text-base text-sm ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};
export default Label;
