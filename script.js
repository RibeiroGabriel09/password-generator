function gerarSenha(tamanho) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  let senha = ""
  for (let i = 0; i < tamanho; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return senha
}

let senhaGerada = ""

function mostrarSenha() {
  const tamanho = document.getElementById("tamanho").value
  senhaGerada = gerarSenha(tamanho)
  document.getElementById("senha").textContent = senhaGerada
}

function baixarSenha() {
  if (!senhaGerada) return

  const blob = new Blob([senhaGerada], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")

  a.href = url
  a.download = "senha.txt"
  a.click()

  URL.revokeObjectURL(url)
}
