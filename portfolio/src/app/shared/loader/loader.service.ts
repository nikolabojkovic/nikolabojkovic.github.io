import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class LoaderService {
    public $loading: Subject<boolean> = new Subject();

    desibleLoader(): void {
        setTimeout(() =>{
            this.$loading.next(false);
        }, 1000)
    }
}