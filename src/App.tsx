import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import CvEditorPage from "./pages/CvEditorPage";
import CreatedCvsPage from "./pages/CreatedCvsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cv-editor" element={<CvEditorPage />} />
        <Route path="/created-cvs" element={<CreatedCvsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
