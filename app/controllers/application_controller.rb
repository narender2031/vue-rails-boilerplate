# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :set_session_locale
  before_action :set_locale

  private

  def set_locale
    I18n.locale = user_locale ||
                  session[:locale] ||
                  I18n.default_locale
  end

  def user_locale
    locale = current_user&.language&.downcase&.to_sym
    return locale if I18n.available_locales.include?(locale)
  end

  def set_session_locale
    locale_from_params = params[:locale]&.to_sym
    return unless I18n.available_locales.include?(locale_from_params)

    session[:locale] = locale_from_params
  end
end
