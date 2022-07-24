class CreateHomeSliders < ActiveRecord::Migration[5.2]
  def change
    create_table :home_sliders do |t|
      t.string :image
      t.string :title
      t.string :sub_title
      t.string :link_text
      t.boolean :is_active

      t.timestamps
    end
  end
end
