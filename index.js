const apiKey = '790acc060c0641b28fa88e85e06afc75'; // Replace with your actual API key
const apiUrl = 'news.json'; 

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data); // Debugging: log the entire API response
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear previous news

    articles.forEach(article => {
        const articleEl = document.createElement('div');
        articleEl.classList.add('news-article');

        const imageUrl = article.urlToImage || 'https://via.placeholder.com/150'; // Fallback image

        articleEl.innerHTML = `
            <img src="${imageUrl}" alt="News Image">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(articleEl);
    });
}

fetchNews();
