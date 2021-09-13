/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {

  static get properties(){
    return {data: Object} ;
}
connectedCallback(){
  super.connectedCallback();
  this.fetchDataFromUrl();
}

fetchDataFromUrl(){
  // fetch('https://jsonplaceholder.typicode.com/users')
  fetch('http://localhost:8080/ogretmen/getAllOgretmen')
   .then(response => response.json())
   .then(x => { this.data = x})
   .catch(err => console.log(err));
}


render(){
      
  return this.data ?   
  html`
      <div>

      <h2   style=" margin-left :40px; 
      " >Öğretmenler</h2>
      
         <ul>
          ${this.data.map(u => html 
            `<li>
            <h3>Ad : ${u.ogretmenName}</h3>
            <p>İd :${u.ogretmenId}  </p>
            
            </li> <hr> 
        `)} 
      </ul> 
      </div>

      ` 
  
  
  : html `<span>Gelmedi</span>`
   
}

  
}

window.customElements.define('fetch-ogretmenler', MyElement);
