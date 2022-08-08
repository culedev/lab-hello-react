import "./App.css";
import logo from "./assets/images/ironhack-logo-xs.png";
import menu from "./assets/images/menu-top-xs.png";
import icon1 from "./assets/images/icon1.png";
import icon2 from "./assets/images/icon2.png";
import icon3 from "./assets/images/icon3.png";
import icon4 from "./assets/images/icon4.png";

function App() {
  const nav = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  const header = {
    textAlign: "left",
    color: "white",
    lineHeight: "40px",
    marginTop: "80px",
  };

  const btn = {
    width: "100px",
    height: "50px",
    fontWeight: "bold",
    fontSize: "14px",
    margin: "20px 0",
    borderRadius: "5px solid",
    border: "none",
  };

  const content = {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "left"
  }

  return (
    <div className="App">
      <div
        style={{ backgroundColor: "#1f2535", margin: "20px", padding: "30px" }}
      >
        <div className="navbar" style={nav}>
          <img src={logo} alt="logo" style={{ marginRight: "auto" }} />
          <img
            src={menu}
            alt="menu"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
        <div style={header}>
          <h1 style={{ fontSize: "46px" }}>
            Say hello to <br /> ReactJS
          </h1>
          <p style={{ lineHeight: "20px" }}>
            You will learn how to use <br />
            the most popular frontend library <br />
            and become a super Ninja developer.
          </p>
          <button style={btn}>Awesome!</button>
        </div>
      </div>

      <div style={content}>
        <div>
          <img src={icon1} alt="" />
          <h2>Declarative</h2>
          <p style={{color: "gray"}}>React makes it <br /> painless to create <br />interactive UIs</p>
        </div>
        <div>
          <img src={icon2} alt="" />
          <h2>Components</h2>
          <p style={{color: "gray"}}>Build encapsulated <br /> components that <br />manage their state</p>
        </div>
        <div>
          <img src={icon3} alt="" />
          <h2>Single-Way</h2>
          <p style={{color: "gray"}}>A set of immutable <br />values are passed to <br />the component's</p>
        </div>
        <div>
          <img src={icon4} alt="" />
          <h2>JSX</h2>
          <p style={{color: "gray"}}>Statically-typed <br />designed to run on <br />modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
