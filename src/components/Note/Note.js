import React, { Component } from "react";
import styled from 'styled-components';

const Card = styled.div`
  width: 250px;
  border: 1px solid black;
  border-radius: 16px;
  margin: 16px;
`

const Title = styled.h2`
  font-size: 1.5rem;
`

const Text = styled.p`
  font-size: 1rem;
`

class Note extends Component {
  render() {
    return (
      <Card>
        <Title>{this.props.title}</Title>
        <Text>{this.props.body}</Text>
      </Card>
    )
  }
}

export default Note;