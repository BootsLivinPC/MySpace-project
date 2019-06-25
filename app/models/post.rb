class Post < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :person, optional: true
end
