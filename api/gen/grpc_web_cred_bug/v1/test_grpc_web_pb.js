/**
 * @fileoverview gRPC-Web generated client stub for grpc_web_cred_bug.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: grpc_web_cred_bug/v1/test.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')
const proto = {};
proto.grpc_web_cred_bug = {};
proto.grpc_web_cred_bug.v1 = require('./test_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_web_cred_bug.v1.TestServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.grpc_web_cred_bug.v1.TestServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.grpc_web_cred_bug.v1.TestRequest,
 *   !proto.grpc_web_cred_bug.v1.TestResponse>}
 */
const methodDescriptor_TestService_Test = new grpc.web.MethodDescriptor(
  '/grpc_web_cred_bug.v1.TestService/Test',
  grpc.web.MethodType.UNARY,
  proto.grpc_web_cred_bug.v1.TestRequest,
  proto.grpc_web_cred_bug.v1.TestResponse,
  /**
   * @param {!proto.grpc_web_cred_bug.v1.TestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.grpc_web_cred_bug.v1.TestResponse.deserializeBinary
);


/**
 * @param {!proto.grpc_web_cred_bug.v1.TestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.grpc_web_cred_bug.v1.TestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.grpc_web_cred_bug.v1.TestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.grpc_web_cred_bug.v1.TestServiceClient.prototype.test =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/grpc_web_cred_bug.v1.TestService/Test',
      request,
      metadata || {},
      methodDescriptor_TestService_Test,
      callback);
};


/**
 * @param {!proto.grpc_web_cred_bug.v1.TestRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.grpc_web_cred_bug.v1.TestResponse>}
 *     Promise that resolves to the response
 */
proto.grpc_web_cred_bug.v1.TestServicePromiseClient.prototype.test =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/grpc_web_cred_bug.v1.TestService/Test',
      request,
      metadata || {},
      methodDescriptor_TestService_Test);
};


module.exports = proto.grpc_web_cred_bug.v1;

