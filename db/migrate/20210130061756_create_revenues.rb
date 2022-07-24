class CreateRevenues < ActiveRecord::Migration[5.2]
  def change
    create_table :revenues do |t|
      t.float :earn
      t.float :target
      t.integer :month
      t.integer :year

      t.timestamps
    end
  end
end
