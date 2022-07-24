ActiveAdmin.register Team do
  form do |f|
    f.inputs do
      f.input :name
      f.input :position
      f.input :designation
      f.input :description
      f.input :image, as: :file
      f.input :facebook_link
      f.input :twitter_link
      f.input :linkedin_link
      f.input :github_link
    end
    f.actions
  end
  permit_params :name, :position, :designation, :description, :image, :facebook_link, :twitter_link, :linkedin_link, :github_link
end
