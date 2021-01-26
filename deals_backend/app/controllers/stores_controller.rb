class StoresController < ApplicationController


  def index
    @stores = Store.all 
    render json: @stores 
  end


  def show
    @store = Store.find(params[:id])
    render json: @store 
  end
  

  def create  
    @store = Store.create(
      store_id: params[:store_id],
      name: params[:name]
    )
  render json: @store
  end


  def update
    @store = Store.find(params[:id])

    @store.update(
      store_id: params[:store_id],
      name: params[:name])

    render json: @store
  end

  def destroy
    @store = Store.find(params[:id]) 

    @store.destroy 

    render json: "Store: #{@store.name} has been destroyed."
  end


end
