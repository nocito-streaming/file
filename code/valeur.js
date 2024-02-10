function changeEpisode() {
    var episodeSelector = document.getElementById("episode-selector");
    var lastWatchedEpisode = document.getElementById("last-watched-episode");

    // Obtenez la valeur de l'option sélectionnée
    var selectedOption = episodeSelector.options[episodeSelector.selectedIndex];

    // Sauvegardez la valeur dans le localStorage
    localStorage.setItem("lastWatchedEpisode", selectedOption.text);

    // Mettez à jour le texte de l'élément <h3>
    lastWatchedEpisode.innerHTML = "Le dernier épisode que vous avez regardé est : " + selectedOption.text;
  }

  // Chargez la dernière valeur regardée depuis le localStorage lors du chargement de la page
  window.onload = function() {
    var lastWatchedEpisode = document.getElementById("last-watched-episode");
    var lastWatchedEpisodeValue = localStorage.getItem("lastWatchedEpisode");

    // Vérifiez si une valeur existe dans le localStorage
    if (lastWatchedEpisodeValue) {
      lastWatchedEpisode.innerHTML = "Le dernier épisode que vous avez regardé est : " + lastWatchedEpisodeValue;
    }
  };