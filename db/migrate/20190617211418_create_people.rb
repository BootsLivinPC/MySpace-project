class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :nickName
      t.string :phoneNum

      t.timestamps
    end
  end
end
