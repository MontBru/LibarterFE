const Tag = ({ text, onDelete, removable }) => {
    return (
      <div className="inline-block border border-solid bg-white border-customColors-darkBrown rounded-md px-2 py-1 text-customColors-darkBrown mr-2 mb-2">
        <span>#{text}</span>
        
        {
            removable == true?
            onDelete && (
            <button 
                type="button"
                className="ml-2 text-xl text-red-500 font-bold" 
                onClick={onDelete}
            >
                &times;
            </button>
            ):
            null
        }
        
        
      </div>
    );
  };
 
export default Tag;