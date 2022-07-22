import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Checkbox } from "components/checkbox";
import { Button, ButtonGoogle } from "components/button";

const schema = yup
  .object()
  .shape({
    fullname: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character."),
  })
  .required();

const SingUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const handleSignUp = (values) => {
    console.log(values);
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with Google"></ButtonGoogle>
      <p className="mb-4 text-sm text-center lg:mb-7 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
        <FormGroup>
          <Label htmlFor="fullname">Full Name *</Label>
          <Input
            name="fullname"
            control={control}
            placeholder="John Doe"
            error={errors.fullname?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            name="email"
            control={control}
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            control={control}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs lg:text-sm text-text2">
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
