// Fonction pour chiffrer le message
function encryptMessage(message) {
    // Ici, tu peux utiliser n'importe quel algorithme de chiffrement, mais pour cet exemple, nous utilisons un chiffrement de substitution simple
    const encryptedMessage = message.replace(/[a-zA-Z]/g, function(char) {
      return String.fromCharCode(char.charCodeAt(0) + 1);
    });
    return encryptedMessage;
  }
  
  // Fonction pour déchiffrer le message
  function decryptMessage(message) {
    const decryptedMessage = message.replace(/[a-zA-Z]/g, function(char) {
      return String.fromCharCode(char.charCodeAt(0) - 1);
    });
    return decryptedMessage;
  }
  