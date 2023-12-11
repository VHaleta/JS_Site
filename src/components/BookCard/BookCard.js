import BookPopUp from "../BookPopUp/BookPopUp";
import "./bookCard.css";

const BookCard = ({ children, animation, popup }) => {
  const style = "book" + (animation ? " animation" : "");

  return (
    <div key={children.isbn} className={style}>
      <img src={`../bookcovers/${children.isbn}.jpg`} />
      <h2>{children.name}</h2>
      <h3>{children.author}</h3>
    </div>
  );
};

export default BookCard;
