50.times do
  
    firstName = Faker::Name.first_name,
    lastName = Faker::Name.last_name,
    hobbies = Faker::Hacker.say_something_smart,
    job = Faker::Job.title,
    avatar = Faker::Avatar.image("my-own-slug", "200x150", "jpg"),
    description = Faker::TvShows::RickAndMorty.quote,
    nickName = Faker::Ancient.hero,
    email = Faker::Internet.email,
    phoneNum = Faker::PhoneNumber.phone_number
    Person.create(
      firstName: firstName, 
      lastName: lastName,
      hobbies: hobbies, 
      job: job,
      avatar: avatar,
      description: description,
      nickName: nickName,
      email: email,
      phoneNum: phoneNum )
  
  end

  puts "50 people are created"