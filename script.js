document.querySelectorAll('.redirect-home').forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = 'home.html';
    });
  });
  