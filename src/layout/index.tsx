import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import ModalUI from "../components/modal";




const Layout = () => {
  return (
    <div>
        <header>
            <nav className="border-b-[1px] border-b-[rgba(67,67,67,0.1)] dark:border-b-[rgba(255,255,255,0.10)]">
              <Navbar/>
            </nav>
        </header>

        <main>
          <ModalUI/>
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout;
