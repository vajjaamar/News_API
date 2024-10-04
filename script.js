document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "Yahoo Entertainment" },
                author: "Josh Schafer",
                title: "A critical labor report meets a stock market at record highs: What to know this week",
                description: "The September jobs report highlights the coming trading week as investors search for clues on how rapidly the labor market is cooling.",
                url: "https://finance.yahoo.com/news/a-critical-labor-report-meets-a-stock-market-at-record-highs-what-to-know-this-week-113035514.html/",
                urlToImage: "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
                publishedAt: "2024-09-29T11:30:35Z",
                content: "For the week, the S&amp;P 500 and Dow Jones Industrial Average (^DJI) were up about 0.7%..."
            },
            {
                source: { id: "abc-news", name: "ABC News" },
                author: "The Associated Press",
                title: "Elon Musk to join Trump at rally at the site of first assassination attempt",
                description: "Billionaire Elon Musk will join Donald Trump at a rally at the site of the former president's July assassination attempt",
                url: "https://abcnews.go.com/Politics/wireStory/elon-musk-join-trump-rally-site-assassination-attempt-114498648",
                urlToImage: "https://i.abcnewsfe.com/a/266be626-6ae0-4abc-a942-ec3d3e394f12/wirestory_4f7d510c1b86f7cced7ca87e77876ad2_16x9.jpg?w=1600",
                publishedAt: "2024-10-04T14:46:26Z",
                content: "Elon Musk will join Donald Trump at his rally Saturday in Butler, the Pennsylvania city where the Republican presidential nominee survived an assassination attempt earlier this year.\r\nI will be there… [+1502 chars]"
            },
            {
                source: { id: null, name: "Biztoc.com" },
                author: "marketbeat.com",
                title: "Silver Lake Advisory LLC Acquires New Position in Tesla, Inc. (NASDAQ:TSLA)",
                description: "Silver Lake Advisory LLC bought a new position in Tesla, Inc. in the 2nd quarter, according to the company in its most recent disclosure...",
                url: "https://biztoc.com/x/5f2638e60c125b7d",
                urlToImage: "https://biztoc.com/cdn/5f2638e60c125b7d_s.webp",
                publishedAt: "2024-09-29T11:28:47Z",
                content: "Silver Lake Advisory LLC bought a new position in Tesla, Inc..."
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});
