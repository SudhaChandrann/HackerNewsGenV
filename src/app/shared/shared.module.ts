import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './widgets/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { CarasoulComponent } from './widgets/carasoul/carasoul.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocaldataService } from '../services/localdata.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProgressSpinnerComponent,
    CardComponent,
    CarasoulComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    OverlayModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    NgbModule
      ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProgressSpinnerComponent,
    CardComponent,
    CarasoulComponent
  ],
  providers: [LocaldataService]
})
export class SharedModule { }
