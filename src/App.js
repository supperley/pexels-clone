import { useDispatch } from 'react-redux';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Search from './pages/Search/Search';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { initLikes } from './store/photosSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initLikes());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/search" element={<Search />} exact />
            <Route path="/search/:query" element={<Search />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
