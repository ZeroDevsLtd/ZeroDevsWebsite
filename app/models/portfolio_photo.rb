class PortfolioPhoto < ApplicationRecord
  belongs_to :portfolio
  mount_uploader :image, ImageUploader
end
