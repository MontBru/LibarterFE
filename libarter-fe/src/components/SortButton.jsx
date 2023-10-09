import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Popup from "./Popup";

const SortButton = ({priceRange, setPriceRange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [priceRangeTmp, setPriceRangeTmp] = useState(priceRange)
    return ( 
        <div>
            <button type="button" 
            onClick={()=>{setIsOpen(true)}}
            className='inline-flex items-center justify-center w-full px-4 h-full text-lg text-customColors-darkBrown'>
                <FontAwesomeIcon icon = {faFilter} className='flex justify-center text-customColors-darkBrown'/>
            </button>
            <Popup 
            isOpen={isOpen} 
            onClose={()=>{
                setIsOpen(false)
                setPriceRange(priceRangeTmp)
            }}
            priceRange={priceRangeTmp}
            setPriceRange={setPriceRangeTmp}
            />
        </div>
     );
}
 
export default SortButton;