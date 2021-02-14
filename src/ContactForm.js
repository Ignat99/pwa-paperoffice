import React, { Component } from 'react';
import { Input, Row, Checkbox, ImageButton, Icon, Container } from 'metro4-react';
import CapturePicturePlayer from './CapturePicturePlayer';

class ContactForm extends Component {
    
    
    handleNewPicture = (e) => {
        alert(e);
        this.props.handleInputChange({target: {name: "picture", value: e}});
        
    };
    
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
                            <CapturePicturePlayer newPictureURL={ this.handleNewPicture } />  
                        </div>
                    </Container>
                        <Input id="username" type="text" name="username" prepend="Name: " cls="fa-user" placeholder="User name" 
                            value={this.props.newUsername} onChange={this.props.handleInputChange} />
                        <Input id="email" type="text" name="email" prepend="Email: " cls="mif-envelop" placeholder="Enter your email..." data-validate="required email" 
                            value={this.props.newEmail} onChange={this.props.handleInputChange}  />
                        <Input id="birthday" type="date" name="birthday" 
                            value={this.props.mewBirthday} onChange={this.props.handleInputChange}  />
                        <Checkbox name="checkbox" caption="Remember me"
                            variant={this.props.newCheckbox} onChange={this.props.handleInputChange}  />
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