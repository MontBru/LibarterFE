const Popup = ({children, onClose}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            <div className="bg-white rounded-md m-2 p-7 pt-0 z-50">
                <div className='w-full flex justify-end'>
                    <button
                        className="font-bold p-2 text-2xl text-gray-700 hover:text-gray-900"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>

                {children}

            </div>
        </div>
    );
}

export default Popup;