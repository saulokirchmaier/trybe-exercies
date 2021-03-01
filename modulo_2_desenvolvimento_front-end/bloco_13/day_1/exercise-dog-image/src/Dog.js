import React from 'react';

class Dog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dogImage: '',
      allDogs: [],
    };

    this.fetchDog = this.fetchDog.bind(this);
    this.renderDogImage = this.renderDogImage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState(
      { loading: true },
      async () => {
        const requestDog = await fetch('https://dog.ceo/api/breeds/image/random');
        const dogJSON = await requestDog.json();
        this.setState({
          loading: false,
          dogImage: dogJSON.message,
        })
      }
    )
  }

  renderDogImage() {
    const { dogImage } = this.state;
    return(
      <img src={dogImage} alt="Dog"></img>
    );
  }

  handleClick() {
    this.fetchDog();
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    return(
      <>
        <p>{loading ? loadingElement : this.renderDogImage()}</p>
        <button onClick={this.handleClick}>Novo cachorro</button>
      </>
    );
  }
}

export default Dog;
