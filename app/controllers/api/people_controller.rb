class Api::PeopleController < ApplicationController
before_action :authenticate_user!
before_action :set_person, only: [:show, :update, :destroy]

  def index
    render json: User.random_person(current_user.liked_people)
  end

  def show
    render json: @person
  end

  def create
    person = Person.new(person_params)
    if person.save
      render json: person
    else
      render json: person.errors, status: 422
    end
  end

  def update
    # if @person.update(person_params)
    #   render json: @person
    # else
    #   render json: @person.errors, status: 422
    # end
    current_user.liked_people << params[:id].to_i
    current_user.save
  end

  def my_people
    render json: User.liked(current_user.liked_people)
  end

  def destroy
    @person.destroy
  end
  private
  def set_person
    @person = Person.find(params[:id])
  end

  def person_params
    params.require(:person).permit(:firstName, :lastName, :email, :nickName, :avatar, :description, :job, :hobbies, :phoneNum)
  end

end


