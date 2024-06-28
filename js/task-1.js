const categorieList = document.querySelector("ul#categories");

const categorieItems = categorieList.querySelectorAll("li.item");
console.log(`Number of categories: ${categorieItems.length}`);

categorieItems.forEach((item) => {
  const categorieTitle = item.querySelector("h2").textContent;
  const categorieItemCounter = item.querySelectorAll("li");
  console.log(`Categorie: ${categorieTitle}`);
  console.log(`Elements: ${categorieItemCounter.length}`);
});
