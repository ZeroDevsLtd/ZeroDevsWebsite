class AddColumnsToPortfolio < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :team_size, :integer
    add_column :portfolios, :project_duration, :string
  end
end
