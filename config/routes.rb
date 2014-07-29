Rails.application.routes.draw do
  
  root 'site#index'

  get 'index2' => 'site#index2', as: :index2
  
end
