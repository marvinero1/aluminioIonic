import { TestBed } from '@angular/core/testing';

import { NotificacionsService } from './notificacions.service';

describe('NotificacionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificacionsService = TestBed.get(NotificacionsService);
    expect(service).toBeTruthy();
  });
});
