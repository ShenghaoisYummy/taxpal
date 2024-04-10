import React from "react";
import Head from "@/components/Head";
import Hero from "@/components/Hero";
import PrimaryFeatures from "@/components/PrimaryFeatures";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faqs from "@/components/Faqs";

const Home = () => {
  return (
    <>
      <Head />
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <Testimonials />
      <Pricing />
      <Faqs />
    </>
  );
};

export default Home;
