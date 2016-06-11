/**
 * Langs model events
 */

'use strict';

import {EventEmitter} from 'events';
import Langs from './langs.model';
var LangsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
LangsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Langs.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    LangsEvents.emit(event + ':' + doc._id, doc);
    LangsEvents.emit(event, doc);
  }
}

export default LangsEvents;
