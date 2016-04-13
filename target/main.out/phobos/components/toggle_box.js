// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('phobos.components.toggle_box');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('phobos.core');
phobos.components.toggle_box.transition_list = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fade","flipX","flipY","flipBounceX","flipBounceY","swoop","whirl","shrink","expand","bounce","bounceUp","bounceDown","bounceLeft","bounceRight","slideUp","slideDown","slideLeft","slideRight","slideUpBig","slideDownBig","slideLeftBig","slideRightBig","perspectiveUp","perspectiveDown","perspectiveLeft","perspectiveRight"], null);
phobos.components.toggle_box.toggle_box = (function phobos$components$toggle_box$toggle_box(){
var visible_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var transition = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("fade");
var duration = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1000));
return ((function (visible_QMARK_,transition,duration){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$toggle_DASH_box_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Transition"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$toggle_DASH_transition,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (visible_QMARK_,transition,duration){
return (function (p1__17211_SHARP_){
var G__17225 = transition;
var G__17226 = p1__17211_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17225,G__17226) : cljs.core.reset_BANG_.call(null,G__17225,G__17226));
});})(visible_QMARK_,transition,duration))
], null),(function (){var iter__7320__auto__ = ((function (visible_QMARK_,transition,duration){
return (function phobos$components$toggle_box$toggle_box_$_iter__17227(s__17228){
return (new cljs.core.LazySeq(null,((function (visible_QMARK_,transition,duration){
return (function (){
var s__17228__$1 = s__17228;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17228__$1);
if(temp__4657__auto__){
var s__17228__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17228__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__17228__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__17230 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__17229 = (0);
while(true){
if((i__17229 < size__7319__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__17229);
cljs.core.chunk_append(b__17230,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,t], null),t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)));

var G__17237 = (i__17229 + (1));
i__17229 = G__17237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17230),phobos$components$toggle_box$toggle_box_$_iter__17227(cljs.core.chunk_rest(s__17228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17230),null);
}
} else {
var t = cljs.core.first(s__17228__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,t], null),t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)),phobos$components$toggle_box$toggle_box_$_iter__17227(cljs.core.rest(s__17228__$2)));
}
} else {
return null;
}
break;
}
});})(visible_QMARK_,transition,duration))
,null,null));
});})(visible_QMARK_,transition,duration))
;
return iter__7320__auto__(phobos.components.toggle_box.transition_list);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Duration"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$toggle_DASH_duration,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(duration) : cljs.core.deref.call(null,duration)),cljs.core.cst$kw$on_DASH_change,((function (visible_QMARK_,transition,duration){
return (function (p1__17212_SHARP_){
var G__17233 = duration;
var G__17234 = p1__17212_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17233,G__17234) : cljs.core.reset_BANG_.call(null,G__17233,G__17234));
});})(visible_QMARK_,transition,duration))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$toggle_DASH_box,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (visible_QMARK_,transition,duration){
return (function (){
var G__17235 = visible_QMARK_;
var G__17236 = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(visible_QMARK_) : cljs.core.deref.call(null,visible_QMARK_)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17235,G__17236) : cljs.core.reset_BANG_.call(null,G__17235,G__17236));
});})(visible_QMARK_,transition,duration))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phobos.core.motion_component,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition)),cljs.core.cst$kw$duration,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(duration) : cljs.core.deref.call(null,duration)),cljs.core.cst$kw$stagger,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(duration) : cljs.core.deref.call(null,duration)),cljs.core.cst$kw$animation,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(visible_QMARK_) : cljs.core.deref.call(null,visible_QMARK_)))?[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("In")].join(''):[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("Out")].join(''))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$background_DASH_color,"indigo"], null)], null)], null)], null)], null)], null);
});
;})(visible_QMARK_,transition,duration))
});
