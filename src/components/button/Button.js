import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      className={classNames(
        "p-4 min-h-[56px] text-base font-semibold rounded-xl flex justify-center items-center text-white",
        className,
        !!isLoading ? "opacity-50 pointer-events-none" : ""
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
