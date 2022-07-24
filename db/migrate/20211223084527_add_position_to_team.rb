class AddPositionToTeam < ActiveRecord::Migration[5.2]
  def change
    add_column :teams, :position, :integer
  end
end
