const productList = document.querySelector("#productList");
const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const productRemove = document.querySelector("#productRemove");

const products = ["melk", "saft", "egg", "frokostblanding"];

productSubmitBtn.addEventListener("click", addProduct);

function addProduct() {
	console.log(productInput.value);
	products.push(productInput.value);

	productList.innerHTML = "";
	productInput.value = "";

	for (let i = 0; i < products.length; i++) {
		productList.innerHTML += `<li>${products[i]}</li>`;
	}
}

for (let i = 0; i < products.length; i++) {
	productList.innerHTML += `<li>${products[i]}</li>`;
}

productRemove.addEventListener("click", remove);

function remove (){
	products.pop(productList.value);
	console.log(productList.value)
	productList.innerHTML = "";

	for (let i = 0; i < products.length; i++) {
	productList.innerHTML += `<li>${products[i]}</li>`;
}
	
}