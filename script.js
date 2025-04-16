const senhaInput = document.getElementById('senha')
const resultado = document.getElementById('resultado')
const gerarBtn = document.getElementById('gerar')
const baixarBtn = document.getElementById('baixar')
const verificarBtn = document.getElementById('verificar')

function gerarSenhaForte(tamanho = 12) {
  const letrasMin = 'abcdefghijklmnopqrstuvwxyz'
  const letrasMai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numeros = '0123456789'
  const especiais = '!@#$%^&*()_+'

  const todos = letrasMin + letrasMai + numeros + especiais

  let senha = ''
  senha += letrasMin.charAt(Math.floor(Math.random() * letrasMin.length))
  senha += letrasMai.charAt(Math.floor(Math.random() * letrasMai.length))
  senha += numeros.charAt(Math.floor(Math.random() * numeros.length))
  senha += especiais.charAt(Math.floor(Math.random() * especiais.length))

  while (senha.length < tamanho) {
    senha += todos.charAt(Math.floor(Math.random() * todos.length))
  }

  senha = senha.split('').sort(() => Math.random() - 0.5).join('')
  return senha
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
  const senha = gerarSenhaForte()
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
