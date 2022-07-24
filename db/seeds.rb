# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
# AdminUser.create!(email: 'info@zerodevs.com', password: 'cse070222#', password_confirmation: 'cse070222#')
AdminUser.create!(email: 'zerodevs@gmail.com', password: 'Zero123#@', password_confirmation: 'Zero123#@')

HomeSlider.create!(image: 'slider1.jpg', title: 'Feel your Dream in Reality!', sub_title: 'We encourage you to dream and share your dreams with us. Our team of expertise is always up for the challenge to make your concept and demands into the final product.', link_text: 'Contact Us!' , is_active: false )
HomeSlider.create!(image: 'slider2.png', title: 'Sophisticated development', sub_title: 'Our team of expertise has years of experience to deal with your most sophisticated applications. We provide special care, focus and emphasis on what you think deserves special attention.', link_text: 'Lets Cheer Up!', is_active: false )
HomeSlider.create!(image: 'slider3.jpg', title: 'Application development', sub_title: 'Our team of expertise are highly skilled at developing web, mobile and desktop applications based on your demands and requirements. We are aware of the fact that you have some unique requirements and we are fully prepared to meet your expectations.', link_text: 'Lets Do It!', is_active: false )


