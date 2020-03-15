Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#dashboard'
  get 'map', to: 'routes#new'
  resources :users do
    resource :profile
  end
  resources :posts do
    resources :comments, only: [:create, :index, :destroy]
  end
end
