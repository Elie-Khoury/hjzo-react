import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home.jsx";
import Search from "./pages/Search/Search.jsx";
import Map from "./pages/Map/Map.jsx";
import Bookings from "./pages/Bookings/Bookings.jsx";
import Account from "./pages/Account/Account.jsx";
import Navbar from "./global-Components/Navbar.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/hjzo-react/" element={<Home />} />
        <Route path="/hjzo-react/search" element={<Search />} />
        <Route path="/hjzo-react/map" element={<Map />} />
        <Route path="/hjzo-react/bookings" element={<Bookings />} />
        <Route path="/hjzo-react/account" element={<Account />} />
      </Routes>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Navbar />
    </>
  )
}

export default App;