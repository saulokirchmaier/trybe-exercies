import { Component } from 'react';
import FormErrors from './FormErrors';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fristLetter = this.fristLetter.bind(this);

    this.state = {
      name: '',
      email: '',
      CPF: '',
      address: '',
      city: '',
      formErrors: {
        name: '',
        email: '',
        CPF: '',
        address: '',
        city: ''
      }
    };
  }

  handleChange(event) {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = value.replace(/[^A-Za-z0-9]+/g, "")
    this.setState({
      [name]: value,
      formErrors: {
        [name]: this.validateField(name, value)
      }
    })
  }

  validateField(nameField, value) {
    switch(nameField) {
      case 'email':
        return value
          .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' : ' is invalid';
      case 'CPF':
        return value.match(/-?\d*\.?\d+/g) ? '' : ' is invalid';
      // case 'address':
      //   return value.replace(/\\W/, "")
      default:
        break;
    }
    return ''
  }

  fristLetter(event) {
    let { name, value } = event.target;
    if (value[0]) this.setState({
      [name]: ''
    });
  }

  render() {
    return(
      <>
        <form>
          <fieldset>
            <label>
              Nome:
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                maxLength="40"
                required
              ></input>
            </label>

            <label>
              Email:
              <input
                onChange={this.handleChange}
                type="text"
                name="email"
                maxLength="50"
                required
              ></input>
            </label>

            <label>
              CPF:
              <input
                onChange={this.handleChange}
                type="text"
                name="CPF"
                maxLength="11"
                required
              ></input>
            </label>

            <label>
              Endereço:
              <input
                onChange={this.handleChange}
                type="text"
                name="address"
                maxLength="200"
                value={this.state.address}
                required
              ></input>
            </label>

            <label>
              Cidade:
              <input
                onChange={this.handleChange}
                type="text"
                name="city"
                maxLength="28"
                onBlur={this.fristLetter}
                value={this.state.city}
                required
              ></input>
            </label>

          </fieldset>
        </form>
        <div>
          <FormErrors formErrors={this.state.formErrors}/>
        </div>
      </>
    );
  }
}

export default Form;
