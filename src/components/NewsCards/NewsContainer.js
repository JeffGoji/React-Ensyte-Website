// src/components/NewsContainer.js
import { Route, Routes } from 'react-router-dom';
import NewsStand from './NewsStand'; // Your existing NewsStand component

function NewsContainer() {
    return (
        <Routes>
            <Route path="/news/:pageNumber" element={<NewsStand />} />
            <Route path="/news" element={<NewsStand />} /> {/* Default to page 1 */}
        </Routes>
    );
}

export default NewsContainer;
