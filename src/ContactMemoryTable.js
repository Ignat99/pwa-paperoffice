import React, { Component } from 'react';
import {Table, MemoryTable, Container} from 'metro4-react';

export default class ContactMemoryTable extends MemoryTable {
    constructor(props){
        super(props);
    }
    
  render() {
    const items = this.props.items;
      
      
    const tablePropsData = [
            ["mode", "normal", "Table mode: <code>normal</code>, <code>static</code>. When static, sortable classes will not be drawn."],
            ["head", "null", "Table head. This is a array of table head cells"],
            ["body", "null", "Table body. This is a array of table body cells"],
            ["cls, className", "empty", "Table classes"],
            ["clsHeadRow", "empty", "Table classes for head row"],
            ["clsHeadCell", "empty", "Table classes for head cell"],
            ["clsBodyRow", "empty", "Table classes for body row"],
            ["clsBodyCell", "empty", "Table classes for body cell"],
            ["onHeadClick", "()=>{}", "Callback for head cell click event"],
            ["onCellClick", "()=>{}", "Callback for body cell click event"],
            ["onDrawCell", "()=>{}", "Callback for body cell draw event"],
        ];
      
      
    
    
   const tablePropsHeader =  [
 /*   {        
      "name": "id",
      "title": "Id",
      "sortable": true,
      "size": 50
    }, */
    {
      "name": "name",
      "title": "User name",
      "sortable": true,
      "sortDir": "asc",
      "size": 400
    },
    {
      "name": "email",
      "title": "Email",
      "sortable": true,
      "size": 400
    },
    {
      "name": "checkbox",
      "title": "Remember me",
      "size": 100
    },
    {
      "name": "birthday",
      "title": "Birthday",
      "format": "date",
      "size": 100  
    },
    {
      "name": "picture",
      "title": "Picture",
    }
  ];
    
    
    return (
    <Container>
        <MemoryTable id='Memorytable' className="table striped table-border mt-4" rows="5" pagination="true" search="true" head={tablePropsHeader} body={items.map(item => [
                  item.username,
                  item.email,
                  item.birthday,
                  item.checkbox,
                  item.picture,
                ]
            )} scrollable="true" />
    </Container>
            )
    }
};
