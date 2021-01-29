const steamCard = document.querySelector("#steam-home-page")
const epicCard = document.querySelector("#epic-home-page")
const originCard = document.querySelector("#origin-home-page")

  fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5")
  .then(response => response.json())
  .then(steamListings => {
    steamListings.forEach(
      steamListing => {
        const parentDiv = document.createElement('div')
        const gameTitle = document.createElement("H3")
        const gameThumb = document.createElement('img')
        const gameSalePrice = document.createElement("div")
        const gameNormalPrice = document.createElement("div")
        const gameSavings = document.createElement("div")
        const buyNow = document.createElement('div')
        const savings = `${steamListing.savings}`
        const truncatedSavings = Math.trunc(savings)
  
        parentDiv.setAttribute("id", "game-div-card")
        gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${steamListing.steamAppID}' target="_blank">${steamListing.title}</a>`
        gameTitle.setAttribute("id", "game-title")
        gameThumb.setAttribute("src", `${steamListing.thumb}`)
        gameThumb.setAttribute("id", "game-image")
        gameSalePrice.textContent = `Currently: $ ${steamListing.salePrice}`
        gameNormalPrice.textContent = `Normally: $ ${steamListing.normalPrice}`
        gameSavings.textContent = `Savings: ${truncatedSavings}%`
        gameSavings.setAttribute("id", "game-savings")
        buyNow.innerHTML = `<a href= "https://www.cheapshark.com/redirect?dealID=${steamListing.dealID}" target="_blank">Buy Now</a>`
        buyNow.setAttribute("class","buy-now-button")
        
        
        parentDiv.append(gameTitle)
        parentDiv.append(gameThumb)
        parentDiv.append(gameSalePrice)
        parentDiv.append(gameNormalPrice)
        parentDiv.append(gameSavings)
        parentDiv.append(buyNow)
        steamCard.append(parentDiv)
      })
  })

fetch("https://www.cheapshark.com/api/1.0/deals?storeID=7&pageSize=5")
.then(response => response.json())
.then(gogListings => {
  gogListings.forEach(
    gogListing => {
      const parentDiv = document.createElement('div')
      const gameTitle = document.createElement("H3")
      const gameThumb = document.createElement('img')
      const gameSalePrice = document.createElement("div")
      const gameNormalPrice = document.createElement("div")
      const gameSavings = document.createElement("div")
      const buyNow = document.createElement('div')
      const savings = `${gogListing.savings}`
      const truncatedSavings = Math.trunc(savings)

      parentDiv.setAttribute("id", "game-div-card")
      gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${gogListing.steamAppID}' target="_blank">${gogListing.title}</a>`
      gameTitle.setAttribute("id", "game-title")
      gameThumb.setAttribute("src", `${gogListing.thumb}`)
      gameThumb.setAttribute("id", "game-image")
      gameSalePrice.textContent = `Currently: $ ${gogListing.salePrice}`
      gameNormalPrice.textContent = `Normally: $ ${gogListing.normalPrice}`
      gameSavings.textContent = `Savings: ${truncatedSavings}%`
      gameSavings.setAttribute("id", "game-savings")
      buyNow.innerHTML = `<a href= "https://www.cheapshark.com/redirect?dealID=${gogListing.dealID}" target="_blank">Buy Now</a>`
      buyNow.setAttribute("class","buy-now-button")
      
      
      parentDiv.append(gameTitle)
      parentDiv.append(gameThumb)
      parentDiv.append(gameSalePrice)
      parentDiv.append(gameNormalPrice)
      parentDiv.append(gameSavings)
      parentDiv.append(buyNow)
      originCard.append(parentDiv)
    })
})


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=25&pageSize=5")
.then(response => response.json())
.then(epicListings => {
  epicListings.forEach(
    epicListing => {
      const parentDiv = document.createElement('div')
      const gameTitle = document.createElement("H3")
      const gameThumb = document.createElement('img')
      const gameSalePrice = document.createElement("div")
      const gameNormalPrice = document.createElement("div")
      const gameSavings = document.createElement("div")
      const buyNow = document.createElement('div')
      const savings = `${epicListing.savings}`
      const truncatedSavings = Math.trunc(savings)

      parentDiv.setAttribute("id", "game-div-card")
      gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${epicListing.steamAppID}' target="_blank">${epicListing.title}</a>`
      gameTitle.setAttribute("id", "game-title")
      gameThumb.setAttribute("src", `${epicListing.thumb}`)
      gameThumb.setAttribute("id", "game-image")
      gameSalePrice.textContent = `Currently: $ ${epicListing.salePrice}`
      gameNormalPrice.textContent = `Normally: $ ${epicListing.normalPrice}`
      gameSavings.textContent = `Savings: ${truncatedSavings}%`
      gameSavings.setAttribute("id", "game-savings")
      buyNow.innerHTML = `<a href= "https://www.cheapshark.com/redirect?dealID=${epicListing.dealID}" target="_blank">Buy Now</a>`
      buyNow.setAttribute("class","buy-now-button")
      
      parentDiv.append(gameTitle)
      parentDiv.append(gameThumb)
      parentDiv.append(gameSalePrice)
      parentDiv.append(gameNormalPrice)
      parentDiv.append(gameSavings)
      parentDiv.append(buyNow)
      epicCard.append(parentDiv)
    })
})

