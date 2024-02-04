const searchInput = document.getElementById('searchInput');
const resultsContainer = document.querySelector('.results');
const searchIcon = document.querySelector('.search');

class Keyword {
  constructor(value) {
    this.value = value.toLowerCase();
  }

  includes(query) {
    return this.value.includes(query);
  }

  startsWith(query) {
    return this.value.startsWith(query);
  }
}

const mockData = [
  { title: 'A Silent Voice', subtitle: 'Drame', keyword:'koe no katachi', imageUrl: 'script/image-recherche/silent-voice-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Assassination Classroom', subtitle: 'Action / Comédie', keyword:'ansatsu kyoushitsu', imageUrl: 'script/image-recherche/assas-class-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Baki-hanma', subtitle: 'Sport', imageUrl: 'script/image-recherche/baki.jpeg', linkUrl: 'https://example.com/page1' },
  { title: 'Black Clover', subtitle: 'Action / Comédie / Fantaisie', imageUrl: 'script/image-recherche/black-clover-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Bleach', subtitle: 'Action / Aventure / Fantaisie', imageUrl: 'https://cdn.statically.io/gh/nocito-streaming/IMG/main/12.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Blue Exorcist', subtitle: 'Action / Fantaisie', keyword:'ao no Exorcist', imageUrl: 'script/image-recherche/blue-exorsist.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Blue lock', subtitle: 'Sport', imageUrl: 'script/image-recherche/blue-lock-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Boruto', subtitle: 'Action / Aventure / Fantaisie', imageUrl: 'script/image-recherche/boruto-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Bunny Girl Senpai', subtitle: 'Drame / Romance / Surnaturel', keyword:'rascal does not dream', imageUrl: 'script/image-recherche/bunny-girl-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Chainsaw Man', subtitle: 'Action / Fantaisie', imageUrl: 'script/image-recherche/chainsaw-man-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Classroom of the Elite', subtitle: 'Drame / Suspense', imageUrl: 'script/image-recherche/class-elite.jpg', linkUrl: 'https://nocito-streaming.netlify.app/Classroom-of-the-elite' },
  { title: 'Code Geass', subtitle: 'Action / Drama / Science-fiction', imageUrl: 'script/image-recherche/code-geass-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'DARLING in the FRANXX', subtitle: 'Action / Drame / Romance / Science-fiction', imageUrl: 'script/image-recherche/darling-franx-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Death Note', subtitle: 'Surnaturel / Suspense', imageUrl: 'https://cdn.statically.io/gh/nocito-streaming/IMG/main/14.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Demon Slayer', subtitle: 'Action / Fantaisie', keyword:'kimetsu no yaiba', keyword:'kny', imageUrl: 'IMG-anime/demon-slayer-min.webp', linkUrl: 'https://example.com/page2' },
  { title: 'Death Parade', subtitle: 'Drame / Surnaturel / Suspense', imageUrl: 'IMG-anime/death-parade-min.webp', linkUrl: 'https://example.com/page2' },
  { title: 'Devilman: Crybaby', subtitle: 'Action / Horreur / Surnaturel', imageUrl: 'script/image-recherche/devilman-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Dororo', subtitle: 'Action / Aventure / Surnaturel', imageUrl: 'script/image-recherche/dororo-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Dr Stone', subtitle: 'Aventure / Comédie / Science-fiction', imageUrl: 'script/image-recherche/dr-stone-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Dragon Ball', subtitle: 'Action / Aventure / Fantaisie', keyword:'dbz', imageUrl: 'https://cdn.statically.io/gh/nocito-streaming/IMG/main/11.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'ERASED', subtitle: 'Mistère / Surnaturel / Suspense', imageUrl: 'script/image-recherche/erased-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Fate', subtitle: 'Action / Fantaisie / Surnaturel', imageUrl: 'script/image-recherche/fate-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Firefighter Daigo', subtitle: 'Action / Drame', keyword:'rescuer in orange', imageUrl: 'moment/firefighter.jpeg', linkUrl: 'https://example.com/page2' },
  { title: 'Fire Force', subtitle: 'Action / Fantaisie / Science-fiction', keyword:'enen no shouboutai', imageUrl: 'script/image-recherche/fire-force-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Food Wars', subtitle: 'Gastronomique / Ecchi', keyword:'shokugeki no soma', imageUrl: 'script/image-recherche/food-wars-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Frieren', subtitle: 'Aventure / Drame / Fantaisie', imageUrl: 'script/image-recherche/frieren-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Fullmetal Alchemist', subtitle: 'Action / Aventure / Drame / Fantaisie', keyword:'fma', imageUrl: 'script/image-recherche/fma-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Fullmetal Alchemist: Brotherhood', subtitle: 'Action / Aventure / Drame / Fantaisie', keyword:'fmab', imageUrl: 'script/image-recherche/fmaB-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Haikyuu!', subtitle: 'Sport', imageUrl: 'IMG-anime/haikyu-min.webp', linkUrl: 'https://example.com/page1' },
  { title: 'Hajime no Ipo', subtitle: 'Sport', keyword:'fighting spirit', imageUrl: 'script/image-recherche/hajime-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Hell\'s Paradise', subtitle: 'Action / Aventure / Fantaisie', keyword:'jigokuraku', imageUrl: 'IMG-anime/hell-paradise-min.webp', linkUrl: 'https://example.com/page1' },
  { title: 'Horimiya', subtitle: 'Romance', imageUrl: 'script/image-recherche/horimiya-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Hunter x Hunter', subtitle: 'Action / Aventure / Fantaisie', keyword:'hxh', imageUrl: 'https://cdn.statically.io/gh/nocito-streaming/IMG/main/7.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Hyouka', subtitle: 'Mistère / Slice-of-life', imageUrl: 'script/image-recherche/hyouka-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Inazuma Eleven', subtitle: 'Sport', imageUrl: 'script/image-recherche/inazuma-eleven-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Initial D', subtitle: 'Action / Drame', imageUrl: 'script/image-recherche/initial-d-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Jojo\'s Bizarre Adventures', subtitle: 'Action / Aventure / Surnaturel', keyword:'jba', imageUrl: 'script/image-recherche/jojo-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Jujutsu kaisen', subtitle: 'Action / Fantaisie', keyword:'jjk', imageUrl: 'image/jujutsu.jpeg', linkUrl: 'https://example.com/page1' },
  { title: 'Kaguya-sama: Love is War', subtitle: 'Comédie / Romance', imageUrl: 'script/image-recherche/kaguya-sama-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Konosuba', subtitle: 'Aventure / Comédie / Fantaisie', imageUrl: 'script/image-recherche/konosuba-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Kuroko no Basket', subtitle: 'Sport', keyword:'knb', imageUrl: 'image/kuroko-basket.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'L\'Attaque des Titans', subtitle: 'Action / Drame / Suspense', keyword:'shingeki no kyojin', keyword:'snk', imageUrl: 'https://cdn.statically.io/gh/nocito-streaming/IMG/main/13.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Made in Abyss', subtitle: 'Action / Drame / Fantaisie / Mistère / Science-fiction', imageUrl: 'script/image-recherche/made-abyss-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Mashle', subtitle: 'Action / Comédie / Fantaisie', imageUrl: 'moment/mashle.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Mob Psycho 100', subtitle: 'Action / Comédie / Surnaturel', keyword:'mp100', imageUrl: 'image/mp100.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'My Hero Academia', subtitle: 'Action', keyword:'mha', imageUrl: 'image/mha.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'My Love Story with Yamada-kun at Lv999', subtitle: 'Romance', keyword:'loving yamada at', imageUrl: 'script/image-recherche/loving-yamada-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Nanbaka', subtitle: 'Action / Comedie / Drame', imageUrl: 'script/image-recherche/nanbaka-barre.jpe', linkUrl: 'https://example.com/page1' },
  { title: 'Naruto', subtitle: 'Action / Aventure / Fantaisie', imageUrl: 'https://cdn.statically.io/gh/nocito-streaming/IMG/main/9.jpeg', linkUrl: 'https://example.com/page2' },
  { title: 'Neon Genesis Evangelion', subtitle: 'Action / Drame / Science-fiction / Suspense', imageUrl: 'script/image-recherche/evangelion-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'No Game, No life', subtitle: 'Comédie / Fantaisie / Ecchi', imageUrl: 'script/image-recherche/no-game-no-life-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Noble New World Adventures', subtitle: 'Action / Fantaisie / Romance', imageUrl: 'moment/noble-new-world-adventures.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Noragami', subtitle: 'Action / Fantaisie', imageUrl: 'script/image-recherche/noragami-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Oshi no Ko', subtitle: 'Drame / Surnaturel', imageUrl: 'script/image-recherche/oshi-no-ko-barre.jpg', linkUrl: 'https://example.com/page2' },  
  { title: 'One piece', subtitle: 'Action / Aventure / Fantaisie', imageUrl: 'https://cdn.statically.io/gh/nocito-streaming/IMG/main/10.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'One punch man', subtitle: 'Action / Comédie', keyword:'opm', imageUrl: 'image/one-punch-man.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Oregairu', subtitle: 'Comédie / Romance', imageUrl: 'script/image-recherche/oregairu-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Overlord', subtitle: 'Isekai / Aventure', imageUrl: 'script/image-recherche/overlord.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Parasite', subtitle: 'Action / Horreur / Science-fiction', imageUrl: 'script/image-recherche/parasite-barre.webp', linkUrl: 'https://example.com/page2' },
  { title: 'Ranking of Kings', subtitle: 'Aventure / Fantaisie', keyword:'rok', imageUrl: 'IMG-anime/ranking-of-kings-min.webp', linkUrl: 'https://example.com/page1' },
  { title: 'Re:ZERO', subtitle: 'Drame / Fantaisie / Suspense', imageUrl: 'script/image-recherche/re-zero-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Rent a Girlfriend', subtitle: 'Comédie / Romance', imageUrl: 'script/image-recherche/rent-girlfriend-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Solo leveling', subtitle: 'Action / Aventure / Fantaisie', imageUrl: 'IMG-anime/solo-leveling.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Soul Eater', subtitle: 'Action / Comédie / Fantaisie', imageUrl: 'IMG-anime/soul-eater.webp', linkUrl: 'https://example.com/page2' },
  { title: 'Spy x Family', subtitle: 'Action / Comédie', keyword:'sxf', imageUrl: 'script/image-recherche/spy-family-barre.jpeg', linkUrl: 'https://example.com/page2' },
  { title: 'Steins;Gate', subtitle: 'Science-fiction / Aventure', imageUrl: 'script/image-recherche/stein-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Suzume', subtitle: 'Aventure / Fantaisie', imageUrl: 'script/image-recherche/suzume-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Sword Art Online', subtitle: 'Action / Aventure / Fantaisie', keyword:'sao', imageUrl: 'script/image-recherche/sao-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Tengoku Daimakyou', subtitle: 'Aventure / Mistère', keyword:'hevendly delusion', imageUrl: 'IMG-anime/tengoku.webp', linkUrl: 'https://example.com/page2' },
  { title: 'The Angel Next Door Spoils Me Rotten', subtitle: 'Romance', imageUrl: 'script/image-recherche/angel-next-door-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'The Danger in My Heart', subtitle: 'Comédie / Romance', imageUrl: 'script/image-recherche/danger-heart-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'The Eminence in Shadow', subtitle: 'Isekai / Comédie / Fantaisie', imageUrl: 'script/image-recherche/eminence-shadow-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'The God of Highschool', subtitle: 'Action / Fantaisie', imageUrl: 'script/image-recherche/god-highschool-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'The Promised Neverland', subtitle: 'Fantaisie / Mistère / Science-fiction / Suspense', keyword:'tpn', imageUrl: 'script/image-recherche/tpn-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'The Quintessential Quintuplets', subtitle: 'Comédie / Romance', keyword:'tqq', imageUrl: 'image/the-qqt.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'The rising of the shield hero', subtitle: 'Action / Aventure / Drame / Fantaisie', imageUrl: 'moment/the-rising-of-the-shield-hero.jpeg', linkUrl: 'https://example.com/page2' },
  { title: 'To Every You I\'ve Loved Before', subtitle: 'Romance / Science-fiction', imageUrl: 'script/image-recherche/every-you-loved-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'To Me, The One Who Loved You', subtitle: 'Romance / Science-fiction', imageUrl: 'script/image-recherche/me-one-loved-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Toilet-Bound Hanako-kun', subtitle: 'Surnaturel', imageUrl: 'script/image-recherche/hanako-kun-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Tokyo Revengers', subtitle: 'Action / Drame / Surnaturel', imageUrl: 'image/tokyo-revengers.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Tonikaku Kawai', subtitle: 'Comédie / Romance', imageUrl: 'script/image-recherche/tonikawa-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Tower of God', subtitle: 'Action / Aventure / Drame / Fantaisie / Mistère', imageUrl: 'script/image-recherche/tower-god-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Violet Evergarden', subtitle: 'Drame / Fantaisie', imageUrl: 'image/v-evergarden.jpeg', linkUrl: 'https://example.com/page2' },
  { title: 'Vinland Saga', subtitle: 'Action / Aventure / Drama', imageUrl: 'script/image-recherche/vinland-saga-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Your Lie in April', subtitle: 'Drame / Romance', imageUrl: 'script/image-recherche/your-lie-in-april-barre.jpg', linkUrl: 'https://example.com/page2' },
  { title: 'Your Name', subtitle: 'Drame / Surnaturel', imageUrl: 'script/image-recherche/your-name-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: 'Zom 100: Bucket List of the Dead', subtitle: 'Action / Comédie / Surnaturel / Suspense', imageUrl: 'script/image-recherche/zom-100-barre.jpg', linkUrl: 'https://example.com/page1' },
  { title: '7th Time Loop', subtitle: 'Fantaisie / Romance', imageUrl: 'moment/7th-time-loop.jpeg', linkUrl: 'https://example.com/page2' },
  { title: '86 Eighty-Six', subtitle: 'Action / Drame / Science-fiction', imageUrl: 'script/image-recherche/eighty-six-barre.jpg', linkUrl: 'https://example.com/page1' }
];

function search(query) {
  const keyword = new Keyword(query);

  const filteredResults = mockData.filter(item => {
    const titleLower = item.title.toLowerCase();
    return (
      titleLower.startsWith(keyword.value) ||
      item.keyword?.startsWith(keyword.value) ||
      titleLower.includes(keyword.value) ||
      item.keyword?.includes(keyword.value)
    );
  });

  const sortedResults = filteredResults.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    const startsWithWeight = (str, keyword) => str.startsWith(keyword) ? 1 : 0;
    const includesWeight = (str, keyword) => str.includes(keyword) ? 1 : 0;

    return (
      startsWithWeight(titleB, keyword.value) - startsWithWeight(titleA, keyword.value) ||
      includesWeight(titleB, keyword.value) - includesWeight(titleA, keyword.value) ||
      titleA.indexOf(keyword.value) - titleB.indexOf(keyword.value)
    );
  });

  if (sortedResults.length === 0) {
    displayNoResultsMessage();
  } else {
    displayResults(sortedResults);
  }
}
function displayResults(results) {
  resultsContainer.innerHTML = '';

  const maxResults = window.innerHeight <= 600 ? 3 : 4;
  const limitedResults = results.slice(0, maxResults);

  limitedResults.forEach((result, index) => {
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result-item');

    const image = new Image();
    image.src = result.imageUrl;
    image.classList.add('result-image');
    resultDiv.appendChild(image);

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('result-details');

    const title = document.createElement('p');
    title.textContent = result.title;
    title.classList.add('result-title');
    detailsDiv.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.textContent = result.subtitle;
    subtitle.classList.add('result-subtitle');
    detailsDiv.appendChild(subtitle);

    resultDiv.appendChild(detailsDiv);
    resultsContainer.appendChild(resultDiv);

    if (index !== limitedResults.length - 1) {
      const hrElement = document.createElement('hr');
      hrElement.classList.add('zorohr');
      resultsContainer.appendChild(hrElement);
    }

    resultDiv.addEventListener('click', function() {
      window.open(result.linkUrl, '_blank');
    });
  });
}

function displayNoResultsMessage() {
  resultsContainer.innerHTML = '';
  const noResultsMessage = document.createElement('p');
  noResultsMessage.textContent = 'Aucun résultat trouvé';
  noResultsMessage.classList.add('result-item', 'no-results');
  resultsContainer.appendChild(noResultsMessage);
}

function clearResults() {
  resultsContainer.innerHTML = '';
}

searchInput.addEventListener('input', function(event) {
  const query = event.target.value.trim();
  search(query);

  if (query.length > 0) {
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.style.display = 'none';
    clearResults();
  }
});

searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const firstResult = document.querySelector('.result-item');
    if (firstResult) {
      window.open(mockData[0].linkUrl, '_blank');
    }
  }
});

document.addEventListener('click', function(event) {
  const clickedElement = event.target;

  if (
    !clickedElement.classList.contains('barre') &&
    !clickedElement.closest('.results')
  ) {
    resultsContainer.style.display = 'none';
    searchInput.value = '';
    clearResults();
  }
});