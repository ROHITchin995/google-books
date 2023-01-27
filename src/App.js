import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import Gallery from './Components/Gallery.js';
import SearchIcon from '@mui/icons-material/Search';

const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',  
      items: []
    }
  }

  search() {
    fetch(`${API_URL}${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({ items })
      }).catch((error) =>
        console.log(error)
      )
  }

  render() {
   return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Book Finder</h1>
    </header>
    <div className="container main-content">
      <FormGroup>
        <InputGroup>
          <FormControl type="text" placeholder="Search for a book"
          onChange={ event => this.setState({ query: event.target.value }) }
          onKeyPress={ event => {
            if ('Enter' === event.key) {
              this.search();
            }
          }} />
          <SearchIcon onClick={() => this.search()}/>
        </InputGroup>
      </FormGroup>
      <Gallery items={this.state.items} />
    </div>
  </div>
   )
  }
}

export default App;
