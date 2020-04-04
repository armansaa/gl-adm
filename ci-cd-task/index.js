var btn = document.getElementById('hitung');

// fungsi penjumlahan
function penjumlahan(a, b) {
    return a + b;
}

btn.addEventListener('click', function(evt) {
    // console.log('Hello world');
    var input1 = document.getElementById('angka1');
    var input2 = document.getElementById('angka2');

    var angka1 = parseInt(input1.value);
    var angka2 = parseInt(input2.value);

    var operasi = document.querySelector('input[name=operasi]:checked').value;

    // console.log(operasi);
    var result = 0;
    switch (operasi) {
        case 'penjumlahan':
            result = angka1 + angka2;
            break;
        case 'pengurangan':
            result = angka1 - angka2;
            break;
        case 'perkalian':
            result = angka1 * angka2;
            break;
        case 'pembagian':
            result = angka1 / angka2;
            break;
    }

    document.querySelector('h1').innerHTML = "Hasil " + operasi + ": " + result;
});
