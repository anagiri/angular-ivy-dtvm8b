import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

// Import required Angular material modules
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatButtonModule} from '@angular/material/button';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatCardModule} from '@angular/material/card';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import {MatListModule} from '@angular/material/list';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSelectModule} from '@angular/material/select';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatSortModule} from '@angular/material/sort';
// import {MatTableModule} from '@angular/material/table';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
    imports: [],  //MatDatepickerModule, MatNativeDateModule
    exports: [
      MatDialogModule,
      BrowserAnimationsModule,
        // MatAutocompleteModule,
        // MatButtonModule,
        // MatButtonToggleModule,
        
        // MatInputModule,
        // MatListModule,
        // MatSelectModule,
        // MatSortModule,
        // MatTableModule,
        // MatCardModule,
        // MatTabsModule,
        // MatSlideToggleModule,
        // MatMenuModule,
        // MatRadioModule,
        // MatCheckboxModule,
        // MatTooltipModule,
        // MatPaginatorModule,
        // MatGridListModule,
        // MatIconModule,
        // MatDatepickerModule
    ]
})
export class AngularMaterialsModule {}
