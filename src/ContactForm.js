import React, { Component } from 'react';
import { Row, Checkbox, ImageButton, Icon, Container } from 'metro4-react';

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
            
        <label htmlFor="email">
          Email:
          <input id="email" value={this.props.newEmail} 
            type="text" name="email" 
                onChange={this.props.handleInputChange} />
        </label>     

            
            

        <label htmlFor="birthday">
            Birthday:
            <input id="birthday" value={this.props.newBirthday}
                type="text" name="birthday" 
                onCange={this.props.handleInputChange} />
        </label>
            
        <label htmlFor="checkbox">
            Remember me:
            <Checkbox id="checkbox" name="checkbox" 
                value={this.props.newCheckbox} onCange={this.props.handleInputChange} />
        </label>
                            <Row />

            <ImageButton type="submit" title="Submit form" className='.image-button:focus'>
                                <Icon name="rocket" prefix="fa fa-" cls="icon"/> 
                                <span className="caption"></span>
            </ImageButton>
                      </form>
                    </div>
        );
    }
}

export default ContactForm;