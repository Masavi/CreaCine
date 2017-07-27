import React, { Component } from 'react';
// import api from '../api';
// import { NavLink } from 'react-router-dom';

class Home extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sources: []
  //   }
  //   this.getSources = this.getSources.bind(this);
  // }

  // componentDidMount () {
  //   this.getSources()
  // }

  // async getSources() {
  //   // console.log("si")
  //   let response = await api.getSources();
  //   this.setState({
  //     sources: response.sources
  //   })
  //   console.log(response.sources)
  // }

  // This function handles the rendering of html content
  render() {
    return (
      <div className='Home'>
        <h1 className='center'>Crea Cine A.C.</h1>
          <p className='center'>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id orci est. Phasellus fermentum quis felis at ultrices. In eleifend hendrerit volutpat. Ut vel est convallis, sodales tortor nec, aliquet nunc. Maecenas lacinia, nisi ut consequat interdum, dolor enim vestibulum sem, et auctor mauris lorem auctor quam. Donec convallis, sem et ultricies pharetra, augue mi rhoncus nisi, nec laoreet nisi ligula vel dolor. In magna magna, sodales ut eleifend sagittis, rutrum vitae nisl. Quisque ultrices fringilla sem, id dignissim mauris fermentum quis. Sed feugiat mollis pretium. Morbi facilisis purus quis convallis consequat. Duis pulvinar justo in malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae efficitur quam. Praesent vitae consectetur magna. Vestibulum pulvinar arcu in pretium venenatis.

            Cras dictum mauris at neque facilisis, ac aliquam urna porta. Nullam et leo fermentum orci lacinia scelerisque et a mauris. Vivamus sed rhoncus justo. Nunc sed massa vel ante luctus sodales vestibulum in dolor. Fusce sed eros imperdiet, efficitur justo vitae, maximus nunc. Etiam tincidunt luctus libero et aliquet. Integer commodo scelerisque felis, eu ullamcorper risus sagittis sed. Maecenas tempus ligula ut elit facilisis, vel vulputate dui pulvinar. Pellentesque nec enim quis magna venenatis placerat vitae vel leo. Morbi magna metus, venenatis ut convallis nec, dapibus a justo.

          </p>
      </div>
    );
  }
}

export default Home;
