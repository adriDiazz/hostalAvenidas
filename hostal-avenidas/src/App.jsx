import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { IconContext } from "react-icons";
import ReservationPage from "./pages/ReservationPage";

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservation" element={<ReservationPage />} />
          </Routes>
        </BrowserRouter>
      </IconContext.Provider>
    </div>
  );
}

export default App;
