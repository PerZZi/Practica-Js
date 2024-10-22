const agentes = "https://valorant-api.com/v1/agents"

//Inicia la solicitud HTTP a la URL de los agentes.
fetch(agentes)

  .then(response => {

    // Verifica si la respuesta es correcta
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    // Convierte la respuesta a JSON
    return response.json();
  })

  .then(data => {
    // Aquí tienes acceso a los datos de los agentes
    console.log(data)
  })
  .catch(error => {
    // Maneja cualquier error
    console.error('Hubo un problema con la petición fetch:', error);
  });