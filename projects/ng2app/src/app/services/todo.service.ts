import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { Todo } from '../models/todo.model';


@Injectable()
export class TodoService {
    private host: string = 'http://0.0.0.0:8000/api';
    todo: Todo[] = [];

    private httpOptions: any = {
        // ヘッダ情報
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        observe: 'response',  // ⇐ これを追加
        body: null
    };

    constructor(private http: HttpClient) {
    }

    public getAllTodo(): Todo[] {
        this.http.get(this.host + '/todo/', this.httpOptions)
            .pipe(map(res => res as unknown as HttpResponse<Todo[]>))
            .forEach(res => {
                res.body?.forEach(t => {
                    this.todo.push(t);
                });
        });
        return this.todo;
    }
}