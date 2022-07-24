class AddPageUrlToTechnologies < ActiveRecord::Migration[5.2]
  def change
    add_column :technologies, :page_url, :string
  end
end
