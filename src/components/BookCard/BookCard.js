import './bookCard.css'

const BookCard = ({ children }) => {
  return (
    <div key={children.isbn} className="book">
      <img src={`../bookcovers/${children.isbn}.jpg`} />
      <h2>{children.name}</h2>
      <h3>{children.author}</h3>
    </div>
  );
}

export default BookCard