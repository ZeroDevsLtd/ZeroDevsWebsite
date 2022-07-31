class PortfoliosController < ApplicationController
  before_action :set_portfolio, only: %i[ show ]

  # GET /portfolios or /portfolios.json
  def index
    @portfolios = Portfolio.all
    @contactinfo = ContactList.new
  end

  # GET /portfolios/1 or /portfolios/1.json
  def show
    @contactinfo = ContactList.new
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_portfolio
      @portfolio = Portfolio.friendly.find(params[:id])
    end
end
