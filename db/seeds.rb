50.times do
  p = Person.create(
    firstName: Faker::Name.first_name,
    lastName: Faker::Name.last_name,
    hobbies: Faker::Hacker.say_something_smart,
    job: Faker::Job.title,
    avatar: Faker::Avatar.image("my-own-slug", "100x100", "jpg"),
    description: Faker::TvShows::RickAndMorty.quote,
    nickName: Faker::Ancient.hero,
    email: Faker::Internet.email,
    phoneNum: Faker::PhoneNumber.phone_number
  )
  2.times do
    c = p.posts.create(
      person_id: Faker::Number.between(1, 50),
      title: Faker::Cannabis.health_benefit,
      body: Faker::Quote.famous_last_words,

    )
    end
end

puts "50 people are created, with posts"
# firstName: firstName, 
# lastName: lastName,
# hobbies: hobbies, 
# job: job,
# avatar: avatar,
# description: description,
# nickName: nickName,
# email: email,
# phoneNum: phoneNum 