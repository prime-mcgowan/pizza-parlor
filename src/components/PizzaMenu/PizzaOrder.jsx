import { useDispatch } from 'react-redux';


function PizzaOrder ({ pizza }) {
    const dispatch = useDispatch();

    const orderDispatch = () => {
        dispatch({
            type: 'SET_ORDER',
            payload: {
                type: pizza.id,
                quantity: 1
            }
            })
    }

    const costDispatch = () => {
        dispatch({
            type: 'ADD_TO_COST', 
            payload: pizza.price
        })
    }

    const handleAdd = () => {
    console.log(pizza.id);
    orderDispatch();
    costDispatch();
    console.log(pizza.price);
    }

    return (
        <>
        <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default PizzaOrder;