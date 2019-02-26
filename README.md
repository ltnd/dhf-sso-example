### Description
Example on DHF2 to execute authentication by a token.

### Install
gradle mlDeploy

### Run example
Insert into data-hub-FINAL a document with roles to be set on user "myUser" :
```
let doc = {"roles":["rest-reader", "rest-reader-internal"]}
xdmp.invokeFunction(() => xdmp.documentInsert("myUser", doc, {"permissions" : xdmp.permission('rest-reader', 'read'),"collections" : "users"}),
                    {"database":xdmp.database("data-hub-FINAL"), "update":"true"}

```

Test the custom service "example" with myUser : http://localhost:8011/v1/resources/example?rs:user=myUser
The service return the context, params, user and roles.

### Known issue
If any issue on mlRedeploy (amps is not deleted), run :
```
let query = cts.elementValueQuery(fn.QName("http://marklogic.com/xdmp/security","local-name"), "loginExecute");
xdmp.invokeFunction(() => xdmp.documentDelete(fn.baseUri(fn.head(cts.search(query)))), {database:xdmp.securityDatabase(), update:"true"})
```
