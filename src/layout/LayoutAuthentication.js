import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuthentication = (props) => {
  const { children, heading = "" } = props;

  return (
    <div className="relative w-full min-h-screen p-10 bg-lite">
      <img
        src="/ellipse.png"
        alt="bg"
        className="absolute bottom-0 left-0 right-0 hidden pointer-events-none z-[-1] lg:block"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
      </Link>
      <div className="w-full max-w-[556px] mx-auto bg-white opacity-100 rounded-xl px-5 py-7 lg:px-16 lg:py-12">
        <h1 className="mb-1 text-lg font-semibold text-center lg:mb-3 lg:text-xl text-text1">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
