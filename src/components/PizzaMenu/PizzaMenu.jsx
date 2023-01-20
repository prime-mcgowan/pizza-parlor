import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import PizzaItem from './PizzaItem';


function PizzaMenu ( {fetchPizzaMenu} ){

const pizzaMenu = useSelector(store => store.pizzaMenu);

useEffect(() => {
    fetchPizzaMenu()
  }, []) // 👈 don't forget the empty array!

    return(
    <section>
      <h2>All pizzas</h2>
      <ul>
        {pizzaMenu.map((pizza) => {
          return <PizzaItem key={pizza.id} pizza={pizza} fetchPizzaMenu={fetchPizzaMenu} />
        })}
      </ul>
    </section>
    );
}
export default PizzaMenu;