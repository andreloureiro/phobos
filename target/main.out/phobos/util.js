// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('phobos.util');
goog.require('cljs.core');
goog.require('clojure.string');
phobos.util.dash_to_camel = (function phobos$util$dash_to_camel(dashed){
var vec__12911 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(dashed),/-/);
var first_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12911,(0),null);
var other_words = cljs.core.nthnext(vec__12911,(1));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,first_word,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,other_words));
});
phobos.util.camelcase_map = (function phobos$util$camelcase_map(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7320__auto__ = (function phobos$util$camelcase_map_$_iter__12922(s__12923){
return (new cljs.core.LazySeq(null,(function (){
var s__12923__$1 = s__12923;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12923__$1);
if(temp__4657__auto__){
var s__12923__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12923__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__12923__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__12925 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__12924 = (0);
while(true){
if((i__12924 < size__7319__auto__)){
var vec__12930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__12924);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12930,(1),null);
cljs.core.chunk_append(b__12925,((cljs.core.map_QMARK_(v))?cljs.core.PersistentArrayMap.fromArray([phobos.util.dash_to_camel(k),phobos$util$camelcase_map(v)], true, false):cljs.core.PersistentArrayMap.fromArray([phobos.util.dash_to_camel(k),v], true, false)));

var G__12932 = (i__12924 + (1));
i__12924 = G__12932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12925),phobos$util$camelcase_map_$_iter__12922(cljs.core.chunk_rest(s__12923__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12925),null);
}
} else {
var vec__12931 = cljs.core.first(s__12923__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12931,(1),null);
return cljs.core.cons(((cljs.core.map_QMARK_(v))?cljs.core.PersistentArrayMap.fromArray([phobos.util.dash_to_camel(k),phobos$util$camelcase_map(v)], true, false):cljs.core.PersistentArrayMap.fromArray([phobos.util.dash_to_camel(k),v], true, false)),phobos$util$camelcase_map_$_iter__12922(cljs.core.rest(s__12923__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7320__auto__(m);
})());
});
phobos.util.throw_err = (function phobos$util$throw_err(var_args){
var args__7616__auto__ = [];
var len__7609__auto___12934 = arguments.length;
var i__7610__auto___12935 = (0);
while(true){
if((i__7610__auto___12935 < len__7609__auto___12934)){
args__7616__auto__.push((arguments[i__7610__auto___12935]));

var G__12936 = (i__7610__auto___12935 + (1));
i__7610__auto___12935 = G__12936;
continue;
} else {
}
break;
}

var argseq__7617__auto__ = ((((0) < args__7616__auto__.length))?(new cljs.core.IndexedSeq(args__7616__auto__.slice((0)),(0),null)):null);
return phobos.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(argseq__7617__auto__);
});

phobos.util.throw_err.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw (new Error([cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(message))].join('')));
});

phobos.util.throw_err.cljs$lang$maxFixedArity = (0);

phobos.util.throw_err.cljs$lang$applyTo = (function (seq12933){
return phobos.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12933));
});
phobos.util.error_messages = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$collection_DASH_to_DASH_component,"You provided a collection to mozgas/motion-component, but it requires a single component. If you want to animate a list of components, use mozgas/motion-group instead.\n Child component: ",cljs.core.cst$kw$config_DASH_nil_DASH_to_DASH_group,"mozgas/motion-group received a collection of components as the second parameter. Perhaps you forgot the config?",cljs.core.cst$kw$config_DASH_nil_DASH_to_DASH_component,"mozgas/motion-component received a collection of components as the second parameter. Perhaps you forgot the config?",cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_group,"mozgas/motion-group received a nil instead of a collection of components.",cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_component,"mozgas/motion-component received a nil instead of a component.",cljs.core.cst$kw$children_DASH_not_DASH_collection,"mozgas/motion-group requires a collection of components to work. If you want to animate a single component, use mozgas/motion-component.\n Child component: "], null);
