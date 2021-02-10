import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ContactTable from './ContactTable';
import ContactMemoryTable from './ContactMemoryTable';
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
        
  //      this.state = { username: '', email: '', birthday: '', checkbox: '', picture: '', formvalid: false, items: [] };
 /*       this.state = { username: '', email: '', birthday: '', checkbox: '', picture: '',
                items:
                    [
                      {
                        "username": "ignat99",
                        "email": "ignat99@gmail.com",
                        "birthday": "",
                        "checkbox": "",
                        "picture": ""
                      }
                    ]
            };
*/
       
        
        if (typeof localData === 'undefined') { 
            this.state = { username: '', email: '', birthday: '', checkbox: '', picture: '',
                items:
                    [
                      {
                        "username": "ignat99",
                        "email": "ignat99@gmail.com",
                        "birthday": "",
                        "checkbox": "",
                        "picture": ""
                      }
                    ]
            }; 
        } else {
            this.state.formvalid = true;
//            let localData = localStorage.getItem('localData');
 //           this.state = JSON.parse(localData);
        }       
        
        
        
    };
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        
        
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
            picture: '',
            formvalid: true
        });
    
    };

    handleInputChange = (e) => {
        
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        })
    };

    render() {

        if (this.state.formvalid === false ) { 
             this.state = { username: '', email: '', birthday: '', checkbox: '', picture: '', formvalid: true,
                items:
                    [
                      {
                        "username": "ignat99",
                        "email": "ignat99@gmail.com",
                        "birthday": "",
                        "checkbox": "",
                        "picture": "",
                        "formvalid": true
                      }
                    ]
            };       
        
 
        localStorage.setItem('localData', JSON.stringify(this.state));
        this.state.formvalid = true;
        }
//        let localData = localStorage.getItem('localData');
//        this.state = JSON.parse(localData);
        
        
        
        return (
            <BrowserRouter>          
                <div className="App">
                    <Grid className="h-100 d-flex flex-align-center flex-justify-center">
                        <h1>Simple contact administration</h1>
                        <p className="text-leader">
                            Welcome to Metro 4 for ReactJS App!
                        </p>
                        <Panel>
                        
                            <ContactForm  
                                handleFormSubmit={ this.handleFormSubmit } 
                                handleInputChange={ this.handleInputChange }
                                newUsername={ this.state.username } 
                                newEmail={ this.state.email } 
                                />
                        </Panel>
                        <ContactTable items={ this.state.items }/>
                        <ContactMemoryTable items={ this.state.items }/>
                    </Grid>
                </div>          
                <Route path="/" component={Home}/>
            </BrowserRouter>           
        )
    }
}

export default App;
