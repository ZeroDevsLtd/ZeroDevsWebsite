class CreateJobAdditionalSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :job_additional_skills do |t|
      t.string :additional_skill
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
