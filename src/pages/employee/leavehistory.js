import React, { Component } from 'react';
import $ from 'jquery';
//import './leave.css';
import { API, graphqlOperation } from 'aws-amplify'
import { listLeaveRequests } from '../employee/graphql/queries';
import './leave.css'
import { updateLeaveRequest } from './graphql/mutations';

class Leavehistory extends Component{
  
        state = {  employees: [],
          statusid:[],
          originalResults: [],
          displayResults: []
         }
      
        
      
        
        async componentDidMount() {
          try {
            
            const apiData = await API.graphql(graphqlOperation(listLeaveRequests))
            const employees = apiData.data.listLeaveRequests.items  
            const statusid=apiData.data.listLeaveRequests.items.id
            this.setState({statusid})          
            this.setState({ employees })
            this.setState({ originalResults: employees, displayResults: employees });                   
            
          } catch (err) {
            console.log('error: ', err)
          }
        
          $(document).ready(function () {
            //document.getElementById('hiibro').click();
            $('.hiibro').each(function() {
              this.click();
              

            });
          })
          
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
                if (a.leavedate > b.leavedate) {
                  return -1;
                }
                return a.leavedate > b.leavedate ? 1 : 0;
              });
            } else {
              displayResults.sort((a, b) => {
                if (a.leavedate < b.leavedate) {
                  return -1;
                }
                return a.leavedate > b.leavedate ? 1 : 0;
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
                if (a.leavename > b.leavename) {
                  return -1;
                }
                return a.leavename > b.leavename ? 1 : 0;
              });
            } else {
              displayResults.sort((a, b) => {
                if (a.leavename < b.leavename) {
                  return -1;
                }
                return a.leavename > b.leavename ? 1 : 0;
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

        handleClick = async (id,leavenote) =>{

          let btnSend = document.getElementById(id);
          let message =document.getElementById(leavenote);
          
          btnSend.style.display = "none";
          message.innerText = 'Cancelled';
          console.log(id);
          try {
            var status = message.innerText;
            const value = { id,status}     
            await API.graphql(graphqlOperation(updateLeaveRequest, {input: value}))
            alert('Data is inserted..')
            window.location.reload();
          } catch (err) {
            console.log('error: ', err)
          }

        } 

        autoCompare = async(id,status)=>{
          //let btncompare = status.length;
          //let btnsss = document.getElementById().value;
          
          console.log(status.length)
          

          if(status.length == 9){
            $("#"+id).hide();
          }
          else{
            $("#"+id).show();
          }
        }

       

    render(){
     


      
 
        return(
        <div className='leave' >
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <select 
          className='nameselect'
          onChange={this.onChange}>
          {
          this.state.employees.map((rest, i) => (
              <option className='optiondd' key={i} value={rest.name} >{rest.name}</option>
              ))
          } 
          </select>
        <div>
        <table>
        <tbody>
        <tr className="leavetable">
        <th className='namey'>Name
        <button onClick={this.sortResults}className='sortbtn'><i className="fa fa-sort"></i></button>
        </th>
        <th className='datey'>Date
        <button onClick={this.sortResultsage} className='sortbtn'><i className="fa fa-sort"></i></button>
        </th>
        <th className='descrip'>Description</th>
        <th className='usedey'>Used</th>
        <th className='status'>Status</th>
        </tr>
        </tbody>
        <tbody>
        {
      this.state.displayResults.map((rest, i) => (
      
      <tr key={i} className='apidata'>
      <td>{rest.leavename}</td>
      <td>{rest.leavedate}</td>
      <td>{rest.leavenote}</td>
      <td>{rest.leavedays}</td>
      <td ><button id={rest.id} className='statusbtn'
       onClick={() => this.handleClick(rest.id,rest.leavenote) } value='cancel'>Cancel</button>
      <h4 id={rest.leavenote}>{rest.status}</h4>
      <button className='hiibro'  onClick={()=>this.autoCompare(rest.id,rest.status)}></button>
      </td>
    </tr>  
    
    ))
    }
    </tbody>
        </table>
        </div>
        </div>
        )
    }
}

export default Leavehistory;