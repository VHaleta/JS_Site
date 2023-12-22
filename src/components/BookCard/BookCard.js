import "./bookCard.css";
import Button from "../CartButton/Button";

const BookCard = ({ children, animation, cart = false }) => {
  const style = "book" + (animation ? " animation" : "");
  return (
    <div key={children.isbn} className={style}>
      <img src={`../bookcovers/${children.isbn}.jpg`} />
      <h2>{children.name}</h2>
      <h3>{children.author}</h3>
      <h3>Price: {children.price}$</h3>
      {cart && ( <Button book={children}/>)}
    </div>
  );
};

export default BookCard;
