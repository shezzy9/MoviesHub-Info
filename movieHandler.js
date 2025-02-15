class MovieHandler {
    constructor() {
        this.movies = [];
        this.loadMovies();
    }

    async loadMovies() {
        try {
            const response = await fetch('/js/movies.json');
            const data = await response.json();
            this.movies = data.movies;
            this.displayMovies();
        } catch (error) {
            console.error('Error loading movies:', error);
        }
    }

    displayMovies() {
        const movieGrid = document.querySelector('.movie-grid');
        if (!movieGrid) return;

        movieGrid.innerHTML = this.movies.map(movie => `
            <div class="movie-card">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <div class="rating">★★★★★ ${movie.rating}/10</div>
                    <p class="review-preview">${movie.review.summary}</p>
                    <a href="reviews/${movie.id}.html" class="read-more">Read Review</a>
                </div>
            </div>
        `).join('');
    }

    generateReviewPage(movieId) {
        const movie = this.movies.find(m => m.id === movieId);
        if (!movie) return null;

        return `
            <!-- Review page HTML template -->
            ${this.getReviewTemplate(movie)}
        `;
    }

    getReviewTemplate(movie) {
        // Return the HTML template for the review page
        return `
            <!DOCTYPE html>
            <html lang="en">
            <!-- Review page template -->
            </html>
        `;
    }
} 