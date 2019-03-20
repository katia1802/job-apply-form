import React, { Component } from 'react';

class Form extends Component {
    render() { 
        return ( 

            <main>
            <div>
              <h2>Job Apply Form</h2>
              <p>Please fill the form </p>
              <p>
                All areas with <span>*</span> required
              </p>
              <form>
                <div>
                  <label>Date Birth</label>
                  <select />
                </div>
                {/* <div>
                  <label>email address</label>
                  <input>holi</input>
                </div>
                <div>
                  <label>Gender</label>
                  <select />
                </div>
                <div>
                  <label>Address</label>
                  <input />
                </div>
                <div>
                  <label>Zipcode</label>
                  <input>OJO VALOR NUMERICO</input>
                </div> */}
              </form>
            </div>
          </main>

         );
    }
}
 
export default Form;