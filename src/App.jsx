import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  Education,
  SocialMedia
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <div className="w-full bg-primary z-0 relative ">
          <div className="fixed h-full flex items-center ml-[10%] z-50 max-xl:items-end max-xl:ml-[5%] max-xl:bottom-20 max-lg:bottom-5">
            <SocialMedia />
          </div>
          <Navbar />
          <div
            className="w-full min-h-screen flex flex-col justify-center items-center mx-auto "
          >
            <Hero />
            <About />
            <Education />
            <Works />
            <Experience />
            <Contact />
          </div>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
