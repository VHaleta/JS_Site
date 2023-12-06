import "./App.css";
import { BookCard } from "./components/BookCard";
import { Header } from "./components/Header";

const bookList = [
  { isbn: 9780099285823, name: "Experience", author: "Martin Amis" },
  { isbn: 9780099455424, name: "The Rachal Papers", author: "Martin Amis" },
  { isbn: 9780099461883, name: "Money", author: "Martin Amis" },
  { isbn: 9780857209030, name: "Killers of the flower moon", author: "David Grann" },
  { isbn: 9781450026338, name: "The penance walk", author: "John Mannering" },
  { isbn: 9781471183676, name: "The Wager", author: "David Grann" },
  { isbn: 9781648272608, name: "Mushoku Tensei vol 12", author: "Rifujin na Magonote" },
  { isbn: 9781685796365, name: "Mushoku Tensei vol 22", author: "Rifujin na Magonote" },
  { isbn: 9781800812970, name: "I wish I was nere", author: "John Harrison" },
  { isbn: 9781841593623, name: "London fields", author: "Martin Amis" },
];

function App() {
  return (
    <>
      <main>
        <Header/>
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
                  <BookCard>{book}</BookCard>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; Footer content</p>
      </footer>
    </>
  );
}

export default App;
