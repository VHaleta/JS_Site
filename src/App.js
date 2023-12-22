import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./routes/Home/Home";
import Slider from "./routes/Slider/SliderPage";
import FormPage from "./routes/Form/FormPage";
import CartPage from "./routes/CartPage/CartPage";

const bookList = [
  { isbn: 9780099285823, name: "Experience", author: "Martin Amis", price: 20 },
  {
    isbn: 9780099455424,
    name: "The Rachal Papers",
    author: "Martin Amis",
    price: 30,
  },
  { isbn: 9780099461883, name: "Money", author: "Martin Amis", price: 24 },
  {
    isbn: 9780857209030,
    name: "Killers of the flower moon",
    author: "David Grann",
    price: 12,
  },
  {
    isbn: 9781450026338,
    name: "The penance walk",
    author: "John Mannering",
    price: 43,
  },
  { isbn: 9781471183676, name: "The Wager", author: "David Grann", price: 23 },
  {
    isbn: 9781648272608,
    name: "Mushoku Tensei vol 12",
    author: "Rifujin na Magonote",
    price: 21,
  },
  {
    isbn: 9781685796365,
    name: "Mushoku Tensei vol 22",
    author: "Rifujin na Magonote",
    price: 17,
  },
  {
    isbn: 9781800812970,
    name: "I wish I was nere",
    author: "John Harrison",
    price: 19,
  },
  {
    isbn: 9781841593623,
    name: "London fields",
    author: "Martin Amis",
    price: 30,
  },
];

function App() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home bookList={bookList} />} />
          <Route
            path="/slider/:author"
            element={<Slider bookList={bookList} />}
          />
          <Route path="/slider" element={<Slider bookList={bookList} />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/cart" element={<CartPage />}/>
        </Routes>
      </main>
      <footer>
        <p>&copy; Footer content</p>
      </footer>
    </>
  );
}

export default App;
