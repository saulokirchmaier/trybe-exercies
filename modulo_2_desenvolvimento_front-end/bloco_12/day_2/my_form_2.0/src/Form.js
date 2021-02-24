import { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: ''
    };
  }

  handleChange(event) {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase();
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <form>
        <fieldset>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            maxLength="40"
          ></input>

          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            maxLength="50"
          ></input>
        </fieldset>
      </form>
    );
  }
}

export default Form;
