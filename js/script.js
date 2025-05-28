// Fonction pour rechercher dans le contenu de la page
function searchContent() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const items = document.querySelectorAll('ul li a'); // Sélectionne tous les liens dans les listes (write-ups et projets)
  
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.parentElement.style.display = ''; // Affiche l'élément si la recherche correspond
      } else {
        item.parentElement.style.display = 'none'; // Cache l'élément si la recherche ne correspond pas
      }
    });
  }
  