import "./App.css"
import Header from "./components/header/header"
import SideBar from "./components/sidebar/sidebar"
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/routes";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="flex flex-col md:flex-row max-h-screen">
        <SideBar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
