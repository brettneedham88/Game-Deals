const gogCard = document.querySelector("#gog-cards")


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=7&pageSize=50")
.then(response => response.json())
.then(gogListings => {
  gogListings.forEach( gogListing => {
    const parentDiv = document.createElement('div')
    const gameTitle = document.createElement("H3")
    const gameThumb = document.createElement('img')
    const gameSalePrice = document.createElement("div")
    const gameNormalPrice = document.createElement("div")
    const gameSavings = document.createElement("div")
    const buyNow = document.createElement('div')
    const savings = `${gogListing.savings}`
    const truncatedSavings = Math.trunc(savings)

    parentDiv.setAttribute("class", "parent-game-card")
    gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${gogListing.steamAppID}'>${gogListing.title}</a>`
    gameTitle.setAttribute("class", "game-title")
    gameThumb.setAttribute("src", `${gogListing.thumb}`)
    gameThumb.setAttribute("class", "game-image")
    gameSalePrice.textContent = `Currently: $ ${gogListing.salePrice}`
    gameSalePrice.setAttribute("id", "game-sale-price")
    gameNormalPrice.textContent = `Normally: $ ${gogListing.normalPrice}`
    gameNormalPrice.setAttribute("id", "game-normal-price")
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
    gogCard.append(parentDiv)
  })
})
