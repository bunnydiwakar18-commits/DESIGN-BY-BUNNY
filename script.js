
    // Form Submit (Login Simulation)
    function handleFormSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('emailField').value;
      const btn = document.getElementById('btnLogin');

      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Logging in...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = 'Login';
        btn.disabled = false;
        showToast(`Successfully logged in as ${email}!`);
      }, 800);
    }

    // Sign Up Button Action
    document.getElementById('btnSignup').addEventListener('click', () => {
      showToast('Redirecting to Registration form...');
    });

    // Forgot Password Action
    document.getElementById('linkForgot').addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Password recovery link sent!');
    });

    // View More Action
    document.getElementById('btnViewMore').addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Exploring more features...');
    });

    // Toast helper
    function showToast(msg) {
      const toast = document.getElementById('feedbackToast');
      document.getElementById('toastText').textContent = msg;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3200);
    }