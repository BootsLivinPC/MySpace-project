Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
 
  namespace :api do
  resources :people do
    resources :posts
    
 end
end

  namespace :api do
  resources :user do
    resources :posts
  end
end

   namespace :api do
    resources :people, only: [:update]
  get 'my_people', to: 'people#my_people'
   
  end
end
