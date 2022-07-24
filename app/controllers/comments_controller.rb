class CommentsController < ApplicationController
  def create
    @blog = Blog.friendly.find(params[:blog_id])
    @comment = @blog.comments.build(comment_params)
    respond_to do |format|
      if @comment.save
        format.html {
          flash[:success] = 'Your comment is pending for Admin approval.'
          redirect_to blog_path(@blog)
        }
      else
        format.html {
          flash[:danger] = @comment.errors.full_messages.join(', ')
          redirect_to blog_path(@blog)
        }
      end

    end
  end

  private
  def comment_params
    params.require(:comment).permit(:name, :email, :text)
  end
end
