class AddAttributeToPortfolios < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :sub_content, :string
    add_column :portfolios, :slug, :string
    add_column :portfolios, :portfolio_type, :string
  end
end
