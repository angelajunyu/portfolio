const wash = document.querySelector('.image-wash');
const imageProjects = document.querySelectorAll('[data-image]');

imageProjects.forEach((project) => {
  project.addEventListener('pointerenter', () => {
    wash.style.backgroundImage = `url("${project.dataset.image}")`;
    document.body.classList.add('is-viewing');
  });
  project.addEventListener('pointerleave', () => document.body.classList.remove('is-viewing'));
  project.addEventListener('focus', () => {
    wash.style.backgroundImage = `url("${project.dataset.image}")`;
    document.body.classList.add('is-viewing');
  });
  project.addEventListener('blur', () => document.body.classList.remove('is-viewing'));
});
