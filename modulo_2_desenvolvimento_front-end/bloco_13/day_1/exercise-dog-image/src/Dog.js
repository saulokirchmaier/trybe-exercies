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
    const { dogImage } = nextState;
    // if (dogImage.includes('terrier')) return false;
    return !(dogImage.includes('terrier'));
  }

  saveToLocalStorage() {
    const { dogImage } = this.state;
    localStorage.setItem('dogURL', dogImage);
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
    this.saveToLocalStorage();
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
