
Store.destroy_all
User.destroy_all

steam = Store.create( store_id: "1", name: "Steam")
amazon = Store.create( store_id: "4", name: "Amazon")
gameStop = Store.create( store_id: "5", name: "GameStop")
epic_games_store = Store.create( store_id: "25", name: "Epic Games Store")
humble_store = Store.create( store_id: "11", name: "Humble Store")

User.create(username: "user1", password: "password", store: steam)


