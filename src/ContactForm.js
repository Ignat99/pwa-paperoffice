import React, { Component } from 'react';
import { Input, Row, Checkbox, ImageButton, Icon, Container } from 'metro4-react';

class ContactForm extends Component {
    render() {
        return(
                    <div id="ContactForm">
                      <form onSubmit={this.props.handleFormSubmit} >
                        <Container>
                            <div data-role="tile" data-size="small">
                                <Icon sizes="51,51" 
                                    src="future-512.png" prefix="fa mif-" cls="icon"/>
                            </div>
                            <div data-role="tile" data-size="large">
                                <img sizes="(max-width: 480px) 95vw, 25vw" 
                                    src="https://metroui.org.ua/images/me.jpg" 
                                    alt="Hanter Sergey Pimenov" class="place-right" />
                                <span class="branding-bar">Sergey Pimenov</span>
                            </div>
                        </Container>

        <label htmlFor="username">
            Username:
          <input id="username" value={this.props.newUsername} 
            type="text" name="username"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="email">
          Email:
          <input id="email" value={this.props.newEmail} 
            type="text" name="email"
            onChange={this.props.handleInputChange} />
          </label>     

            
            

            
                            <Input id="birthday" type="date" name="birthday" prepend="Birthday: " 
                                value={this.props.newBirthday} onCange={this.props.handleInputChange}  />
                            <Checkbox id="checkbox" name="checkbox" caption="Remember me" 
                                value={this.props.newCheckbox} onCange={this.props.handleInputChange} />
                            <Row />
                            <ImageButton type="submit" title="Submit form" className='success'>
                                <Icon name="rocket" prefix="fa fa-" cls="icon"/> 
                                <span className="caption"></span>
                            </ImageButton>
                      </form>
                    </div>
        );
    }
}

export default ContactForm;