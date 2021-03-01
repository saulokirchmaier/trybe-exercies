import { Component } from 'react';
import FormErrors from './FormErrors';
import brazilStates from './brazilStates';

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
      state: '',
      home: '',
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
    // console.log(event.target.name);
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
        <form className='Form'>
          <fieldset className="personal">
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

            <label>
              Selecione seu estado:
              <select name="state" value={this.state.value} onChange={this.handleChange}>
                {brazilStates.map(state => <option 
                    value={state.state}
                    key={state.initials}
                  >{state.initials.toUpperCase()}</option>)
                }
              </select>
            </label>

            <label>
              Moradia:
              <div onChange={this.handleChange}>
                <label>
                  <input type="radio" name="home" value="Casa" checked />Casa
                </label>
                <label>
                  <input type="radio" name="home" value="Apartamento" />Apartamento
                </label>
              </div>
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
