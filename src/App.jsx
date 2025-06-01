import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="bg-black"></main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Sentry.withProfiler(App);
