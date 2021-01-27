const epicCard = document.querySelector("#epic-cards")


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=7&pageSize=50")
.then(response => response.json())
.then(epicListings => {
  epicListings.forEach( epicListing => {
    const parentDiv = document.createElement('div')
    const gameTitle = document.createElement("H3")
    const gameThumb = document.createElement('img')
    const gamePrices = document.createElement("div")
    const gameSavings = document.createElement("div")
    const savings = `${epicListing.savings}`
    const truncatedSavings = Math.trunc(savings)

    parentDiv.setAttribute("id", "parent-game-card")
    gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${epicListing.steamAppID}'>${epicListing.title}</a>`
    gameTitle.setAttribute("id", "game-title")
    gameThumb.setAttribute("src", `${epicListing.thumb}`)
    gameThumb.setAttribute("id", "game-image")
    gamePrices.textContent = `Currently: $ ${epicListing.salePrice}/ Normal: $ ${epicListing.normalPrice}`
    gameSavings.textContent = `Savings: ${truncatedSavings}%`
    gameSavings.setAttribute("id", "game-savings")
    
    parentDiv.append(gameTitle)
    parentDiv.append(gameThumb)
    parentDiv.append(gamePrices)
    parentDiv.append(gameSavings)

    epicCard.append(parentDiv)
  })
})
