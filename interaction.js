// Fonction pour envoyer le message chiffré
function sendMessage() {
    const message = document.getElementById('message').value;
    const encryptedMessage = encryptMessage(message);
    document.getElementById('encrypted').innerHTML = `Message crypté : ${encryptedMessage}`;
  }
  
  // Fonction pour déchiffrer le message
  function decrypt() {
    const encryptedMessage = document.getElementById('encrypted').innerHTML.split(':')[1].trim();
    const decryptedMessage = decryptMessage(encryptedMessage);
    document.getElementById('decrypted').innerHTML = `Message décrypté : ${decryptedMessage}`;
  }
  