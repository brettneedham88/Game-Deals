
const steamCard = document.querySelector("#steam-cards")


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=50")
.then(response => response.json())
.then(steamListings => {
  steamListings.forEach( steamListing => {
    const parentDiv = document.createElement('div')
    const gameTitle = document.createElement("H3")
    const gameThumb = document.createElement('img')
    const gameSalePrice = document.createElement("div")
    const gameNormalPrice = document.createElement("div")
    const gameSavings = document.createElement("div")
    const buyNow = document.createElement('div')
    const savings = `${steamListing.savings}`
    const truncatedSavings = Math.trunc(savings)

    parentDiv.setAttribute("class", "parent-game-card")
    gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${steamListing.steamAppID}'>${steamListing.title}</a>`
    gameTitle.setAttribute("class", "game-title")
    gameThumb.setAttribute("src", `${steamListing.thumb}`)
    gameThumb.setAttribute("class", "game-image")
    gameSalePrice.textContent = `Currently: $ ${steamListing.salePrice}`
    gameSalePrice.setAttribute("id", "game-sale-price")
    gameNormalPrice.textContent = `Normally: $ ${steamListing.normalPrice}`
    gameNormalPrice.setAttribute("id", "game-normal-price")
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
