import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/commentsAction'
import { deleteComment } from '../actions/commentsAction'
import Comments from '../components/Comments'
import CommentForm from '../components/CommentForm'
import { fetchComments } from '../actions/commentsAction'




class CommentsContainer extends React.Component{


  componentDidMount(){
    this.props.fetchComments()
    //
  }

  filterComments = (tripId) => {
    return this.props.comments.filter(comment => {
      return comment.trip.trip_id === tripId
    })
  }

  render () {
    console.log(this.props, this.props.tripId)
    const tripId = this.props.tripId
    // console.log('contentcon')

    return (
      <div>
        <Comments comments={this.filterComments(tripId)} deleteComment={this.props.deleteComment} />
        <CommentForm addComment={this.props.addComment} tripId={tripId}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {comments: state.comments.comments}
}

export default connect(mapStateToProps, {addComment, deleteComment, fetchComments})(CommentsContainer)
