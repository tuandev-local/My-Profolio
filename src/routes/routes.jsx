import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import các component tương ứng với thư mục của bạn
import Contact from '../components/contact/contact';
import Projects from '../components/projects/projects';
import Resume from '../components/resume/resume';
import NotFound from '../components/notFound/notFound';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Trang chủ hoặc route mặc định */}
            <Route path="/" element={<Projects />} />

            {/* Các route chuyển trang */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />

            {/* Route 404 khi không tìm thấy trang */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;