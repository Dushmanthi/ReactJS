import React, { Component } from 'react';
class Onboarding extends Component {
    state = {  }
    render() { 
       return ( 
         <div class="container">
            <form>
            <label>
                 <h3> Defect Tracker Form</h3>  
            </label>
            <br/>
                  <label>
                    Defect Id<input type="text" name="defectId"  placeholder="Enter defect id here"/>
                  </label>
           <br/>
                  <label>
                      Defect Name<input type="text" name="defectName" placeholder="Enter defect name here" />
                  </label>
           <br/>

           <label>
                     Severity<select>
                                  <option value="high">High</option>
                                  <option value="medium">Medium</option>
                                  <option selected value="low">Low</option>
                                </select>
                  </label>
           <br/>
            
           <label>
                  Priority<select>
                                  <option value="high">High</option>
                                  <option value="medium">Medium</option>
                                  <option selected value="low">Low</option>
                                </select>
            </label>
            <br/>

            <label>
                  Assigned Employee<select>
                                  <option value="e1">e1</option>
                                  <option value="e2">e2</option>
                                  <option selected value="e3">e3</option>
                                </select>
            </label>
            <br/>
            

            <label>
                  Status<select>
                                  <option value="open">Open</option>
                                  <option value="finished">Finished</option>
                                  <option selected value="new">New</option>
                                </select>
            </label>
            <br/>

             <input type="submit" value="Add" />  <input type="submit" value="Clear" />
            </form>
         </div>

         );
    }
}
 
export default Onboarding;