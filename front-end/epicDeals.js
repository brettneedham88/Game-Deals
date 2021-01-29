const epicCard = document.querySelector("#epic-cards")


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=25&pageSize=50")
.then(response => response.json())
.then(epicListings => {
  epicListings.forEach( epicListing => {
    const parentDiv = document.createElement('div')
    const gameTitle = document.createElement("H3")
    const gameThumb = document.createElement('img')
    const gameSalePrice = document.createElement("div")
    const gameNormalPrice = document.createElement("div")
    const gameSavings = document.createElement("div")
    const buyNow = document.createElement('div')
    const savings = `${epicListing.savings}`
    const truncatedSavings = Math.trunc(savings)

    parentDiv.setAttribute("class", "parent-game-card")
    gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${epicListing.steamAppID}'>${epicListing.title}</a>`
    gameTitle.setAttribute("class", "game-title")
    gameThumb.setAttribute("src", `${epicListing.thumb}`)
    gameThumb.setAttribute("class", "game-image")
    gameSalePrice.textContent = `Currently: $ ${epicListing.salePrice}`
    gameSalePrice.setAttribute("id", "game-sale-price")
    gameNormalPrice.textContent = `Normally: $ ${epicListing.normalPrice}`
    gameNormalPrice.setAttribute("id", "game-normal-price")
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
