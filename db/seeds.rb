# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: "Chris", current_city: "Atl", img: "something")
city = City.create(name: "Atlanta", img: "https://i.imgur.com/PMSkWN5.jpg")
post = Post.create(title: "test", body: "this is a test", city_id: 1 )