const Footer = () => {
    return ( 
        <footer className= "p-10 bg-customColors-primary text-customColors-accent shadow-lg overflow-x-hidden">
            <div className="flex flex-col justify-center items-center">
                <img src="libarterLogo.png" alt="" className=" w-64 border-b pb-4 mb-2 border-customColors-accent"/>
                <p className="text-left p-3">&copy; 2023 Libarter</p>
            </div>
            
        </footer>
    );
}
 
export default Footer;