class Profile < ActiveRecord::Base
  belongs_to :user
  @profile = Profile.new
end