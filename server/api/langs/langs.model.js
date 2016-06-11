'use strict';

import mongoose from 'mongoose';

var LangsSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Langs', LangsSchema);
