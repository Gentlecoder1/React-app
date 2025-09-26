

const Order = ({ visible, onClose }) => {

    if (!visible) return null;

    const style = "order top-0 flex fixed w-[100vw] h-[100vh] flex-col items-center justify-center"

    const order = visible ? style : "hidden"

    return(
        <div className={order}>
            <div className="overlay w-[100vw] h-[100vh] opacity-80 absolute bg-black"></div>
            
            <div className="z-10 bg-amber-600 md:max-w-fit max-w-[400px] absolute p-6 border-2 rounded-2xl flex flex-col items-center">
                <p className="text-xl font-semibold text-center mb-3">🎉Hurray!! You just placed an order</p>

                <h2 className="text-2xl font-bold text-center mb-3">Your Order is being served at the moment...</h2>

                <p className="text-lg font-semibold">Please wait</p>

                <button onClick={onClose} className='bg-[#8a8aeb] border-2 mt-10 px-2 py-3 rounded-xl hover:cursor-pointer hover:bg-green-600 shadow-[5px_5px_5px] shadow-gray-700'>🎂 Place anOTHER</button>
            </div>
        </div>
    ); 
}

export default Order