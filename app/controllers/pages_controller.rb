class PagesController < ApplicationController
  def dashboard
    @posts = Post.all.order("created_at desc")
  end
  def map
    
  end
end