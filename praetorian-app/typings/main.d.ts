/// <reference path="main/ambient/es6-shim/index.d.ts" />
declare module 'web3'{
    export = Web3;
    class Web3{
        eth:any;
        setProvider:any;
    }
}

declare module 'praetorian-services'{
    export = praetorianServices;
    function praetorianServices(value:any)
}
    

declare module 'ethereumjs-testrpc'{
    export = TestRPC;
    module TestRPC {
        export function provider()
    }
}