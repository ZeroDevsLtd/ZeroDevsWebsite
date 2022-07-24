class Team < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  mount_uploader :image, ImageUploader
  validates :position, uniqueness: true
end
