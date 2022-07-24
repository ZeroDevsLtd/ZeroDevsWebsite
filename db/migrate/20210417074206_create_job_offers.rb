class CreateJobOffers < ActiveRecord::Migration[5.2]
  def change
    create_table :job_offers do |t|
      t.string :offer
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
