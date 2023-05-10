class StudentsController < ApplicationController
    def index
        @students = ActiveRecord::Base.connection.execute("SELECT * FROM st_table LIMIT 2")
        puts @students
        render json: @students
    end
      
end
