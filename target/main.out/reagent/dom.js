// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6540__auto__ = (function (){var and__6528__auto__ = typeof ReactDOM !== 'undefined';
if(and__6528__auto__){
return ReactDOM;
} else {
return and__6528__auto__;
}
})();
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
var and__6528__auto__ = typeof require !== 'undefined';
if(and__6528__auto__){
return require("react-dom");
} else {
return and__6528__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str("dom")].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__12779 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12779) : cljs.core.atom.call(null,G__12779));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12782 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_12782){
return (function (){
var _STAR_always_update_STAR_12783 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12783;
}});})(_STAR_always_update_STAR_12782))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12782;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12784 = [];
var len__7609__auto___12787 = arguments.length;
var i__7610__auto___12788 = (0);
while(true){
if((i__7610__auto___12788 < len__7609__auto___12787)){
args12784.push((arguments[i__7610__auto___12788]));

var G__12789 = (i__7610__auto___12788 + (1));
i__7610__auto___12788 = G__12789;
continue;
} else {
}
break;
}

var G__12786 = args12784.length;
switch (G__12786) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12784.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__12795_12799 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__12796_12800 = null;
var count__12797_12801 = (0);
var i__12798_12802 = (0);
while(true){
if((i__12798_12802 < count__12797_12801)){
var v_12803 = chunk__12796_12800.cljs$core$IIndexed$_nth$arity$2(null,i__12798_12802);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12803);

var G__12804 = seq__12795_12799;
var G__12805 = chunk__12796_12800;
var G__12806 = count__12797_12801;
var G__12807 = (i__12798_12802 + (1));
seq__12795_12799 = G__12804;
chunk__12796_12800 = G__12805;
count__12797_12801 = G__12806;
i__12798_12802 = G__12807;
continue;
} else {
var temp__4657__auto___12808 = cljs.core.seq(seq__12795_12799);
if(temp__4657__auto___12808){
var seq__12795_12809__$1 = temp__4657__auto___12808;
if(cljs.core.chunked_seq_QMARK_(seq__12795_12809__$1)){
var c__7351__auto___12810 = cljs.core.chunk_first(seq__12795_12809__$1);
var G__12811 = cljs.core.chunk_rest(seq__12795_12809__$1);
var G__12812 = c__7351__auto___12810;
var G__12813 = cljs.core.count(c__7351__auto___12810);
var G__12814 = (0);
seq__12795_12799 = G__12811;
chunk__12796_12800 = G__12812;
count__12797_12801 = G__12813;
i__12798_12802 = G__12814;
continue;
} else {
var v_12815 = cljs.core.first(seq__12795_12809__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12815);

var G__12816 = cljs.core.next(seq__12795_12809__$1);
var G__12817 = null;
var G__12818 = (0);
var G__12819 = (0);
seq__12795_12799 = G__12816;
chunk__12796_12800 = G__12817;
count__12797_12801 = G__12818;
i__12798_12802 = G__12819;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
