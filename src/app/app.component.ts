import { Component } from '@angular/core';

interface IRecipe {
  name: string;
  instructions: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pa-starter-angular';
  recipes: Array<IRecipe> = [];
  isFormVisible = false;
  isFormHasErrors = false;

  /**
   * On Submit
   * 
   * @summary This function is getting call by the submit button
   * @param name: string
   * @param instructions: string
   * @returns void 
   */
  onSubmit(name: string, instructions: string): void {
    if (name && instructions) {
      this.recipes.unshift({ name, instructions });
      this.isFormVisible = false;
    } else {
      this.isFormHasErrors = true;
    }
  }
}
