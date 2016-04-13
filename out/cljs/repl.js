// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30104_30118 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30105_30119 = null;
var count__30106_30120 = (0);
var i__30107_30121 = (0);
while(true){
if((i__30107_30121 < count__30106_30120)){
var f_30122 = cljs.core._nth.call(null,chunk__30105_30119,i__30107_30121);
cljs.core.println.call(null,"  ",f_30122);

var G__30123 = seq__30104_30118;
var G__30124 = chunk__30105_30119;
var G__30125 = count__30106_30120;
var G__30126 = (i__30107_30121 + (1));
seq__30104_30118 = G__30123;
chunk__30105_30119 = G__30124;
count__30106_30120 = G__30125;
i__30107_30121 = G__30126;
continue;
} else {
var temp__4425__auto___30127 = cljs.core.seq.call(null,seq__30104_30118);
if(temp__4425__auto___30127){
var seq__30104_30128__$1 = temp__4425__auto___30127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30104_30128__$1)){
var c__29746__auto___30129 = cljs.core.chunk_first.call(null,seq__30104_30128__$1);
var G__30130 = cljs.core.chunk_rest.call(null,seq__30104_30128__$1);
var G__30131 = c__29746__auto___30129;
var G__30132 = cljs.core.count.call(null,c__29746__auto___30129);
var G__30133 = (0);
seq__30104_30118 = G__30130;
chunk__30105_30119 = G__30131;
count__30106_30120 = G__30132;
i__30107_30121 = G__30133;
continue;
} else {
var f_30134 = cljs.core.first.call(null,seq__30104_30128__$1);
cljs.core.println.call(null,"  ",f_30134);

var G__30135 = cljs.core.next.call(null,seq__30104_30128__$1);
var G__30136 = null;
var G__30137 = (0);
var G__30138 = (0);
seq__30104_30118 = G__30135;
chunk__30105_30119 = G__30136;
count__30106_30120 = G__30137;
i__30107_30121 = G__30138;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30139 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28935__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28935__auto__)){
return or__28935__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30139);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30139)))?cljs.core.second.call(null,arglists_30139):arglists_30139));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30108 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30109 = null;
var count__30110 = (0);
var i__30111 = (0);
while(true){
if((i__30111 < count__30110)){
var vec__30112 = cljs.core._nth.call(null,chunk__30109,i__30111);
var name = cljs.core.nth.call(null,vec__30112,(0),null);
var map__30113 = cljs.core.nth.call(null,vec__30112,(1),null);
var map__30113__$1 = ((((!((map__30113 == null)))?((((map__30113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30113):map__30113);
var doc = cljs.core.get.call(null,map__30113__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30113__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30140 = seq__30108;
var G__30141 = chunk__30109;
var G__30142 = count__30110;
var G__30143 = (i__30111 + (1));
seq__30108 = G__30140;
chunk__30109 = G__30141;
count__30110 = G__30142;
i__30111 = G__30143;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30108);
if(temp__4425__auto__){
var seq__30108__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30108__$1)){
var c__29746__auto__ = cljs.core.chunk_first.call(null,seq__30108__$1);
var G__30144 = cljs.core.chunk_rest.call(null,seq__30108__$1);
var G__30145 = c__29746__auto__;
var G__30146 = cljs.core.count.call(null,c__29746__auto__);
var G__30147 = (0);
seq__30108 = G__30144;
chunk__30109 = G__30145;
count__30110 = G__30146;
i__30111 = G__30147;
continue;
} else {
var vec__30115 = cljs.core.first.call(null,seq__30108__$1);
var name = cljs.core.nth.call(null,vec__30115,(0),null);
var map__30116 = cljs.core.nth.call(null,vec__30115,(1),null);
var map__30116__$1 = ((((!((map__30116 == null)))?((((map__30116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30116):map__30116);
var doc = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30148 = cljs.core.next.call(null,seq__30108__$1);
var G__30149 = null;
var G__30150 = (0);
var G__30151 = (0);
seq__30108 = G__30148;
chunk__30109 = G__30149;
count__30110 = G__30150;
i__30111 = G__30151;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map