class BestTeamsController < ApplicationController
  def index
    @contactinfo = ContactList.new
    @teams = Team.friendly.order("position ASC").all
  end

  def show
    @team = Team.friendly.find(params[:id])
    @teams = Team.friendly.order("position ASC").where.not(slug: params[:id])
  end
end
