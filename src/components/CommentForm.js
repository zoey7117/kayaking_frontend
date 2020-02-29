import React from 'react'


class CommentForm extends React.Component {

  state = {
    content: ''
  }

  handleOnChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addComment({content: this.state.content, trip_id: this.props.tripId})
    this.setState({
      content: ''
    })
  }


  render () {
    return(

      <div><br/>
        <h4>add a comment!</h4>
        <form onSubmit={this.handleOnSubmit}>
          <div className="ui form">
              <input onChange={this.handleOnChange} value={this.state.content} type="text" placeholder='content'name="content" autoComplete="off"/><br/><br/>
              <button type="submit" >submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm
