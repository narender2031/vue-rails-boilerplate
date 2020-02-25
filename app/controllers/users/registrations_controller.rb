class Users::RegistrationsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @user = User.new
  end

  def create
    puts signup_params
    user = UserManager::CreateUserService.call(signup_params)
    if user.errors.any?
      puts user.errors.full_messages
    else
      puts user
    end
  end

  private

  def signup_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
