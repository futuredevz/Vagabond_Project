class Post < ApplicationRecord
  
  validates :title, length: { maximum: 200, too_long:"entry is too long" }, presence: true
  validates :body, presence: true

  belongs_to :user, optional: true
  belongs_to :city
end
