import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works} from "./components";
import { ConfigProvider } from 'antd'

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider >
        <div className="w-screen h-screen bg-primary z-0 ">
          <Navbar />
          <Hero />
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App
