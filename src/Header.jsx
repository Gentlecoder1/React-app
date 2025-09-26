import logo from './assets/logo.jpg'

const Header = () => {
    return(
        <>
            <header className="head bg-amber-700 px-10 py-5 flex justify-between items-center">
                <h1 className="text-4xl font-bold" style={{fontFamily: 'UnifrakturCook, cursive'}}>WELCOME TO OUR CAFE</h1>
                <div><img className='w-20 h-20 rounded-[50%]' src={logo} alt="Brand Logo" /></div>
            </header>
            <hr />
        </>
    );
}
export default Header
 