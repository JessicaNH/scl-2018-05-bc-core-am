window.cipher = {
  
   
  encode: (text, offset) => { 
     /* Acá va tu código */
    
    let cifradas = ''; // declarando variable cifrada
    for(let i = 0; i < text.length; i++){
        //var i = 0  :  i va ser cada letra de las palabras y va a mpezar en 0 
        // text.length es el largo que tenga las pabalabras
        // i++  : va ir sumando de a 1 
        
      let ascci = (text.toUpperCase().charCodeAt(i));
      let formula = (text.charCodeAt(i)- 65 + parseInt(offset)) % 26 + 65;
        //capturar las letras mayusculas y el codigo ascci  
      cifradas += String.fromCharCode(formula);
        // String.fromCharCode() es para convertir el numero es letra , osea va convertir el charCodeAt         //de arriba que me va dar numeros , en letras 
      }
      return cifradas;
      console.log(cifradas);
    //console.log  muestra las letras cifradas en la consola
  },
  
     
  decode: (string,offset) => {
    /* Acá va tu código */
    function decipher(){
      var cajaDecipher = document.getElementById('caja-decipher');
      var propmt = prompt('pon una frase o palabra');
      var dechiper = '';
    // for para recorrer cada letra del las palabras cifradas
      for(var j = 0; j < propmt.length; j++){
        //lo mismo que esta escrito arriba
          var formulaDechiper = (propmt.toUpperCase().charCodeAt(j) + 65 - 33) % 26 + 65;
        //aca pongo al reves los simbolo de +65 y -33 , para descrifrar lo que ya habia cifrado
        
          var decifradas = String.fromCharCode(formulaDechiper);
          dechiper+= decifradas;
      }
      cajaDecipher.innerHTML = dechiper;
  }
  

