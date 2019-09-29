import React, { Component } from 'react';
//import ReactTable from "react-table";  
//import "react-table/react-table.css";

class Table extends Component {
    state = { 
        name:"test"
     }
    render() { 
        // const data = [{  
        //     name: 'Ayaan',  
        //     age: 26  
        //     },{  
        //      name: 'Ahana',  
        //      age: 22  
        //      },{  
        //      name: 'Peter',  
        //      age: 40      
        //      },{  
        //      name: 'Virat',  
        //      age: 30  
        //      },{  
        //      name: 'Rohit',  
        //      age: 32  
        //      },{  
        //      name: 'Dhoni',  
        //      age: 37  
        //      }]  
        //  const columns = [{  
        //   // Header: 'Name',  
        //    accessor: 'name'  
        //    },{  
        //   // Header: 'Age',  
        //    accessor: 'age'  
        //    }]  
        // return (  
        //       <div>  
        //           <ReactTable  
        //               data={data}  
        //               columns={columns}  
        //            //   defaultPageSize = {2}  
        //             //  pageSizeOptions = {[2,4, 6]}  
        //           />  
        return ( 
        <div>
<table className="table">
<tr>
    <th>Defect Id</th>
    <th>Defect Name</th>
  <th>Severity</th>
  <th>Priority</th>
  <th>Assigned Employee</th>
  <th>Status</th>
  </tr>

    <tr>
        <td>001</td>
        <td>Login problem </td>
        <td>High</td>
        <td>High</td>
        <td> e1</td>
        <td>Open</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Spelling mistake </td>
        <td>Low</td>
        <td>Low</td>
        <td> e3</td>
        <td>New</td>
    </tr>
    <tr>
        <td>003</td>
        <td>Server error </td>
        <td>High</td>
        <td>High</td>
        <td> e1</td>
        <td>Finished</td>
    </tr>
</table>
        </div> );  
    }
}
 
export default Table;