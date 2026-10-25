document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
document.querySelector('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you") 