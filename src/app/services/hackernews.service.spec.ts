import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HackernewsService } from './hackernews.service';

describe('HackernewsService', () => {
  let service: HackernewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(HackernewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
