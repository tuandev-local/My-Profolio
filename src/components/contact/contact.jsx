function contact() {
    return (
        <div className="w-full min-h-screen bg-[#0B132B] flex items-center justify-center p-6">
            <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full flex flex-col items-center text-center">


                <h3 className="text-xl font-bold text-gray-800 mb-2">Zalo Name Card</h3>
                <p className="text-gray-500 text-sm mb-4">Quét mã QR để kết nối trực tiếp</p>


                <div className="w-full flex justify-center">
                    <img
                        src="./src/assets/IMG_0818.JPG"
                        alt="Zalo QR"
                        className="rounded-xl w-64 h-64 object-cover border border-gray-200 shadow-inner"
                    />
                </div>

            </div>
        </div>
    )
}

export default contact