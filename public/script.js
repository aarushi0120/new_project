let inpCode = document.getElementById('inpCode')
let btnEncode = document.getElementById('btnEncode')
let code = document.getElementById('code')
btnEncode.onclick = function() {
    let data = inpCode.value
    data = btoa(data)
    code.value = data
}