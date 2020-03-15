class RoutesController < ApplicationController
  def index
    @routes = Route.all
  end
  def new
  end
end