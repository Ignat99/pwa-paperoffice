import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';
import { Grid, Panel } from 'metro4-react';

const Page = ({ title }) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>

    </div>
);

const Home = (props) => (
  <Page title="Home" />
);

class App extends React.Component {
    constructor() {
        super();
        this.state = JSON.parse( localStorage.getItem('localData') );
        if ( this.state === undefined ) {
            this.state = { username: '', email: '', birthday: '', checkbox: '', picture: '', formValid: false, items: [] }
        }
    };
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        if(this.state.username !== "" && this.state.email !== "" && this.state.username !== null && this.state.email !== null){
        
        let items = [...this.state.items];
        
        
        
        
        items.push({
            username: this.state.username,
            email: this.state.email,
            birthday: this.state.birthday,
            checkbox: this.state.checkbox,
            picture: this.state.picture
        });
        
        localStorage.setItem('localData', JSON.stringify(this.state));

        this.setState({
            items,
            username: '',
            email: '',
            birthday: '',
            checkbox: '',
            picture: ''
        });
      }
    };

    handleInputChange = (e) => {
        
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        })
    };

    render() { 
        return (
            <BrowserRouter>          
                <div className="App">
                    <Grid className="h-100 d-flex flex-align-center flex-justify-center"> 
                        <h1>Simple contact administration</h1>
                        <p className="text-leader">
                            Welcome to Metro 4 for ReactJS App!
                        </p>
                        <Panel>
                            <ContactForm  handleFormSubmit={ this.handleFormSubmit } 
                                handleInputChange={ this.handleInputChange } 
                                newUsername={ this.state.username } 
                                newEmail={ this.state.email } />
                        </Panel>
                        <ContactTable items={ this.state.items }/>
                    </Grid> 
                </div>          
                <Route path="/" component={Home}/>
            </BrowserRouter>           
        )
    }
}

export default App;
