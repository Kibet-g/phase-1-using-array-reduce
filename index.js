const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to sum the battery batches
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
  return accumulator + currentBatch;
}, 0);
