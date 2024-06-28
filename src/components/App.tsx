import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage';
import TeachersPage from 'pages/TeachersPage';
import FavoritePage from 'pages/FavoritePage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/teachers" element={<TeachersPage />} />
                <Route path="/favorite" element={<FavoritePage />} />
            </Route>
        </Routes>
    );
};

export default App;
