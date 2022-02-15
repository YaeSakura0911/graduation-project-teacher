import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QueryCompleteListForm} from "../../../form/query-complete-list-form";
import {CompleteEntity} from "../../../entity/complete.entity";
import {TaskMarkComponent} from "../task-mark/task-mark.component";
import {TaskService} from "../../../service/task.service";

@Component({
    selector: 'app-task-complete',
    templateUrl: './task-complete.component.html',
    styleUrls: ['./task-complete.component.scss']
})
export class TaskCompleteComponent implements OnInit {

    taskId: number = 0;
    completeId: number = 0;
    drawerVisible: boolean = false;

    pageIndex: number = 1;
    pageSize: number = 10;
    total!: number;

    completeList: CompleteEntity[] = [];

    @ViewChild('taskMarkDrawer')
    taskMarkDrawer!: TaskMarkComponent;

    constructor(
        private route: ActivatedRoute,
        private taskService: TaskService
    ) {
        this.route.queryParams.subscribe((res) => {
            this.taskId = Number(res['taskId']);
        })
    }

    ngOnInit(): void {
        this.queryCompleteList();
    }

    onBack() {
        history.go(-1)
    }

    // 分页页码改变
    pageIndexChange(): void {
        this.queryCompleteList();
    }

    // 分页大小改变
    pageSizeChange(): void {
        this.queryCompleteList();
    }

    // 查询完成情况列表
    queryCompleteList(): void {
        this.drawerVisible = false;
        // 查询完成情况表单
        let form = new QueryCompleteListForm(
            this.taskId,
            0,
            this.pageIndex,
            this.pageSize
        );
        console.log("QueryCompleteListForm", form);
        // 发起请求
        this.taskService.queryCompleteList(form).subscribe(response => {
            console.log("queryCompleteList()", response);
            if (response.code == 200) {
                this.completeList = response.body.completeList;
                this.total = response.body.total;
            }
        })
    }

    openTaskMarkDrawer(completeId: number): void {
        this.taskMarkDrawer.openDrawer(completeId);
    }
}
