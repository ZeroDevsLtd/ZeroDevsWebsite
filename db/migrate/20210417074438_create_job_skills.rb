class CreateJobSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :job_skills do |t|
      t.string :skill_required
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
