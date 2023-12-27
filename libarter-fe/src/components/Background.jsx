import Footer from "./Footer";

const Background = ({children}) => {
    return ( 
        <main className=' bg-customColors-complementary w-screen h-screen overflow-x-hidden overflow-y-scroll'>
            <div className=" min-h-screen">
                {children}
            </div>
            
            <Footer/>
        </main>
    );
}
 
export default Background;