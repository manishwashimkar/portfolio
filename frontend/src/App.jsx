import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import HomePage from "./pages/HomePage";

const App = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </>
);

export default App;

