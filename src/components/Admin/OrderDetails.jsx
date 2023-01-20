
function OrderDetails ({ order }) {
    return (
        <>
        <td> {order.customer_name} </td>
        <td> {order.time} </td>
        <td> {order.type} </td>
        <td> {order.total} </td>
        </>
    )
}

export default OrderDetails;