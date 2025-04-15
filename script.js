function gerarSenha(tamanho) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  let senha = ""
  for (let i = 0; i < tamanho; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return senha
}

let senhaAtual = ""

function mostrarSenha() {
  const tamanho = document.getElementById("tamanho").value
  if (!tamanho || tamanho <= 0) {
    document.getElementById("senha").textContent = "Digite um tamanho válido"
    return
  }
  senhaAtual = gerarSenha(tamanho)
  document.getElementById("senha").textContent = senhaAtual
}

function baixarSenha() {
  if (!senhaAtual) {
    alert("Gere uma senha primeiro!")
    return
  }

  const blob = new Blob([senhaAtual], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "senha.txt"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
