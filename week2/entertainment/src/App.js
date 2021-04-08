import React from 'react'
import {MovieConsumer} from "./Components/MovieProvider"
import AddMovie from "./Components/AddMovie"

function App() {
  return (
    <div>
      <h1>Highest Grossing Films of All Time</h1>
      <MovieConsumer>
        {context => (
            <ul>
              {context.movies.map(movies => <li>{movies}</li>)}
            </ul>
        )}
      </MovieConsumer>
      <h3>Add a Movie!</h3>
      <AddMovie />
    </div>
  );
}

export default App;