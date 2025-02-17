import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserInputComponent } from "./user-input.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[UserInputComponent],
    imports:[FormsModule,CommonModule],
    exports:[UserInputComponent]
})
export class UserInputModule{}