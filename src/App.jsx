import { CssBaseline } from '@mui/material'
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx"



import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
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

const basename = '/portfolioDevJS';

// const routes = createRoutesFromElements(
//   <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
//     <Route index element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/projects" element={<Projects />} />
//     <Route path="/resume" element={<Resume />} />
//     <Route path="/contact" element={<Contact />} />
//   </Route>
// );

// const router = createBrowserRouter(routes, { basename });  // Add basename here

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> }
    ]
  }
], { basename });

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;