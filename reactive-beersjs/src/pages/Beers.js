import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import BeerCard from '../components/BeerCard';
import axios from 'axios';

class Beers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      filteredBeers: [],
      beerDataFull: []
    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BEER_API}/beers`)
    .then((beers) => {
      this.setState({
        beerDataFull: beers.data,
        filteredBeers: beers.data
      });
    });
  }

  searchHandler(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
    this.filterHandler(value)
  }

  filterHandler(str) {
    const filter = this.state.beerDataFull.filter((e) => {
      return e.name.includes(str)
    });
    this.setState({
      filteredBeers: filter,
    })
  }

  render() {
    return(
      <div>
        <NavBar />
        <Search search={this.state.search} searchChange={(event) => this.searchHandler(event)} />
        {
          this.state.filteredBeers.map((e, i) => {
            return <BeerCard key={i} beer={e} />
          })
        }

      </div>
    )
  }
}

export default Beers;