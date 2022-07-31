class Technology < ApplicationRecord
  has_many :portfolio_technologies
  has_many :portfolios, through: :portfolio_technologies

  TECHNOLOGY_TYPE = ['software-development-services', 'custom-software-development-company', 'desktop-application-development-company', 'ui-ux-design', 'mobile-app-development-company', 'website-maintenance-services-company', 'technologies', 'java-application-development-services', 'ruby-on-rails-development-company', 'web-development-company', '.net-development', 'how-we-work', 'career']
  mount_uploader :logo, ImageUploader

end
