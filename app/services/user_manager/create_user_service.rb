module UserManager
  class CreateUserService < ApplicationService
    def initialize(user_params)
      @user_params = user_params
    end

    attr_accessor :user_params

    def call
      user = User.new(user_params)
      user.save
      user
    end
  end
end
