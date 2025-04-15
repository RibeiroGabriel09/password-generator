function gerarSenha(tamanho) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  let senha = ""
  for (let i = 0; i < tamanho; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return senha
}

function mostrarSenha() {
  const tamanho = document.getElementById("tamanho").value
  const senha = gerarSenha(tamanho)
  document.getElementById("senha").textContent = senha
}
