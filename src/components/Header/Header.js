import "./header.css";

const Header = () => {
  return (
    <header>
      <h1>BookSite</h1>
      <ul className="nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <div className="dropdown">
            <a href="/slider">Slider</a>
            <div className="dropdown-content">
              <a href="#">Slide 1</a>
              <a href="#">Slide 2</a>
              <a href="#">Slide 3</a>
            </div>
          </div>
        </li>
        <li>
          <a href="/form">Form</a>
        </li>
      </ul>
    </header>
  );
}

export default Header