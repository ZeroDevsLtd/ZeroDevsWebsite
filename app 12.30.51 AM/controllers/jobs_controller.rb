class JobsController < ApplicationController
  def index
  end

  def show
    @job = Job.friendly.find(params[:id])
    unless @job.present?
      flash[:warning] = 'Job not found!'
      redirect_to jobs_path and return
    end
  end
end
