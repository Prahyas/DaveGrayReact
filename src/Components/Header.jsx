import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[10vh]">
      <h1 className="text-3xl">Groceries Note APP</h1>
      <div className="flex gap-3">
        <Link to="about">Click to view our about page</Link>
        <Link to="contact">Click to view our contact page</Link>
      </div>
    </header>
  );
};

export default Header;
