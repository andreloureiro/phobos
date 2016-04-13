// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('phobos.components.custom_animation');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('phobos.core');
phobos.components.custom_animation.heart_animation = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$heart,phobos.core.register_effect(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defaultDuration,(750),cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(0)], null),0.05], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(0)], null),0.2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,1.2], null),0.3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$easing,"ease-out"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(1)], null),0.4], null)], null)], null)),cljs.core.cst$kw$explosion,phobos.core.register_effect(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defaultDuration,(750),cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$scale,(0),cljs.core.cst$kw$opacity,(1)], null),0.1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,(1)], null),0.2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,(0)], null),0.4], null)], null)], null))], null);
phobos.components.custom_animation.custom_animation = (function phobos$components$custom_animation$custom_animation(){
var fav_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fav_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_animation,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phobos.core.motion_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$animation,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(phobos.components.custom_animation.heart_animation,cljs.core.cst$kw$explosion):null),cljs.core.cst$kw$run_DASH_on_DASH_mount,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_animation__circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phobos.core.motion_component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$animation,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(phobos.components.custom_animation.heart_animation,cljs.core.cst$kw$heart):null),cljs.core.cst$kw$run_DASH_on_DASH_mount,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_animation__heart,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH_name,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)))?"custom-animation__heart\n                         custom-animation__heart--active":"custom-animation__heart"),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null),cljs.core.cst$kw$on_DASH_click,((function (fav_QMARK_){
return (function (){
var G__12943 = fav_QMARK_;
var G__12944 = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fav_QMARK_) : cljs.core.deref.call(null,fav_QMARK_)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12943,G__12944) : cljs.core.reset_BANG_.call(null,G__12943,G__12944));
});})(fav_QMARK_))
], null)], null)], null)], null);
});
;})(fav_QMARK_))
});
