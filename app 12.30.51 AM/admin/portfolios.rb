ActiveAdmin.register Portfolio do
  permit_params :title,
                :url,
                :content,
                :is_complete,
                :portfolio_type ,
                :sub_content,
                :team_size,
                :project_duration,
                portfolio_photos_attributes: [:id, :image, :_destroy],
                portfolio_technologies_attributes: [:id, :technology_id, :destroy]

  form do |f|
    f.inputs 'Details' do
      f.input :title
      f.input :url, label: 'Web Link'
      f.input :content
      f.input :sub_content
      f.input :team_size
      f.input :project_duration
      f.input :portfolio_type, :as => :select, :collection => Portfolio::PORTFOLIO_TYPE.map { |c| c }.sort
    end

    f.inputs do
      f.has_many :portfolio_photos, heading: 'Photos', allow_destroy: true, new_record: true do |a|
        a.input :image, label: 'Portfolio Image'
      end
    end

    f.inputs do
      f.has_many :portfolio_technologies, heading: 'Technology Used', allow_destroy: true, new_record: true do |a|
        a.input :technology
      end
      f.input :is_complete
    end

    f.actions
  end


end
