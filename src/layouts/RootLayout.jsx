import { Outlet } from "react-router-dom";
import Header from "../components/AppComponents/Header";
import Footer from "../components/AppComponents/Footer";
import ScrollUpTop from "../components/AppComponents/ScrollUpTop";

import { Paper } from "@mui/material"

import "./rootlayout.css"

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