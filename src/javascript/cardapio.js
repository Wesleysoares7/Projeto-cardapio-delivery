const hamburgueres = [
  {
    id: 1,
    name: "Hambúrguer Clássico",
    image: "dish.png",
    ingredientes: [
      "Carne de boi",
      "Queijo cheddar",
      "Alface",
      "Tomate",
      "Molho especial",
    ],
    price: 15.99,
  },
  {
    id: 2,
    name: "Hambúrguer Vegetariano",
    image: "dish2.png",
    ingredientes: [
      "Hambúrguer de grão-de-bico",
      "Queijo muçarela",
      "Rúcula",
      "Tomate",
      "Maionese vegana",
    ],
    price: 12.99,
  },
  {
    id: 3,
    name: "Hambúrguer Duplo Bacon",
    image: "dish3.png",
    ingredientes: [
      "Dois hambúrgueres de carne de boi",
      "Queijo cheddar",
      "Bacon",
      "Alface",
      "Cebola caramelizada",
      "Molho barbecue",
    ],
    price: 18.99,
  },
  {
    id: 4,
    name: "Hambúrguer de Frango Grelhado",
    image: "dish4.png",
    ingredientes: [
      "Filé de frango grelhado",
      "Queijo prato",
      "Alface",
      "Tomate",
      "Maionese",
    ],
    price: 14.99,
  },
  {
    id: 5,
    name: "Hambúrguer Picante",
    image: "dish5.png",
    ingredientes: [
      "Carne de boi temperada",
      "Queijo pepper jack",
      "Pimenta jalapeño",
      "Alface",
      "Maionese de pimenta",
    ],
    price: 16.99,
  },
  {
    id: 6,
    name: "Hambúrguer de Salmão",
    image: "dish6.png",
    ingredientes: [
      "Filé de salmão grelhado",
      "Queijo brie",
      "Rúcula",
      "Cebola roxa",
      "Molho tártaro",
    ],
    price: 19.99,
  },
  {
    id: 7,
    name: "Hambúrguer Vegan",
    image: "dish7.png",
    ingredientes: [
      "Hambúrguer vegano de lentilha",
      "Queijo vegano",
      "Abacate",
      "Cebola roxa",
      "Rúcula",
      "Maionese vegana",
    ],
    price: 13.99,
  },
  {
    id: 8,
    name: "Hambúrguer BBQ",
    image: "dish8.png",
    ingredientes: [
      "Carne de boi",
      "Queijo cheddar",
      "Bacon",
      "Cebola caramelizada",
      "Molho barbecue",
    ],
    price: 17.99,
  },
  {
    id: 9,
    name: "Hambúrguer Caprese",
    image: "dish9.png",
    ingredientes: [
      "Hambúrguer de carne de boi",
      "Queijo muçarela",
      "Tomate",
      "Manjericão",
      "Molho pesto",
    ],
    price: 16.99,
  },
  {
    id: 10,
    name: "Hambúrguer de Cordeiro",
    image: "dish10.png",
    ingredientes: [
      "Carne de cordeiro temperada",
      "Queijo feta",
      "Rúcula",
      "Cebola caramelizada",
      "Molho de hortelã",
    ],
    price: 20.99,
  },
];

const drinks = [
  {
    id: 1,
    image: "drink.png",
    name: "Coca-Cola",
    description: "Refrigerante sabor cola.",
    price: 5.99,
  },
  {
    id: 2,
    image: "drink2.png",
    name: "Guaraná Antarctica",
    description: "Refrigerante sabor guaraná.",
    price: 5.99,
  },
  {
    id: 3,
    image: "drink3.png",
    name: "Fanta Laranja",
    description: "Refrigerante sabor laranja.",
    price: 4.99,
  },
  {
    id: 4,
    image: "drink4.png",
    name: "Sprite",
    description: "Refrigerante sabor limão-limão.",
    price: 4.99,
  },
  {
    id: 5,
    image: "drink5.png",
    name: "Suco de Laranja",
    description: "Suco natural de laranja.",
    price: 6.99,
  },
  {
    id: 6,
    image: "drink6.png",
    name: "Suco de Uva",
    description: "Suco natural de uva.",
    price: 6.99,
  },
  {
    id: 7,
    image: "drink7.png",
    name: "Suco de Manga",
    description: "Suco natural de manga.",
    price: 6.99,
  },
  {
    id: 8,
    image: "drink8.png",
    name: "Suco de Maracujá",
    description: "Suco natural de maracujá.",
    price: 6.99,
  },
  {
    id: 9,
    image: "drink9.png",
    name: "Pepsi",
    description: "Refrigerante sabor cola.",
    price: 5.99,
  },
  {
    id: 10,
    image: "drink10.png",
    name: "Soda Limonada",
    description: "Refrigerante sabor limão.",
    price: 4.99,
  },
];

const cardapioContent = document.querySelector(".cardapio-content");
const cardapioDrinks = document.querySelector(".cardapio-drinks");
const cardapioButton = document.querySelector(".bnt-default");
const cartButton = document.querySelector("#cart-btn");
const cartCounter = document.querySelector("#cart-count");

// Itera sobre cada item do cardápio
hamburgueres.forEach((hamburguer) => {
  // Cria um elemento div para representar cada item do cardápio
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("burger-item");

  // Adiciona a imagem do item
  const imagem = document.createElement("img");
  imagem.src = `./src/imagens/${hamburguer.image}`;
  imagem.alt = hamburguer.name;
  itemDiv.appendChild(imagem);

  // Adiciona o nome do item
  const nome = document.createElement("h2");
  nome.textContent = hamburguer.name;
  itemDiv.appendChild(nome);

  // Adiciona a lista de ingredientes do item
  const ingredientesList = document.createElement("ul");
  hamburguer.ingredientes.forEach((ingrediente) => {
    const ingredienteItem = document.createElement("li");
    ingredienteItem.textContent = ingrediente;
    ingredientesList.appendChild(ingredienteItem);
  });
  itemDiv.appendChild(ingredientesList);

  // Cria uma div para o preço e o botão de carrinho
  const precoButtonDiv = document.createElement("div");
  precoButtonDiv.classList.add("preco-button-div");

  // Adiciona o preço do item
  const preco = document.createElement("p");
  preco.textContent = `R$ ${hamburguer.price.toFixed(2)}`;
  precoButtonDiv.appendChild(preco);

  // Cria o botão de carrinho
  const cartButton = document.createElement("button");
  cartButton.classList.add("btn-default");

  // Adiciona o ícone ao botão
  const iconButton = document.createElement("i");
  iconButton.classList.add("fa-solid", "fa-basket-shopping");
  cartButton.appendChild(iconButton);

  precoButtonDiv.appendChild(cartButton);

  // Adiciona a div de preço e botão de carrinho ao itemDiv
  itemDiv.appendChild(precoButtonDiv);

  // Adiciona o item ao cardápioContent, não ao cardapio
  cardapioContent.appendChild(itemDiv); // Corrigido o elemento de destino
});

// Itera sobre cada item do cardápio de bebidas
drinks.forEach((drink) => {
  // Cria um elemento div para representar cada item do cardápio de bebidas
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("drink-item");

  // Adiciona a imagem do item
  const imagem = document.createElement("img");
  imagem.src = `./src/imagens/${drink.image}`; // Alteração de hamburguer.imagem para drink.image
  imagem.alt = drink.name; // Alteração de hamburguer.nome para drink.name
  itemDiv.appendChild(imagem);

  // Adiciona o nome do item
  const nome = document.createElement("h2");
  nome.textContent = drink.name; // Alteração de hamburguer.nome para drink.name
  itemDiv.appendChild(nome);

  // Adiciona a descrição do item
  const descricao = document.createElement("p");
  descricao.textContent = drink.description; // Alteração de hamburguer.description para drink.description
  itemDiv.appendChild(descricao);

  // Cria uma div para o preço e o botão de carrinho
  const precoButtonDiv = document.createElement("div");
  precoButtonDiv.classList.add("preco-button-div");

  // Adiciona o preço do item
  const preco = document.createElement("p");
  preco.textContent = `R$ ${drink.price.toFixed(2)}`; // Alteração de hamburguer.valor.toFixed(2) para drink.price.toFixed(2)
  precoButtonDiv.appendChild(preco);

  // Cria o botão de carrinho
  const cartButton = document.createElement("button");
  cartButton.classList.add("btn-default");

  // Adiciona o ícone ao botão
  const iconButton = document.createElement("i");
  iconButton.classList.add("fa-solid", "fa-basket-shopping");
  cartButton.appendChild(iconButton);

  precoButtonDiv.appendChild(cartButton);

  // Adiciona a div de preço e botão de carrinho ao itemDiv
  itemDiv.appendChild(precoButtonDiv);

  // Adiciona o item ao cardapioDrinks
  cardapioDrinks.appendChild(itemDiv);
});

// Função para adicionar item ao carrinho
function addItemToCart() {
  // Seleciona o contador do carrinho
  const cartCounter = document.querySelector("#cart-count");

  // Obtém o valor atual do contador e converte para número
  let currentCount = parseInt(cartCounter.textContent);

  // Incrementa o contador
  currentCount++;

  // Atualiza o texto do contador
  cartCounter.textContent = currentCount;
}

// Itera sobre cada botão de carrinho e adiciona um ouvinte de evento de clique
const cartButtons = document.querySelectorAll(".btn-default");
cartButtons.forEach((button) => {
  button.addEventListener("click", addItemToCart);
});
