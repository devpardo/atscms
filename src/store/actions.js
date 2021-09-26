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

          axios.post('login/token', user).then(res => {
            console.log(res);
            localStorage.setItem('accessToken', token);
            context.commit('retrieveToken', token);
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
  }
}