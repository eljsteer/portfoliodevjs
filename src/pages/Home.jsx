
import Landing from "../components/AppAndHomePage/Landing";
import ProjectShowcase from "../components/ProjectShowcase";
import LandingContact from "../components/landingContact";

// import "../styles/Header.css"

function Home() {
  return (
    <div className="homePage">
      <Landing />
      <ProjectShowcase/>
      <LandingContact/>
    </div>
  ) 
}

export default Home;