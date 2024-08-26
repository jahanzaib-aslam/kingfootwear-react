export default function AccountOrders({ orders }) {
  return (
    <div className="col-lg-9">
      <div className="page-content my-account__orders-list">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>#{order.id}</td>
                <td>{order.created_at}</td>
                <td>{order.status}</td>
                <td>Rs. {order.total_amount}</td>
                <td>
                  <button className="btn btn-primary">VIEW</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
