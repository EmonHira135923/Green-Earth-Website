const showSpinner = () => {
  document.getElementById("spinner").classList.remove("hidden");
};

const hideSpinner = () => {
  document.getElementById("spinner").classList.add("hidden");
};

const alldata = () => {
  showSpinner();
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      alldisplaydata(data);
      hideSpinner();
    });
};

const alldisplaydata = (data) => {
  const cardContainer = document.getElementById("card-show-value");
  cardContainer.innerHTML = "";

  const cardcartContainer = document.getElementById("card-cart-container");
  cardcartContainer.innerHTML = "";

  let totalPrice = 0;

  data.plants.forEach((plant) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card shadow-lg bg-[#ffffff] p-5 rounded-xl w-full h-full">
          <figure><img src="${plant.image}" alt="${plant.name}" class="h-[250px] w-[250px]" /></figure>
          <div class="mt-3">
            <h2 onclick="mycarddetails('${plant.id}')" class="text-[#1f2937] font-bold text-xl">${plant.name}</h2>
            <p class="text-[#1f2937] font-light text-[16px]">
              ${plant.description}
            </p>
            <div class="flex justify-between items-center mt-3">
              <div class="bg-[#dcfce7] p-2 rounded-full">
                <h6 class="text-[#15803d]">${plant.category}</h6>
              </div>
              <div>
                <p>
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plant.price}
                </p>
              </div>
            </div>
            <button class="btn-card btn btn-primary w-full rounded-full mt-3">
              Add To Cart
            </button>
          </div>
        </div>
    `;
    cardContainer.appendChild(div);

    const btn = div.querySelector(".btn-card");
    btn.addEventListener("click", () => {
      alert(`${plant.name} has been Added to Cart`);
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <div class="flex justify-between items-center bg-[#f0fdf4] p-3 mb-2 rounded-lg">
          <div>
            <h1 class="font-bold">${plant.name}</h1>
            <p>${plant.price}</p>
          </div>
          <button class="text-red-500">
            <i class="fa-solid fa-xmark text-gray-600"></i>
          </button>
        </div>
      `;
      cardcartContainer.appendChild(cartItem);

      totalPrice += parseInt(plant.price);
      updateTotalPrice(totalPrice);

      const removeBtn = cartItem.querySelector("button");
      removeBtn.addEventListener("click", () => {
        cardcartContainer.removeChild(cartItem);
        totalPrice -= parseInt(plant.price);
        updateTotalPrice(totalPrice);
      });
    });
  });
};

const updateTotalPrice = (total) => {
  const totalDiv = document.getElementById("total-price");
  totalDiv.innerHTML = `
    <h1>Total : </h1>
    <p><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${total}</p>
  `;
};

const loadcategorydata = () => {
  showSpinner();
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayalldata(data.categories);
      hideSpinner();
    });
};

const mycarddetails = (id) => {
  const url3 = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url3)
    .then((res) => res.json())
    .then((data) => displaymodal(data.plants));
};

const displaymodal = (plant) => {
  const detailscontainer = document.getElementById("plants-details");
  // detailscontainer.innerHTML = "";
  detailscontainer.innerHTML = `
              <div class="card bg-white p-4 rounded-lg shadow">
              <h3 class="mt-3 mb-3 font-bold text-xl">${plant.name}</h3>
              <img
                src="${plant.image}"
                alt="sample"
                class="w-full h-full object-cover rounded"
              />
              <div class="font-bold text-lg mt-3 mb-3"><span class="font-bold text-xl mb-3">Category</span> : <span class="font-light">${plant.category}</span></div>
              <div class="font-bold text-lg mb-3"><span class="font-bold text-lg mb-3">Price</span> : <span class="font-light">${plant.price}</span></div>
              <div class="font-bold text-lg"><span class="font-bold text-lg mb-3">Description</span> : <span class="font-light">${plant.description}</span> </div>
            </div>
`;
  document.getElementById("platnsmodal").showModal();
};

const displayalldata = (data) => {
  const allcategory = document.getElementById("alldatashowdisplay");
  allcategory.innerHTML = "";

  const allBtn = document.createElement("div");
  allBtn.innerHTML = `
    <button 
      class="btnactive hover:cursor-pointer hover:bg-[#15803d] hover:text-white rounded-xl p-3 w-full"
      id="all-trees-btn"
    >
      All Trees
    </button>
  `;
  allcategory.append(allBtn);

  data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <button 
        class="btnactive hover:cursor-pointer hover:bg-[#15803d] hover:text-white rounded-xl p-3 w-full"
        data-id="${element.id}"
      >
        ${element.category_name}
      </button>
    `;
    allcategory.append(div);
  });

  const btnactive = document.querySelectorAll(".btnactive");
  btnactive.forEach((btnact) => {
    btnact.addEventListener("click", () => {
      btnactive.forEach((btn) => {
        btn.classList.remove("bg-[#15803d]", "text-white");
      });
      btnact.classList.add("bg-[#15803d]", "text-white");
    });
  });

  document.getElementById("all-trees-btn").addEventListener("click", () => {
    alldata();
  });

  const catBtns = document.querySelectorAll("[data-id]");
  catBtns.forEach((catBtn) => {
    catBtn.addEventListener("click", () => {
      const catId = catBtn.getAttribute("data-id");
      fetch(`https://openapi.programming-hero.com/api/category/${catId}`)
        .then((res) => res.json())
        .then((data) => {
          alldisplaydata(data);
        });
    });
  });
};

loadcategorydata();
alldata();
