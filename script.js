document.getElementById("contactForm").addEventListener("submit", function(e){
 e.preventDefault();
 document.getElementById("message").textContent="Thank you. Your inquiry has been received.";
 this.reset();
});