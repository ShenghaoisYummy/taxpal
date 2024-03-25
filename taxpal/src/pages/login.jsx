import React from "react";
import { LoginRegisterLayout } from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { TextField, SelectField } from "@/components/Field";
const Login = () => {
  return (
    <>
      <Head>
        <title>Sign in - Taxpal</title>
      </Head>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto"></Logo>
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Don't have an account?
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          {" "}
          Sign up{" "}
        </Link>
        for a free trail
      </p>
      <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
        <TextField
          id="login_email"
          name="login_email"
          label="Email address"
          type="email"
          placeholder=""
          required
        />

        <TextField
          id="login_password"
          name="login_password"
          label="Password"
          type="password"
          placeholder=""
          required
        />
        <Button type="submit" varient="solid" color="blue" className="w-full">
          Sign in
        </Button>
      </form>
    </>
  );
};

Login.Layout = LoginRegisterLayout;
export default Login;
