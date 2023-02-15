import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Lounge from "./components/Lounge/Lounge";
import Search from "./components/Search/Search";
import Support from "./components/Support/Support";
import Traveler from "./components/Traveler/Traveler";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Traveler/>
      <Footer/>
    </div>
  );
}

export default App;
