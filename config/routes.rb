Rails.application.routes.draw do
  namespace :api do
    get 'cities/index'
    get 'cities/show'
    get 'cities/new'
    get 'cities/edit'
  end
 namespace :api do
  resources :users do
    resources :posts
  end
end
namespace :api do
  resources :cities do
    resources :posts
  end
end

end
