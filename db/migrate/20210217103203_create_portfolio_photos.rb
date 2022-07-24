class CreatePortfolioPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_photos do |t|
      t.string :image
      t.references :portfolio, foreign_key: true

      t.timestamps
    end
  end
end
