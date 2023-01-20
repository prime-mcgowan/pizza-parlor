import PizzaOrder from './PizzaOrder.jsx';

function PizzaItem({ pizza }) {
    return(
        <li>
            <h3>{pizza.name}</h3>
            <img src={pizza.image_path}></img>
            <h4>{pizza.description}</h4>
            <h4>{pizza.price}</h4>
            <PizzaOrder pizza={pizza}/>
        </li>
    )

}
export default PizzaItem;