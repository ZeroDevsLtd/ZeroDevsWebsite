class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.integer :vacancy
      t.string :required_experience
      t.datetime :deadline
      t.boolean :is_published

      t.timestamps
    end
  end
end
