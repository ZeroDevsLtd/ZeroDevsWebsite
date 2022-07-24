class CreatePortfolioTechnologies < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_technologies do |t|
      t.references :portfolio, foreign_key: true
      t.references :technology, foreign_key: true

      t.timestamps
    end
  end
end
