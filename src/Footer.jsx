const Footer = () => {

    return(
        
        <> 
            <hr />
            <footer className="foot bg-amber-700 md:p-10 px-5 py-7 flex justify-center md:gap-24 gap-12 ">
                <div className="">
                    <p className="md:text-xl text-md">Follow us on our social platform</p>
                    <ul className="flex gap-4">
                        <li className="font-bold hover hover:text-blue-900"><a href="#"><b><i>F</i></b> facebook</a></li>
                        <li className="font-bold hover hover:text-blue-900"><a href="#"><b><i>x</i></b> twitter</a></li>
                        <li className="font-bold hover hover:text-blue-900"><a href="#"><b><i>I</i></b> Instagram</a></li>
                    </ul>
                </div>
                <p>&copy; {new Date().getFullYear()} copyright</p>
            </footer>
        </>
    );
}
export default Footer