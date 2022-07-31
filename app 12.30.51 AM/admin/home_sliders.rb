ActiveAdmin.register HomeSlider do
  permit_params :image, :title, :sub_title, :link_text, :is_active

  index do
    selectable_column
    id_column
    column :image
    column :title
    column :sub_title
    column :link_text
    column :is_active do |slider|
      if slider.is_active
        link_to "Yes", approved_slider_admin_home_slider_path(slider, is_active: false ), method: :patch, title: "Click to reject!"
      else
        link_to "No", approved_slider_admin_home_slider_path(slider, is_active: true ), method: :patch, title: "Click to approved"
      end
    end
    column :created_at
    actions
  end

  filter :title
  filter :sub_title
  filter :link_text
  filter :created_at

  form do |f|
    f.inputs do
      f.input :image
      f.input :title
      f.input :sub_title
      f.input :link_text
      f.input :is_active
    end
    f.actions
  end

  member_action :approved_slider, method: :patch do
    slider = HomeSlider.find(params[:id])
    if slider.present?
      slider.update(is_active: params[:is_active]) if params[:is_active].present?
      if slider.is_active == true
        flash[:notice] = "Now the Slider is showing on home page"
      else
        flash[:notice] = "Now the Slider is hiding from home page "
      end
      redirect_to request.referer
    end
  end

end
