class Api::PostsController < ApplicationController

  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: current_user.posts
  end

  def show
    render json: @post
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
    post = current_user.posts.update(post_params)
    if post.save
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
  end


private
def set_person
  @person = Person.find(params[:person_id])
end

def set_post
@post = Post.find(params[:id])
end

def post_params
params.require(:post).permit(:title, :body, :person_id, :user_id)
end

end
