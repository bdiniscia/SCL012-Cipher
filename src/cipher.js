window.cipher = {
  encode: (index, text) => {
    let offset = index;
    let message = text;
    let x = parseInt(offset);
    let result='';

    for (let i = 0, len = message.length; i < len; i++) {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90 || message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122 ) { 
        if (message[i] == message[i].toUpperCase()){
          let a = message[i].charCodeAt(0);
          let e = (((a - 65 + x) % 26) + 65);
          result = result + String.fromCharCode(e);
        } else {
          let a = message[i].charCodeAt(0);
          let e = (((a - 97 + x) % 26) + 97);
          result = result + String.fromCharCode(e);
        }
      } else if (message[i].charCodeAt() >= 48 && message[i].charCodeAt() <= 57) {
      let a = parseInt(message[i]);
      let e = (a + (x%10)) %10;
      result = result + e;
      } else {
        result = result + message[i];
      }
    }
    return result;

  },

  decode: (index, text) => {
    let offset = index;
    let message = text;
    let x = parseInt(offset);
    let result='';

    for (let i = 0, len = message.length; i < len; i++) {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90 || message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122 ) {
        
        if (message[i] == message[i].toUpperCase()) {
          let a = message[i].charCodeAt(0);
          let e = (((a + 65 - x) % 26) + 65);
          result = result + String.fromCharCode(e);
        }
        else {
          let a = message[i].charCodeAt(0);
          let e = (((a - 97 - x + 52) % 26) + 97);
          result = result + String.fromCharCode(e);
        }
      } else if (message[i].charCodeAt() >= 48 && message[i].charCodeAt() <= 57) {
        let a = parseInt(message[i]);
        let e = ((a - (x%10)) + 10) %10;
        result = result + e;
      } else {
        result = result + message[i];
      }
    }
    return result;
  }
};
