import './styles/style.scss';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Header from "./global/Header";



function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<ProjectDetail />} />
       </Routes>
       <footer className="App-footer">
        FOOTER
      </footer>
    </div>
  );
}

export default App;
