class Job < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  has_many :job_skills
  has_many :job_responsibilities
  has_many :job_offers
  has_many :job_additional_skills

  accepts_nested_attributes_for :job_offers
  accepts_nested_attributes_for :job_skills
  accepts_nested_attributes_for :job_responsibilities
  accepts_nested_attributes_for :job_additional_skills

  scope :published_jobs, -> { where(is_published: true)}
end
