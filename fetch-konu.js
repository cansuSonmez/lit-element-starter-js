import { LitElement,html } from 'lit-element';

class FetchKonu extends LitElement{

    static get properties(){
        return{data:Object};
    }

    connectedCallback(){
        super.connectedCallback();
        this.fetchDataFromUrl();
    }

    fetchDataFromUrl(){
        // fetch('https://jsonplaceholder.typicode.com/users')
        fetch(' http://localhost:8080/konu/getAllKonu')
         .then(response => response.json())
         .then(x => { this.data = x})
         .catch(err => console.log(err));
     }

     render(){
         return this.data ?
         html `
         
         <div>
         <h2 style=" margin-left :40px; " >Konu</h2>
         
            <ul>
             ${this.data.map(u => html 
               `<li>
               <h3>Konu : ${u.konu}</h3>
               <p>İd :${u.konuId} </p>
               
               </li> <hr> 
           `)} 
         </ul> 
     </div>

         `
         :html `<span>Gelmedi</span>`
     }
    }
customElements.define('fetch-konu',FetchKonu);