  let user = xdmp.getRequestField("rs:user")
  if (user){
    require("/lib/sso/loginExecute.sjs").login(user);
  }
  xdmp.invoke("/MarkLogic/rest-api/endpoints/resource-service-query.xqy");