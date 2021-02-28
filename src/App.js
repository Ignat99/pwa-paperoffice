import React from 'react';
import logo from './future-512.png';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ContactMemoryTable from './ContactMemoryTable';
import ContactForm from './ContactForm';
import { Grid, Panel, Icon} from 'metro4-react';


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
        // first start
        this.state = { username: '', nickname: '', password: '', urllink: '', email: '', birthday: '', checkbox: '', picture: '', formvalid: false, emailvalid: 'required', items: [] };
        let localData = localStorage.getItem('localData');
        
        
        // regular start
        if (typeof localData === 'undefined') {
        
            this.state = { username: '', nickname: '', password: '', urllink: '', email: '', birthday: '', checkbox: '', picture: '', formvalid: true,  emailvalid: 'required',
                items:
                    [
                      {
                        "username": "Ignat Ignatov",
                        "nickname": 'ignat99',
                        "password": 'nolde123',
                        "urllink": 'https://homedevice.pro/#slider',
                        "email": "ignat99@gmail.com",
                        "birthday": "",
                        "checkbox": "",
                        "picture": "",
                        "formvalid": false,
                        "emailvalid": 'required',
                      }
                    ]
            }; 
            

            
                 let items = [...this.state.items];
            
                    // We put old object to array
        items.push({
            username: this.state.username,
            nickname: this.state.nickname,
            password: this.state.password,
            urllink: this.state.urllink,
            email: this.state.email,
            birthday: this.state.birthday,
            checkbox: this.state.checkbox,
            picture: this.state.picture,
            formvalid: this.state.formvalid,
            emailvalid: this.state.emailvalid,
        });
            
                       // Every time when push to button we put to local data
        localStorage.setItem('localData', JSON.stringify(this.state));         
            
 
            let localData = localStorage.getItem('localData');
            this.state = JSON.parse(localData);
            
                         this.setState({
            items,
            username: '',
            nickname: '',
            password: '',
            urllink: '',
            email: '',
            birthday: '',
            checkbox: '',
            picture: '',
            formvalid: true,
            emailvalid: 'required'
        });
            
        }  else {
            this.state = JSON.parse(localData);
            
        } 
        
   
        
    };
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        
        
        let items = [...this.state.items];
        
        
        
        // We put old object to array
        items.push({
            username: this.state.username,
            nickname: this.state.nickname,
            password: this.state.password,
            urllink: this.state.urllink,
            email: this.state.email,
            birthday: this.state.birthday,
            checkbox: this.state.checkbox,
            picture: this.state.picture,
            formvalid: this.state.formvalid,
            emailvalid: this.state.emailvalid,
        });
        
        // Every time when push to button we put to local data
        localStorage.setItem('localData', JSON.stringify(this.state));
        let localData = localStorage.getItem('localData');
        this.state = JSON.parse(localData);

        this.setState({
            items,
            username: '',
            nickname: '',
            password: '',
            urllink: '',
            email: '',
            birthday: '',
            checkbox: '',
            picture: '',
            formvalid: true,
            emailvalid: 'required',
        });
    
    };

    handleInputEmail = (e) => {
        
        let name = e.target.name;
        let value = e.target.value;
        let curemailvalid = 'required';
        
        let items = [...this.state.items];
        this.setState({
            items,
            formvalid: true
        });
        
        /* eslint-disable-next-line */
        let result = /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i.test(value);
  

        
        if (result === true) {
            curemailvalid = 'success'
        } else {
            curemailvalid = 'error'
        }
        
        if (this.state.formvalid === true) {
            this.setState({
                [name]: value,
                'emailvalid': curemailvalid
            })
        }
        this.state = {'emailvalid': curemailvalid};
    };


    handleInputChange = (e) => {
        
        let name = e.target.name;
        let value = e.target.value;
        
                let items = [...this.state.items];
        
        
        
        // We put old object to array
   /*     items.push({
            username: this.state.username,
            email: this.state.email,
            birthday: this.state.birthday,
            checkbox: this.state.checkbox,
            picture: this.state.picture,
            formvalid: this.state.formvalid
        }); */

        
        
        this.setState({
            items,
            formvalid: true
        });
        
        // Every time when push to button we put to local data
       // localStorage.setItem('localData', JSON.stringify(this.state));
     //   let localData = localStorage.getItem('localData');
   //     this.state = JSON.parse(localData);


        if (this.state.formvalid === true) {
            this.setState({
                [name]: value
            })
        }
  //      this.state = {[name]: value};
    };

    render() {
        
        let localData = localStorage.getItem('localData');
        if (typeof localData !== 'undefined') {
            let proba = JSON.parse(localData);
            if (proba !== null) {
                if (proba.formvalid !== null) {
                    if (proba.formvalid === false) {
                        this.state=proba;
                    } else {
                        if (proba.formvalid === false) {
                     this.state = { username: '', nickname: '', password: '', urllink: '', email: '', birthday: '', checkbox: '', picture: '', formvalid: true, items: [] }; 
                        }
                        localStorage.setItem('localData', JSON.stringify(this.state));
                        localData = localStorage.getItem('localData');
                   
                    
                    }
                } 
            }  else {
                   this.state= { username: '', nickname: '', password: '', urllink: '', email: '', birthday: '', checkbox: '', picture: '', formvalid: true, items: [] }; 
                    localStorage.setItem('localData', JSON.stringify(this.state));
                    localData = localStorage.getItem('localData');
                }
        } else { 
             this.state = { username: '', nickname: '', password: '', urllink: '', email: '', birthday: '', checkbox: '', picture: '', formvalid: true, emailvalid: 'required',
                items:
                    [
                      {
                        "username": "Ignat Ignatov",
                        "nickname": 'ignat99',
                        "password": 'nolde123',
                        "urllink": 'https://homedevice.pro/#slider',
                        "email": "ignat99@gmail.com",
                        "birthday": "10/02/2021",
                        "checkbox": "Yes",
                        "picture": "picture1",
                        "formvalid": false,
                        "emailvalid": 'required',
                      }
                    ]
            };       
  //      localStorage.setItem('localData', JSON.stringify(this.state));
        this.state.formvalid = true;
        }  
        
        return (
            <BrowserRouter>          
                <div className="App">
                    <Grid className="h-100 d-flex flex-align-center flex-justify-center">
                        <h1>Simple contact administration</h1>
                        <p className="text-leader">
                            Welcome to Metro 4 for ReactJS App!
                        </p>
                        <Panel caption={'Panel'} clsContent={'bg-light p-4'} icon={'rocket'} iconPrefix={'fa fa-'} clsIcon={'fg-yellow no-border'} clsDropdownToggle={'no-border marker-light'} clsCaption={'text-bold'} clsTitle={'bg-gray fg-white'} >

                            <Icon name="rocket" cls="fg-orange" size="5x"/>
                        
                            <ContactForm  
                                handleFormSubmit={ this.handleFormSubmit } 
                                handleInputChange={ this.handleInputChange }
                                handleInputEmail={ this.handleInputEmail }
                                newUsername={ this.state.username } 
                                newNickname={ this.state.nickname } 
                                newPassword={ this.state.password }
                                newUrllink={ this.state.urllink } 
                                newEmail={ this.state.email }
                                newBirthday={ this.state.birthday }
                                newCheckbox={ this.state.checkbox }
                                newPicture={ this.state.picture }
                                newFieldState={ this.state.emailvalid }
                                />
                        </Panel>
                        <Panel>
                            <ContactMemoryTable items={ this.state.items }/>
                        </Panel>
                    </Grid>
                </div>          
                <Route path="/" component={Home}/>
            </BrowserRouter>           
        )
    }
}

export default App;
