import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SearchAHouse from './pages/SearchAHouse';
import ShowAHouse from './pages/ShowAHouse';
import BookAView from './pages/BookAView';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Hello from our frontend</h1>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
        <Route path="/" element={<SearchAHouse />} />
        <Route path="/showahouse" element={<ShowAHouse />} />
        <Route path="/bookaview" element={<BookAView />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
