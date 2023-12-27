const BackgroundWithoutFooter = ({children}) => {
    return ( 
        <main className=' bg-customColors-complementary w-screen h-screen overflow-x-hidden overflow-y-scroll'>
            {children}
        </main>
    );
}
 
export default BackgroundWithoutFooter;