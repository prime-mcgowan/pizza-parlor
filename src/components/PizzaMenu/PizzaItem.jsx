import axios from 'axios';

function PizzaItem({ pizza, fetchPizzaMenu}) {

    return(
        <li>
            <h3>{pizza.name}</h3>
            <img src={pizza.image_path}></img>
            <h4>{pizza.description}</h4>
            <h4>{pizza.price}</h4>
        </li>
    )

}
export default PizzaItem;