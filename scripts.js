function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert("Veuillez remplir tous les champs.");
      return false;
    }
    return true;
  }
  