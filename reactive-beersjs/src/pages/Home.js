import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return(
      <div>
        {/* beers */}
        <Link to="/beers-list">
          <div>
            <img src='/img/beers.png' alt="beer"/>
          </div>
        </Link>
        <div>
          <h3>All Beers</h3>
        </div>

        {/* beer-random */}
        <Link to="/beers-random">
          <div>
            <img src='/img/random-beer.png' alt="beer"/>
          </div>
        </Link>
        <div>
          <h3>Show a random beer</h3>
        </div>

         {/* new-random */}
         <Link to="/beer-new">
          <div>
            <img src='/img/new-beer.png' alt="beer"/>
          </div>
        </Link>
        <div>
          <h3>Add a new beer</h3>
        </div>
      </div>
    )
  }

}
export default Home;

//   componentDidMount() {
//     axios.get(`${process.env.REACT_APP_BEER_API}/beers`)
//       .then((beersFromAPi) => {
//         this.setState({ 
//           bearDataFull: beersFromAPi.data,
//           beerDataDisplay: beersFromAPi.data
//       })
//       .catch(err => console.log('err' + err));

//       // axios.get('https://ih-beer-api.herokuapp.com/beers/random')
//       // .then((res) => {
//       //   this.setState({ random: res.data });
//       // })
//       // .catch(err => console.log(err));
//   }


//   render() {
//     return(
//       <div className="home-content">
//         <div className="card container-fluid" style={{width: '100vw'}}>
//           <img src="./img/beers.png" className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">All Beers</h5>
//             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate dictum diam in tincidunt. Donec fermentum est vitae est maximus facilisis. Sed sapien enim, ornare in nulla non, finibus aliquet felis. Curabitur elementum ligula neque. Sed pulvinar quam non commodo tincidunt. Nam nec convallis ante. Aliquam viverra risus mauris, a cursus lectus placerat facilisis. Aenean ac mollis dui.</p>
//             <Link to={{ pathname: '/beers', state: { beersData: this.state.beers } }} className="btn btn-primary">Check All the Beers!!!</Link>
//           </div>
//         </div>
//         <div className="card container-fluid" style={{width: '100vw'}}>
//           <img src="/img/random-beer.png" className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">Random Beer</h5>
//             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate dictum diam in tincidunt. Donec fermentum est vitae est maximus facilisis. Sed sapien enim, ornare in nulla non, finibus aliquet felis. Curabitur elementum ligula neque. Sed pulvinar quam non commodo tincidunt. Nam nec convallis ante. Aliquam viverra risus mauris, a cursus lectus placerat facilisis. Aenean ac mollis dui.</p>
//             <Link to={{ pathname: '/random-beer', state: { beerInfo: this.state.random } }} className="btn btn-primary">What's up with the Random Beer??</Link>
//           </div>
//         </div>
//         <div className="card container-fluid" style={{width: '100vw'}}>
//           <img src="/img/new-beer.png" className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">New Beer</h5>
//             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate dictum diam in tincidunt. Donec fermentum est vitae est maximus facilisis. Sed sapien enim, ornare in nulla non, finibus aliquet felis. Curabitur elementum ligula neque. Sed pulvinar quam non commodo tincidunt. Nam nec convallis ante. Aliquam viverra risus mauris, a cursus lectus placerat facilisis. Aenean ac mollis dui.</p>
//             <Link to="/new-beer" className="btn btn-primary">Create your own new beer!</Link>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Home;