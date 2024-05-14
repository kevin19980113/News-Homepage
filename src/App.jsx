import MainLayout from "./components/MainLayout.jsx";
import Navbar from "./components/Navbar";
import { navbarListItems } from "./data/navbarListItems.js";

function App() {
  return (
    <>
      <Navbar navbarListItems={navbarListItems} />
      <MainLayout />
    </>
  );
}

export default App;
