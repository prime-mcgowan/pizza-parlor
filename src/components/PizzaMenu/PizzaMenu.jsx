import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'


function PizzaMenu ( {fetchPizzaMenu} ){

const pizzaList = useSelector(store => store.pizzaList);

useEffect(() => {
    fetchPizzaMenu();
  }, []) // 👈 don't forget the empty array!

    return(
    <section>
      <h2>All pizzas</h2>
    </section>
    )
}
export default PizzaMenu