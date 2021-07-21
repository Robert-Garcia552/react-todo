import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid black;
  border-radius: 16px;
  margin: 16px auto;
`

const Input = styled.input`
  margin: 16px;
  border: none;
  border-bottom: 1px solid;
`

const Container = styled.div`
  margin: 16px 0;
`

const Text = styled.p`
  font-size: 1.5rem;
`

const Button = styled.button`
  background-color: #3076d6;
  border-radius: 16px;
  color: white;
`

const Error = styled.p`
  color: red;
`

class NewNote extends Component {
  render() {
    return (
      <Container>
        <Text>New Note</Text>
        <Card>
          {this.props.error ? <Error>Please fill in both fields.</Error> : ''}
          <Input value={this.props.title || ''} name="title" onChange={this.props.handleChange} />
          <Input value={this.props.body || ''} name="body" onChange={this.props.handleChange} />
          <Button onClick={this.props.handleSubmit}>Submit</Button>
        </Card>
      </Container>
   
    )
  }
}

export default NewNote;