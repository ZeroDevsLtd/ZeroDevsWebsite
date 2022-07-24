require 'net/smtp'
class RevenuesController < ApplicationController
  before_action :require_auth, except: [:auth, :new_session]

  def index
    @years = Revenue.all.order(year: :desc).map(&:year).uniq
    @year = params[:year] || @years.first

    @revenues = Revenue.where(year: @year)

    @months = @revenues.map(&:month).sort
    @month = params[:month] || @months.last

    contributions = Contribution.joins(:revenue).where(revenues: {month: @month, year: @year})
    @employee_name = contributions.map(&:employee_name)
    @contribute = contributions.map(&:contribute)
    @colors = contributions.map { "##{Random.new.bytes(3).unpack("H*")[0]}" }


    # local way of codding
    # @monthly_revneue = Revenue.find_by(month: @month , year: @year)
    # p @monthly_revneue.inspect
    #
    # if  @monthly_revneue.nil?
    #   @employee_name =[]
    #   @contribute =[]
    # else
    #   @employee_name = @monthly_revneue.contributions.map(&:employee_name)
    #   @contribute = @monthly_revneue.contributions.map(&:contribute)
    # end

    #
    # if params[:year].nil?
    #   if Revenue.all.map(&:year).include?(Date.current.year)
    #     @params_year = Revenue.all.map(&:year).last
    #   else
    #     @params_year = Date.current.year
    #   end
    # else
    #   @params_year = params[:year]
    # end
    #
    # @revenues = Revenue.where(year: @params_year)
    #
    #
    # if params[:month].nil?
    #   if Date.current.month != Revenue.all.map(&:month)
    #     @params_month = Revenue.all.map(&:month).last
    #   else
    #     @params_month = Date.current.month
    #   end
    # else
    #   @params_month = params[:month]
    # end
    #
    # @monthly_revneue = Revenue.find_by(month: @params_month , year: @params_year)
    #
    #
    #
    # if  @monthly_revneue.nil?
    #   @employee_name =[]
    #   @contribute =[]
    # else
    #   @employee_name = @monthly_revneue.contributions.map(&:employee_name)
    #   @contribute = @monthly_revneue.contributions.map(&:contribute)
    # end
    #
    #
    # #@months1 = @revenues.map(&:month)
    #
    # @contributions = Contribution.all
    # #@year = Revenue.all.map(&:year)
  end

  def destroy_session
    session.delete('current_user')
    redirect_to root_path
  end

  def auth
    smtp = Net::SMTP.new '88.99.161.3', '587'
    begin
      smtp.start('88.99.161.3', params[:email], params[:password], :login) do |sm|
        session[:current_user] = {email: params[:email]}
        redirect_to revenues_path
      end
    rescue => ex
      flash[:error] = 'Invalid email or password'
      redirect_to session_revenues_path
    end
  end

  private

  def require_auth
    @current_user = current_user
    unless @current_user.present?
      flash[:error] = 'You are not authorized to this page. Please login!'
      redirect_to session_revenues_path
    end
  end
end
