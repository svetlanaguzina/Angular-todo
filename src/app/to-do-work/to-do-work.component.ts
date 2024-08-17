import { Component, OnInit, } from '@angular/core';
import { toDo } from './toDoWork.model';
import { FormBuilder } from '@angular/forms';
import { TeardownLogic } from 'rxjs';



@Component({
  selector: 'app-to-do-work',
  templateUrl: './to-do-work.component.html',
  styleUrls: ['./to-do-work.component.css']
})
export class ToDoWorkComponent implements OnInit {
  toDos: toDo[] = [
    {
      id: 1,
      work: "running"    
    },
    {
      id: 2,
      work: "sleeping"
    },
    {
      id: 3,
      work: "dancing"
    },
    {
      id: 4,
      work: "painting"
    },
    {
      id: 5,
      work: "driving"
    }
  ]

  selectedToDo!: any;
  filteredToDo!: any;


  constructor(private fb: FormBuilder) { }

    newForm = this.fb.group({
      id: [''],
      work: [''],
    })

  ngOnInit(): void {
  
  }

  get workValue(): string {
    return this.newForm.value.work || '';
  }

  addWork(): void {
    console.log('usao', this.workValue)
    if (!!this.selectedToDo) {
      this.toDos = this.toDos.map( (toDo: toDo) => {
        if (this.selectedToDo.id === toDo.id) {
          toDo = {...toDo, work: this.workValue}
        }
        return toDo;
      } )
    } else {
      this.toDos.push({id: this.toDos.length, work: this.workValue });
    }
    this.newForm.reset();
  }

  onEdit(id: number): void {
    this.selectedToDo = this.toDos.find((toDo: toDo) => id === toDo.id);
    this.newForm.controls['work'].setValue(this.selectedToDo.work)
  }

  onDelete(id: number): void {
    this.toDos = this.toDos.filter( (toDo: toDo) => id !== toDo.id)
  }
}
