import './styles/style.scss';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Header from "./global/Header";
import ScrollToTop from "./utilities/scrollToTop.js"



function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <div className="page">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<ProjectDetail />} />
        </Routes>
      </div>
       <footer className="App-footer">
          FOOTER
      </footer>
    </div>
  );
}

export default App;
