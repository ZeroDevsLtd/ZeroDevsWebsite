ActiveAdmin.register Contribution do
  menu false
  permit_params :employee_name, :designation, :contribute, :revenue_id

  controller do
     # def new
     #   #@rv = Revenue.find_by_id([:revenue_id])
     #  # p @rv
    # end

    def create
      create! do |format|
        format.html { redirect_to admin_revenue_path(resource.revenue) }
      end
    end

    def update
      update! do |format|

        format.html { redirect_to admin_revenue_path(resource.revenue) }
      end
    end

    def destroy
      #contribution = Contribution.find(params[:id])
      destroy! do |format|

        format.html { redirect_to admin_revenue_path(resource.revenue) }
      end
    end

  end

  form do |f|
    f.inputs do
      f.input :employee_name, :as => :select, :collection => Contribution::EMPLOYE
      f.input :designation, :as => :select, :collection => Contribution::DESIGNATION
      f.input :contribute
      f.input :revenue_id, :input_html => { :value => params[:revenue_id] }, as: :hidden
      # f.input :revenue_id, :label => 'Select Revenue', :as => :select,
      #         :collection => Revenue.all.map {|r| ["#{Date::MONTHNAMES[r.month]}-" + "#{r.year}-" + "Revenue Of:#{r.earn}", r.id]}

    end
    f.actions
  end

  index do
    selectable_column
    id_column
    column :employee_name
    column :designation
    column :contribute
    column :month do |c|
      Date::MONTHNAMES[c.revenue.month] if c.revenue.present?
    end
    column :year do |c|
      c.revenue.year if c.revenue.present?
    end
    column :created_at
    column :updated_at
    actions
  end


  show do
    attributes_table do
      row :employee_name
      row :designation
      row :contribute
      row :month do |c|
        Date::MONTHNAMES[c.revenue.month]
      end
      row :year do |c|
        c.revenue.year
      end
      row :created_at
      row :updated_at
    end

  end


end
