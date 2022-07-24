ActiveAdmin.register Blog do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :title, :sub_title, :content, :banner, :author, :tag_list, :slug, :is_featured
  # def create
  #   # Blog.create! name: "Joe Schmoe"
  #   Blog.find_each(&:save)
  # end

  form do |f|
    f.semantic_errors *f.object.errors.keys
    f.inputs do
      f.input :title
      f.input :sub_title
      f.input :content, as: :ckeditor, :label=> false , :toolbar=>'Full', :width=>'400px', :height=>'200px'
      f.input :banner
      f.input :author
      f.input :tag_list
      f.input :is_featured
    end
    f.actions
  end

  index do
    selectable_column
    id_column
    column :title
    column :sub_title
    column :content do |body|
      truncate(body.content, omision: "...", length: 100)
    end
    column :banner
    column :author
    column :created_at
    column :updated_at
    column :tag_list
    column :is_featured
    actions

end


  show do
    attributes_table do
      row :title
      row :sub_title
      row :content
      row :banner
      row :author
      row :created_at
      row :updated_at
      row :tag_list
    end

  end

end
