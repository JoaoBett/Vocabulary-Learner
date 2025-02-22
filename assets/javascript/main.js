document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("landingForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const subscribeButton = document.getElementById("subButton");
    const email = document.getElementById("email").value;
    const language = document.getElementById("language").value;

    if (!email || !language) {
      showToast("Please fill in your email", "error");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    subscribeButton.disabled = true;
    subscribeButton.textContent = 'Submitting...';

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      showToast('Thank you for subscribing. We\'ll be in touch soon!', 'success');
      
      // Reset form
      document.getElementById('landingForm').reset();
    } catch (error) {
      showToast('An error occurred. Please try again.', 'error');
    } finally {
      // Reset button state
      subscribeButton.disabled = false;
      subscribeButton.textContent = 'Get Started';
    }
  })
})
;

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `show ${type}`;
  
  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 3000);
}

function isValidEmail(email) {
  email = email.trim();

  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  if (
    atIndex > 0 && 
    dotIndex > atIndex + 1 && 
    dotIndex < email.length - 1
  ) {
    return true;
  }

  return false;
}
