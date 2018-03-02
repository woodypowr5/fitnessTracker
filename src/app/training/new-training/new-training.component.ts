import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../exercise.model';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  availableExercises: Exercise[] = [];
  availableExercisesSubscription = Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.availableExercisesSubscription = this.trainingService.availableExercisesChanged.subscribe(
      exercises => this.availableExercises = exercises
    );
    this.trainingService.fetchAvailableExercises();
  }

  onTrainingStarted(form: NgForm){
    this.trainingService.startExercise(form.value.exercise);
  }

}
