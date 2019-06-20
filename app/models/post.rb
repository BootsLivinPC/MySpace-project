class Post < ApplicationRecord
  belongs_to :user
  belongs_to :person, optional: true
end
