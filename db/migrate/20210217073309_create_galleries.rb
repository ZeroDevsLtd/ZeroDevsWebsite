class CreateGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :galleries do |t|
      t.string :name
      t.string :image
      t.boolean :is_show

      t.timestamps
    end
  end
end
