import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  SocialMedia
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <div className="w-full bg-primary z-0 relative ">
          <div className="fixed h-full flex  ml-[20%] z-50 items-end max-2xl:ml-[5%] bottom-5">
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
            <Contact />
          </div>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
