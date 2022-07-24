ActiveAdmin.register Revenue  do
  permit_params :earn, :target, :month, :year

  # controller do |id|
  #   def update
  #     update! do |format|
  #       format.html { redirect_to admin_revenue_path(:revenue_id) }
  #     end
  #   end
  # end
  index do
    selectable_column
    id_column
    column :earn
    column :target
    column :month do |revenue|
      Date::MONTHNAMES[revenue.month]
    end
    column :year
    column :created_at
    column :updated_at

    actions
  end

  show do
    attributes_table do
      row :earn
      row :target
      row :month do |revenue|
        Date::MONTHNAMES[revenue.month]
      end
      row :year
      row :created_at
      row :updated_at

      row  :CreateContribution do
        link_to 'New Contribution', new_admin_contribution_path(:revenue_id => params[:id])
      end

    end

    table_for revenue.contributions do
      column :id
      column :employee_name
      column :designation
      column :contribute
      column :created_at
      column :updated_at
      # column do |contribution|
      #   div(class: 'table_actions') do
      #     a(href: admin_contribution_path(contribution)) do
      #       'Show'
      #     end
      #     a(href: edit_admin_contribution_path(contribution)) do
      #       #link_to 'Edit', edit_admin_contribution_path(contribution)
      #       'Edit'
      #     end
      #     a(href: url_for(contribution, action: 'destroy'))do
      #       #link_to 'Delete', admin_contribution_path(contribution), method: :delete
      #       'Delete'
      #     end
      #   end
      # end
      column do |contribution|
        link_to 'Show', admin_contribution_path(contribution)
      end
      column do |contribution|
        link_to 'Edit', edit_admin_contribution_path(contribution)
      end
      column do |contribution|
        link_to 'Delete', admin_contribution_path(contribution), method: :delete
      end


    end


  end


  form do |f|
    f.inputs do
      f.input :earn
      f.input :target
      f.input :month, :as => :select, :collection => Revenue::MONTH
      f.input :year, :as => :select, :collection => (Date.today.prev_year(10).year..Date.today.next_year(10).year)

    end
    f.actions
  end
end
