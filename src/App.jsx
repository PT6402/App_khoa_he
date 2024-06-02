import { Route, Routes } from "react-router-dom";
import HomePage from "./components/page/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:type" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
