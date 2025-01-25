import { TestBed } from '@angular/core/testing';
import { AccountService } from './account.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Account } from '../models/account/account';
import { HttpErrorResponse } from '@angular/common/http';

describe('AccountService', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8080/api/accounts';

  // Mock account data
  const mockAccounts: Account[] = [
    {
      id: '1',
      balance: 1000,
      accountNumber: 'ACC001',
      url: 'account-url-1',
      status: 'ACTIVE'
    },
    {
      id: '2',
      balance: 2000,
      accountNumber: 'ACC002',
      url: 'account-url-2',
      status: 'ACTIVE'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });
    service = TestBed.inject(AccountService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Error Handling', () => {
    it('should handle network error', () => {
      service.getAllAccounts().subscribe({
        next: () => fail('should have failed with network error'),
        error: (error: HttpErrorResponse) => {
          expect(error.error.message).toBe('Network Error');
        }
      });

      const req = httpMock.expectOne(apiUrl);
      const mockError = new ProgressEvent('error');
      req.error(mockError);
    });

    it('should handle server error (500)', () => {
      service.getAllAccounts().subscribe({
        next: () => fail('should have failed with 500 error'),
        error: (error: HttpErrorResponse) => {
          expect(error.status).toBe(500);
          expect(error.statusText).toBe('Internal Server Error');
        }
      });

      const req = httpMock.expectOne(apiUrl);
      req.flush('Server error', {
        status: 500,
        statusText: 'Internal Server Error'
      });
    });

    it('should handle not found error (404)', () => {
      service.getAllAccounts().subscribe({
        next: () => fail('should have failed with 404 error'),
        error: (error: HttpErrorResponse) => {
          expect(error.status).toBe(404);
          expect(error.statusText).toBe('Not Found');
        }
      });

      const req = httpMock.expectOne(apiUrl);
      req.flush('Not found', {
        status: 404,
        statusText: 'Not Found'
      });
    });

    it('should handle unauthorized error (401)', () => {
      service.getAllAccounts().subscribe({
        next: () => fail('should have failed with 401 error'),
        error: (error: HttpErrorResponse) => {
          expect(error.status).toBe(401);
          expect(error.statusText).toBe('Unauthorized');
        }
      });

      const req = httpMock.expectOne(apiUrl);
      req.flush('Unauthorized', {
        status: 401,
        statusText: 'Unauthorized'
      });
    });
  });

  describe('getAllAccounts', () => {
    it('should retrieve all accounts', () => {
      service.getAllAccounts().subscribe(accounts => {
        expect(accounts).toEqual(mockAccounts);
        expect(accounts.length).toBe(2);
      });

      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockAccounts);
    });

    it('should handle empty response', () => {
      service.getAllAccounts().subscribe(accounts => {
        expect(accounts).toEqual([]);
        expect(accounts.length).toBe(0);
      });

      const req = httpMock.expectOne(apiUrl);
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });
  });

  describe('deleteAccount', () => {
    it('should delete account successfully', () => {
      const accountId = '1';
      const remainingAccounts = mockAccounts.filter(acc => acc.id !== accountId);

      service.deleteAccount(accountId).subscribe(accounts => {
        expect(accounts).toEqual(remainingAccounts);
        expect(accounts.length).toBe(mockAccounts.length - 1);
      });

      const req = httpMock.expectOne(`${apiUrl}/${accountId}`);
      expect(req.request.method).toBe('DELETE');
      req.flush(remainingAccounts);
    });

    it('should handle deletion not found error', () => {
      const accountId = '999';

      service.deleteAccount(accountId).subscribe({
        next: () => fail('should have failed with 404 error'),
        error: (error: HttpErrorResponse) => {
          expect(error.status).toBe(404);
          expect(error.statusText).toBe('Not Found');
        }
      });

      const req = httpMock.expectOne(`${apiUrl}/${accountId}`);
      req.flush('Account not found', {
        status: 404,
        statusText: 'Not Found'
      });
    });
  });
});
