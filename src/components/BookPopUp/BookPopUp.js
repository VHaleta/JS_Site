import Button from "../CartButton/Button";
import "./bookPopUp.css";

const BookPopUp = ({ book, onClose }) => {
  return (
    <div id="modal" className="modal" onClick={onClose}>
      <div className="modal_content">
        <img src={`../bookcovers/${book.isbn}.jpg`} />
        <div>
          <h1>Book name:</h1>
          <h2>{book.name}</h2>
          <h1>Author:</h1>
          <h2>{book.author}</h2>
          <h1>Price: {book.price}$</h1>
          <div className="cart-button">
            <Button book={book}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPopUp;
