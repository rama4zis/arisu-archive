import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CharacterPage from '../pages/CharacterPage';

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/student" element={<CharacterPage />} />
            </Routes>
        </Router>
    )
}

export default Root;