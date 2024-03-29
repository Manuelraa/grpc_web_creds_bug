// source: grpc_web_cred_bug/v1/test.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.grpc_web_cred_bug.v1.Test', null, global);
goog.exportSymbol('proto.grpc_web_cred_bug.v1.TestRequest', null, global);
goog.exportSymbol('proto.grpc_web_cred_bug.v1.TestResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc_web_cred_bug.v1.Test = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc_web_cred_bug.v1.Test, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc_web_cred_bug.v1.Test.displayName = 'proto.grpc_web_cred_bug.v1.Test';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc_web_cred_bug.v1.TestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc_web_cred_bug.v1.TestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc_web_cred_bug.v1.TestRequest.displayName = 'proto.grpc_web_cred_bug.v1.TestRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc_web_cred_bug.v1.TestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc_web_cred_bug.v1.TestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc_web_cred_bug.v1.TestResponse.displayName = 'proto.grpc_web_cred_bug.v1.TestResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc_web_cred_bug.v1.Test.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc_web_cred_bug.v1.Test.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc_web_cred_bug.v1.Test} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_web_cred_bug.v1.Test.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc_web_cred_bug.v1.Test}
 */
proto.grpc_web_cred_bug.v1.Test.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc_web_cred_bug.v1.Test;
  return proto.grpc_web_cred_bug.v1.Test.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc_web_cred_bug.v1.Test} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc_web_cred_bug.v1.Test}
 */
proto.grpc_web_cred_bug.v1.Test.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc_web_cred_bug.v1.Test.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc_web_cred_bug.v1.Test.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc_web_cred_bug.v1.Test} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_web_cred_bug.v1.Test.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grpc_web_cred_bug.v1.Test.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc_web_cred_bug.v1.Test} returns this
 */
proto.grpc_web_cred_bug.v1.Test.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc_web_cred_bug.v1.TestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc_web_cred_bug.v1.TestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc_web_cred_bug.v1.TestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_web_cred_bug.v1.TestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc_web_cred_bug.v1.TestRequest}
 */
proto.grpc_web_cred_bug.v1.TestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc_web_cred_bug.v1.TestRequest;
  return proto.grpc_web_cred_bug.v1.TestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc_web_cred_bug.v1.TestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc_web_cred_bug.v1.TestRequest}
 */
proto.grpc_web_cred_bug.v1.TestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc_web_cred_bug.v1.TestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc_web_cred_bug.v1.TestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc_web_cred_bug.v1.TestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_web_cred_bug.v1.TestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.grpc_web_cred_bug.v1.TestRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc_web_cred_bug.v1.TestRequest} returns this
 */
proto.grpc_web_cred_bug.v1.TestRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc_web_cred_bug.v1.TestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc_web_cred_bug.v1.TestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc_web_cred_bug.v1.TestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_web_cred_bug.v1.TestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    test: (f = msg.getTest()) && proto.grpc_web_cred_bug.v1.Test.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc_web_cred_bug.v1.TestResponse}
 */
proto.grpc_web_cred_bug.v1.TestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc_web_cred_bug.v1.TestResponse;
  return proto.grpc_web_cred_bug.v1.TestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc_web_cred_bug.v1.TestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc_web_cred_bug.v1.TestResponse}
 */
proto.grpc_web_cred_bug.v1.TestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpc_web_cred_bug.v1.Test;
      reader.readMessage(value,proto.grpc_web_cred_bug.v1.Test.deserializeBinaryFromReader);
      msg.setTest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc_web_cred_bug.v1.TestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc_web_cred_bug.v1.TestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc_web_cred_bug.v1.TestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc_web_cred_bug.v1.TestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grpc_web_cred_bug.v1.Test.serializeBinaryToWriter
    );
  }
};


/**
 * optional Test test = 1;
 * @return {?proto.grpc_web_cred_bug.v1.Test}
 */
proto.grpc_web_cred_bug.v1.TestResponse.prototype.getTest = function() {
  return /** @type{?proto.grpc_web_cred_bug.v1.Test} */ (
    jspb.Message.getWrapperField(this, proto.grpc_web_cred_bug.v1.Test, 1));
};


/**
 * @param {?proto.grpc_web_cred_bug.v1.Test|undefined} value
 * @return {!proto.grpc_web_cred_bug.v1.TestResponse} returns this
*/
proto.grpc_web_cred_bug.v1.TestResponse.prototype.setTest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grpc_web_cred_bug.v1.TestResponse} returns this
 */
proto.grpc_web_cred_bug.v1.TestResponse.prototype.clearTest = function() {
  return this.setTest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grpc_web_cred_bug.v1.TestResponse.prototype.hasTest = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.grpc_web_cred_bug.v1);
