class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :sub_title
      t.text :content
      t.string :banner
      t.string :author
      t.boolean :is_featured, default: true

      t.timestamps
    end
  end
end
