import { Component, HostListener, OnInit } from '@angular/core';
import { Task } from 'src/app/modal/task';
import { CrudOprService } from 'src/app/service/crud-opr.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  taskObj = new Task();
  taskArr = [];

  addTitle = '';
  selectedWorkCategory = '';
  addDescription = '';
  priorityCheck = '';

  editTitle = '';
  editSelectedWorkCategory = '';
  editDescription = '';
  editPriorityCheck = '';

  constructor(private crudService: CrudOprService) {}

  ngOnInit(): void {
    this.editTitle = '';
    this.editSelectedWorkCategory = '';
    this.editDescription = '';
    this.editPriorityCheck = '';

    this.addTitle = '';
    this.selectedWorkCategory = '';
    this.addDescription = '';
    this.priorityCheck = '';

    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  addTask(): void {
    if (
      this.addTitle === '' &&
      this.selectedWorkCategory === '' &&
      this.addDescription === '' &&
      this.priorityCheck === ''
    ) {
      alert('Fields cannot be empty');
      return;
    }

    this.taskObj.title = this.addTitle;
    this.taskObj.workCategory = this.selectedWorkCategory;
    this.taskObj.description = this.addDescription;
    this.taskObj.priority = this.priorityCheck;

    this.crudService.addTask(this.taskObj).subscribe(
      (res) => {
        this.ngOnInit();
        this.addTitle = '';
        this.selectedWorkCategory = '';
        this.addDescription = '';
        this.priorityCheck = '';
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAllTask(): void {
    this.crudService.getAllTasks().subscribe(
      (res) => {
        this.taskArr = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editTask(): void {
    if (
      this.editTitle === '' &&
      this.editSelectedWorkCategory === '' &&
      this.editDescription === '' &&
      this.editPriorityCheck === ''
    ) {
      alert('Edit Fields cannot be empty');
      return;
    }
    this.taskObj.title = this.editTitle;
    this.taskObj.workCategory = this.editSelectedWorkCategory;
    this.taskObj.description = this.editDescription;
    this.taskObj.priority = this.editPriorityCheck;

    this.crudService.editTask(this.taskObj).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteTask(task: Task): void {
    this.crudService.deleteTask(task).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  callEditTask(task: Task): void {
    this.taskObj = task;
    this.editTitle = task.title;
    this.editSelectedWorkCategory = task.workCategory;
    this.editDescription = task.description;
    this.editPriorityCheck = task.priority;
  }

  onChangeOption(value: any): void {
    if (value !== '') {
      this.selectedWorkCategory = value;
    }
  }

  onChangeEditOption(value: any): void {
    if (value !== '') {
      this.editSelectedWorkCategory = value;
    }
  }

  selectCheckBox(value: any, checked: boolean): void {
    if (checked) {
      this.priorityCheck = value;
    } else {
      this.priorityCheck = '';
    }
  }

  selectEditCheckBox(value: any, checked: boolean): void {
    if (checked) {
      this.editPriorityCheck = value;
    } else {
      this.editPriorityCheck = '';
    }
  }

  removeData(): void{
    this.taskObj = new Task();
  }
}
