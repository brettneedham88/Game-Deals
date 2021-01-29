# Game Deals
> The Top Game Deals Of The Day!!!



## General info
Game Deals is a website that allows you to find the best daily video game deals on the market.

## Intro Video
[Game Deals on YouTube]()

## Technologies
* Ruby - version 2.6.5
* Rails - version 6.1.1
* Javascript 
* HTML
* CSS



## Setup
To run this project, first, install it locally by typing the following in the terminal:
```
git clone git@github.com:brettneedham88/mod2_project.git
```
Then CD into the repository and run the following:
```
bundle install
rails db:migrate
rails db:seed
```
Then have two terminals open, CD into "front-end" and CD into "backend" and then run the website with: 
```
front-end: lite-sever
backend: rails s
```

## Code Examples
```
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
```

## Features
* See the top 5 deals for Steam, GOG.com, and Epic Games
* Create an account and choose a favorite store
* See the top 50 games on sale for each store
* Buy now links will redirect you to website where the game is being sold
* All games are up to date with prices and savings


To-do list:
* Refactor code
* Create larger API to include more account features


## Status
Project functions as intended, more room for improvement 


## Inspiration
Just some video game nerds creating an app that allows us to see some of the best game deals on the market 


## Contact
Created by [Brett Needham](https://github.com/brettneedham88) and [Nate Croteau](https://github.com/natekcroteau)