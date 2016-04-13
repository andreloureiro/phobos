// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__12257__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12258__i = 0, G__12258__a = new Array(arguments.length -  0);
while (G__12258__i < G__12258__a.length) {G__12258__a[G__12258__i] = arguments[G__12258__i + 0]; ++G__12258__i;}
  args = new cljs.core.IndexedSeq(G__12258__a,0);
} 
return G__12257__delegate.call(this,args);};
G__12257.cljs$lang$maxFixedArity = 0;
G__12257.cljs$lang$applyTo = (function (arglist__12259){
var args = cljs.core.seq(arglist__12259);
return G__12257__delegate(args);
});
G__12257.cljs$core$IFn$_invoke$arity$variadic = G__12257__delegate;
return G__12257;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12260__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12261__i = 0, G__12261__a = new Array(arguments.length -  0);
while (G__12261__i < G__12261__a.length) {G__12261__a[G__12261__i] = arguments[G__12261__i + 0]; ++G__12261__i;}
  args = new cljs.core.IndexedSeq(G__12261__a,0);
} 
return G__12260__delegate.call(this,args);};
G__12260.cljs$lang$maxFixedArity = 0;
G__12260.cljs$lang$applyTo = (function (arglist__12262){
var args = cljs.core.seq(arglist__12262);
return G__12260__delegate(args);
});
G__12260.cljs$core$IFn$_invoke$arity$variadic = G__12260__delegate;
return G__12260;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
