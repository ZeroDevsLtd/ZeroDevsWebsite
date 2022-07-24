class CreateTechnologies < ActiveRecord::Migration[5.2]
  def change
    create_table :technologies do |t|
      t.string :name
      t.string :logo
      t.text :preview
      t.text :content
      t.boolean :for_backend, default: false
      t.boolean :for_frontend, default: false

      t.timestamps
    end
  end
end
