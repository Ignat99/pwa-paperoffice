import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, BrowserRouter, Route, Link} from 'react-router-dom';
import {Button} from "metro4-react";
import {Grid,Row,Cell,Input} from 'metro4-react';
import {Container, HtmlContainer, Checkbox, ImageButton, Icon, MemoryTable, Panel} from 'metro4-react';

var tablePropsData = [
            ['Petya Ivanovich', 'ivanovich@gmail.com', '2021-02-07', 'Yes', 'pictures1'],
            ['Alina Stepanovna', 'stepanovna645@gmail.com', '2021-02-05', 'No', 'pictures2'],
            ['Oleg Ulyanich', 'ulyanich55@gmail.com', '2021-02-01', 'Yes', 'pictures3'],
];

var myrows = [
    {id: "1", name: 'Petya Ivanovich', email: 'ivanovich@gmail.com', calendar: '2021-02-07', check: 'Yes', picture: 'pictures1'},
    {id: "2", name: 'Alina Stepanovna', email: 'stepanovna645@gmail.com', calendar: '2021-02-05', check: 'No', picture: 'pictures2'}
];

let redraw = true;
    
    
class ContactForm extends React.Component {
        
   //new start
    constructor(props) {
        super(props);
        this.state = {id: '', name: '', email: '', calendar: '', check: '', picture: ''};
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCalendarChange = this.handleCalendarChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handlePictureChange = this.handlePictureChange.bind(this);
        
    }
    
    handleNameChange(e) {
        this.setState({name: e.target.value});
        alert('Send name: ' + this.state.name);
    }
    
    handleEmailChange(e) {
        this.setState({name: e.target.value});
    }
    
    handleCalendarChange(e) {
        this.setState({name: e.target.value});
    }
    
    handleCheckChange(e) {
        this.setState({name: e.target.value});
    }
    
    handlePictureChange(e) {
        this.setState({name: e.target.value});
    }
    

    
    handleSubmit(e) {

        e.preventDefault();
    }

    
    //new end
    render() {
        return(
                <Panel>
                    <Container>
                      <form action={this.handleSubmit} >
                        <Icon name="future-512.png" prefix="fa fa-" cls="icon"/>
          <div data-role="tile" data-size="large"><img sizes="(max-width: 480px) 95vw, 25vw" src="https://metroui.org.ua/images/me.jpg" alt="Hanter Sergey Pimenov" class="place-right" />
                        <span class="branding-bar">Sergey Pimenov</span>
                        </div>
                        <Input id="name" type="text" name="name" prepend="Name: " cls="fa-user" placeholder="User name" value={this.state.name} onCange={this.handleNameChange} />
                        <Input id="email" type="text" name="email" prepend="Email: " cls="mif-envelop" placeholder="Enter your email..." data-validate="required email" />
                        <Input id="calendar" type="date" name="calendar" prepend="Birthday: " value={this.state.calendar} onCange={this.handleCalendarChange}  />
                        <Checkbox id="check" name="check" caption="Remember me" value={this.state.check} onCange={this.handleCheckChange} />
                        <Row />
                        <ImageButton type="submit" title="Submit form" className='success'>
                            <Icon name="rocket" prefix="fa fa-" cls="icon"/> 
                            <span className="caption"></span>
                        </ImageButton>
                      </form>
                    </Container>
                </Panel>

        );
    }
}

//export default ContactForm;

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
             <Grid className="h-100 d-flex flex-align-center flex-justify-center">
                <h1>Simple contact administration</h1>
                <p className="text-leader">
                    Welcome to Metro 4 for ReactJS App!
                </p>
                <ContactForm />
                <Container>
                    <MemoryTable id='table' className="table striped table-border mt-4" rows="5" pagination="true" search="true" source="table.json" scrollable="true" />
                </Container>
            </Grid>
    </div>
);

const Home = (props) => (
  <Page title="Home" />
);

const tablePropsHeader = [
    {
        name: "Name",
        title: "User name",
        template: "<code>%VAL%</code>"
    },
    {
        name: "email",
        title: "Email",
    },
    {
        name: "birthday",
        title: "Data Birthday",
    },
    {
        name: "checkbox",
        title: "Remember me",
    },
    {
        name: "picture",
        title: "Picture",
    },
];


function App() {
  return (
      <BrowserRouter>
              <Route path="/" component={Home}/>
      </BrowserRouter>

  );
}

export default App;
