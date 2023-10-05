const Switch = ({isChecked, setIsChecked, label}) => {
    return ( 
        <div className="flex items-center justify-between py-2">
            <label className="mr-2 text-customColors-darkBrown">{label}</label>
            <button
                type="button"
                onClick={()=>{setIsChecked(!isChecked)}}
                className={`relative w-12 h-6 bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
                isChecked ? ' bg-orange-900' : 'bg-gray-400'
                }`}
            >
                <div
                className={`absolute -inset-y-0.5 -left-0.5 bg-customColors-white w-7 h-7 rounded-full shadow-md transform duration-300 ease-in-out ${
                    isChecked ? 'translate-x-6' : ''
                }`}
                />
            </button>
        </div>
     );
}
 
export default Switch;