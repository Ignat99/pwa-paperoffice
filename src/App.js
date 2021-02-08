import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "metro4-react";
import {Grid,Row,Cell,Input} from 'metro4-react';
import {Container, HtmlContainer, Checkbox, ImageButton, Icon, Table, Panel} from 'metro4-react';

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

const tablePropsData = [
            ['Petya Ivanovich', 'ivanovich@gmail.com', '2021-02-07', 'Yes', 'pictures1'],
            ['Alina Stepanovna', 'stepanovna645@gmail.com', '2021-02-05', 'No', 'pictures2'],
            ['Oleg Ulyanich', 'ulyanich55@gmail.com', '2021-02-01', 'Yes', 'pictures3'],
];


function App() {
  return (
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
             <Grid className="h-100 d-flex flex-align-center flex-justify-center">
                <h1>Simple contact administration</h1>
                <p className="text-leader">
                    Welcome to Metro 4 for ReactJS App!
                </p>
                <Panel>
                    <Container>
                        <Icon name="future-512.png" prefix="fa fa-" cls="icon"/>
          <div data-role="tile" data-size="large"><img sizes="(max-width: 480px) 95vw, 25vw" src="https://metroui.org.ua/images/me.jpg" alt="Hanter Sergey Pimenov" class="place-right" />
                        <span class="branding-bar">Sergey Pimenov</span>
                        </div>
                        <Input id="name" type="text" prepend="Name: " cls="fa-user" placeholder="User name" />
                        <Input id="email" type="text" prepend="Email: " cls="mif-envelop" placeholder="Enter your email..." data-validate="required email" />
                        <Input id="calendar" type="date" name="calendar" />
                        <Checkbox caption="Remember me"/>
                        <Row />
                        <ImageButton className='success'>
                            <Icon name="rocket" prefix="fa fa-" cls="icon"/> 
                            <span className="caption">Submit form</span>
                        </ImageButton>
                    </Container>
                </Panel>
                <Container>
                    <Table head={tablePropsHeader} body={tablePropsData} className="table-border cell-border"/>
                </Container>
            </Grid>
    </div>
  );
}

export default App;
