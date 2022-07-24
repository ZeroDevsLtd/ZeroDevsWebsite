ActiveAdmin.register Job do
  permit_params :title, :description, :job_type, :vacancy, :required_experience, :deadline, :is_published,
                job_skills_attributes: [:id, :skill_required, :destroy],
                job_additional_skills_attributes: [:id, :additional_skill, :destroy],
                job_responsibilities_attributes: [:id, :required_responsible, :destroy],
                job_offers_attributes: [:id, :offer, :destroy]

  form do |f|
    f.inputs 'Details' do
      f.input :title
      f.input :description, label: 'Job Description'
      f.input :vacancy
      f.input :required_experience
      f.input :job_type
      f.input :deadline
      f.input :is_published
    end

    f.inputs do
      f.has_many :job_responsibilities, heading: 'Job Responsibilities', allow_destroy: true, new_record: true do |a|
        a.input :required_responsible, label: 'Responsibility'
      end
    end

    f.inputs do
      f.has_many :job_skills, heading: 'Required Job Skill', allow_destroy: true, new_record: true do |a|
        a.input :skill_required, label: 'Skill'
      end
    end
    f.inputs do
      f.has_many :job_offers, heading: 'Job Offers', allow_destroy: true, new_record: true do |a|
        a.input :offer, label: 'Job Offer'
      end
    end
    f.inputs do
      f.has_many :job_additional_skills, heading: 'Additional Job Skill', allow_destroy: true, new_record: true do |a|
        a.input :additional_skill, label: 'Additional Skill'
      end
    end



    f.actions
  end


end
