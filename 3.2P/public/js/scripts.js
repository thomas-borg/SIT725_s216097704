// 1. Build and append a new book card to #card-section
const addCard = (book) => {
    const cardSection = document.getElementById('card-section');
    const cardHTML = `
        <div class="col s12 m6 l4">
            <div class="card hoverable">
                <div class="card-image">
                    <img src="${book.image}" alt="${book.title} Cover">
                </div>
                <div class="card-content">
                    <span class="card-title truncate">${book.title}</span>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p>${book.description}</p>
                </div>
                <div class="card-action">
                    <a class="modal-trigger more-info-btn" href="#info-modal">More Info</a>
                </div>
            </div>
        </div>
    `;
    cardSection.insertAdjacentHTML('beforeend', cardHTML);
};

// 2. Capture modal inputs, build Open Library URL from ISBN, and add card
const submitForm = () => {
    const isbn = document.getElementById('isbn').value.trim();

    const baseUrl = 'https://' + 'covers.openlibrary.org' + '/b/isbn/';
    const fallbackUrl = 'https://' + 'placehold.co' + '/400x300/26a69a/white?text=No+Cover';

    let formData = {};
    formData.title = document.getElementById('title').value;
    formData.author = document.getElementById('author').value;
    formData.isbn = isbn;
    formData.image = isbn ? baseUrl + isbn + '-L.jpg' : fallbackUrl;
    formData.description = document.getElementById('description').value;

    console.log("Form Data Submitted: ", formData);

    if (formData.title) {
        addCard(formData);
        document.getElementById('book-form').reset();
    }
};

// 3. Initialize Modals, Character Counter, and Click Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialise modals
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // Initialise char counter on description textarea
    const textareas = document.querySelectorAll('textarea#description');
    M.CharacterCounter.init(textareas);

    // Save Book button listener
    const submitBtn = document.getElementById('form-submit');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitForm);
    }

    // Populate #info-modal when "More Info" link is clicked
    document.getElementById('card-section').addEventListener('click', (e) => {
        if (e.target.classList.contains('more-info-btn')) {
            const card = e.target.closest('.card');
            const paragraphs = card.querySelectorAll('.card-content p');

            document.getElementById('info-title').textContent = card.querySelector('.card-title').textContent;
            document.getElementById('info-author').innerHTML = paragraphs[0].innerHTML;
            document.getElementById('info-description').textContent = paragraphs[1].textContent;
        }
    });
});
