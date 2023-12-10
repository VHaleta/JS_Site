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
              <a href="/slider/Martin Amis">Martin Amis</a>
              <a href="/slider/David Grann">David Grann</a>
              <a href="/slider/John Mannering">John Mannering</a>
              <a href="/slider/John Mannering">Rifujin na Magonote</a>
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