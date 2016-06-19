'use strict';

import mongoose from 'mongoose';

var InterestSchema = new mongoose.Schema({
  text: String
});

export default mongoose.model('Interest', InterestSchema);
