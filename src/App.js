import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
        <div className="max-w-screen-2xl mx-auto px-16">
          {/* React Router Dom => Implement here */}
          <Navbar />
          <Banner />
          <Features />
          <Projects />
          <Resume />
        {/* React Router Dom */}
        </div>
    </div>
  );
}

export default App;
