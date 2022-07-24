module HomesHelper
  def get_controller_name
    controller_name
  end

  def get_action_name
    action_name
  end

  def which_controller_and_action?( controller_title, action_title )
    controller_name == controller_title && action_name == action_title
  end
end
