import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputModule } from "./user-input/user-input.module";
import { CommonModule } from "@angular/common";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";

@NgModule({
    declarations:[
        AppComponent,HeaderComponent,InvestmentResultComponent
    ],
    imports: [BrowserModule,UserInputModule,CommonModule],
    bootstrap:[AppComponent]

})
export class AppModule{}