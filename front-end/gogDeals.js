const gogCard = document.querySelector("#gog-cards")


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=7&pageSize=50")
.then(response => response.json())
.then(gogListings => {
  gogListings.forEach( gogListing => {
    const parentDiv = document.createElement('div')
    const gameTitle = document.createElement("H3")
    const gameThumb = document.createElement('img')
    const gamePrices = document.createElement("div")
    const gameSavings = document.createElement("div")
    const savings = `${gogListing.savings}`
    const truncatedSavings = Math.trunc(savings)

    parentDiv.setAttribute("class", "parent-game-card")
    gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${gogListing.steamAppID}'>${gogListing.title}</a>`
    gameTitle.setAttribute("class", "game-title")
    gameThumb.setAttribute("src", `${gogListing.thumb}`)
    gameThumb.setAttribute("class", "game-image")
    gamePrices.textContent = `Currently: $ ${gogListing.salePrice}/ Normal: $ ${gogListing.normalPrice}`
    gameSavings.textContent = `Savings: ${truncatedSavings}%`
    gameSavings.setAttribute("id", "game-savings")
    
    parentDiv.append(gameTitle)
    parentDiv.append(gameThumb)
    parentDiv.append(gamePrices)
    parentDiv.append(gameSavings)

    gogCard.append(parentDiv)
  })
})
