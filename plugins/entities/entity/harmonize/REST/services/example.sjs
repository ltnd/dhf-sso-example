function example(context, params) {
   return {context,params, user:xdmp.getCurrentUser(), roles:xdmp.getCurrentRoles().toArray().map(r => xdmp.roleName(r))}
};
exports.GET = example;