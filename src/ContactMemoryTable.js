import {MemoryTable, Container} from 'metro4-react';

export default class ContactMemoryTable extends MemoryTable {
    constructor(props){
        super(props);
    }
        
    drawCell(val, props) {
        if (props.name === 'urllink') {
            return <a href={val}>{val}</a>
        }
        if (props.name == 'picture') {
            return <img src={val} />
        }
        return val;
    };
    
  render() {
    const items = this.props.items;
      
    
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
      "format": "text",
      "sortable": true,
      "sortDir": "asc",
      "size": 400
    },
    {
      "name": "nickname",
      "title": "Nickname",
      "format": "text",
      "sortable": true,
      "sortDir": "asc",
      "size": 400
    },
    {
      "name": "password",
      "title": "password",
      "format": "text",
      "sortable": true,
      "sortDir": "asc",
      "size": 400
    },
    {
      "name": "urllink",
      "title": "Urllink",
      "format": "text",
      "sortable": true,
      "sortDir": "asc",
      "size": 400
    },
    {
      "name": "email",
      "title": "Email",
      "sortable": true,
      "sortDir": "asc",
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
                <MemoryTable 
                    className="table-border striped" 
                    rowsTitle='Show: ' 
                    onDrawCell={this.drawCell} 
                    clsSearchBlock='row'
                    clsSearch='cell-md-9'
                    clsRows='cell-md-3'
                    clsInfoBlock='row'
                    clsInfo='cell-md-6 order-2 text-center'
                    clsPaginationBlock='cell-md-6'
                    clsPagination='no-gap' 
                    clsEmptyTitle='text-center' 
                    head={tablePropsHeader} 
                    body={items.map(item => [item.username, item.nickname, item.password, item.urllink, item.email, item.checkbox, item.birthday,  item.picture ])} 
                    scrollable="true" />
            </Container>
        )
    }
};
