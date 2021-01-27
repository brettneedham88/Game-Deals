
const steamCard = document.querySelector("#steam-cards")


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=50")
.then(response => response.json())
.then(steamListings => {
  steamListings.forEach( steamListing => {
    const parentDiv = document.createElement('div')
    const gameTitle = document.createElement("H3")
    const gameThumb = document.createElement('img')
    const gamePrices = document.createElement("div")
    const gameSavings = document.createElement("div")
    const savings = `${steamListing.savings}`
    const truncatedSavings = Math.trunc(savings)

    parentDiv.setAttribute("class", "parent-game-card")
    gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${steamListing.steamAppID}'>${steamListing.title}</a>`
    gameTitle.setAttribute("class", "game-title")
    gameThumb.setAttribute("src", `${steamListing.thumb}`)
    gameThumb.setAttribute("class", "game-image")
    gamePrices.textContent = `Currently: $ ${steamListing.salePrice}/ Normal: $ ${steamListing.normalPrice}`
    gameSavings.textContent = `Savings: ${truncatedSavings}%`
    gameSavings.setAttribute("id", "game-savings")
    
    parentDiv.append(gameTitle)
    parentDiv.append(gameThumb)
    parentDiv.append(gamePrices)
    parentDiv.append(gameSavings)

    steamCard.append(parentDiv)
  })
})
