
import Landing from "../components/HomeLanding/Landing";
import ProjectShowcase from "../components/HomeProjectShowcase/ProjectShowcase";
import HomeContact from "../components/HomeContact/HomeContact";

// import "../styles/Header.css"

function Home() {
  return (
    <div className="homePage">
      <Landing />
      <ProjectShowcase/>
      <HomeContact/>
    </div>
  ) 
}

export default Home;