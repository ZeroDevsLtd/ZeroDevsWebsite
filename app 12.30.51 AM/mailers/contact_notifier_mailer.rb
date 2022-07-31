class ContactNotifierMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_notifier_mailer.received.subject
  #

  def send_apply_info(apply_info)
    @apply_info = apply_info
    attachments["#{apply_info[:name]}_resume.pdf"] = File.read(apply_info[:cv].tempfile)
    mail to: 'syftetltd@gmail.com', subject: 'Apply confirmation info'
  end


  def received(contact)
    @contact = contact

    mail to: 'syftetltd@gmail.com', subject: 'Syftet contact confirmation info'
  end

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_notifier_mailer.shipped.subject
  #
  def shipped(contact)
    @contact = contact

    mail to: contact.email, subject: 'Confirmation'
  end
end
