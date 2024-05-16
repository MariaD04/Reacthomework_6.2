import React, { Component } from 'react' 
import Note from './components/Note'
import Form from './components/Form'
import './App.css'
 
export default class App extends Component { 
  constructor(props) { 
    super(props) 
    this.state = { 
      notes: [], 
      isLoading: false,
      isError: false 
    } 
  } 

  loadData = () => {
    this.setState({
      isLoading: true
    })
    fetch('http://localhost:7070/notes') 
      .then(response => response.json()) 
      .then(data => { 
        this.setState({ notes: data, isLoading: false, isError: false })
      })
      .catch(() => {
        this.setState({ isLoading: false, isError: true })
      })
  }
 
  componentDidMount() { 
    this.loadData()
  } 
 
  handleFormSubmit = (note) => { 
    fetch('http://localhost:7070/notes', { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify({ id: note.id, content: note.content }) 
    }) 
    .then(() => {
      this.loadData()
    }); 
  } 
 
  handleDeleteClick = (id) => { 
    fetch(`http://localhost:7070/notes/${id}`, { 
        method: 'DELETE' 
    }) 
    .then(() => this.loadData()); 
  } 
 
  render() {
    return (
      <main>
        <h1 className='title'>Notes</h1>
        <button className='button-update' onClick={this.loadData}></button>
        <div className='notes-container'>
          {this.state.notes.map(note => (
            <Note key={note.id} content={note.content} id={note.id} onDeleteClick={this.handleDeleteClick} />
          ))}
        </div>
        <Form onSubmit={this.handleFormSubmit} />
      </main>
    )
  } 
}
