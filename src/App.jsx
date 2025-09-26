import { useState } from "react";

import Header from "./Header.jsx";
import Food from "./Food.jsx";
import Footer from "./Footer.jsx";
import Order from "./Order.jsx";


const App = () => {

  const [showOrder, setShowOrder] = useState(false)

  return(
    <>
      <Header/>
      <Food onOrderClick={() => setShowOrder(true)} />
      <Footer />
      <Order visible={showOrder} onClose={() => setShowOrder(false)} />
    </>
  );
}

export default App