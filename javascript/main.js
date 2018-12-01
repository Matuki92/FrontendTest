'use strict'

function main() {
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');

  // Search user
  const userSearch = async username => {

    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();

    if (response.status === 200) {
      const userRepos = await fetch(`https://api.github.com/users/${username}/repos`)
      const repos = await userRepos.json();

      const data = {
        user,
        repos
      }
      userFound(data)
    } else {
      notFound(username);
    }
  }

  // Event listeners
  searchBtn.addEventListener('click', () => {
    userSearch(searchInput.value);
  });
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      userSearch(searchInput.value);
    }
  });
}

// Load code
window.addEventListener('load', main);