// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('phobos.components.square_list');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('phobos.core');
goog.require('cljs.core.async');
phobos.components.square_list.transition_list = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fade","flipX","flipY","flipBounceX","flipBounceY","swoop","whirl","shrink","expand","bounce","bounceUp","bounceDown","bounceLeft","bounceRight","slideUp","slideDown","slideLeft","slideRight","slideUpBig","slideDownBig","slideLeftBig","slideRightBig","perspectiveUp","perspectiveDown","perspectiveLeft","perspectiveRight"], null);
phobos.components.square_list.square = (function phobos$components$square_list$square(item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$square_DASH_list__item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,item], null)], null);
});
phobos.components.square_list.squares = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
phobos.components.square_list.render_square_list = (function phobos$components$square_list$render_square_list(transition){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Transition"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$toggle_DASH_transition,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,(function (p1__17139_SHARP_){
var G__17148 = transition;
var G__17149 = p1__17139_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17148,G__17149) : cljs.core.reset_BANG_.call(null,G__17148,G__17149));
})], null),(function (){var iter__7320__auto__ = (function phobos$components$square_list$render_square_list_$_iter__17150(s__17151){
return (new cljs.core.LazySeq(null,(function (){
var s__17151__$1 = s__17151;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17151__$1);
if(temp__4657__auto__){
var s__17151__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17151__$2)){
var c__7318__auto__ = cljs.core.chunk_first(s__17151__$2);
var size__7319__auto__ = cljs.core.count(c__7318__auto__);
var b__17153 = cljs.core.chunk_buffer(size__7319__auto__);
if((function (){var i__17152 = (0);
while(true){
if((i__17152 < size__7319__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7318__auto__,i__17152);
cljs.core.chunk_append(b__17153,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,t], null),t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)));

var G__17156 = (i__17152 + (1));
i__17152 = G__17156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17153),phobos$components$square_list$render_square_list_$_iter__17150(cljs.core.chunk_rest(s__17151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17153),null);
}
} else {
var t = cljs.core.first(s__17151__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,t], null),t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)),phobos$components$square_list$render_square_list_$_iter__17150(cljs.core.rest(s__17151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7320__auto__(phobos.components.square_list.transition_list);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phobos.core.motion_group,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH_name,"square-list",cljs.core.cst$kw$enter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animation,[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("In")].join('')], null),cljs.core.cst$kw$leave,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$animation,[cljs.core.str("transition."),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(transition) : cljs.core.deref.call(null,transition))),cljs.core.str("Out")].join('')], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(phobos.components.square_list.square,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(phobos.components.square_list.squares) : cljs.core.deref.call(null,phobos.components.square_list.squares)))], null)], null);
});
});
phobos.components.square_list.on_mount_square_list = (function phobos$components$square_list$on_mount_square_list(){
var c__14338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto__){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto__){
return (function (state_17193){
var state_val_17194 = (state_17193[(1)]);
if((state_val_17194 === (1))){
var state_17193__$1 = state_17193;
var statearr_17195_17205 = state_17193__$1;
(statearr_17195_17205[(2)] = null);

(statearr_17195_17205[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17194 === (2))){
var inst_17182 = cljs.core.rand_int((3));
var inst_17183 = ((1000) * inst_17182);
var inst_17184 = cljs.core.async.timeout(inst_17183);
var state_17193__$1 = state_17193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17193__$1,(4),inst_17184);
} else {
if((state_val_17194 === (3))){
var inst_17191 = (state_17193[(2)]);
var state_17193__$1 = state_17193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17193__$1,inst_17191);
} else {
if((state_val_17194 === (4))){
var inst_17186 = (state_17193[(2)]);
var inst_17187 = cljs.core.rand_int((999));
var inst_17188 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(phobos.components.square_list.squares,cljs.core.conj,inst_17187);
var state_17193__$1 = (function (){var statearr_17196 = state_17193;
(statearr_17196[(7)] = inst_17186);

(statearr_17196[(8)] = inst_17188);

return statearr_17196;
})();
var statearr_17197_17206 = state_17193__$1;
(statearr_17197_17206[(2)] = null);

(statearr_17197_17206[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__14338__auto__))
;
return ((function (switch__14224__auto__,c__14338__auto__){
return (function() {
var phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto__ = null;
var phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto____0 = (function (){
var statearr_17201 = [null,null,null,null,null,null,null,null,null];
(statearr_17201[(0)] = phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto__);

(statearr_17201[(1)] = (1));

return statearr_17201;
});
var phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto____1 = (function (state_17193){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_17193);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e17202){if((e17202 instanceof Object)){
var ex__14228__auto__ = e17202;
var statearr_17203_17207 = state_17193;
(statearr_17203_17207[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17193);

return cljs.core.cst$kw$recur;
} else {
throw e17202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__17208 = state_17193;
state_17193 = G__17208;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto__ = function(state_17193){
switch(arguments.length){
case 0:
return phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto____0.call(this);
case 1:
return phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto____1.call(this,state_17193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto____0;
phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto____1;
return phobos$components$square_list$on_mount_square_list_$_state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto__))
})();
var state__14340__auto__ = (function (){var statearr_17204 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_17204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto__);

return statearr_17204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto__))
);

return c__14338__auto__;
});
phobos.components.square_list.square_list = (function phobos$components$square_list$square_list(){
var transition = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("bounceUp");
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,phobos.components.square_list.on_mount_square_list,cljs.core.cst$kw$reagent_DASH_render,phobos.components.square_list.render_square_list(transition)], null));
});
