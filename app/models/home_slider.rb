class HomeSlider < ApplicationRecord
  mount_uploader :image, ImageUploader

  scope :active_slider, -> { where(is_active: true) }
end
