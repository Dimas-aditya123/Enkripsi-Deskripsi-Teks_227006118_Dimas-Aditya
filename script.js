function encrypt() {
    var inputText = document.getElementById('inputText').value;
    var key = parseInt(document.getElementById('key').value); // Ubah ke integer
    var encryptedText = caesarCipher(inputText, key);
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    var inputText = document.getElementById('inputText').value;
    var key = parseInt(document.getElementById('key').value); // Ubah ke integer
    var decryptedText = caesarCipher(inputText, -key); // Gunakan kunci negatif
    document.getElementById('outputText').value = decryptedText;
}

function caesarCipher(text, key) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 + key + 26) % 26) + 65); // Tambah 26 untuk menghindari nilai negatif
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 + key + 26) % 26) + 97); // Tambah 26 untuk menghindari nilai negatif
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}
