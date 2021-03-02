import React from 'react';

class Dog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dogImage: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log('should update');
    const { dogImage } = nextState;
    return !(dogImage.includes('terrier'));
  }

  componentDidUpdate() {
    console.log('did update');
    const { dogImage } = this.state;
    const dogBreed = dogImage.split("/")[4];
    localStorage.setItem('dogURL', dogImage);
    alert(dogBreed);
  }

  async fetchDog() {
    this.setState(
      { loading: true}, 
      async () => {
      const requestDog = await fetch('https://dog.ceo/api/breeds/image/random');
      const dogJSON = await requestDog.json();
      const dogImage = dogJSON.message;
      this.setState({
        dogImage,
        loading: false,
      })
    });
  }

  handleClick() {
    this.fetchDog();
  }

  render() {
    const { loading, dogImage } = this.state;
    const loadingElement = <span>Loading...</span>;
    const image = <img src={ dogImage } alt="Dog" className="dog-image"></img>;
    return(
      <>
        <p>{loading ? loadingElement : image }</p>
        <button onClick={this.handleClick}>Novo cachorro</button>
      </>
    );
  }
}

export default Dog;
