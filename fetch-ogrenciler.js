import { LitElement, html } from 'lit-element';


class FetchUsers extends LitElement{
   
   
    static get properties(){
        return {data: Object} ;
    }

    connectedCallback(){
        super.connectedCallback();
        this.fetchDataFromUrl();
    }

    fetchDataFromUrl(){
       // fetch('https://jsonplaceholder.typicode.com/users')
       fetch('http://localhost:8080/ogrenci/getAll')
        .then(response => response.json())
        .then(x => { this.data = x})
        .catch(err => console.log(err));
    }
    render(){
      
      return this.data ?   
      html`
      
             <div>
              <h2   style=" margin-left :40px; " >Öğrenciler</h2>
              
                 <ul>
                  ${this.data.map(u => html 
                    `<li>
                    <h3>Ad : ${u.name}</h3>
                    <p>İd :${u.id} - Numara: ${u.number}</p>
                    
                    </li> <hr> 
                `)} 
              </ul> 
          </div>


          ` 
      
      
      : html `<span>Gelmedi</span>`
       
    }
}

customElements.define('fetch-ogrenciler',FetchUsers);