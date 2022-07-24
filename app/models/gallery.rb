class Gallery < ApplicationRecord
  mount_uploader :image, ImageUploader

  scope :is_show_all, -> {where(is_show: true)}
end
