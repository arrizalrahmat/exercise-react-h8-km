import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("arrizal");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState({});
  const [books, setBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(false);

  useEffect(() => {
    //fetch dengan axios
    //promise
    // axios
    //   .get("https://www.anapioficeandfire.com/api/books")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));

    //asynchronous (async await)
    // const getBooks = async () => {
    //   setBooksLoading(true);
    //   const res = await axios.get(
    //     "https://www.anapioficeandfire.com/api/books"
    //   );
    //   setBooks(res.data);
    //   setBooksLoading(false);
    // };
    // getBooks();

    // fetch async await
    const getBooks = async () => {
      setBooksLoading(true);
      const res = await fetch("https://www.anapioficeandfire.com/api/books");
      const data = await res.json();
      setBooks(data);
      setBooksLoading(false);
    };

    getBooks();
  }, []); // sama kyk componentDidMount

  useEffect(() => {
    console.log("aku sudah terupdate, state:", username);
  }, [username, password]); //componentDidUpdate untuk

  return (
    <div className="App">
      <h1>halo {username}</h1>
      <button onClick={() => setUsername("rahmat")}>ubah username</button>
      <button
        onClick={() =>
          setProfile({ ...profile, address: { street: "Jalan Jakarta" } })
        }
      >
        buat nama profile
      </button>
      {booksLoading === true ? ( // apakah booksLoading === true ?
        <h1>Sedang Loading</h1> // statement kalau true
      ) : (
        // statement kalau false
        <div>
          {books.length > 0 ? (
            <div>
              <p>{JSON.stringify(books)}</p>
              {username === "rahmat" ? (
                <p>haloo {username}</p>
              ) : (
                <p>Kamu siapa?</p>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "arrizal",
//     };
//   }

//   componentDidMount() {
//     console.log("aku berhasil di mounting, state:", this.state.username);
//   }

//   componentWillUnmount() {
//     console.log("aku akan di unmount, state:", this.state.username);
//   }

//   componentDidUpdate() {
//     console.log("aku sudah terupdate, state:", this.state.username);
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>halo {this.state.username}</h1>
//         <button onClick={() => this.setState({ username: "rahmat" })}>
//           ubah username
//         </button>
//       </div>
//     );
//   }
// }

export default App;
