import { useState } from "react";
import "./cartPage.css";
import Button from "../../components/CartButton/Button";

const CartPage = () => {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("cart")?? '{\"cart\": []}').cart);
  let total = [];
  if (books.length > 0) {
    total = books.reduce((sum, val) => sum + val.price, 0);
  }
  const removeBook = (index) => {
    const copy = [...books];
    copy.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify({ cart: [...copy] }));
    setBooks(copy);
  };
  if (books.length > 0) {
    return (
      <div className="page-content" style={{ display: "block" }}>
        <h1 style={{ width: "100%" }}>Your cart</h1>
        <table>
          <tr>
            <th>Book name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
          {books.map((book, index) => {
            return (
              <tr>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.price}$</td>
                <td className="delete-button" onClick={() => removeBook(index)}>
                  X
                </td>
              </tr>
            );
          })}
        </table>
        <h2 style={{ marginLeft: "400px", marginTop: "30px" }}>
          Total: {total}
        </h2>
        <div className="order-button">
          <Button text="Order" newClick={() => {}}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="page-content" style={{ display: "block" }}>
        <h1 style={{ width: "100%", paddingBottom: '30px' }}>Your cart is empty</h1>
      </div>
    );
  }
};

export default CartPage;
