class Client < ApplicationRecord
  validates :company_name, :logo, :website_link, presence: true
  validates :rating_point, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}

  mount_uploader :client_photo, ImageUploader
  mount_uploader :logo, ImageUploader

  scope :reviews, ->{ where(is_comment: true)}
end
