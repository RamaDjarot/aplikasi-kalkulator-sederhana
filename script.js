let layarNode = document.getElementById("layar");
let riwayatNode = document.getElementById("riwayat");
let angkaPertama = "";
let angkaKedua = "";
let operatorAktif = "";

const tambahAngka = (angka) => {
    if (operatorAktif === "") {
        angkaPertama += angka;
        layarNode.innerHTML = angkaPertama;
    } else {
        angkaKedua += angka;
        layarNode.innerHTML = angkaKedua;
    }
};

const pilihOperator = (operator) => {
    if (angkaPertama !== "") {
        operatorAktif = operator;
        riwayatNode.innerHTML = angkaPertama + " " + operator;
        layarNode.innerHTML = "0"; 
    }
};

const hitung = () => {
    if (angkaPertama === "" || angkaKedua === "" || operatorAktif === "") return;

    let val1 = parseFloat(angkaPertama);
    let val2 = parseFloat(angkaKedua);
    let hasil = 0;

    switch (operatorAktif) {
        case "+": hasil = val1 + val2; break;
        case "-": hasil = val1 - val2; break;
        case "*": hasil = val1 * val2; break;
        case "/": 
            if (val2 === 0) {
                layarNode.innerHTML = "Error";
                riwayatNode.innerHTML = "";
                return;
            }
            hasil = val1 / val2; 
            break;
    }

    riwayatNode.innerHTML = angkaPertama + " " + operatorAktif + " " + angkaKedua + " =";
    
    layarNode.innerHTML = hasil;
    angkaPertama = hasil.toString();
    angkaKedua = "";
    operatorAktif = "";
};

const hapusLayar = () => {
    angkaPertama = "";
    angkaKedua = "";
    operatorAktif = "";
    layarNode.innerHTML = "0";
    riwayatNode.innerHTML = ""; 
};