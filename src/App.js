import "./App.css";
import { BookCard } from "./components/BookCard";

const bookList = [
  { isbn: 9780099285823, name: "BookName", author: "Author" },
  { isbn: 9780099455424, name: "BookName", author: "Author" },
  { isbn: 9780099461883, name: "BookName", author: "Author" },
  { isbn: 9780857209030, name: "BookName", author: "Author" },
  { isbn: 9781450026338, name: "BookName", author: "Author" },
  { isbn: 9781471183676, name: "BookName", author: "Author" },
  { isbn: 9781648272608, name: "BookName", author: "Author" },
  { isbn: 9781685796365, name: "BookName", author: "Author" },
  { isbn: 9781800812970, name: "BookName", author: "Author" },
  { isbn: 9781841593623, name: "BookName", author: "Author" },
];

function App() {
  return (
    <>
      <div className="main">
        <h1>BookSite</h1>
        <ul className="nav">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">Slider</a>
          </li>
          <li>
            <a href="work.html">Form</a>
          </li>
        </ul>
        <div className="page-content">
          <div className="side-bar">
            <div className="side-bar-content">
              <img src="./bookcovers/9781841593623.jpg" />
            </div>
            <div className="side-bar-content">
              <img src="./bookcovers/9781800812970.jpg" />
            </div>
          </div>
          <div className="content-books">
            {bookList.slice(0, 6).map((book) => (
              <div key={book.isbn} className="book">
                <img src={`./bookcovers/${book.isbn}.jpg`} />
                <h2>{book.name}</h2>
                <h3>{book.author}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; Footer content</p>
      </div>
    </>
  );
}

export default App;
