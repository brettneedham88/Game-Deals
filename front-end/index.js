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
        const gamePrices = document.createElement("div")
        const gameSavings = document.createElement("div")
        const savings = `${steamListing.savings}`
        const truncatedSavings = Math.trunc(savings)
  
        parentDiv.setAttribute("id", "game-div-card")
        gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${steamListing.steamAppID}'>${steamListing.title}</a>`
        gameTitle.setAttribute("id", "game-title")
        gameThumb.setAttribute("src", `${steamListing.thumb}`)
        gameThumb.setAttribute("id", "game-image")
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

fetch("https://www.cheapshark.com/api/1.0/deals?storeID=7&pageSize=5")
.then(response => response.json())
.then(gogListings => {
  gogListings.forEach(
    gogListing => {
      const parentDiv = document.createElement('div')
      const gameTitle = document.createElement("H3")
      const gameThumb = document.createElement('img')
      const gamePrices = document.createElement("div")
      const gameSavings = document.createElement("div")
      const savings = `${gogListing.savings}`
      const truncatedSavings = Math.trunc(savings)

      parentDiv.setAttribute("id", "game-div-card")
      gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${gogListing.steamAppID}'>${gogListing.title}</a>`
      gameTitle.setAttribute("id", "game-title")
      gameThumb.setAttribute("src", `${gogListing.thumb}`)
      gameThumb.setAttribute("id", "game-image")
      gamePrices.textContent = `Currently: $ ${gogListing.salePrice}/ Normal: $ ${gogListing.normalPrice}`
      gameSavings.textContent = `Savings: ${truncatedSavings}%`
      gameSavings.setAttribute("id", "game-savings")
      
      
      parentDiv.append(gameTitle)
      parentDiv.append(gameThumb)
      parentDiv.append(gamePrices)
      parentDiv.append(gameSavings)
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
      const gamePrices = document.createElement("div")
      const gameSavings = document.createElement("div")
      const savings = `${epicListing.savings}`
      const truncatedSavings = Math.trunc(savings)

      parentDiv.setAttribute("id", "game-div-card")
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

