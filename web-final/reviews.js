// Sample review data
// Sample review data
const reviews = [
    {
        title: "Vibrant and Diverse",
        text: "Kensington Market is a true gem in Toronto. Its vibrant atmosphere, diverse range of food vendors, and unique boutiques make it a must-visit spot for both locals and tourists.",
        stars: 5,
    },
    {
        title: "Historic Charm",
        text: "The Distillery District is a charming and historic area with cobblestone streets, art galleries, and unique shops. The restored industrial buildings create a one-of-a-kind ambiance that's perfect for exploration.",
        stars: 4,
    },
    {
        title: "Eclectic Delights",
        text: "Kensington Market is a paradise for foodies and art enthusiasts. The mix of cultures and flavors creates a unique experience, and you'll find everything from mouthwatering street food to local handcrafted treasures.",
        stars: 5,
    },
    {
        title: "Cultural Haven",
        text: "The Distillery District is a cultural haven in the heart of Toronto. It's a great place to soak up the city's artistic side, with galleries, artisanal shops, and a rich history that adds to its allure.",
        stars: 4,
    },
    {
        title: "Hidden Treasures",
        text: "Kensington Market is full of hidden treasures waiting to be discovered. Exploring its narrow streets is like embarking on a treasure hunt, where each corner reveals something unique and exciting.",
        stars: 5,
    },
    {
        title: "A Step Back in Time",
        text: "Walking through the Distillery District feels like taking a step back in time. The preserved architecture and vintage charm create a nostalgic atmosphere, and there's always something new to discover around every corner.",
        stars: 5,
    },
    // Add more reviews here...
];

// Function to generate review cards
function generateReviewCards() {
    const reviewContainer = document.getElementById("reviewContainer");

    reviews.forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        const title = document.createElement("h2");
        title.classList.add("review-title");
        title.textContent = review.title;

        const text = document.createElement("p");
        text.classList.add("review-text");
        text.textContent = review.text;

        const stars = document.createElement("div");
        stars.classList.add("stars");
        stars.textContent = "★".repeat(review.stars);

        reviewCard.appendChild(title);
        reviewCard.appendChild(text);
        reviewCard.appendChild(stars);

        reviewContainer.appendChild(reviewCard);
    });
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();

    const newReviewForm = document.getElementById("newReviewForm");
    const reviewTitle = document.getElementById("reviewTitle").value;
    const reviewText = document.getElementById("reviewText").value;
    const reviewStars = parseInt(document.getElementById("reviewStars").value);

    const newReview = {
        title: reviewTitle,
        text: reviewText,
        stars: reviewStars,
    };

    reviews.push(newReview);
    generateReviewCards();

    newReviewForm.reset();
}

// Call the function to generate review cards when the page loads
window.onload = function () {
    generateReviewCards();

    const newReviewForm = document.getElementById("newReviewForm");
    newReviewForm.addEventListener("submit", handleFormSubmission);
};
