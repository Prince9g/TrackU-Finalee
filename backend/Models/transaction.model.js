const transactionSchema = new mongoose.Schema({
    transaction_id: String,
    amount: Number,
    date: Date,
    app: String,
    status: String
});

export const Transaction = mongoose.model('Transaction', transactionSchema);