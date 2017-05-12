Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
   resources :upcs, only: [:create, :show, :index, :destroy]
 end

 root "static_pages#root"

end
