const storesDropDown = document.querySelector("#store-dropdown")

fetch("http://localhost:3000/stores")
  .then(response => response.json())
  .then(stores => {
    stores.forEach(store => {
      const storeOption = document.createElement('option')

      console.log(store.store_id)
      storeOption.value = store.store_id
      storeOption.textContent = store.name 

      storesDropDown.append(storeOption)
    })
  })







