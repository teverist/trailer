class CommentsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :find_post!
  
  def index
    @comments = @post.comments
  end

  def new
    @comment = Comment.new
  end
  
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(params[comment_params])
    redirect_to post_path(@post)
  end
  
  def show
    @comment = Comment.find(params[:id])
  end
  
  def edit
  end
  
  def destroy
    @comment = @post.comments.find(params[:id])

    if @comment.user_id == @current_user_id
      @comment.destroy
    else
      render 'index'
    end
  end

  
  private
  
  def comment_params
    params.require(:comment).permit(:body)
  end
  
  def find_post!
    @post = Post.find_by_slug!(params[:post_slug])
  end
end