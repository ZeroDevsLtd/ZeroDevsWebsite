class BlogsController < ApplicationController
  def index
    @blogs = Blog.order( created_at: :desc ).page(params[:page]).per(4)
    @contact = ContactList.new
  end

  def show
    @blog = Blog.friendly.find(params[:id])
    unless @blog.present?
      flash[:warning] = 'Blog not found!'
      redirect_to blogs_path and return
    end
    @comments = @blog.comments.approved
  end
end
