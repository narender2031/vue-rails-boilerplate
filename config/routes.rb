# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, skip: [:sessions], controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  as :user do
    get 'login', to: 'users/sessions#new', as: :new_user_session
    delete 'logout', to: 'devise/sessions#destroy', as: :user_session
  end

  get 'hello/say_hello'
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
