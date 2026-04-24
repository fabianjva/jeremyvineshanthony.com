// Fade in animations
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("vis") })
}, {threshold:0.08})
document.querySelectorAll(".fade-up").forEach(el => obs.observe(el))

// Contact form
const submitBtn = document.getElementById("submitBtn")
if(submitBtn) {
  submitBtn.addEventListener("click", function(){
    this.textContent = "Enquiry Sent — We Will Be In Touch Shortly ✓"
    this.style.background = "#2a6644"
    setTimeout(() => { this.textContent = "Submit Enquiry →"; this.style.background = "" }, 4000)
  })
}
