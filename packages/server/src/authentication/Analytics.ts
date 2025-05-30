
import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  event: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  data: { type: Object },
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

export default Analytics;