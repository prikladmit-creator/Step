// Stats animation
const counters = document.querySelectorAll('.stat-number');
const speed = 100;

const animateStats = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    const isVisible = counter.getBoundingClientRect().top < window.innerHeight;
    if (isVisible) {
      updateCount();
    }
  });
};

window.addEventListener('scroll', animateStats);

// Contact form
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    document.getElementById('formSuccess').style.display = 'block';
    form.reset();
  }
});
