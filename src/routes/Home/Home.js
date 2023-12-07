import BookCard from '../../components/BookCard/BookCard'
import './home.css'

const Home = ({bookList}) => {
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
            <BookCard>{book}</BookCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home