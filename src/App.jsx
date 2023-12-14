import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
