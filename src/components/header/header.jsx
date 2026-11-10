
function Header() {

    return (
        <>
            <div className="bg-darkmode text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="lg:hidden text-slate-300 hover:text-white focus:outline-none">
                    <button>
                        <i className=" w-6 h-6 fa-solid fa-bars"></i>
                    </button>
                </div>

                <div className="font-bold text-sm md:text-base">
                    <span className="hidden sm:inline text-cyan-400">Nguyễn Công Tuân</span>
                    <span className="hidden sm:inline text-slate-400">| IT Support</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden border border-slate-600">
                    <img src="./src/assets/IMG_0731.JPG" alt="my-avatar" className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    )
}

export default Header