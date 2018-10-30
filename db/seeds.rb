# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: "Chris", current_city: "Atl", img: "something")
<<<<<<< HEAD
city = City.create(name: "Atlanta", img: "https://i.pinimg.com/originals/ef/e5/77/efe57732e72644aeb14367eac4394c9a.jpg")
city = City.create(name: "Los Angeles", img: "https://www.visitmacysusa.com/sites/default/files/styles/hero/public/macys-los-angeles-skyline-at-night-header.jpg?itok=FTikBOPJ")
city = City.create(name: "Dallas", img: "https://xixerone.com/en/wp-content/uploads/sites/2/2017/09/Best-areas-to-stay-in-Dallas-Texas.jpg")

=======
city = City.create(name: "Atlanta", img: "https://i.imgur.com/PMSkWN5.jpg")
>>>>>>> f384901578ba35b3740beaf7186527aedda402f9
post = Post.create(title: "test", body: "this is a test", user_id: 1, city_id: 1 )