Store.destroy_all
User.destroy_all

steam = Store.create(name: "Steam")
amazon = Store.create(name: "Amazon")
gog = Store.create(name: "GOG")
epic_games_store = Store.create(name: "Epic Games Store")
humble_store = Store.create(name: "Humble Store")

User.create(name: "user1", password: "password", store: steam)