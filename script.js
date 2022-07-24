// Github API url
const API_URL = 'https://api.github.com/users/';

// Default example username
let profileName = 'birobirobiro';

// Selectors
const username = document.querySelector('.username');
const profileAvatar = document.querySelector('.avatar-img');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const repository = document.querySelector('.repository');
const company = document.querySelector('.company');
const local = document.querySelector('.location');
const inputValue = document.getElementById('input_value');
const search = document.querySelector('.fa-search');

// Fetch Github profile information
function getProfile(profileName) {
  fetch(`${API_URL}${profileName}`)
    .then((response) => response.json())
    .then((data) => {
      const city =
        data.location === null ? 'Unknown' : data.location.split(',')[0];

      profileAvatar.style.backgroundImage = `url('${data.avatar_url}')`;
      username.innerHTML = `${data.login}`;
      followers.innerHTML = `${data.followers} ${
        data.followers !== 1 ? 'Seguidores' : 'Seguidor'
      }`;
      following.innerHTML = `${data.following} Seguindo`;
      repository.innerHTML = `${data.public_repos} ${
        data.public_repos !== 1 ? 'Repositórios' : 'Repositório'
      }`;
      company.innerHTML = `${data.company === null ? 'Unknown' : data.company}`;
      local.innerHTML = `${city !== null ? city : ''}`;
    });
}

// Change card border color
function changeColor() {
  const randNumbers = [];
  for (i = 0; i <= 2; i++) {
    const randomNumber = Math.floor(Math.random() * 255);
    randNumbers.push(randomNumber);
  }
  const card = document.querySelector('.card').style;

  card.borderColor = `rgb(${randNumbers[0]},${randNumbers[1]},${randNumbers[2]})`;
}

// Search for a new Github user
function searchUser() {
  let profileName = inputValue.value;

  getProfile(profileName);
}

search.addEventListener('click', searchUser);

// Initiate profile search
getProfile(profileName);
