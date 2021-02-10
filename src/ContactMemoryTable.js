import React, { Component } from 'react';
import {Table, MemoryTable, Container} from 'metro4-react';

export default class ContactMemoryTable extends MemoryTable {
    constructor(props){
        super(props);
    }
    
  render() {
    const items = this.props.items;
    let testObject = {
          data: items
    };
    
    let itemsJson = JSON.stringify(testObject);
    
    return (
    <Container>
        <MemoryTable id='Memorytable' className="table striped table-border mt-4" rows="5" pagination="true" search="true" source={itemsJson} scrollable="true" />
    </Container>
            )
    }
};
