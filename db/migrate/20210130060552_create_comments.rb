class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :name
      t.string :email
      t.text :text
      t.string :status
      t.references :blog, null: false, foreign_key: true

      t.timestamps
    end
  end
end
