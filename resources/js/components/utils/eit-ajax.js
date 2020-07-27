import {LitElement, html} from 'lit-element';

class EitAjax extends LitElement {
  static get properties() {
    return {
      data: {  type: Object },
      method: { type: String },
      url: { type: String }
    }
  }

  constructor() {
    super();
    this.data = {};
    this.method = 'post';
    this.url = '';
  }

  generateRequest() {
    let request;
    //console.log('generateRequest', this.url);
    switch(this.method.toLowerCase().trim()) {
      case 'post':
        request = axios.post(this.url, this.data);
        break;
      case 'get':
        request = axios.get(this.url, this.data);
        break;
      case 'put':
        request = axios.put(this.url, this.data);
        break;
      case 'delete':
        request = axios.delete(this.url, this.data);
        break;
    }
    request.then((response) => {
      if(response.status == 200) {
        let res = response.data;
        //console.log('res request eit-ajax', res)
        if(res.error) {
          throw res.data;
        } else {
          this.dispatchEvent(new CustomEvent('ajax-success', {
            detail: res.data
          }));
        }
      } else {
        throw 'Conexión con servidor deficiente';
      }
    })
    .catch(err => {
      if(err.response) {
        const status = err.response.status;
        switch(status) {
          case 419:
            this.dispatchEvent(new CustomEvent('ajax-error', {
              detail: 'Tu sesión ha caducado. Refresca la página'
            }));
            break;
          default:
            this.dispatchEvent(new CustomEvent('ajax-error', {
              detail: 'Acción no completada por error en el servidor'
            }));
        }
      } else {
        this.dispatchEvent(new CustomEvent('ajax-error', {
          detail: err
        }));
      }
    }) 
  }
}

customElements.define('eit-ajax', EitAjax);