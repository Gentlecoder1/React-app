import Card from './Card.jsx'
import Foodimg from './assets/image-baklava-desktop.jpg'
import Foodimg2 from './assets/image-cake-desktop.jpg'
import Foodimg3 from './assets/image-brownie-desktop.jpg'
import Foodimg4 from './assets/image-creme-brulee-desktop.jpg'
import Foodimg5 from './assets/image-macaron-desktop.jpg'
import Foodimg6 from './assets/image-meringue-desktop.jpg'
import Foodimg7 from './assets/image-panna-cotta-desktop.jpg'
import Foodimg8 from './assets/image-tiramisu-desktop.jpg'
import Foodimg9 from './assets/image-waffle-desktop.jpg'

const Food = ({ onOrderClick }) => {

    return(
        <div className="hero bg-[#8a8aeb] border-2 rounded-2xl m-10 h-auto md:p-14 p-10 justify-center items-center">
            <h2 className="text-2xl font-bold mb-3">Food we serve</h2>
            <div className='md:p-4 p-2 flex md:gap-7 gap-5 flex-wrap'>
                <Card name="Baklava" image={Foodimg} onOrderClick={onOrderClick}/>
                <Card name="Cake" image={Foodimg2} onOrderClick={onOrderClick}/>
                <Card name="Brownie" image={Foodimg3} onOrderClick={onOrderClick}/>
                <Card name="Creme-brulee" image={Foodimg4} onOrderClick={onOrderClick}/>
                <Card name="Macaron" image={Foodimg5} onOrderClick={onOrderClick}/>
                <Card name="Meringue" image={Foodimg6} onOrderClick={onOrderClick}/>
                <Card name="Panna-cotta" image={Foodimg7} onOrderClick={onOrderClick}/>
                <Card name="Tiramisu" image={Foodimg8} onOrderClick={onOrderClick}/>
                <Card name="Waffle" image={Foodimg9} onOrderClick={onOrderClick}/>
                
            </div>
        </div>
    );
}

export default Food


