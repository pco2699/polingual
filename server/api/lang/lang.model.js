'use strict';

import mongoose from 'mongoose';

var LangSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Lang', LangSchema);
