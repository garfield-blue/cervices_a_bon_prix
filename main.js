function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      alert("Texte copié : " + text);
    }, function(err) {
      alert("Échec de la copie");
    });
  }
