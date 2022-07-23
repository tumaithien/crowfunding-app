import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";

const Input = ({
  name = "",
  type = "text",
  className = "",
  error = "",
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
    <div className="relative pb-6">
      <input
        type={type}
        className={classNames(
          "px-6 py-4 border w-full text-text1 bg-transparent placeholder:text-text4 dark:placeholder:text-text2 border-strock dark:border-darkStroke dark:text-white rounded-xl",
          className,
          error.length > 0 ? "border-error" : "border-strock",
          children ? "pr-16" : ""
        )}
        id={name}
        placeholder={error.length > 0 ? "" : placeholder}
        {...field}
        {...props}
      />
      {error.length > 0 && (
        <span className="font-medium text-error text-sm absolute bottom-0 left-1 pointer-events-none">
          {error}
        </span>
      )}
      <div className="absolute right-6 top-[35%] -translate-y-2/4 cursor-pointer select-none">
        {children}
      </div>
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
