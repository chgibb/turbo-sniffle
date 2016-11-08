DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Password;
DROP TABLE IF EXISTS Workout;
DROP TABLE IF EXISTS Exercise;
DROP TABLE IF EXISTS Performed;
CREATE TABLE User (
User_ID int NOT NULL PRIMARY KEY,
First_Name varchar(24) NOT NULL,
Last_Name varchar(24),
Created_At date NOT NULL,
Email varchar(64) NOT NULL
);
CREATE TABLE Password(
User_ID int NOT NULL PRIMARY KEY,
hash_password varchar(255) NOT NULL,
salt varchar(8) NOT NULL,
FOREIGN KEY(User_ID) REFERENCES User(User_ID)
);
CREATE TABLE Workout (
Workout_ID int NOT NULL PRIMARY KEY,
User_ID int,
Workout_Name varchar(32) NOT NULL,
Date_Performed date,
FOREIGN KEY(User_ID) REFERENCES User(User_ID)
);
CREATE TABLE Exercise (
Exercise_ID NOT NULL PRIMARY KEY,
Workout_ID int,
Exercise_Name varchar(16) NOT NULL,
Order_Num int,
Weight boolean,
TimeLength boolean,
Reps boolean,
FOREIGN KEY(Workout_ID) REFERENCES Workout(Workout_ID)
);
CREATE TABLE Performed (
Performed_ID int NOT NULL PRIMARY KEY,
User_ID int,
Exercise_ID int,
Weight_lb int,
Time_sec float(8),
Reps_count int,
FOREIGN KEY(User_ID) REFERENCES User(User_ID),
FOREIGN KEY(Exercise_ID) REFERENCES Exercise(Exercise_ID)
);