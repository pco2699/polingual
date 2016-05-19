/**
 * Lang model events
 */

'use strict';

import {EventEmitter} from 'events';
import Lang from './lang.model';
var LangEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
LangEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Lang.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    LangEvents.emit(event + ':' + doc._id, doc);
    LangEvents.emit(event, doc);
  }
}

export default LangEvents;
