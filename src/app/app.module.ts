import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RoutesModule } from "./routes/routes.module";
import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "angularfire2/auth";
import { SpendingListComponent } from './components/spending-list/spending-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { DropdownBS4Directive } from './directives/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, HomeComponent, NavbarComponent, SpendingListComponent, CategoriesListComponent, CategoryItemComponent, CategoryFormComponent, DropdownBS4Directive],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RoutesModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
