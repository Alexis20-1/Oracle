function mostrar() {
    const inputElement = document.getElementById('ingresa');
    const pElement = document.getElementById('ver');
    const regex = /^[a-z !]+$/;

  if (!regex.test(inputElement.value)) {
    alert("El texto solo puede contener letras minúsculas, espacios y sin acentos.");
    inputElement.value = "";
    return;
  }
  
    const vowels = {
      a: 'ai',
      e: 'enter',
      i: 'imes',
      o: 'ober',
      u: 'ufat'
    }
  
    let encryptedText = '';
    const inputText = inputElement.value;
  
    for (let i = 0; i < inputText.length; i++) {
      const letter = inputText[i];
  
      if (vowels.hasOwnProperty(letter)) {
        encryptedText += vowels[letter];
      } else {
        encryptedText += letter;
      }
    }
  
    pElement.textContent = encryptedText;
  
    document.getElementById('copy').style.display = 'inline';
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2').style.display = 'none';
    document.getElementById('ver').style.display = 'inline';
  }
  
  
function ocultar(){
    document.getElementById('copy').style.display = 'none';
    document.getElementById('ver').style.display = 'none';
    document.getElementById('imagen').style.display = 'inline';
    document.getElementById('texto1').style.display = 'inline';
    document.getElementById('texto2').style.display = 'inline';
    document.getElementById('ingresa').value = '';
}

function copiar() {
    // Obtener el elemento <p> y su contenido
    var texto = document.getElementById("ver").textContent;
    
    // Copiar el contenido al portapapeles
    navigator.clipboard.writeText(texto);
  }
  // Función para desencriptar el texto
  function desencriptar() {
    const inputElement = document.getElementById('ingresa');
    const pElement = document.getElementById('ver');
    const regex = /^[a-z !]+$/;

    if (!regex.test(inputElement.value)) {
      alert("El texto solo puede contener letras minúsculas, espacios y sin acentos.");
      inputElement.value = "";
      return;
    }
  
    const vowels = {
      'ai': 'a',
      'enter': 'e',
      'imes': 'i',
      'ober': 'o',
      'ufat': 'u'
    }
  
    let decryptedText = '';
    let currentIndex = 0;
    const inputText = inputElement.value.trim();
  
    while (currentIndex < inputText.length) {
      let found = false;
      for (let i = 5; i > 0; i--) { // buscamos primero las combinaciones más largas
        const substring = inputText.substr(currentIndex, i);
        if (vowels.hasOwnProperty(substring)) {
          decryptedText += vowels[substring];
          currentIndex += i;
          found = true;
          break;
        }
      }
      if (!found) { // si no encontramos ninguna combinación, usamos la letra original
        decryptedText += inputText[currentIndex];
        currentIndex++;
      }
    }
  
    pElement.textContent = decryptedText;
  
    document.getElementById('copy').style.display = 'inline';
    document.getElementById('imagen').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2').style.display = 'none';
    document.getElementById('ver').style.display = 'inline';
  }
  