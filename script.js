const senhaInput = document.getElementById('senha')
const resultado = document.getElementById('resultado')
const gerarBtn = document.getElementById('gerar')
const baixarBtn = document.getElementById('baixar')
const verificarBtn = document.getElementById('verificar')

function gerarSenha(tamanho = 12) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'
  let senha = ''
  for (let i = 0; i < tamanho; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return senha
}

function salvarTxt(texto, nomeArquivo = 'senha.txt') {
  const blob = new Blob([texto], { type: 'text/plain' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = nomeArquivo
  link.click()
}

function verificarForca(senha) {
  const fracas = ['12345', 'qwerty', 'password', 'senha', 'abc123', 'admin']
  const avisos = []

  if (fracas.includes(senha.toLowerCase())) {
    return '🛑 Cara... essa senha é um convite pra ser hackeado. Troca isso agora.'
  }

  if (senha.length < 8) avisos.push('⚠️ Sua senha é muito curta.')
  if (!/[A-Z]/.test(senha)) avisos.push('🔠 Adicione letras maiúsculas.')
  if (!/[a-z]/.test(senha)) avisos.push('🔡 Adicione letras minúsculas.')
  if (!/[0-9]/.test(senha)) avisos.push('🔢 Adicione números.')
  if (!/[\W_]/.test(senha)) avisos.push('💥 Adicione caracteres especiais tipo @$!#.')

  if (avisos.length === 0) {
    return '✅ Boa! Sua senha parece forte.'
  } else {
    return avisos.join('\n')
  }
}

gerarBtn.addEventListener('click', () => {
  const senha = gerarSenha()
  senhaInput.value = senha
  resultado.textContent = 'Senha gerada! Agora testa ela aí ou baixa o .txt.'
})

baixarBtn.addEventListener('click', () => {
  if (senhaInput.value === '') {
    resultado.textContent = 'Gera ou digita uma senha primeiro 😐'
  } else {
    salvarTxt(senhaInput.value)
    resultado.textContent = 'Senha salva num .txt! Guarda isso bem 🔐'
  }
})

verificarBtn.addEventListener('click', () => {
  const avaliacao = verificarForca(senhaInput.value)
  resultado.textContent = avaliacao
})
