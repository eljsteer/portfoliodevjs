import { Outlet } from "react-router-dom";
import Header from "../components/AppAndHomePage/Header";
import Footer from "../components/AppAndHomePage/Footer";
import ScrollUpTop from "../components/AppAndHomePage/ScrollUpTop";

import { Paper } from "@mui/material"

import "../styles/RootLayout.css"

export default function RootLayout() {
  return (
    <Paper className="Root-layout">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer className="Footer"/>
      <ScrollUpTop />
    </Paper>
  )
}