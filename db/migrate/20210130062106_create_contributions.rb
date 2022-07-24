class CreateContributions < ActiveRecord::Migration[5.2]
  def change
    create_table :contributions do |t|
      t.string :employee_name
      t.string :designation
      t.float :contribute
      t.references :revenue, foreign_key: true

      t.timestamps
    end
  end
end
