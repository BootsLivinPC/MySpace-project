50.times do
  Person.create(
    firstName: Faker::Name.first_name,
    lastName: Faker::Name.last_name,
    hobbies: Faker::Hacker.say_something_smart,
    job: Faker::Job.title,
    avatar: Faker::Avatar.image("my-own-slug", "50x50"),
    description: Faker::TvShows::RickAndMorty.quote,
    nickName: Faker::Ancient.hero,
    email: Faker::Internet.email,
    phoneNum: Faker::PhoneNumber.phone_number
  )
  end

  puts "50 people are created"