import React from 'react'
import { Card } from 'semantic-ui-react'



class Word extends React.Component {

  render(){
  console.log('word', this.props)
  const { word } = this.props

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {word.name}
        </Card.Header>
        <Card.Description>
          <h4>
            {word.description}<br />
        </h4>
      </Card.Description>
    </Card.Content>
  </Card>
  )
}
}

export default Word
