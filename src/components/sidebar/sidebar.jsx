import { Link } from 'react-router-dom';
function SideBar() {

    return (
        <div className="hidden bg-darkmode text-white w-64 min-h-screen md:flex flex-col items-center gap-20 py-10">
            <Link to="/" className="flex gap-2 cursor-pointer">
                <i className="fa-solid fa-folder"></i>
                <span className="text-slate-400">PROJECTS</span>
            </Link>

            <Link to="/contact" className="flex gap-2 cursor-pointer">
                <i className="fa-solid fa-envelope"></i>
                <span className="text-slate-400">CONTACT</span>
            </Link>
        </div>
    )
}

export default SideBar