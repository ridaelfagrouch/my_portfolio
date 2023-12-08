import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { About, Contact, Experience, Hero, Navbar, Works } from "./components";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <div className="w-screen h-screen bg-primary z-0 relative">
          <SocialMedia />
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Navbar />
            <Hero />
          </div>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
