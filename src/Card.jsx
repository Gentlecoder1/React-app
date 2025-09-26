

const Card = (props) => {

    const displayModal = () => {
        if (props.onOrderClick) {
            props.onOrderClick();
        }
    }

    return(
        <div className="mx-auto lg:w-[300px] md:w-[250px] w-[400px] bg-white border-2 border-gray-800 rounded-2xl flex flex-col items-center shadow-[5px_5px_5px] shadow-gray-700">
            <img src={props.image} className='rounded-t-2xl w-full h-50' alt="FoodPic" />
            <div className='p-2 flex space-x-5 py-3'>
                <h1 className="text-xl font-bold">{props.name}</h1>
                <button onClick={displayModal} className='bg-[#8a8aeb] px-2 rounded-xl hover:cursor-pointer hover:bg-amber-600 shadow-[5px_5px_5px] shadow-gray-700'>Place an order</button>
            </div>
        </div>
    );
}

export default Card