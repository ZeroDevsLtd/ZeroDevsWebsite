Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'homes#index'
  get '/sitemap', to: 'homes#sitemap'
  get 'review', to: 'homes#review'
  post 'start_project', to: 'homes#start_project'
  get 'software-development-services', to: 'homes#services'
  get 'career', to: 'homes#career'
  get 'about-us', to: 'homes#about_us'
  post 'apply_online', to: 'homes#apply_online'
  get 'technologies', to: 'homes#technologies'
  get 'contact-us', to: 'homes#contact_us'
  # get 'portfolio', to: 'homes#portfolios'
  get 'how-we-work', to: 'homes#how_we_work'
  get 'custom-software-development-company', to: 'homes#custom_software_development'
  get 'desktop-application-development-company', to: 'homes#desktop_service'
  get 'mobile-app-development-company', to: 'homes#mobile_application_services'
  get 'web-development-company', to: 'homes#web_development_services'
  get 'ruby-on-rails-development-company', to: 'homes#ror_development'
  get 'java-application-development-services', to: 'homes#java_application_development'
  get '.net-development', to: 'homes#dot_net_development', as: 'dot-net-development'
  get 'website-maintenance-services-company', to: 'homes#maintenance_services'
  get 'company-profile', to: 'homes#company_profile'
  # get 'best-teams', to: 'homes#best_team'
  get 'photo-gallery', to: 'homes#photo_gallery'
  get 'web-design-development-company', to: 'homes#web_design_company'
  get 'privacy-and-policy', to: 'homes#privacy_and_policy'
  get 'ui-ux-design', to: 'homes#ui_ux_design'

  resources :blogs, only: [:index, :show] do
    resources :comments, only: [:create]
  end

  resources :jobs, only: [:index, :show]
  resources :best_teams, only: [:index, :show]

  resources :portfolios, only: [:index, :show]
  scope :internal do
    resources :revenues do
      post :auth, on: :collection, as: :auth
      get :new_session, on: :collection, as: :session
      get :destroy_session, on: :collection, as: :destroy_session
    end
  end

end
