DROP Table User;
DROP Table ExerciseType;
DROP Table Exercise;
DROP Table Meal;
DROP Table Ingredient;
DROP Table DiaryEntry;

-- Nutzer (User) - Tabelle
CREATE TABLE User (
    id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

-- Übungstyp (ExerciseType) - Tabelle
CREATE TABLE ExerciseType (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Übungen (Exercise) - Tabelle
CREATE TABLE Exercise (
    id INT PRIMARY KEY,
    diaryEntry INT,
    name VARCHAR(255),
    type INT,
    completed BOOLEAN,
    FOREIGN KEY (type) REFERENCES ExerciseType(id)
    FOREIGN KEY (diaryEntry) REFERENCES DiaryEntry(id)
);

-- Mahlzeiten (Meal) - Tabelle
CREATE TABLE Meal (
    id INT PRIMARY KEY,
    diaryEntry INT,
    name VARCHAR(255),
    FOREIGN KEY (diaryEntry) REFERENCES DiaryEntry(id)
);

-- Zutat (Ingredient) - Tabelle
CREATE TABLE Ingredient (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    quantity INT,
    meal_id INT,
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

-- Tagebucheinträge (DiaryEntry) - Tabelle
CREATE TABLE DiaryEntry (
    id INT PRIMARY KEY,
    user_id INT,
    date DATE,
    comment VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES User(id)
);
