import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const catalogSchema = new mongoose.Schema(
  {
    Product: [{ type: mongoose.Schema.Types.ObjectId, required: true, unique: true }],
    seller: {     // Make it an array
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Catalog',
        required: true,
        unique: true
      },


  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Catalog', catalogSchema);

export default Product;