import { useDispatch } from 'react-redux'

function PizzaOrder ({ pizza }) {
    const dispatch = useDispatch();

    const handleAdd = () =>
    console.log('adding 1', pizza.id);
    dispatch({
        type: 'SET_ORDER',
        payload: {
            type: pizza.id,
            quantity: 1
            }
        })


    return (
        <>
        <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default PizzaOrder;