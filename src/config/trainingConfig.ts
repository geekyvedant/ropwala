// src/config/trainingConfig.ts

export const TRAINING_CONFIG = {
  // Set the global training date here
  trainingDate: new Date('2026-06-14T09:00:00'), 
  
  // Registration deadline (e.g., 1 day before at 9 PM)
  get registrationDeadline(): Date {
    const deadline = new Date(this.trainingDate);
    deadline.setDate(deadline.getDate() - 1);
    deadline.setHours(21, 0, 0, 0);
    return deadline;
  },

  // Fee configuration
  baseFee: 8000,
  discountedFee: 5000,
  currencySymbol: '₹'
};