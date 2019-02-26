  function loginExecute(userId){
    let roles = []
    //internal
    if (cts.exists(cts.documentQuery(userId))){
    	roles = cts.doc(userId).toObject().roles
    }
    //external
    //let ldapResult = xdmp.ldapSearch(`(cn=${userId})`,{"useAppserverConfig":true})
    // TODO => set roles var from ldapResult

    //set Roles
    xdmp.login("userSSO", null, false, roles)
  }
  exports.login = module.amp(loginExecute)