import React, { Component } from "react";
import styled from 'styled-components';
import NewNote from "../NewNote/NewNote.js";
import Note from '../Note/Note.js';

const Container = styled.div`
  margin: 16px 0;
`

const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

class Home extends Component {
  state = {
    notes: [
     {
        title: 'Test 1',
        body: 'Body 1'
     },
     {
        title: 'Test 2',
        body: 'Body 2' 
     }
    ],
    newNote: {
      title: '',
      body: ''
    },
    error: false
  }

  handleChange = (e) => {
    this.setState({  
      newNote: {
        ...this.state.newNote,
        [e.target.name]: e.target.value }
      }
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.newNote.title === '' || this.state.newNote.body === '') {
      this.setState({ error: true });
      return;
    }
    let newNote = { title: this.state.newNote.title, body: this.state.newNote.body };
    let notesCollection = this.state.notes;
    notesCollection.push(newNote);
    this.setState({
      notes: notesCollection,
      newNote: {
        title: '',
        body: ''
      }
    })
  }

  componentDidUpdate(prevState) {
    if(this.state.notes !== prevState.notes) {
      this.setState();
    }
  }

  render() {
    return (
      <Container>
        <NewNote
          handleChange={this.handleChange}
          title={this.state.newNote.title}
          body={this.state.newNote.body}
          handleSubmit={this.handleSubmit}
          error={this.state.error}
        />
        <NotesContainer>
          {this.state.notes.map((note, index) => {
            return (
              <Note 
                key={index}
                title={note.title}
                body={note.body}
              />
            )
          })}
        </NotesContainer>
      </Container>
    )
  }
}

export default Home;