function hesapla() {
    let sayi1 = parseFloat(document.getElementById('sayi1').value)
    let sayi2 = parseFloat(document.getElementById('sayi2').value)

    let operator = document.getElementById('operators').value

    if (operator === '+') {
        document.getElementById('sonuc').value = sayi1 + sayi2
    }

    else if (operator === '-') {
        document.getElementById('sonuc').value = sayi1 - sayi2
    }

    else if (operator === '/') {
        if (sayi2 != 0) {
            document.getElementById('sonuc').value = sayi1 / sayi2 
        }else if (sayi2 == 0) {
            alert("HATA!!!")
        }
           
    }

    else if (operator === '*') {
        document.getElementById('sonuc').value = sayi1 * sayi2
    }
}
