// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('phobos.components.custom_transition');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('phobos.core');
phobos.components.custom_transition.soccer_teams = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Sao Paulo",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Santos",cljs.core.cst$kw$fg,"black",cljs.core.cst$kw$bg,"white"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Corinthians",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Palmeiras",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"forestgreen"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Internacional",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Gremio",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"dodgerblue"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Avai",cljs.core.cst$kw$fg,"royalblue",cljs.core.cst$kw$bg,"white"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Figueirense",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Atletico PR",cljs.core.cst$kw$fg,"red",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Coritiba",cljs.core.cst$kw$fg,"green",cljs.core.cst$kw$bg,"white"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Parana Clube",cljs.core.cst$kw$fg,"red",cljs.core.cst$kw$bg,"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Botafogo",cljs.core.cst$kw$fg,"gray",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Flamengo",cljs.core.cst$kw$fg,"black",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Fluminense",cljs.core.cst$kw$fg,"green",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Vasco",cljs.core.cst$kw$fg,"black",cljs.core.cst$kw$bg,"white"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Atletico MG",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Cruzeiro",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"blue"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Bahia",cljs.core.cst$kw$fg,"blue",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Vitoria",cljs.core.cst$kw$fg,"red",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Ceara",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"black"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Santa Cruz",cljs.core.cst$kw$fg,"black",cljs.core.cst$kw$bg,"red"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"Remo",cljs.core.cst$kw$fg,"white",cljs.core.cst$kw$bg,"midnightblue"], null)], null);
phobos.components.custom_transition.team_animation = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$in,phobos.core.register_effect(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform_DASH_perspective,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),cljs.core.cst$kw$transform_DASH_origin_DASH_x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["50%","50%"], null),cljs.core.cst$kw$transform_DASH_origin_DASH_y,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["100%","100%"], null),cljs.core.cst$kw$margin_DASH_bottom,(0),cljs.core.cst$kw$opacity,(1),cljs.core.cst$kw$rotate_DASH_x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(130)], null)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$easing,"ease-out",cljs.core.cst$kw$display,"block"], null)], null)], null)], null)),cljs.core.cst$kw$out,phobos.core.register_effect(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$calls,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$transform_DASH_perspective,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),cljs.core.cst$kw$transform_DASH_origin_DASH_x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["50%","50%"], null),cljs.core.cst$kw$transform_DASH_origin_DASH_y,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0%","0%"], null),cljs.core.cst$kw$margin_DASH_bottom,(-30),cljs.core.cst$kw$opacity,(0),cljs.core.cst$kw$rotate_DASH_x,(-70)], null),(1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$easing,"ease-out",cljs.core.cst$kw$display,"block"], null)], null)], null)], null))], null);
phobos.components.custom_transition.team = (function phobos$components$custom_transition$team(p__12947){
var map__12950 = p__12947;
var map__12950__$1 = ((((!((map__12950 == null)))?((((map__12950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12950):map__12950);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12950__$1,cljs.core.cst$kw$id);
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12950__$1,cljs.core.cst$kw$bg);
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12950__$1,cljs.core.cst$kw$fg);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12950__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$list__item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,id,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background_DASH_color,bg,cljs.core.cst$kw$color,fg], null)], null),name], null);
});
phobos.components.custom_transition.add_item = (function phobos$components$custom_transition$add_item(teams,item_count){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(item_count,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(teams,(function (p1__12952_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.rand_nth(phobos.components.custom_transition.soccer_teams),cljs.core.cst$kw$id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(item_count) : cljs.core.deref.call(null,item_count))),p1__12952_SHARP_));
}));
});
phobos.components.custom_transition.enter_animation = (function phobos$components$custom_transition$enter_animation(duration){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$animation,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(phobos.components.custom_transition.team_animation),cljs.core.cst$kw$stagger,duration,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$backwards,true,cljs.core.cst$kw$display,"block",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null)], null);
});
phobos.components.custom_transition.leave_animation = (function phobos$components$custom_transition$leave_animation(duration){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$animation,cljs.core.cst$kw$out.cljs$core$IFn$_invoke$arity$1(phobos.components.custom_transition.team_animation),cljs.core.cst$kw$stagger,duration,cljs.core.cst$kw$duration,duration,cljs.core.cst$kw$backwards,true], null);
});
phobos.components.custom_transition.custom_transition = (function phobos$components$custom_transition$custom_transition(){
var teams = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var item_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var duration = (500);
return ((function (teams,item_count,duration){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$custom_DASH_transition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (teams,item_count,duration){
return (function (){
return phobos.components.custom_transition.add_item(teams,item_count);
});})(teams,item_count,duration))
], null),"add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (teams,item_count,duration){
return (function (){
var n__7454__auto__ = (3);
var n = (0);
while(true){
if((n < n__7454__auto__)){
phobos.components.custom_transition.add_item(teams,item_count);

var G__12953 = (n + (1));
n = G__12953;
continue;
} else {
return null;
}
break;
}
});})(teams,item_count,duration))
], null),"add 3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [phobos.core.motion_group,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$key,"motion-gropu",cljs.core.cst$kw$component,"ul",cljs.core.cst$kw$class_DASH_name,"custom-transition__list",cljs.core.cst$kw$enter,phobos.components.custom_transition.enter_animation(duration),cljs.core.cst$kw$leave,phobos.components.custom_transition.leave_animation(duration)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(phobos.components.custom_transition.team,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(teams) : cljs.core.deref.call(null,teams))))], null)], null);
});
;})(teams,item_count,duration))
});
