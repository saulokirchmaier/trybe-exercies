import { Component } from 'react';
import Input from './Input';

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
    console.log(event.target);
  }

  render() {
    return(
      <form>
        <fieldset>
          {/* <Input
            onChange={() => this.handleChange()}
            type="text"
            name="name"
            maxLength="40"
            // uppercase={true}
          /> */}
          <Input type="text" name="email" maxLength="50"/>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            maxLength="40"
          ></input>
        </fieldset>
      </form>
    );
  }
}

export default Form;
