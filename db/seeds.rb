# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
City.destroy_all
User.destroy_all
Post.destroy_all


user = User.create(name: "Chris", current_city: "Atl", img: "something")


city1 = City.create(name: "Atlanta", img: "https://i.imgur.com/ryX9LiT.jpg")
city2 = City.create(name: "San Francisco", img: "https://i.imgur.com/EwfNdxu.jpg")
city3 = City.create(name: "London", img: "https://i.imgur.com/vKlbMZD.jpg")
