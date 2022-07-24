ActiveAdmin.register Comment do
  permit_params :name, :email, :text, :status

  index do
    selectable_column
    id_column
    column :name
    column :email
    column :text
    column :status
    column :created_at
    column :updated_at
    column :blog
    column :change_status  do |comment|
      if comment.status != 'approved'
        link_to 'Approve', update_status_admin_comment_path(comment, status:'approved'), method: :patch
      else
        link_to 'Reject', update_status_admin_comment_path(comment, status:'rejected'), method: :patch
      end
    end
    actions
  end


  show do
    attributes_table do
      row :name
      row :email
      row :text
      row :status
      row :created_at
      row :updated_at
      row :blog
      row :change_status do |comment|
        if comment.status != 'approved'
          link_to 'Approve', update_status_admin_comment_path(comment, status:'approved'), method: :patch
        else
          link_to 'Reject', update_status_admin_comment_path(comment, status:'rejected'), method: :patch
          end
        end

    end

  end




  member_action :update_status, method: :patch do
   comment = Comment.find(params[:id])
    if comment.present?
      comment.update(status:params[:status]) if params[:status].present?
     redirect_to request.referer, notice: 'Status updated successfully.'
    end
  end


end
