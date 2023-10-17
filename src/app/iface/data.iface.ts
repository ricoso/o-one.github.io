import {Validators} from '@angular/forms';

export interface PlantDate {
  description: '',
  maxPhase: 0,
  phases : {[key: string]: {
    duration: {
      startDay: 0,
      endDay: 0
    }
    parameters: {}
    }}
}

