import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial demo users', () => {
    const users = service.getUsers();
    expect(users.length).toBeGreaterThanOrEqual(3);
  });

  it('should authenticate demo admin', () => {
    const success = service.login('admin@gmail.com', 'admin123');
    expect(success).toBe(true);
    expect(service.getCurrentUser()?.role).toBe('admin');
  });
});
