import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from '../default/default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { RouterModule } from '@angular/router';
import { ResultsComponent } from '../../modules/results/results.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HackernewsService } from '../../services/hackernews.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocaldataService } from 'src/app/services/localdata.service';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
  ],
  providers: [HackernewsService, LocaldataService]
})
export class DefaultModule { }
