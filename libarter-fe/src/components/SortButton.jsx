import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FilterPopup from "./FilterPopup";

const SortButton = ({priceRange, setPriceRange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [priceRangeTmp, setPriceRangeTmp] = useState(priceRange)
    return ( 
        <div>
            <button type="button" 
            onClick={()=>{setIsOpen(true)}}
            className='inline-flex items-center justify-center w-full px-4 h-full text-lg rounded-full text-customColors-accent hover:text-customColors-complementary hover:bg-customColors-form_bg'>
                <FontAwesomeIcon icon = {faFilter} className='flex justify-center '/>
            </button>

            {
                isOpen &&
                <FilterPopup
                onClose={()=>{
                    setIsOpen(false)
                    setPriceRange(priceRangeTmp)
                }}
                priceRange={priceRangeTmp}
                setPriceRange={setPriceRangeTmp}
                />
            }
        </div>
     );
}
 
export default SortButton;