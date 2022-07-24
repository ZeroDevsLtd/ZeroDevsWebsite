class HomesController < ApplicationController
  before_action :set_contact
  # GET /homes or /homes.json
  def index
    @home_sliders = HomeSlider.active_slider
    @clients = Client.all
    @featured_blogs = Blog.featured_blogs
    @reviews = Client.reviews
    @technologies = Technology.all
    @portfolios = Portfolio.completed_portfolio
  end

  def review
    client_review = []
    review = Client.reviews
    review.each do |rev|
      client_review << {name: rev.name, comp_des: "#{rev.designation} at #{rev.company_name}", image: rev.client_photo, comment: rev.comments }
    end
    render json: { review: client_review }
  end

  def apply_online
    @applyinfo = apply_params

    if @applyinfo.present?
      flash[:success] = 'Success!'
      ContactNotifierMailer.send_apply_info(@applyinfo).deliver
    else
      flash[:danger] = 'Unable to send!'
    end
    redirect_to career_path
  end

  def start_project
    respond_to do |format|
      @contactinfo = ContactList.create(post_params)
      if @contactinfo.save
        ContactNotifierMailer.received(@contactinfo).deliver
        format.js {}
      else
        format.js {}
      end
    end
  end

  def services
  end

  def desktop_service
    @portfolio = Portfolio.first
  end

  def custom_software_development
    @portfolio = Portfolio.second
    @portfo = Portfolio.third
  end

  def mobile_application_services
    @portfolio = Portfolio.last
  end

  def dot_net_development
    @portfolio = Portfolio.first
    @portfo = Portfolio.last
  end

  def about_us
    @teams = Team.all
    @photos = Gallery.is_show_all
  end

  def photo_gallery
    @photos = Gallery.is_show_all
  end

  def technologies

  end

  def career
    @jobs = Job.published_jobs
  end

  def sitemap
    @blogs = Blog.all
    @domain = "#{request.protocol}#{request.host_with_port}"
  end

  private
  def post_params
    params.require(:contact_list).permit(:name, :email, :telephone, :message)
  end
  def apply_params
    params.permit(:name, :email, :phone, :cv, :message, :position)
  end
  def set_contact
    @contactinfo = ContactList.new
  end

end
