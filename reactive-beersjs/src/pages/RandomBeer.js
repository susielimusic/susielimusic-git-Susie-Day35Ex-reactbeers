import React, { Fragment, Component } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';

class randomBeer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        randomBeer: '',
      }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BEER_API}/beers/random`)
        .then((beer) => {
          this.setState({
            randomBeer: beer.data
          });
        });
      }

render(){
    return(
        <Fragment>
          <NavBar />
          <div className="container-fluid" style={{width: "100 vw"}}>
            <img style={{width: "10%"}} src={this.state.randomBeer.image_url} className="card-img-top" alt={this.state.randomBeer.name} />
            <div className="row">
              <h5 className="col">{this.state.randomBeer.name}</h5>
              <p className="col"><small className="text-muted">{this.state.randomBeer.attenuation_level}</small></p>
            </div>
            <div className="row">
              <p className="col"><small className="text-muted">{this.state.randomBeer.tagline}</small></p>
              <p className="col"><small className="text-muted">{this.state.randomBeer.first_brewed}</small></p>
            </div>
            <p className="col">{this.state.randomBeer.description}</p>
            <p className="col"><small className="text-muted">Created by: {this.state.randomBeer.contributed_by}</small></p>
          </div>
        </Fragment>
      )
    }
}

export default randomBeer;