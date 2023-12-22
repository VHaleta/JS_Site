import "./button.css";

const Button = ({ book, text = "Add to cart", newClick }) => {
  const updateStorage = () => {
    const storage = localStorage.getItem("cart");
    if (storage == null)
      localStorage.setItem("cart", JSON.stringify({ cart: [book] }));
    else {
      const cart = JSON.parse(storage).cart;
      cart.push(book);
      localStorage.setItem("cart", JSON.stringify({ cart: [...cart] }));
    }
  };

  const onClick = () => {
    if (newClick != undefined) newClick();
    else updateStorage();
  };

  return (
    <div className="button-container">
      <button onClick={onClick}>
        <p>{text}</p>
      </button>
    </div>
  );
};

export default Button;
