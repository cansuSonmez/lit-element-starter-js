import {
    LitElement,
    html
} from 'lit-element'

class FetchPost extends LitElement {

    render() {
        return html `
        <form id="myForm" @submit=${this.postFormData}>
            
        <div>
        <label for="number" >Numara</label>
        <input type="text" name="number" id="number">
    </div>
    <div>
        <label for="name" >Kullanıcı Adı</label>
        <input type="text" name="name" id="name">
    </div>
            
            <button type="submit">Öğrenci Ekle</button>
        </form>`
    }


    postFormData(event) {
       
       event.preventDefault();
        //console.log('form gönderildi...');
        let form = this.shadowRoot.getElementById('myForm');
        //console.log(form);

        let formData = new FormData(form);  
      
      const ogrenci={number:formData.get("number"),
                     name:formData.get("name")};

        fetch('http://localhost:8080/ogrenci/insert', {
            method: 'POST',
            headers: {               Accept: 'application/json', 'Content-Type': 'application/json; charset=utf8',  },
            body: JSON.stringify(ogrenci)
          })
          .then(response=>response.json())
        .then(y=>console.log(y))
        .catch(err=>console.log(err));

     
      
          //let result = await response.json();
      
        console.log('Getting key: '+ formData.get('title'));
        console.log(formData);

    
    }
       
      
       


}

customElements.define('fetch-post', FetchPost);