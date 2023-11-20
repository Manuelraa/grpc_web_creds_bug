# grpc_web_creds_bug

Repo used to report the bug / missing feature for credential handling.

To generate the code use `./buf_generate.sh`.

Then when you look in `api/gen/grpc_web_cred_bug/v1/test_grpc_web_pb.js` for the definition of `proto.grpc_web_cred_bug.v1.TestServiceClient` you will see the `credentials` parameter is not used/implemented.

Currently manually settings the `authorization` metadata on request is the only way to get this to work. (At least the only way I found)

```js
const client = new TestServiceClient("https://localhost:8080", null, {withCredentials: true})
const request = new TestRequest()
request.setName("foo")
const metadata = {
    authorization: 'Bearer TOKEN',
}
client.test(request, metadata, (err, response) => {
    console.log(response)
}
```
