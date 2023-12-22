import "./slider.css";
import BookCard from "../../components/BookCard/BookCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Slider = ({ bookList }) => {
  const [ beginIndex, setBeginIndex ] = useState(0);
  const { author } = useParams();

  if(author != null)
    bookList = bookList.filter((book) => book.author == author)

  const previousSlide = () => {
    if (beginIndex > 0) setBeginIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (beginIndex < bookList.length - 3) setBeginIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      <div className="page-content" style={{height: '500px'}}>
        <div className="slider">
            {bookList.map((book, index) => {
              const style =
                index >= beginIndex && index < beginIndex + 3
                  ? {}
                  : {
                      display: "none",
                    };
              return (
                <div key={book.isbn} className="item" style={{ ...style }}>
                  <BookCard cart>{book}</BookCard>
                </div>
              );
            })}
          <a className="previous" onClick={previousSlide}>
            &#10094;
          </a>
          <a className="next" onClick={nextSlide}>
            &#10095;
          </a>
        </div>
      </div>
    </>
  );
};

export default Slider;
