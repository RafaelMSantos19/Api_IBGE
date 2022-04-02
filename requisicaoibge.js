function acessarAPI(url) {
  let requisicao = new XMLHttpRequest()
  requisicao.open("GET", url, false)
  requisicao.send()
  return requisicao.responseText
} // fim do acessarAPI
function carregarDadosAPI() {
  let dados = acessarAPI(
      "https://servicodados.ibge.gov.br/api/v3/agregados/351/periodos/2002/variaveis/222?localidades=N6[1501402]"
  )
  let vagas = JSON.parse(dados)
  console.log(vagas)
 
  
  divDados = ""
  vagas.forEach(element => {
      // funcao anonima para tratar a resposta da API
      divDados += '<div class="card">'
      divDados += '<div class="container">'
      divDados += '<h4>'
      divDados += '<b>Vaga ID ' + element.id + '</b>'
      divDados += '</h4>'
      divDados += '<p>Variavel: ' + element.variavel + '</p>'
      divDados += '<p>Unidade: ' + element.unidade + '</p>'
      divDados += '<p>resultados: id: ' + element.resultados[0].classificacoes[0].id + '</p>'
      divDados += '<p>resultados: nome:' + element.resultados[0].classificacoes[0].nome + '</p>'
      divDados += '<p>resultados: categoria: ' + element.resultados[0].classificacoes[0].categoria[0] + '</p>'
      
      divDados += '</div></div>'
      
  }) // fim do foreach
  document.getElementById("div_vagas").innerHTML = divDados

} // fim do carregarDadosAPI