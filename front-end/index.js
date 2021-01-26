const steamCard = document.querySelector("#steam-home-page")
const epicCard = document.querySelector("#epic-home-page")
const originCard = document.querySelector("#origin-home-page")


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5")
  .then(response => response.json())
  .then(steamListings => {
    steamListings.forEach(
      steamListing => {
        const gameTitle = document.createElement("div")
        const gamePrice = document.createElement("div")
        const gameSalePrice = document.createElement("div")
        const gameSavings = document.createElement("div")
        const gameThumb = document.createElement('img')

        gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${steamListing.steamAppID}'>${steamListing.title}</a>` 
        gamePrice.textContent = `Normal: ${steamListing.normalPrice}`
        gameSalePrice.textContent = `Sale: ${steamListing.salePrice}`
        gameSavings.textContent = `Savings: ${steamListing.savings} %`
        gameThumb.setAttribute("src", `${steamListing.thumb}`)

        steamCard.append(gameTitle)
        steamCard.append(gameThumb)
        steamCard.append(gamePrice)
        steamCard.append(gameSalePrice)
        steamCard.append(gameSavings)
      })
  })

fetch("https://www.cheapshark.com/api/1.0/deals?storeID=8&pageSize=5")
.then(response => response.json())
.then(originListings => {
  originListings.forEach(
    originListing => {
      const gameTitle = document.createElement("div")
      const gamePrice = document.createElement("div")
      const gameSalePrice = document.createElement("div")
      const gameSavings = document.createElement("div")
      const gameThumb = document.createElement('img')

      gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${originListing.steamAppID}'>${originListing.title}</a>` 
      gamePrice.textContent = `Normal: ${originListing.normalPrice}`
      gameSalePrice.textContent = `Sale: ${originListing.salePrice}`
      gameSavings.textContent = `Savings: ${originListing.savings} %`
      gameThumb.setAttribute("src", `${originListing.thumb}`)

      originCard.append(gameTitle)
      originCard.append(gameThumb)
      originCard.append(gamePrice)
      originCard.append(gameSalePrice)
      originCard.append(gameSavings)
    })
})


fetch("https://www.cheapshark.com/api/1.0/deals?storeID=25&pageSize=5")
.then(response => response.json())
.then(epicListings => {
  epicListings.forEach(
    epicListing => {
      const gameTitle = document.createElement("div")
      const gamePrice = document.createElement("div")
      const gameSalePrice = document.createElement("div")
      const gameSavings = document.createElement("div")
      const gameThumb = document.createElement('img')

      gameTitle.innerHTML = `<a href='https://store.steampowered.com/app/${epicListing.steamAppID}'>${epicListing.title}</a>` 
      gamePrice.textContent = `Normal: ${epicListing.normalPrice}`
      gameSalePrice.textContent = `Sale: ${epicListing.salePrice}`
      gameSavings.textContent = `Savings: ${epicListing.savings} %`
      gameThumb.setAttribute("src", `${epicListing.thumb}`)

      epicCard.append(gameTitle)
      epicCard.append(gameThumb)
      epicCard.append(gamePrice)
      epicCard.append(gameSalePrice)
      epicCard.append(gameSavings)
    })
})

