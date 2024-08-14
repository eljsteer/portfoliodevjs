import { Outlet } from "react-router-dom";
// ------- MaterialUi Imports ------>>
import { Paper } from "@mui/material"
// ------- Component Imports ------->>
import Header from "../components/AppComponents/Header";
import Footer from "../components/AppComponents/Footer";
import ScrollUpTop from "../components/AppComponents/ScrollUpTop";
// -------CSS StyleSheet
import "./rootlayout.css"


// -----------------------------------------------------------------------


// ------------------------------------------------>>
// ------ Main Application Layout Structure ------->>
// ------------------------------------------------>>
export default function RootLayout() {
  return (
    <Paper className="Root-layout">
      <Header/>
      <main className="main-content">
        <Outlet/>
      </main>
      <Footer className="Footer"/>
      <ScrollUpTop />
    </Paper>
  )
}