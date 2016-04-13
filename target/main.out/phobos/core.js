// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('phobos.core');
goog.require('cljs.core');
goog.require('phobos.util');
goog.require('reagent.core');
phobos.core.VelocityReact = VelocityReact;
phobos.core.VelocityComponent = (phobos.core.VelocityReact["VelocityComponent"]);
phobos.core.VelocityTransitionGroup = (phobos.core.VelocityReact["VelocityTransitionGroup"]);
phobos.core.velocityHelpers = (phobos.core.VelocityReact["velocityHelpers"]);
phobos.core.register_effect = (function phobos$core$register_effect(config){
var js_config = cljs.core.clj__GT_js(config);
return phobos.core.velocityHelpers.registerEffect(js_config);
});
phobos.core.motion_component_impl = (function phobos$core$motion_component_impl(config,children){
var child = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,reagent.core.as_element(children)], null);
var props = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([phobos.util.camelcase_map(config),child], 0)));
if((children == null)){
return phobos.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_collection) : phobos.util.error_messages.call(null,cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_collection))], 0));
} else {
if(cljs.core.seq_QMARK_(children)){
return phobos.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$collection_DASH_to_DASH_component) : phobos.util.error_messages.call(null,cljs.core.cst$kw$collection_DASH_to_DASH_component)),children], 0));
} else {
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(phobos.core.VelocityComponent,props);

}
}
});
phobos.core.motion_component = cljs.core.with_meta(phobos.core.motion_component_impl,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display_DASH_name,"MotionComponent"], null));
phobos.core.motion_group_impl = (function phobos$core$motion_group_impl(config,children){
var child = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,reagent.core.as_element(children)], null);
var props = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([phobos.util.camelcase_map(config),child], 0)));
if((cljs.core.seq_QMARK_(config)) && ((children == null))){
return phobos.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config_DASH_nil_DASH_to_DASH_group) : phobos.util.error_messages.call(null,cljs.core.cst$kw$config_DASH_nil_DASH_to_DASH_group))], 0));
} else {
if((children == null)){
return phobos.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_group) : phobos.util.error_messages.call(null,cljs.core.cst$kw$nil_DASH_children_DASH_to_DASH_group))], 0));
} else {
if(!(cljs.core.seq_QMARK_(children))){
return phobos.util.throw_err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1 ? phobos.util.error_messages.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$children_DASH_not_DASH_collection) : phobos.util.error_messages.call(null,cljs.core.cst$kw$children_DASH_not_DASH_collection)),children], 0));
} else {
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(phobos.core.VelocityTransitionGroup,props);

}
}
}
});
phobos.core.motion_group = cljs.core.with_meta(phobos.core.motion_group_impl,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display_DASH_name,"MotionGroup"], null));
