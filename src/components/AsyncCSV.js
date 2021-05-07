import React, { Component } from 'react';
import {CSVLink} from 'react-csv';

class AsyncCSV extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
        this.csvlinkEl= React.createRef();
        this.headers=[
            { label: "Name", key: "name" },
            { label: "Username", key: "username" },
            { label: "Email", key: "email" },
            { label: "Phone", key: "phone" },
            { label: "Website", key: "website" }
        ];
    }

    getUersList =()=>{
        return fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json());
    }

    downloadReport = async ()=>{
        const data = await this.getUersList();
        console.log('data:', data);
        this.setState({data: data},()=>{
            setTimeout(()=>{
                // this.csvLinkEl.current.CSVlink.onClick();
                this.csvlinkEl.current.link.click();
            });
        });
    }

    render(){
        const {data}=this.state;
        return ( 
            <div>
              <input type="button" value="Export to CSv" onClick={this.downloadReport} /> 
              <CSVLink headers={this.headers} data={data} filename="Report_Async.csv" ref={this.csvlinkEl} target="_blank"/>
            </div>
         );

    }
}
 
export default AsyncCSV;

// export const AsyncCSV = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }
