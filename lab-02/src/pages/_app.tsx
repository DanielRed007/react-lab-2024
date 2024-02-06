import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home/Home";
import About from "./about/About";
import { Component } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
