import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  SocialMedia,
  Services
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <div className="w-full dark:bg-primary z-0 relative ">
          <div className="fixed h-full flex  ml-[12%] z-50 items-end max-2xl:ml-[5%] bottom-5 ">
            <SocialMedia />
          </div>
          <Navbar />
          <div
            className="w-full min-h-screen flex flex-col justify-center items-center mx-auto "
          >
            <Hero />
            <About />
            <Experience />
            <Works />
            <Services/>
            <Contact />
          </div>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
