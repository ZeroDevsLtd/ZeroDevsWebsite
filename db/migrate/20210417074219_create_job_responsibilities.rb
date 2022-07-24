class CreateJobResponsibilities < ActiveRecord::Migration[5.2]
  def change
    create_table :job_responsibilities do |t|
      t.string :required_responsible
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
