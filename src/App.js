import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/search" element={<Search />} exact />
                <Route path="/search/:query" element={<Search />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
