const Background = ({children}) => {
    return ( 
        <main className='bg-customColors-white w-screen h-screen overflow-y-scroll'>
            {children}
        </main>
     );
}
 
export default Background;