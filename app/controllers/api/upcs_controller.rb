class Api::UpcsController < ApplicationController

  def create
    @upc = Upc.new(upc_params)
    if @upc.save
      render "api/upcs/show"
    else
      render json: @upc.errors.full_messages, status: 422
    end
  end

  def show
    @upc = Upc.find_by_upc(upc_params[:upc])
  end

  def index
    @upcs = Upc.all
  end

  def destroy
    upc = Upc.find_by_upc(upc_params[:upc])
    upc.destroy
    render "api/upcs/index"
  end

  private

  def upc_params
    params.require(:upc).permit(:product_name, :upc)
  end

end
