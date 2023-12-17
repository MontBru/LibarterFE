const TwoThingSelector = ({isThing, setIsThing, notThingText, thingText}) => {
    const liStyling = "font-bold w-28 h-28 rounded-full my-3 flex justify-center border-2 border-customColors-primary";
    const ifIsLsStyling = "text-white bg-customColors-primary";
    const ifIsnotLsStyling = "bg-customColors-accent text-customColors-primary";

    const dotStyling = "rounded-full w-2 h-2 bg-customColors-primary";
    return ( 
        <ul className='  flex flex-row justify-around items-center'>
            <li className={dotStyling}/>
            <li className={`${!isThing? ifIsLsStyling: ifIsnotLsStyling} ${liStyling} `}>
                <button
                    type='button'
                    className='w-full'
                    onClick={()=>{setIsThing(false)}}
                >
                    {notThingText}
                </button>
            </li>
            <li className={dotStyling}/>
            <li className={dotStyling}/>
            <li className={dotStyling}/>
            <li className={`${isThing ? ifIsLsStyling: ifIsnotLsStyling} ${liStyling} `}>
                <button
                    type='button'
                    className='w-full'
                    onClick={()=>{setIsThing(true)}}
                >
                    {thingText}
                </button>
            </li>
            <li className={dotStyling}/>
        </ul>
     );
}
 
export default TwoThingSelector;