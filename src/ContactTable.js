import React, { Component } from 'react';
import {Table} from 'metro4-react';

class ContactTable extends Component {
  render() {
    const items = this.props.items;
    return (
    
<div id="ContactTable" class="container">
    <Table 
        class="table striped table-border mt-4" 
        id="ContactTable" 
        data-role="table"
        data-cls-table-top="row flex-nowrap"
        data-cls-search="cell-md-8"
        data-cls-rows-count="cell-md-4"
        data-rows="5"
        data-rows-steps="5, 10"
        data-show-activity="false">
        <thead>
            <tr>
                <th  data-name="username" class="sortable-column sort-asc">Name</th>
                <th  data-name="email" class="sortable-column sort-desc">Email</th>
                <th  data-name="birthday" class="sortable-column" data-format="date">Data Birthday</th>
                <th  data-name="checkbox" class="sortable-column">Remember me</th>
                <th data-name="picture" class="sortable-column" >Picture</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.birthday}</td>
                  <td>{item.checkbox}</td>
                  <td>{item.picture}</td>
                </tr>
              );
            })}
        </tbody>
    </Table>
</div>
   );
  }
}

export default ContactTable;