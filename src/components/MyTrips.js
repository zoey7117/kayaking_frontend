import React from 'react'
import { connect } from 'react-redux'

import { getCurrentUser } from '../actions/usersAction'

class  MyTrips extends React.Component {

  render () {
    console.log(this.props)

  return (
    <div>
      hi
    </div>
  )

}
}

export default connect(null, { getCurrentUser})(MyTrips)
