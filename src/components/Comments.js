import React from 'react'
import Comment from './Comment'


//
class Comments extends React.Component {

  renderComments () {
    return this.props.comments.map(comment =>
      <Comment key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />
    )
  }
  render () {
    console.log('comments', this.props.comments)
    return (
      <div>
        {this.renderComments()}

      </div>
    )
  }
}

export default Comments
