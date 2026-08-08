"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=t(function(O,n){
var c=require('@stdlib/blas-ext-base-gsumpw/dist').ndarray;function d(e,r,a,v){return e<=0?NaN:c(e,r,a,v)/e}n.exports=d
});var i=t(function(R,s){
var f=require('@stdlib/strided-base-stride2offset/dist'),m=u();function w(e,r,a){return m(e,r,a,f(e,a))}s.exports=w
});var q=t(function(b,o){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=i(),x=u();y(p,"ndarray",x);o.exports=p
});var g=q();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
