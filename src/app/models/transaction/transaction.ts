import { TransactionType } from './transaction-type.enum';
import { TransactionStatus } from './transaction-status.enum';

export interface Transaction {

    type: TransactionType,
    amount: number,
    status: TransactionStatus,
    sourceAccountNumber: string,
    destinationAccountNumber: string

}
