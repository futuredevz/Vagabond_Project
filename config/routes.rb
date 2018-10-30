Rails.application.routes.draw do

namespace :api do
  resources :cities do
    resources :posts
  end
end

# get '/api/*', to='404'
# get '/*', to='root'

end
