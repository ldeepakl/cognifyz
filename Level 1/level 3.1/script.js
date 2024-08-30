const contentDiv = document.getElementById('content');
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch posts from the API
async function fetchPosts() {
    try {
        // Fetch data from the API
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        const data = await response.json();
        // Clear existing content
        contentDiv.innerHTML = '';

        // Dynamically create and append posts
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            contentDiv.appendChild(postElement);
        });
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '<p>Failed to load data. Please try again later.</p>';
    }
}
fetchPosts();
