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
    if (params[:id])
      @upc = Upc.find_by_id(params[:id])
    end
    if @upc.nil?
      @upc = Upc.find_by_upc(params[:id])
    end

    if @upc.nil?
      render json: {error: "No such UPC"}
      return
    end
  end

  def index
    @upcs = Upc.all
  end

  def find

  end

  def destroy
    @upc = Upc.find_by_id(params[:id])
    @upc.destroy
    render "api/upcs/show"
  end

  private

  def upc_params
    params.require(:upc).permit(:product_name, :upc)
  end

end
