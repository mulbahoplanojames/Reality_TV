import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import Criterial from "./Pages/Criterials/Criterial";
import MusicCriterials from "./Pages/More_Criterials/Music_Award/MusicAward";

const App = () => {
  const { darkModeStyle } = useContext(AppContext);
  return (
    <>
      <div style={darkModeStyle}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* // Criterials Pages */}
            <Route path="/criterials" element={<Criterial />} />
            <Route
              path="/criterials/muscial-awards"
              element={<MusicCriterials />}
            />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
