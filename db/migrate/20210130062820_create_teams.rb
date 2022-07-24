class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :designation
      t.text :description
      t.string :image
      t.string :facebook_link
      t.string :twitter_link
      t.string :linkedin_link
      t.string :github_link

      t.timestamps
    end
  end
end
