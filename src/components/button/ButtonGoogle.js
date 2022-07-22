import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const ButtonGoogle = ({ text, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full py-3 mb-5 border rounded-lg border-strock dark:border-darkStroke gap-x-2"
    >
      <img src="/icon-google.png" alt="Google" />
      <span className="font-semibold text-text2 dark:text-white">{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
