import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from "../../core/models/task.model";

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Output()
  completeTask = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  completeTaskItem(id: string): void {
    this.completeTask.emit(id);
  }
}
