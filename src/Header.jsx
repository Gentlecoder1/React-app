import logo from './assets/logo.jpg'

const Header = () => {
    return(
        <>
            <header className="head bg-amber-700 md:px-10 px-6 py-5 flex justify-between items-center">
                <h1 className="md:text-4xl text-2xl text-center font-bold" style={{fontFamily: 'UnifrakturCook, cursive'}}>WELCOME TO OUR CAFE</h1>
                <div><img className='w-20 h-20 rounded-[50%]' src={logo} alt="Brand Logo" /></div>
            </header>
            <hr />
        </>
    );
}
export default Header
 