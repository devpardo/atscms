import axios from 'axios'

export default {
  retrieveToken(context, credentials) {
    
    return new Promise((resolve, reject) => {
      let creds = {
        username : credentials.username,
        password : credentials.password
      }

      axios.post('login', creds).then(response => {
        
        let token = response.data.token;

        if(!token) {
          reject(response.data.message);
        } else {
          resolve(response);

          let user = {
            user : response.data.user_id,
            token : token
          }

          localStorage.setItem('accessToken', user.token);
          localStorage.setItem('user', user.user);
          context.commit('retrieveToken', user.token);
          context.commit('storeUser', user.user);

          axios.post('login/token', user).then(res => {
            
          }).catch(err => {
            reject(error);
          });
        }
      }, error => {
        reject(error);
      })
    })
  },
  addErrors(context, data) {

    let errData = {
      status : true,
      errorMessage : data
    }

    if(data == '') {
      errData.status = false;
    }

    context.commit('hasError', errData);
  },
  destroyToken(context, data) {
    if(context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        axios.post('login/deletetoken', data).then(response => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('user');
          context.commit('destroyToken');
          context.commit('removeUser');
          resolve(response);
        }, error => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('user');
          context.commit('destroyToken');
          context.commit('removeUser');
          reject(error);
        })
      })
    }
  }
}