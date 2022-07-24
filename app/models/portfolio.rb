class Portfolio < ApplicationRecord
  extend FriendlyId

  friendly_id :title, use: :slugged
  # serialize :portfolio_type, Array
  has_many :portfolio_photos
  has_many :portfolio_technologies
  has_many :technologies, through: :portfolio_technologies

  accepts_nested_attributes_for :portfolio_photos
  accepts_nested_attributes_for :portfolio_technologies
  validates :portfolio_type, presence: true
  PORTFOLIO_TYPE = ['apps-ios', 'web', 'desktop', 'products']

  scope :completed_portfolio, -> { where(is_complete: true) }
end
