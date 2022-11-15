import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Widget from "./components/Widget";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "./components/Admin";

function App() {
  const [movie, setMovie] = React.useState("");
  const [book, setBook] = React.useState("");
  const [surprise, setSurprise] = React.useState("");

  async function getAndSetRecc(event) {
    console.log(`${event.target.name} clicked`);
    if (event.target.name === "movie") {
      // set url to movie endpoint
      try {
        const url = "/movie";
        let data = await fetch(url);
        data = await data.json();
        console.log(data);
        setMovie(data[Math.ceil(Math.random() * 2)].name);
      } catch (err) {
        console.log(err);
      }
    } else if (event.target.name === "book") {
      // set url to book endpoint
      try {
        const url = "/book";
        let data = await fetch(url);
        data = await data.json();
        console.log(data);
        setBook(data[Math.ceil(Math.random() * 2)].name);
      } catch (err) {
        console.log(err);
      }
    } else {
      // set url to surprise endpoint
      try {
        const url = "/surprise";
        let data = await fetch(url);
        data = await data.json();
        console.log(data);
        setSurprise(data[Math.ceil(Math.random() * 2)].name);
      } catch (err) {
        console.log(err);
      }
    }
  }

  function Main() {
    return (
      <div exact path="/" className="buttons-container">
        <Widget name="book" data={book} clickHandler={getAndSetRecc} />
        <Widget name="movie" data={movie} clickHandler={getAndSetRecc} />
        <Widget name="surprise" data={surprise} clickHandler={getAndSetRecc} />
      </div>
    );
  }

  // Will probably refactor this code into a widget component
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
