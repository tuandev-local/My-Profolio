import React, { useState } from 'react';

// Dữ liệu mẫu cho các dự án với các ảnh hard-code sẵn theo từng category
const projectCategories = [
    {
        id: 'm365',
        title: 'M365 Administrators',
        description: 'Entra ID / Admin Center / Exchange Admin / Sharepoint Admin',
        images: [
            { url: 'src/assets/entraID-overview.png', caption: 'Tenant Overview - EntraID' },
            { url: 'src/assets/License-Audit.png', caption: 'License Review - Admin center' },
            { url: 'src/assets/admin-center-health.png', caption: 'Service Health - Admin center' }
        ]
    },
    {
        id: 'voip',
        title: 'VoIP System Management',
        description: 'Analog & IP Phone / SIP / Voicegateway',
        images: [
            { url: 'src/assets/VoiceCloud-Mgmt.png', caption: 'Voice System overview' },
            { url: 'src/assets/SIP-mgmt.png', caption: 'SIP configuration' },
            { url: 'src/assets/IVR-setup.png', caption: 'Announcement & IVR' }
        ]
    },
    {
        id: 'it-operations',
        title: 'IT Operations',
        description: 'Ticket / Asset Management / SLA - Jira',
        images: [
            { url: 'src/assets/SLA-Goal.png', caption: 'Jira Service Desk SLA Dashboard' },
            { url: 'src/assets/Asset-Jira.png', caption: 'IT Asset Management Inventory' }
        ]
    },
    {
        id: 'monitoring',
        title: 'System Monitoring',
        description: 'Zabbix / Grafana',
        images: [
            { url: 'src/assets/zabbix-monitoring.png', caption: 'Zabbix Monitoring' }
        ]
    }
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedProject(null);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    return (
        <div className="min-h-screen w-full bg-slate-900 text-slate-100 p-4 sm:p-6 md:p-8 overflow-x-hidden">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-10">
                <h1 className="text-4xl font-bold tracking-tight mb-2">Projects</h1>
                <p className="text-slate-400 text-sm">
                    IT Service Desk • M365 • Network • VoIP • System Monitoring
                </p>
            </div>

            {/* Grid Danh mục dự án */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectCategories.map((proj) => (
                    <div
                        key={proj.id}
                        className="bg-white text-slate-900 rounded-xl p-6 shadow-lg flex flex-col justify-between transition-transform hover:-translate-y-1"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                            <p className="text-slate-600 text-sm mb-6">{proj.description}</p>
                        </div>
                        <button
                            onClick={() => openGallery(proj)}
                            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm w-fit"
                        >
                            View Gallery
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal Lightbox Xem Ảnh */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full p-6 relative flex flex-col items-center">

                        {/* Nút đóng modal */}
                        <button
                            onClick={closeGallery}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl font-bold"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-semibold mb-4 text-slate-200">
                            {selectedProject.title} ({currentImageIndex + 1} / {selectedProject.images.length})
                        </h2>

                        {/* Khung hiển thị ảnh chính */}
                        <div className="relative w-full h-100 bg-black rounded-lg overflow-hidden flex items-center justify-center mb-4">
                            <img
                                src={selectedProject.images[currentImageIndex].url}
                                alt="Project preview"
                                className="max-h-full max-w-full object-contain"
                            />

                            {/* Nút chuyển ảnh Left */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
                            >
                                &#10094;
                            </button>

                            {/* Nút chuyển ảnh Right */}
                            <button
                                onClick={nextImage}
                                className="absolute right-4 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors"
                            >
                                &#10095;
                            </button>
                        </div>

                        {/* Chú thích ảnh */}
                        <p className="text-slate-300 text-sm font-medium">
                            {selectedProject.images[currentImageIndex].caption}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}