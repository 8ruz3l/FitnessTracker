import { Component } from '@angular/core';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent {
  date = new Date();
  plannedExercises = [
    {
      name: 'Exercise 1',
      amount: 5,
      type: 'KM'
    },
    {
      name: 'Exercise 2',
      amount: 10,
      type: 'reps'
    },
    {
      name: 'Exercise 2',
      amount: 10,
      type: 'reps'
    },
    {
      name: 'Exercise 2',
      amount: 10,
      type: 'reps'
    },
    {
      name: 'Exercise 2',
      amount: 10,
      type: 'reps'
    }
  ]

  meals = [
    {
      name: 'Meal 1',
      ingredients: [
        {
          name: '1',
          amount: 1
        },
        {
          name: '2',
          amount: 2
        }
      ]
    },
    {
      name: 'Meal 2',
      ingredients: [
        {
          name: '3',
          amount: 3
        },
        {
          name: '4',
          amount: 5
        }
      ]
    }
  ]

  deleteExercise(exercise: any) {
    
  }

  editExercise(exercise: any) {
    
  }

  addExersicePopup() {
    
  }

  deleteMeal(meal: any) {

  }

  editMeal(meal: any) {
    
  }

  addMealPopup() {

  }
}
