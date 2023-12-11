import { useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import "./home.css";
import BookPopUp from "../../components/BookPopUp/BookPopUp";

const Home = ({ bookList }) => {
  const [popupState, setPopupState] = useState({
    isVisiable: false,
    book: null,
  });

  const popupShow = (book) => {
    setPopupState({ isVisiable: true, book: book });
  };

  const popupHide = () => {
    setPopupState({ isVisiable: false, book: null });
  };

  return (
    <>
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
            <div onClick={() => popupShow(book)}>
              <BookCard animation={true}>{book}</BookCard>
            </div>
          ))}
        </div>
        {popupState.isVisiable && <BookPopUp book={popupState.book} onClose={popupHide}/>}
      </div>
    </>
  );
};

export default Home;
