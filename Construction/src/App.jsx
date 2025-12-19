import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './Components/Navbar'
import NavigationLoader from './Components/NavigationLoader' // Re-added NavigationLoader
// import Preloader from './Pages/Preloader' // Commented out local preloader usage here if not needed
import Landingpage from './Pages/Landingpage';
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Units from './Components/Units'
import Menu from './Components/Menu'
import About from './Pages/About' // Import About component
import Amenities from './Pages/Amenities' // Import Amenities component
import Lifestyle from './Pages/Lifestyle' // Import Lifestyle component
import Layout from './Pages/Layout' // Import Layout component
import BuildingList from './Pages/BuildingList' // Import BuildingList
import Surroundings from './Pages/Surroundings' // Import Surroundings
import BuildingDetail from './Pages/BuildingDetail'; // Import BuildingDetail

import ScrollToTop from './Components/ScrollToTop'; // Import ScrollToTop

function App() {

  return (
    <>
      <ScrollToTop />
      <NavigationLoader />
      {/* <Preloader /> */}
      <Routes>
        {/* LANDING PAGE: Navbar + Experience (No Footer) */}
        <Route path="/" element={
          <>
            <Navbar />
            <Landingpage />
          </>
        } />

        {/* CONTENT PAGES: Main Layout (Navbar + Footer) */}
        <Route element={<Layout />}>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Units" element={<Units />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/buildings" element={<BuildingList />} />
          <Route path="/building/:id" element={<BuildingDetail />} />
          <Route path="/surroundings" element={<Surroundings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
