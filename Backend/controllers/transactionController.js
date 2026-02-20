const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json({
            success: true,
            data: transactions
        });
    }catch (error) {
            res.status(500).json({
                success: false,
                message: "Server Error"
            });
        }
    
};

exports.addTransaction = async (req,res)=>{
    try{
        const {text, amount} = req.body;
        const transaction = await Transaction.create({
            text,
            amount
        });
        res.status(201).json({
            success : true,
            data : transaction
        });

    }catch (error) {
        res.status(400).json({
          success: false,
          message: "Invalid Data"
        });
      }
};

exports.deleteTransaction = async (req, res) => {
    try {
      const transaction = await Transaction.findById(req.params.id);
  
      if (!transaction) {
        return res.status(404).json({
          success: false,
          message: "Not Found"
        });
      }
  
      await transaction.deleteOne();
  
      res.status(200).json({
        success: true,
        message: "Deleted Successfully"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server Error"
      });
    }
  };