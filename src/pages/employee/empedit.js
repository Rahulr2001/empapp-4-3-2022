import React, { useState, useEffect,Component } from "react";
import { listEmptabs } from "../employee/graphql/queries";
import "./Pages.css";
import $ from 'jquery';
import { API, graphqlOperation } from 'aws-amplify'
import SearchIcon from '@mui/icons-material/Search';
import Editemployee from "./editemployee";
import { updateEmptab } from "./graphql/mutations";

//onst [order,setorder]=useState("ASC");
class Empeditttt extends Component
{
  
  state = {  employees: [],
    originalResults: [],
    displayResults: []
   }

  

  
  async componentDidMount() {
    try {
      
      const apiData = await API.graphql(graphqlOperation(listEmptabs))
      const employees = apiData.data.listEmptabs.items
      this.setState({ employees })
      this.setState({ originalResults: employees, displayResults: employees });
      console.log(employees)
      
    } catch (err) {
      console.log('error: ', err)
    }
  }

  filterResults = (query, results) => {
    return results.filter(employee => {
      const name=employee.name.toLowerCase();
      return name.includes(query);
    });
  };
  sortResultsage = event => {
    this.setState(prevState => {
      const { displayResults, sortOrder } = prevState;

      if (sortOrder === "descending") {
        displayResults.sort((a, b) => {
          if (a.age > b.age) {
            return -1;
          }
          return a.age > b.age ? 1 : 0;
        });
      } else {
        displayResults.sort((a, b) => {
          if (a.age < b.age) {
            return -1;
          }
          return a.age > b.age ? 1 : 0;
        });
      }

      return {
        displayResults,
        sortOrder: sortOrder === "descending" ? "ascending" : "descending"
      };
    });
  };


  sortResults = event => {
    this.setState(prevState => {
      const { displayResults, sortOrder } = prevState;

      if (sortOrder === "descending") {
        displayResults.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          return a.name > b.name ? 1 : 0;
        });
      } else {
        displayResults.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          return a.name > b.name ? 1 : 0;
        });
      }

      return {
        displayResults,
        sortOrder: sortOrder === "descending" ? "ascending" : "descending"
      };
    });
  };

  onChange = e => {
    const query = e.target.value;

    this.setState(prevState => ({
      displayResults:
        query.length > 0
          ? this.filterResults(query, prevState.originalResults)
          : prevState.originalResults
    }));
  };

  onPopupphonechange=async(id,name)=>{

    const phone = document.getElementById(name).value;
                  
    //let leavename = $("#restid option:selected").text();
    console.log(phone )
    const updatei = async (id,phone) => {
      try {
        const value = { id,phone}
        //const restaurants = [...this.state.restaurants, restaurant]
        //this.setState({ restaurants, Name: '', Email: '', Location: '' })
        await API.graphql(graphqlOperation(updateEmptab, {input: value}))
        console.log(phone)
        
        
        
      } catch (err) {
        console.log('error: ', err)
        alert(err)
      }
    } 
    updatei(id,phone);
  }

  onPopupaddresschange=async(id,phone,dob,email)=>{

    const address = document.getElementById(phone).value;
    const city = document.getElementById(dob).value;
    const state = document.getElementById(email).value;
                  
    //let leavename = $("#restid option:selected").text();
    const updatei = async (id,address,city,state) => {
      try {
        const value = { id,address,city,state}
        //const restaurants = [...this.state.restaurants, restaurant]
        //this.setState({ restaurants, Name: '', Email: '', Location: '' })
        await API.graphql(graphqlOperation(updateEmptab, {input: value}))
        
        
        
        
      } catch (err) {
        console.log('error: ', err)
        alert(err)
      }
    } 
    updatei(id,address,city,state);
  }




render() {
  $(function () {
  $(".open_popup").click(function () {
    $(this).parent(".popup_main").children(".popup_body").addClass("popup_body_show");
    });
  $(".popup_close").click(function () {
    $(".popup_body").removeClass("popup_body_show");
    });
  $(".popup_back").click(function () {
    $(".popup_body").removeClass("popup_body_show");
    });
  })

  

  return (
    <div>
      <link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css"/>
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="filters">
<button className="btn" >Sort by:</button>
<div className="dropdown">
  <button className="btn">
    <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-content">
    <a onClick={this.sortResults}>Name</a>
    <a onClick={this.sortResultsage}>Age</a>
    
  </div>
  
</div>
<SearchIcon className="searchicon"></SearchIcon>
<input className="searchbar" label="Searchs" onChange={this.onChange} placeholder="search by employee"/>

</div>
<div className="empcontainer0" >

<table className="pctable"> 
   
  <tr className="tabletitle">
    <th>Employee-ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Age</th>
    <th>Address</th>
    <th>Country</th>
  </tr>
  {
    this.state.displayResults.map((rest, i) => ( 
  <tr key={i}>
    <td className="tablestyle" id="popupid">{rest.id}</td>
    <td>{rest.name}</td>    
    <td>{rest.email}</td>

    <td >
      

    <div className="popup_main">
    {rest.phone} <button className="open_popup"><i className="fa fa-pencil"></i></button>
    
     <div className="popup_body">
     <div className="popup_back"></div>
      <div className="popup_contain">
        <div className="popup_close">x</div>
        <form  id="myPopup" className="popform" >
        <label>Change Phone.no</label>
        <input id={rest.name}></input>
        <button type="submit" onClick={() =>this.onPopupphonechange(rest.id,rest.name)} id="addressbtn"> ok </button>
        </form>
      </div>
    </div>
    </div>


    
    </td>

    <td>{rest.age}</td>
    <td>
      <p>{rest.address}</p>
      <p>{rest.city}</p>
      
      <div className="popup_main">
      {rest.state}<button className="open_popup"><i className="fa fa-pencil"></i></button>
     <div className="popup_body">
     <div className="popup_back"></div>
      <div className="popup_contain">
        <div className="popup_close">x</div>
        <form  id="myPopup" className="popform" >
        <label>Address</label>
        <textarea id={rest.phone} className="addresstextarea"/>
        <label>City</label>
        <input id={rest.dob}></input>
        <label>State</label>
        <input id={rest.email}/>
        <button type="submit" onClick={() =>this.onPopupaddresschange(rest.id,rest.phone,rest.dob,rest.email)} id="addressbtn" > Ok </button>
        </form>
      </div>
    </div>
    </div>
    </td>
    <td>{rest.country}</td>   
  </tr>
  ))
}
</table>



<table>
  {
    this.state.employees.map((rest, i) => (
      <table className="mobiletable">
      <tr className="mtname">
        <th>Name</th>
        <td>{rest.name} |   ID:{rest.id}</td>
        </tr>
      
      <tr className="mtda">
        <th className="mtdobt">
          <p>Date of birth:</p>
        </th>
        <th className="mtaget">
          Age:
        </th>
        </tr>
        <tr>
        
         <td className="mtage">{rest.dob}</td> 
        <td className="mtdob">{rest.age}</td>
        
      </tr>
      
      <th className="mtaddresst">Address:</th>
      <td className="mtaddress">
      <p>{rest.address}</p>
      <p>{rest.city}</p>
      <p>{rest.state}</p>
      </td>
      <tr className="mtcountryt">
        <th>Country:</th>
        <td className="mtcountry">{rest.country}</td>
      </tr>
      <tr>
        <th>
          Email id:
        </th>
        <td>
          {rest.email}
        </td>
      </tr>
      <tr>
        <th>
          Phone.num:
        </th>
        <td>
          {rest.phone}
        </td>
      </tr>

      
  </table>
  
  ))
  }
  </table>

  </div>





</div>
);




}


 
}

export default Empeditttt;