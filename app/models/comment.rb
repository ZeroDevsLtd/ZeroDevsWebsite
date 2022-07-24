class Comment < ApplicationRecord
  belongs_to :blog

  scope :approved, -> {where(status: 'approved')}


end
