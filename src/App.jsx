import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

////// <<-- Layouts -->> //////
import RootLayout from "./layouts/RootLayout"

////// <<-- Pages -->> //////
import ErrorPage from "./utils/error-page.jsx"
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<RootLayout />} errorElement= {<ErrorPage/>} >
      <Route index element = {<Home />} />
      <Route path="/about" element = {<About/>} />
      <Route path="/projects" element = {<Projects/>} />
      <Route path="/resume" element = {<Resume/>} />
      <Route path="/contact" element = {<Contact/>} />
    </Route>
  )
)

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}


export default App
