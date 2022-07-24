class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :client_photo
      t.string :company_name
      t.string :designation
      t.string :logo
      t.text :comments
      t.boolean :is_comment, default: true
      t.boolean :is_logo, default: true
      t.string :website_link
      t.integer :rating_point

      t.timestamps
    end
  end
end
