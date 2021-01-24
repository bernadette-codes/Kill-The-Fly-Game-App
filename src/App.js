import React from "react";
import Nav from "./components/Context/Nav/nav";
import MainContent from "./components/MainContent/mainContent";
import Fail from "./components/Figures/Fail/fail";
import Footer from "./components/Context/Footer/footer";

const App = () => (
  <div>
    <Nav />
    <MainContent />
    <Fail />
    <Footer />
  </div>
);

export default App;
