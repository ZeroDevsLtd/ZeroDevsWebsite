class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.string :title
      t.string :url
      t.text :content
      t.boolean :is_complete

      t.timestamps
    end
  end
end
