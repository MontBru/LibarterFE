import { useState } from "react";
import languageStore from '../zustand/languageStore';

const TagAdd = ({tags, setTags}) => {
  const [tagInput, setTagInput] = useState('');
  const {language, setLanguage} = languageStore();
  let text = language === "EN"?["Add a tag"]:["Добави таг"];

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== '' && tags.length<10) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };
    return ( 
        <div className="flex items-center py-3">
            <input
            type="text"
            placeholder={text[0]}
            className="w-full h-11 border-2 border-gray-300 text-customColors-secondary focus:border-customColors-accent focus:outline-none rounded-md rounded-r-none px-3"
            value={tagInput}
            onChange={handleTagInputChange}
            />
            <button
            onClick={handleAddTag}
            className="w-11 h-11 bg-customColors-secondary text-white rounded-r-md font-bold text-2xl"
            type='button'
            >
            +
            </button>
        </div>
     );
}
 
export default TagAdd;
