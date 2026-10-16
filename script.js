// Initialize Lucide icons
lucide.createIcons();

// Copy Email function
function copyEmail() {
    const emailText = document.getElementById('email-text').innerText;
    const copyBtn = document.getElementById('copy-btn');

    // Copying to clipboard safely
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    copyBtn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i><span>copied!</span>`;
    lucide.createIcons();
    setTimeout(() => {
        copyBtn.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5"></i><span>copy</span>`;
        lucide.createIcons();
    }, 2000);
}

// Toggle collapsible deep dive project notes
function toggleDeepDive(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
}

// Form submission simulation
function handleContactSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success-msg');
    
    form.style.opacity = '0.4';
    form.querySelectorAll('input, textarea, button').forEach(el => el.setAttribute('disabled', 'true'));
    
    setTimeout(() => {
        form.style.display = 'none';
        successMsg.classList.remove('hidden');
    }, 500);
}