import React from 'react'
import { Card, Icon } from 'semantic-ui-react'



class Comment extends React.Component {

  render () {
    // console.log('comment', this.props)
    const { comment } = this.props

    return (

      <div className='comment'>
        <Card.Content>
          <h4>{comment.content}</h4>
        </Card.Content>

        <Card.Content extra>
          <a>
            <Icon name='delete' onClick={() => this.props.deleteComment(this.props.comment.id)}/> delete
          </a>
        </Card.Content>
      </div>
    )
  }
}

export default Comment
// <h4>{comment.content}</h4>
