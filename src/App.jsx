import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import theme from "./styles/Theme.jsx"

// import { ThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

////// <<-- Layouts -->> //////
import RootLayout from "./layouts/RootLayout"

////// <<-- Pages -->> //////
import ErrorPage from "./utils/error-page.jsx"
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Explore from "./pages/Explore";
import Resume from "./pages/Resume";
import Contact from "./pages/Explore";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<RootLayout />} errorElement= {<ErrorPage/>} >
      <Route index element = {<Home />} />
      <Route path="/about" element = {<About/>} />
      <Route path="/projects" element = {<Explore/>} />
      <Route path="/resume" element = {<Resume/>} />
      <Route path="/contact" element = {<Contact/>} />
    </Route>
  )
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
