import { CssBaseline } from '@mui/material';
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// ------ Layouts --->>
import RootLayout from "./layouts/RootLayout";

// ------ Pages ----->>
import ErrorPage from "./utils/error-page.jsx";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// ---------------------------------------------------------- //
// --- React Router Dom using Create Routes from Elements --- //
// ---------------------------------------------------------- //

// const routes = createRoutesFromElements(
//   <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
//     <Route index element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/projects" element={<Projects />} />
//     <Route path="/resume" element={<Resume />} />
//     <Route path="/contact" element={<Contact />} />
//   </Route>
// );

// ------------------------------------------ //
// --- React Router Dom using Hash Router --- //
// ------------------------------------------ //
const router = createHashRouter([
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
]);

// -----------------------------------------------------------//
// App Function wrapped in ThemeContect provider
// Utilising React Router and CSSBaseline to reset CSS,
// React Router for Routing 
// -----------------------------------------------------------//
function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
