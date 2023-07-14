import Head from "next/head";
import { Inter } from "next/font/google";
import Banner from "@/components/Main/Banner/Banner";
import About from "@/components/Main/About/About";
import Projects from "@/components/Main/Projects/Projects";
import Skills from "@/components/Main/Skills/Skills";
import Callback from "@/components/Main/Callback/Callback";
import Footer from "@/components/Footer/Footer";
import Success from "@/components/Alerts/Success";
import Error from "@/components/Alerts/Error";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { IWork } from "@/types.p";
import { db } from "@/db/firebase";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Teryaev Andrey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <About />
      <Skills />
      <Callback />
      <Footer />
      <Success />
      <Error />
    </>
  );
};

export default Home;
