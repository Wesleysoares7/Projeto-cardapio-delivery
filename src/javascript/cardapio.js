const hamburgueres = [
  {
    id: 1,
    nome: "Hambúrguer Clássico",
    imagem: "dish.png",
    ingredientes: [
      "Carne de boi",
      "Queijo cheddar",
      "Alface",
      "Tomate",
      "Molho especial",
    ],
    valor: 15.99,
  },
  {
    id: 2,
    nome: "Hambúrguer Vegetariano",
    imagem: "dish2.png",
    ingredientes: [
      "Hambúrguer de grão-de-bico",
      "Queijo muçarela",
      "Rúcula",
      "Tomate",
      "Maionese vegana",
    ],
    valor: 12.99,
  },
  {
    id: 3,
    nome: "Hambúrguer Duplo Bacon",
    imagem: "dish3.png",
    ingredientes: [
      "Dois hambúrgueres de carne de boi",
      "Queijo cheddar",
      "Bacon",
      "Alface",
      "Cebola caramelizada",
      "Molho barbecue",
    ],
    valor: 18.99,
  },
  {
    id: 4,
    nome: "Hambúrguer de Frango Grelhado",
    imagem: "dish4.png",
    ingredientes: [
      "Filé de frango grelhado",
      "Queijo prato",
      "Alface",
      "Tomate",
      "Maionese",
    ],
    valor: 14.99,
  },
  {
    id: 5,
    nome: "Hambúrguer Picante",
    imagem: "dish5.png",
    ingredientes: [
      "Carne de boi temperada",
      "Queijo pepper jack",
      "Pimenta jalapeño",
      "Alface",
      "Maionese de pimenta",
    ],
    valor: 16.99,
  },
  {
    id: 6,
    nome: "Hambúrguer de Salmão",
    imagem: "dish6.png",
    ingredientes: [
      "Filé de salmão grelhado",
      "Queijo brie",
      "Rúcula",
      "Cebola roxa",
      "Molho tártaro",
    ],
    valor: 19.99,
  },
  {
    id: 7,
    nome: "Hambúrguer Vegan",
    imagem: "dish7.png",
    ingredientes: [
      "Hambúrguer vegano de lentilha",
      "Queijo vegano",
      "Abacate",
      "Cebola roxa",
      "Rúcula",
      "Maionese vegana",
    ],
    valor: 13.99,
  },
  {
    id: 8,
    nome: "Hambúrguer BBQ",
    imagem: "dish8.png",
    ingredientes: [
      "Carne de boi",
      "Queijo cheddar",
      "Bacon",
      "Cebola caramelizada",
      "Molho barbecue",
    ],
    valor: 17.99,
  },
  {
    id: 9,
    nome: "Hambúrguer Caprese",
    imagem: "dish9.png",
    ingredientes: [
      "Hambúrguer de carne de boi",
      "Queijo muçarela",
      "Tomate",
      "Manjericão",
      "Molho pesto",
    ],
    valor: 16.99,
  },
  {
    id: 10,
    nome: "Hambúrguer de Cordeiro",
    imagem: "dish10.png",
    ingredientes: [
      "Carne de cordeiro temperada",
      "Queijo feta",
      "Rúcula",
      "Cebola caramelizada",
      "Molho de hortelã",
    ],
    valor: 20.99,
  },
];

const cardapioContent = document.querySelector(".cardapio-content");
const cardapio = document.querySelector(".cardapio");
const cardapioButton = document.querySelector(".bnt-default");

// Itera sobre cada item do cardápio
hamburgueres.forEach((hamburguer) => {
  // Cria um elemento div para representar cada item do cardápio
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("cardapio-item");

  // Adiciona a imagem do item
  const imagem = document.createElement("img");
  imagem.src = `./src/imagens/${hamburguer.imagem}`;
  imagem.alt = hamburguer.nome;
  itemDiv.appendChild(imagem);

  // Adiciona o nome do item
  const nome = document.createElement("h2");
  nome.textContent = hamburguer.nome;
  itemDiv.appendChild(nome);

  // Adiciona a lista de ingredientes do item
  const ingredientesList = document.createElement("ul");
  hamburguer.ingredientes.forEach((ingrediente) => {
    const ingredienteItem = document.createElement("li");
    ingredienteItem.textContent = ingrediente;
    ingredientesList.appendChild(ingredienteItem);
  });
  itemDiv.appendChild(ingredientesList);

  // Adiciona o preço do item
  const preco = document.createElement("p");
  preco.textContent = `R$ ${hamburguer.valor.toFixed(2)}`;
  itemDiv.appendChild(preco);

  // Adiciona o item ao cardápio
  cardapio.appendChild(itemDiv);
});
