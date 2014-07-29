Rails.application.routes.draw do
  
  root 'site#index2'

  get 'index' => 'site#index', as: :index
  
end
