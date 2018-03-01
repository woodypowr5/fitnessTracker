import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material';

import { StopTrainingComponent } from './stop-training/stop-training.component';
import {TrainingService} from '../training.service';
import {Exercise} from '../exercise.model';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingStopped = new EventEmitter<void>();
  progress = 0;
  timer: number;
  runningExercise: Exercise;

  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer(){
    this.runningExercise = this.trainingService.getRunningExercise();
    const step = this.runningExercise.duration / 100 * 1000;
    this.timer = setInterval( () => {
      this.progress = this.progress + 1;
      if(this.progress >= 100){
        clearInterval(this.timer);
      }
    }, step);
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true) {
        this.trainingStopped.emit();
      } else {
        this.startOrResumeTimer();
      }
    });
  }

}
