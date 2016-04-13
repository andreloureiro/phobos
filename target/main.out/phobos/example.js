// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('phobos.example');
goog.require('cljs.core');
goog.require('phobos.components.custom_animation');
goog.require('goog.dom');
goog.require('phobos.core');
goog.require('reagent.core');
goog.require('phobos.components.custom_transition');
goog.require('phobos.components.square_list');
goog.require('phobos.components.toggle_box');
cljs.core.enable_console_print_BANG_();
phobos.example.nav_items = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(0),cljs.core.cst$kw$title,"Toggle box"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$title,"Square list"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$title,"Custom animation"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$title,"Custom transition"], null)], null);
phobos.example.views = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(0),cljs.core.cst$kw$view,phobos.components.toggle_box.toggle_box], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$view,phobos.components.square_list.square_list], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$view,phobos.components.custom_animation.custom_animation], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$view,phobos.components.custom_transition.custom_transition], null)], null);
phobos.example.examples = (function phobos$example$examples(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title,"Phobos Examples"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7320__auto__ = ((function (state){
return (function phobos$example$examples_$_iter__17268(s__17269){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__17269__$1 = s__17269;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17269__$1);
if(temp__4657__auto__){
var s__17269__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17269__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__17269__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__17271 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__17270 = (0);
while(true){
if((i__17270 < size__7319__auto__)){
var map__17278 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__17270);
var map__17278__$1 = ((((!((map__17278 == null)))?((((map__17278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17278):map__17278);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17278__$1,cljs.core.cst$kw$id);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17278__$1,cljs.core.cst$kw$title);
cljs.core.chunk_append(b__17271,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,id,cljs.core.cst$kw$on_DASH_click,((function (i__17270,map__17278,map__17278__$1,id,title,c__7318__auto__,size__7319__auto__,b__17271,s__17269__$2,temp__4657__auto__,state){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,id) : cljs.core.reset_BANG_.call(null,state,id));
});})(i__17270,map__17278,map__17278__$1,id,title,c__7318__auto__,size__7319__auto__,b__17271,s__17269__$2,temp__4657__auto__,state))
,cljs.core.cst$kw$class_DASH_name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),id))?"nav__item nav__item--active":"nav__item")], null),title], null));

var G__17296 = (i__17270 + (1));
i__17270 = G__17296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17271),phobos$example$examples_$_iter__17268(cljs.core.chunk_rest(s__17269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17271),null);
}
} else {
var map__17280 = cljs.core.first(s__17269__$2);
var map__17280__$1 = ((((!((map__17280 == null)))?((((map__17280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17280):map__17280);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17280__$1,cljs.core.cst$kw$id);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17280__$1,cljs.core.cst$kw$title);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,id,cljs.core.cst$kw$on_DASH_click,((function (map__17280,map__17280__$1,id,title,s__17269__$2,temp__4657__auto__,state){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(state,id) : cljs.core.reset_BANG_.call(null,state,id));
});})(map__17280,map__17280__$1,id,title,s__17269__$2,temp__4657__auto__,state))
,cljs.core.cst$kw$class_DASH_name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),id))?"nav__item nav__item--active":"nav__item")], null),title], null),phobos$example$examples_$_iter__17268(cljs.core.rest(s__17269__$2)));
}
} else {
return null;
}
break;
}
});})(state))
,null,null));
});})(state))
;
return iter__7320__auto__(phobos.example.nav_items);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phobos.core.motion_group,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$component,"div",cljs.core.cst$kw$class_DASH_name,"content",cljs.core.cst$kw$enter,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$animation,"transition.slideUpIn",cljs.core.cst$kw$delay,(400),cljs.core.cst$kw$duration,(300)], null),cljs.core.cst$kw$leave,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$animation,"transition.slideUpOut",cljs.core.cst$kw$duration,(300)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7320__auto__ = ((function (state){
return (function phobos$example$examples_$_iter__17282(s__17283){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__17283__$1 = s__17283;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17283__$1);
if(temp__4657__auto__){
var s__17283__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17283__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__17283__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__17285 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__17284 = (0);
while(true){
if((i__17284 < size__7319__auto__)){
var map__17292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__17284);
var map__17292__$1 = ((((!((map__17292 == null)))?((((map__17292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17292):map__17292);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17292__$1,cljs.core.cst$kw$id);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17292__$1,cljs.core.cst$kw$view);
cljs.core.chunk_append(b__17285,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),id))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)):null));

var G__17297 = (i__17284 + (1));
i__17284 = G__17297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17285),phobos$example$examples_$_iter__17282(cljs.core.chunk_rest(s__17283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17285),null);
}
} else {
var map__17294 = cljs.core.first(s__17283__$2);
var map__17294__$1 = ((((!((map__17294 == null)))?((((map__17294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17294):map__17294);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,cljs.core.cst$kw$id);
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,cljs.core.cst$kw$view);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),id))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)):null),phobos$example$examples_$_iter__17282(cljs.core.rest(s__17283__$2)));
}
} else {
return null;
}
break;
}
});})(state))
,null,null));
});})(state))
;
return iter__7320__auto__(phobos.example.views);
})())], null)], null);
});
;})(state))
});
phobos.example.mount_BANG_ = (function phobos$example$mount_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phobos.example.examples], null),goog.dom.getElement("app"));
});
phobos.example.mount_BANG_();
