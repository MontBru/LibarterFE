const TwoThingSelector = ({isThing, setIsThing, notThingText, thingText}) => {
    return ( 
        <ul className=' bg-white flex flex-row justify-around shadow-black shadow-md h-12'>
                <li className='w-full my-3'>
                    <button
                        className='w-full text-customColors-darkBrown'
                        onClick={()=>{setIsThing(false)}}
                    >
                        {notThingText}
                    </button>
                </li>
                <li className='w-full my-3  text-customColors-darkBrown border-l border-solid border-black'>
                    <button
                        className='w-full'
                        onClick={()=>{setIsThing(true)}}
                    >
                        {thingText}
                    </button>
                </li>
            </ul>
     );
}
 
export default TwoThingSelector;