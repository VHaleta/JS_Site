import "./bookPopUp.css";

const BookPopUp = ({ book, onClose }) => {
  return (
    <div id="modal" class="modal bounceIn" onClick={onClose}>
      <div class="modal_content">
        <img src={`../bookcovers/${book.isbn}.jpg`} />
        <div>
          <h1>Book name:</h1>
          <h2>{book.name}</h2>
          <h1>Author:</h1>
          <h2>{book.author}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookPopUp;
