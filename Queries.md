Create New User

INSERT INTO User ( User_ID, First_Name, Last_Name, Created_At, Email )
INSERT INTO Password ( User_ID, hash_password, salt )

Create New Workout
INSERT INTO Workout ( Workout_ID, User_ID, Workout_Name, Date_Performed )

Create New Exercise
INSERT INTO Exercise ( Exercise_ID, Workout_ID, Exercise_Name, Order_Num, Weight, Time, Reps )

Add Exercise to Workout
INSERT INto Performed ( Performed_ID, Exercise_ID, Weight_ld, Time_sec, Reps_count )
