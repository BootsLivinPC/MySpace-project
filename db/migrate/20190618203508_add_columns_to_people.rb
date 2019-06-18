class AddColumnsToPeople < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :avatar, :string
    add_column :people, :job, :string
    add_column :people, :description, :string
    add_column :people, :hobbies, :string
  end
end
