import { BrowserRouter, Link, Route, Routes } from "react-router";
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

      <Link to="/">Landing</Link>
      <Link to="/cv-editor">Cv Editor</Link>
      <Link to="/created-cvs">Created Cvs</Link>
    </BrowserRouter>
  );
}

export default App;
