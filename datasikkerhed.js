const $ = function(foo) {
    return document.getElementById(foo);
}

let selHash = $("hasho");
let whichHash = selHash.value;
console.log(whichHash);

let selCrypto = $("crypto");
let whichCrypto = selCrypto.value;

let hash;
let encrypted;
let decrypted;

let message = $("plaintext");
let secret = $("secret");

let btn = $("submit");
btn.addEventListener("click", checkWhich());

function checkWhich(whichHash, whichCrypto) {
    if (whichHash = "MD5") {
        hash = CryptoJS.MD5("message");
    } else if (whichHash = SHA1) {
        hash = CryptoJS.SHA1("message");
    } else if (whichHash = SHA256) {
        hash = CryptoJS.SHA256("message");
    } else {
        hash = CryptoJS.SHA512("message");
    }

    if (whichCrypto = AES) {
        encrypted = CryptoJS.AES.encrypt("message", "secret");
        decrypted = CryptoJS.AES.decrypt(encrypted, "secret");
    } else if (whichCrypto = DES) {
        encrypted = CryptoJS.DES.encrypt("message", "secret");
        decrypted = CryptoJS.DES.decrypt(encrypted, "secret");
    } else if (whichCrypto = Rabbit) {
        encrypted = CryptoJS.Rabbit.encrypt("message", "secret");
        decrypted = CryptoJS.Rabbit.decrypt(encrypted, "secret");
    } else {
        encrypted = CryptoJS.RC4.encrypt("message", "secret");
        decrypted = CryptoJS.RC4.decrypt(encrypted, "secret");
    }
    $("hashstring").innerHTML = hash;
    $("encrypstring").innerHTML = encrypted;
    $("decrypstring").innerHTML = decrypted;
}



/*function whatDo() {
    for (i = 0; i < form.length; i++) {
        if 
    }
}*/