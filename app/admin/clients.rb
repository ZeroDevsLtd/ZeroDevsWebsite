ActiveAdmin.register Client do
  permit_params :name, :client_photo, :company_name, :designation, :logo, :is_comment, :is_logo, :website_link, :comments, :rating_point

  index do
    selectable_column
    id_column
    column :name
    column :company_name
    column :designation
    column :website_link
    column :is_logo
    column :is_comment
    column :rating_point
    actions
  end
end
