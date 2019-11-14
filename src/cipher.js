window.cipher = {
  encode: (index, text) => {
    let offset = index;
    let message = text;
    let x = parseInt(offset);
    let result="";
    let specials = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

    for (let i = 0, len = message.length; i < len; i++) {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90 || message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122 ) { 
        if (message[i] == message[i].toUpperCase()){
          let a = message[i].charCodeAt(0);
          let e = (((a - 65 + (26 + (x%26))) % 26) + 65);
          result = result + String.fromCharCode(e);
        } else {
          let a = message[i].charCodeAt(0);
          let e = (((a - 97 + (26 + (x%26))) % 26) + 97);
          result = result + String.fromCharCode(e);
        }
      } else if (message[i].charCodeAt() >= 48 && message[i].charCodeAt() <= 57) {
        let a = parseInt(message[i]);
        let e = (a + ((10 + (x%10))%10)) %10;
        result=result+e;
      }else if(specials.includes(message[i])){
        let a=specials.indexOf(message[i]);
        let e=(a+(32+(x%32)))%32;
        result=result+specials[e];
      }else if(message[i]=="ñ"){
        result=result+"Ñ";
      }else if(message[i]=="Ñ"){
        result=result+"ñ";
      }else{
        result=result+message[i];
      }
    }
    return result;
  },

  decode: (index, text) => {
    let offset = index;
    let message = text;
    let x = parseInt(offset);
    let result="";
    let specials = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

    for (let i = 0, len = message.length; i < len; i++) {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90 || message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122 ) {
        
        if (message[i] == message[i].toUpperCase()) {
          let a = message[i].charCodeAt(0);
          let e = (((a + 65 - (26 + (x%26))) % 26) + 65);
          result = result + String.fromCharCode(e);
        }
        else {
          let a = message[i].charCodeAt(0);
          let e = (((a - 97 - (26 + (x%26)) + 52) % 26) + 97);
          result = result + String.fromCharCode(e);
        }
      } else if (message[i].charCodeAt() >= 48 && message[i].charCodeAt() <= 57) {
        let a=parseInt(message[i]);
        let e=((a-((10+(x%10))%10))+10)%10;
        result=result+e;
      }else if(specials.includes(message[i])){
        let a=specials.indexOf(message[i]);
        let e = (a-(64+(x%32)))%32;
        result=result+specials[e];
      } else if (message[i] == "ñ") {
        result = result + "Ñ";
      } else if (message[i] == "Ñ") {
        result = result + "ñ";
      } else {
        result = result + message[i];
      }
    }
    return result;
  }
};
