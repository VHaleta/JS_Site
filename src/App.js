import './App.css';

function App() {
  return (
    <>
        <div className="main">
      <h1>BookSite</h1>
      <ul className="nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">Slider</a></li>
        <li><a href="work.html">Form</a></li>
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
          <div className="book">
            <img src="./bookcovers/9780099285823.jpg" />
            <h2>Book Name</h2>
            <h3>Author</h3>
          </div>
          <div className="book">
            <img src="./bookcovers/9780099455424.jpg" />
            <h2>Book Name</h2>
            <h3>Author</h3>
          </div>
          <div className="book">
            <img src="./bookcovers/9780099461883.jpg" />
            <h2>Book Name</h2>
            <h3>Author</h3>
          </div>
          <div className="book">
            <img src="./bookcovers/9780857209030.jpg" />
            <h2>Book Name</h2>
            <h3>Author</h3>
          </div>
          <div className="book">
            <img src="./bookcovers/9781450026338.jpg" />
            <h2>Book Name</h2>
            <h3>Author</h3>
          </div>
          <div className="book">
            <img src="./bookcovers/9781471183676.jpg" />
            <h2>Book Name</h2>
            <h3>Author</h3>
          </div>
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
