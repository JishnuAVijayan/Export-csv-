// import AllPostPage from "./components/exportdata";
import {CSVLink, CSVDownload} from "react-csv";
// import{CsvDownloader, CSVDownload}  from 'react-csv-downloader';
import './App.css';

// const Data = [
//   // ["firstname", "lastname", "email"],
//   {firstname:"Ahmed", lastname:"Tomi",email: "ah@smthing.co.com"},
//   {firstname:"Raed",lastname: "Labes", email:"rl@smthing.co.com"},
//   {firstname:"Yezzi",lastname: "Min l3b",email: "ymin@cocococo.com"}
// ];

const Data=[
  { firstName: "Warren", lastName: "Morrow", email: "sokyt@mailinator.com", age: "36" },
  { firstName: "Gwendolyn", lastName: "Galloway", email: "weciz@mailinator.com", age: "76" },
  { firstName: "Astra", lastName: "Wyatt", email: "quvyn@mailinator.com", age: "57" },
  { firstName: "Jasmine", lastName: "Wong", email: "toxazoc@mailinator.com", age: "42" },
  { firstName: "Brooke", lastName: "Mcconnell", email: "vyry@mailinator.com", age: "56" },
  { firstName: "Christen", lastName: "Haney", email: "pagevolal@mailinator.com", age: "23" },
  { firstName: "Tate", lastName: "Vega", email: "dycubo@mailinator.com", age: "87" },
  { firstName: "Amber", lastName: "Brady", email: "vyconixy@mailinator.com", age: "78" },
  { firstName: "Philip", lastName: "Whitfield", email: "velyfi@mailinator.com", age: "22" },
  { firstName: "Kitra", lastName: "Hammond", email: "fiwiloqu@mailinator.com", age: "35" },
  { firstName: "Charity", lastName: "Mathews", email: "fubigonero@mailinator.com", age: "63" }
];
const headers=[
{label: "First Name", key:"firstName"},
{label: "Last Name", key:"lastName"},
{label: "Email", key:"email"},
{label:"Age", key:"age"}
];

const csvreport ={
  filename: 'Report.csv',
  headers: headers,
  data:Data
}


function App() {
  return (
    <div className="App">
     
     <CSVDownload {...csvreport} target="_blank" />;
      {/* <CSVLink {...csvreport}>Export to CSV..!!</CSVLink> */}
 
      {/* <AllPostPage /> */}
    </div>
  );
}

export default App;
