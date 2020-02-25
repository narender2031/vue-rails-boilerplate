class Users::SessionsController < ApplicationController
  skip_before_action :authenticate_user!
  def new
    puts 'sjjhdjdhs'
  end
end
