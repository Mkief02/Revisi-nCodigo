
// En esta parte se puede simplificar el acceso a la API con una única variable
// const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `https://api.github.com/users`;
// Se agregó el caractér "." antes de "name" para referenciar dicha clase y se acmbió el nombre de las variables por unas que aportaran mayor contexto
const name = document.querySelector('.name');
// Se cambió el caractér "#" antes de "blog" por "." para acceder a la clase
const blog = document.querySelector('.blog');
const location = document.querySelector('.location');

// Se modificó por una función asíncrona
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);