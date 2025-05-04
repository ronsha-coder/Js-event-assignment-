// 1. Event Handling
document.getElementById('colorBtn').addEventListener('click', () => {
  alert('Button clicked!');
  document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
  document.getElementById('hoverBox').style.backgroundColor = 'lightgreen';
});

document.getElementById('hoverBox').addEventListener('mouseout', () => {
  document.getElementById('hoverBox').style.backgroundColor = 'lightblue';
});

document.getElementById('keypressInput').addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Bonus: Double-click secret
document.getElementById('colorBtn').addEventListener('dblclick', () => {
  alert('Secret double-click revealed!');
});

// 2. Interactive Elements
document.getElementById('changeTextBtn').addEventListener('click', () => {
  const text = document.getElementById('textElement');
  text.textContent = "Text changed!";
  text.style.color = 'red';
});

const images = [
  "https://via.placeholder.com/200?text=1",
  "https://via.placeholder.com/200?text=2",
  "https://via.placeholder.com/200?text=3"
];
let currentImage = 0;

document.getElementById('nextImage').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentImage];
});

// Tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    document.getElementById(tab.dataset.target).classList.remove('hidden');
  });
});

// 3. Form Validation
document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('formFeedback');

  if (!/\S+@\S+\.\S+/.test(email.value)) {
    feedback.textContent = "Invalid email format!";
    feedback.style.color = 'red';
    return;
  }

  if (password.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters!";
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = 'green';
});

// Bonus: Real-time feedback
document.getElementById('password').addEventListener('input', (e) => {
  const feedback = document.getElementById('formFeedback');
  if (e.target.value.length < 8) {
    feedback.textContent = "Password too short";
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = "";
  }
});
