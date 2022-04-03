import React from 'react'

function Editemployee() {
    return (
        <div className='leave'>
              
            <h1 id='result'>Request Time Off</h1>
            <form action="">

           
            <select  id="restid" >
               {
          this.state.employees.map((rest, i) => (
              <option  key={i} value={rest.id} >{rest.name}</option>
              ))
          }
            </select>
               
            
            <div className='datepick'>
            <div>
            <label>From*</label>
            <input type="date" className="fleave"  id="d1"/>
            <small id="usercheck">
                    select your date
              </small>
            
            </div>
            <h2 className='hyphen'>-</h2>
            <div>
            <label>To*</label>
            <input type="date" className='fleave'  id="d2"/>
            <small id="usercheck2">
                 select your date
              </small>
            </div>
            </div>         
            
            <label className='amountlabel'>Amount*</label>
            <div className='amount1'>
            <div className='amount'>
            <ul id="dateList" className='datelist'></ul>
            </div>
            <div className='totaldays'>
            <span className='total' id="dif"></span>  
            </div>
                    
            </div>
            <small id="amountcheck">
                    enter valid date
              </small>


            
            <label>Note</label>
            <div>
            <textarea className='note' id="notee"></textarea>
            <small id="notecheck">
                    this field cannot be empty
              </small>
            </div>
            <button type="submit" id="btnreq"
             value="Submit">Request Leave</button>
            </form>
            
            

            
            </div>
    );
}

export default Editemployee
