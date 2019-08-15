import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import qs from 'querystring';

class AddBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
      succesMessage: false,
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addBeerHandler= (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(this.state),
      url: `${process.env.REACT_APP_BEER_API}/beers/new`
    })
    .then(() =>{
      debugger
      this.setState({
        name:'',
        tagline: '',
        description:'',
        brewers_tips: '',
        attenuation_level: '',
        first_brewed:'',
        contributed_by: '',
        succesMessage: true,
        error: null
      })
    })
    .catch(err =>{
      this.setState({error: err.message})
    })
   
  }

  render() {
    return(
      <Fragment>
        <NavBar />
        <form className="container" onSubmit={ this.addBeerHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Beer Name" onChange={this.changeHandler} value={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input type="text" className="form-control" name="tagline" placeholder="Beer Tagline" onChange={this.changeHandler} value={this.state.tagline} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name="description" onChange={ this.changeHandler} value={this.state.description} rows="3" />
          </div>
          <div className="form-group">
            <label htmlFor="first_brewed">First Brewed</label>
            <input type="date" className="form-control" name="first_brewed" placeholder="DD/MM/YY" onChange={ this.changeHandler} value={this.state.first_brewed} />
          </div>
          <div className="form-group">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input type="text" className="form-control" name="brewers_tips" placeholder="Brewers Tips" onChange={this.changeHandler} value={this.state.brewers_tips} />
          </div>
          <div className="form-group">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input type="number" className="form-control" name="attenuation_level" placeholder="Attenuation Level" onChange={this.changeHandler} value={this.state.attenuation_level} />
          </div>
          <div className="form-group">
            <label htmlFor="contributed_by">Contributed By</label>
            <input type="text" className="form-control" name="contributed_by" placeholder="Contributed By" onChange={this.changeHandler} value={this.state.contributed_by} />
          </div>
          <button type="submit"  className="btn btn-primary">Submit</button>
        </form>

        {this.state.succesMessage && 
            <p>success</p> 
        }
        {this.state.error && 
            <p>{this.state.error}</p>
        }
      </Fragment>
    )
  }
}

export default AddBeer;