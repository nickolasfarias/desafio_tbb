# README

## Como executar o projeto?

  Eu já joguei a página para um servidor no heroku. É só acessar a seguinte url tanto no pc quanto no celular para ver a versão de desktop e a mobile:
  
  https://desafio-tbb.herokuapp.com/
  
  OBS: Caso queira puxar o código e manipulá-lo, você vai precisar de um editor de texto (usei o vs code), um terminal e o rails instalado (eu usei ruby on rails só pelo molde e por estar mais adaptado, mas no geral foi só html, css e js, não usei muito ruby).

## Solução adotada 

  O objetivo final era implementar uma página responsiva na versão pc e mobile. Para isso, peguei o layout desejado e o dividi em componentes. Para a navbar, usei a navbar exemplo do bootstrap com o toggler e fui adaptando, já que a navbar desejada tinha duas fileiras aparentes (a branca de cima com a logo e a azul de baixo com os botões).
  O detalhe aqui foi a fileira de baixo, já que três botões dela geravam nav-bares cinzas, que inicialmente estariam ocultas (usei o "display:none;" para isso). Depois eu fiz o primeiro banner com a imagem que me foi dada e, com a ajuda de media queries, eu alterei a imagem do banner na versão mobile. Depois fiz a seção com o texto ("we're here to help...) e os icons azuis, outra seção com o texto "whatever your age. whatever your lifestyle. whatever your interests..." e outra seção com o texto "our products..." e os cards dos produtos.
  Essa seção com o texto "our products..." e os cards dos produtos na versão pc teria os cards separados, mas na versão mobile seria um carrossel (usei o bootstrap de novo para implementar o carrossel). Embaixo segui para o segundo banner, usando media queries de novo para alterar a imagem do banner na versão mobile. Embaixo do segundo banner veio mais uma seção com texto e 3 cards que virariam carrossel na versão mobile, seguida de um botão "see more" e um footer. Em resumo, de modo a alcançar a responsividade da página, usei uma combinação de media queries, flexbox e o sistema de grid do bootstrap.
  O código html da página pode ser encontrado dentro do path "app/views/pages/home.html.erb", onde eu renderizei um código html separado para componentes específicos, como a navbar e o footer, com a ajuda do helper de ruby on rails (esses componentes estão nos paths "app/views/shared/_footer.html.erb" e "app/views/shared/_navbar_and_banner.html.erb"). O código css está dentro do path "app/assets/stylesheets".
