
import Landing from "../components/AppAndHomePage/Landing";
import ProjectShowcase from "../components/ProjectShowcase";

// import "../styles/Header.css"

function Home() {
  return (
    <div className="homePage">
      <Landing />
      <ProjectShowcase/>
    </div>
  ) 
}

export default Home;