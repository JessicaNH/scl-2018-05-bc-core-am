window.cipher = {
  
   
  encode: (string, offset) => { 
     /* Acá va tu código */
    
    let cifrado = ''; // declarando variable cifrado
    for(let i = 0; i < string.length; i++){

        
       let ascci = string.toUpperCase();

       let formula = (ascci.charCodeAt(i)- 65 + parseInt(offset)) % 26 + 65;
        //capturar las letras mayusculas y el codigo ascci  
       cifrado+= String.fromCharCode(formula);
       
              
      }
      return cifrado;
      
      console.log(cifrado);
    
  },
  
     
  decode: (string, offset) => {
    /* Acá va tu código */
    let decifrado = ''; 
    for(let i = 0; i < string.length; i++){

        
       let ascci = (string.toUpperCase().charCodeAt(i));
       let formula = (string.charCodeAt(i)- 65 - parseInt(offset)) % 26 + 65;
        //capturar las letras mayusculas y el codigo ascci  
       decifrado += String.fromCharCode(formula);
       
              
      }
      return decifrado;
      
  }
}; 

