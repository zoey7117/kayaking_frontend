import React from 'react'
import {connect} from 'react-redux'
import {addTrip} from '../actions/tripsAction'
import {DateInput} from 'semantic-ui-calendar-react';

class TripForm extends React.Component {

  state = {
    name: '',
    water_type: "",
    start_date: new Date(),
    end_date: new Date()
    // start_date: '',
    // end_date: ''
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addTrip(this.state)
    this.setState({name: '', water_type: ''})
    this.props.history.push('/');
  }

  handleOnChange = (e, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({[name]: value});
    }
  }

  handleIfChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    // console.log(DateInput)
    console.log('start_date', this.state.start_date)
    return (<div>
      <h4>add a trip!</h4>
      <form onSubmit={this.handleOnSubmit}>
        <div className="ui form">
          <div className="fields">
            <div className="five wide field">
              <input onChange={this.handleIfChange} value={this.state.name}  type="text" name="name"   placeholder="name" autoComplete="off"/><br/>
            </div>
            <div className="three wide field">
              <label>water type
                <select onChange={this.handleIfChange} value={this.state.water_type} type="text"  name="water_type" placeholder="water type" autoComplete="off">
                  <option value='select'>select below</option>
                  <option value="bay">bay</option>
                  <option value="lake">lake</option>
                  <option value="ocean">ocean</option>
                  <option value="river">river</option>
                </select>
              </label>
            </div>
            <div className="three wide field">
              <DateInput onChange={this.handleOnChange} type={this.DateInput} dateFormat="MM-DD-YY"value={this.state.start_date} animation='off'  dateformat="MM-DD-YYYY" iconPosition="left" name="start_date" placeholder="start date" autoComplete="off"/>
            </div>
            <div className="three wide field">
              <DateInput onChange={this.handleOnChange} type={this.DateInput} dateFormat="MM-DD-YY"name="end_date" animation='off' placeholder="end date" dateformat="MM-DD-YYYY" value={this.state.end_date} iconPosition="left" autoComplete="off"/>

            </div>
            <div className="two wide field">
              <button type="submit" className="ui button">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>)
  }

}

export default connect(null, {addTrip, DateInput})(TripForm)
