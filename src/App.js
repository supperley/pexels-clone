import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/search" element={<Search />} exact />
                /* TODO Empty search */
                <Route path="/search/:query" element={<Search />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default App;
