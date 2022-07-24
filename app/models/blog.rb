class Blog < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  has_many :comments, dependent: :destroy
  validates :title, :sub_title, :content, :banner, :author, presence: true

  # Carrierwave for image upload
  mount_uploader :banner, ImageUploader

  # For tagging
  acts_as_taggable

  scope :featured_blogs, -> { where(is_featured: true) }

  def previous
    Blog.where(["id < ?", id]).last
  end

  def next
    Blog.where(["id > ?", id]).first
  end
end
