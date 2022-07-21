import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";
import { useState } from "react";

const SingUpPage = () => {
  const {
    handleSubmit,
    control,
    // formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  const handleSignUp = (values) => {
    console.log(values);
  };
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-3 mb-5 border rounded-lg border-strock gap-x-2">
        <img src="/icon-google.png" alt="Google" />
        <span className="font-semibold text-text2">Sign up with google</span>
      </button>
      <p className="mb-4 text-sm text-center lg:mb-7 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="fullname">Full Name *</Label>
          <Input
            name="fullname"
            control={control}
            placeholder="Jhon Doe"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            name="email"
            control={control}
            placeholder="example@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            name="password"
            type="password"
            control={control}
            placeholder="Create a password"
          ></Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-sm text-text2">
              I agree to the{" "}
              <span className="underline cursor-pointer text-secondary">
                Terms of Use
              </span>{" "}
              and have read and understand the{" "}
              <span className="underline cursor-pointer text-secondary">
                Privacy policy
              </span>
              .
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="bg-primary text-white w-full">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SingUpPage;
