const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

// Load existing feedback from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedFeedback = JSON.parse(localStorage.getItem("feedbacks")) || [];
  savedFeedback.forEach(addFeedbackToUI);
});

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = document.getElementById("category").value;
  const feedback = document.getElementById("feedback").value;
  const rating = document.getElementById("rating").value;

  if (!category || !feedback) return;

  const feedbackData = { category, feedback, rating, date: new Date().toLocaleString() };

  // Save to localStorage
  const savedFeedback = JSON.parse(localStorage.getItem("feedbacks")) || [];
  savedFeedback.push(feedbackData);
  localStorage.setItem("feedbacks", JSON.stringify(savedFeedback));

  addFeedbackToUI(feedbackData);

  form.reset();
});

// Function to display feedback
function addFeedbackToUI(data) {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>[${data.category}]</strong> (${data.rating}⭐) <br>
    ${data.feedback} <br>
    <small>${data.date}</small>
  `;
  feedbackList.appendChild(li);
}
