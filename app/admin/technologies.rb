ActiveAdmin.register Technology do
  permit_params :name, :logo, :preview, :content, :for_backend, :for_frontend, :page_url
  # :page_url, :as => :select, :collection => Technology::TECHNOLOGY_TYPE.map { |c| c }.sort
  form do |f|
    f.inputs 'Details' do
      f.input :name
      f.input :logo
      f.input :preview
      f.input :content
      f.input :for_backend
      f.input :for_frontend
      f.input :page_url, :as => :select, :collection => Technology::TECHNOLOGY_TYPE.map { |c| c }.sort
    end
    f.actions
  end
end
