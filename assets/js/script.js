var button = document.getElementById('read-button');

button.addEventListener('click', function() {
    var card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'Read less';
    } else {
        button.textContent = 'Read more'
    }
});