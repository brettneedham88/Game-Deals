class UsersController < ApplicationController
  def index
    @users = User.all 
    render json: @users, include: :store
  end


  def show
    @user = User.find(params[:id])
    render json: @user, include: :store
  end


  def create  
    @user = User.create(
      name: params[:username],
      password: params[:password],
      store_id: params[:store]
    )
    # render json: @user
    redirect_to "http://localhost:3001"
  end


  def update
    @user = User.find(params[:id])
    @user.update(
      username: params[:username],
      password: params[:password],
      store: params[:store]
    )
    render json: @user
  end


  def destroy
    @user = User.find(params[:id]) 

    @user.destroy 

    render json: "User: #{@user.username} has been destroyed."
  end
end
