import React from "react";
import { LoginRegisterLayout } from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { TextField, SelectField } from "@/components/Field";
const Register = () => {
  return (
    <>
      <Head>
        <title>Register - Taxpal</title>
      </Head>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto"></Logo>
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Already registered?{" "}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in{" "}
        </Link>{" "}
        to your account
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6"
      >
        <TextField
          id="first_name"
          name="first_name"
          label="First name"
          type="email"
          placeholder=""
          required
        />

        <TextField
          id="last_name"
          name="last_name"
          label="Last name"
          type="password"
          placeholder=""
          required
        />

        <TextField
          className="col-span-full"
          id="register_email"
          name="register_email"
          label="Email address"
          type="email"
          placeholder=""
          required
        />

        <TextField
          className="col-span-full"
          id="register_password"
          name="register_password"
          label="Password"
          type="password"
          placeholder=""
          required
        />
        <SelectField
          className="col-span-full"
          label="How did you hear about us"
          id="How_hear_about_us"
          name="How_hear_about_us"
        >
          <option value="1"> AltaVista Search</option>
          <option value="2"> Super Bowl Commerical </option>
          <option value="3"></option>
          <option value="4"></option>
        </SelectField>

        <Button
          type="submit"
          varient="solid"
          color="blue"
          className="col-span-full"
        >
          Sign up
        </Button>
      </form>
    </>
  );
};

Register.Layout = LoginRegisterLayout;
export default Register;
