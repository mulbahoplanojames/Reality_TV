import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import Criterial from "./Components/Criterials/Criterial";

const App = () => {
  const { darkModeStyle } = useContext(AppContext);
  return (
    <>
      <div style={darkModeStyle}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/criterials" element={<Criterial />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
