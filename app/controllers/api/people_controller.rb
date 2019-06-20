class Api::PeopleController < ApplicationController
before_action :authenticate_user!
before_action :set_people, only: [:show, :update, :destroy]

  def index
    render json: Person.all
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
    if @person.update(person_params)
      render json: @person
    else
      render json: @person.errors, status: 422
    end
  end

  def destroy
    @person.destroy
  end
  private
  def set_person
    @person = Person.find(params[:id])
  end

  def person_params
    params.require(:person).permit(:firstName, :lastName, :email, :nickName, :avatar, :description, :job, :hobbies, :phoneNum, :user_id)
  end

end


