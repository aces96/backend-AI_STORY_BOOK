const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000; 

exports.isPaymentExpired = payment => {
    const presentTime = new Date();
    const timeDifference = presentTime - payment.updatedAt;
  
    return timeDifference > thirtyDaysInMs;
  };