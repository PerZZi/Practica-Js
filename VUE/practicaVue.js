const api = "https://valorant-api.com/v1/agents"// creo la variable para llamar a la api
const { createApp } = Vue

  createApp({
    data() {
      return {
        agentes:[]
      }
    },

    beforeCreate(){
        fetch(api)
        .then(res => res.json())
        .then((response) => {
            console.log(response)
            this.agentes = response.data
        })
        .catch(error => console.log(error))
    }
  }).mount('#app')