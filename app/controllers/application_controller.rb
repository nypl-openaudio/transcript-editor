class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #  protect_from_forgery with: :exception

  # Allow us to use JBuilder
  include ActionController::ImplicitRender

  # Allow us to cache
  # include ActionController::Caching
  # self.perform_caching = true
  # self.cache_store = ActionController::Base.cache_store

  before_filter :touch_session

  # Ensure a session id is available for all!
  def touch_session
    session[:touched] = 1
  end

  def is_admin?
    user_signed_in? && current_user.isAdmin?
  end

  def is_moderator?
    user_signed_in? && current_user.isModerator?
  end

  def authenticate_admin!
    unless is_admin?
      if is_moderator?
        redirect_to moderator_url
        return
      else
        render json: {
          error: 1,
          message: 'You must log in as admin to access this section'
        }
        return
      end
    end
  end

  def authenticate_moderator!
    unless is_moderator?
      render json: {
        error: 1,
        message: 'You must log in as admin or moderator to access this section'
      }
      return
    end
  end
end
