// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14383 = [];
var len__7609__auto___14389 = arguments.length;
var i__7610__auto___14390 = (0);
while(true){
if((i__7610__auto___14390 < len__7609__auto___14389)){
args14383.push((arguments[i__7610__auto___14390]));

var G__14391 = (i__7610__auto___14390 + (1));
i__7610__auto___14390 = G__14391;
continue;
} else {
}
break;
}

var G__14385 = args14383.length;
switch (G__14385) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14383.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14386 = (function (f,blockable,meta14387){
this.f = f;
this.blockable = blockable;
this.meta14387 = meta14387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14388,meta14387__$1){
var self__ = this;
var _14388__$1 = this;
return (new cljs.core.async.t_cljs$core$async14386(self__.f,self__.blockable,meta14387__$1));
});

cljs.core.async.t_cljs$core$async14386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14388){
var self__ = this;
var _14388__$1 = this;
return self__.meta14387;
});

cljs.core.async.t_cljs$core$async14386.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14387], null);
});

cljs.core.async.t_cljs$core$async14386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14386";

cljs.core.async.t_cljs$core$async14386.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async14386");
});

cljs.core.async.__GT_t_cljs$core$async14386 = (function cljs$core$async$__GT_t_cljs$core$async14386(f__$1,blockable__$1,meta14387){
return (new cljs.core.async.t_cljs$core$async14386(f__$1,blockable__$1,meta14387));
});

}

return (new cljs.core.async.t_cljs$core$async14386(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14395 = [];
var len__7609__auto___14398 = arguments.length;
var i__7610__auto___14399 = (0);
while(true){
if((i__7610__auto___14399 < len__7609__auto___14398)){
args14395.push((arguments[i__7610__auto___14399]));

var G__14400 = (i__7610__auto___14399 + (1));
i__7610__auto___14399 = G__14400;
continue;
} else {
}
break;
}

var G__14397 = args14395.length;
switch (G__14397) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14395.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14402 = [];
var len__7609__auto___14405 = arguments.length;
var i__7610__auto___14406 = (0);
while(true){
if((i__7610__auto___14406 < len__7609__auto___14405)){
args14402.push((arguments[i__7610__auto___14406]));

var G__14407 = (i__7610__auto___14406 + (1));
i__7610__auto___14406 = G__14407;
continue;
} else {
}
break;
}

var G__14404 = args14402.length;
switch (G__14404) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14402.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14409 = [];
var len__7609__auto___14412 = arguments.length;
var i__7610__auto___14413 = (0);
while(true){
if((i__7610__auto___14413 < len__7609__auto___14412)){
args14409.push((arguments[i__7610__auto___14413]));

var G__14414 = (i__7610__auto___14413 + (1));
i__7610__auto___14413 = G__14414;
continue;
} else {
}
break;
}

var G__14411 = args14409.length;
switch (G__14411) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14409.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14416 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14416) : fn1.call(null,val_14416));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14416,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14416) : fn1.call(null,val_14416));
});})(val_14416,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14417 = [];
var len__7609__auto___14420 = arguments.length;
var i__7610__auto___14421 = (0);
while(true){
if((i__7610__auto___14421 < len__7609__auto___14420)){
args14417.push((arguments[i__7610__auto___14421]));

var G__14422 = (i__7610__auto___14421 + (1));
i__7610__auto___14421 = G__14422;
continue;
} else {
}
break;
}

var G__14419 = args14417.length;
switch (G__14419) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14417.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7454__auto___14424 = n;
var x_14425 = (0);
while(true){
if((x_14425 < n__7454__auto___14424)){
(a[x_14425] = (0));

var G__14426 = (x_14425 + (1));
x_14425 = G__14426;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14427 = (i + (1));
i = G__14427;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14431 = (function (alt_flag,flag,meta14432){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14432 = meta14432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14433,meta14432__$1){
var self__ = this;
var _14433__$1 = this;
return (new cljs.core.async.t_cljs$core$async14431(self__.alt_flag,self__.flag,meta14432__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14433){
var self__ = this;
var _14433__$1 = this;
return self__.meta14432;
});})(flag))
;

cljs.core.async.t_cljs$core$async14431.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14431.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14432], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14431";

cljs.core.async.t_cljs$core$async14431.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async14431");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14431 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14431(alt_flag__$1,flag__$1,meta14432){
return (new cljs.core.async.t_cljs$core$async14431(alt_flag__$1,flag__$1,meta14432));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14431(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14437 = (function (alt_handler,flag,cb,meta14438){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14438 = meta14438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14439,meta14438__$1){
var self__ = this;
var _14439__$1 = this;
return (new cljs.core.async.t_cljs$core$async14437(self__.alt_handler,self__.flag,self__.cb,meta14438__$1));
});

cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14439){
var self__ = this;
var _14439__$1 = this;
return self__.meta14438;
});

cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14438], null);
});

cljs.core.async.t_cljs$core$async14437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14437";

cljs.core.async.t_cljs$core$async14437.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async14437");
});

cljs.core.async.__GT_t_cljs$core$async14437 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14437(alt_handler__$1,flag__$1,cb__$1,meta14438){
return (new cljs.core.async.t_cljs$core$async14437(alt_handler__$1,flag__$1,cb__$1,meta14438));
});

}

return (new cljs.core.async.t_cljs$core$async14437(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14440_SHARP_){
var G__14444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14440_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14444) : fret.call(null,G__14444));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14441_SHARP_){
var G__14445 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14441_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14445) : fret.call(null,G__14445));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6540__auto__ = wport;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14446 = (i + (1));
i = G__14446;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6540__auto__ = ret;
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6528__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6528__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6528__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7616__auto__ = [];
var len__7609__auto___14452 = arguments.length;
var i__7610__auto___14453 = (0);
while(true){
if((i__7610__auto___14453 < len__7609__auto___14452)){
args__7616__auto__.push((arguments[i__7610__auto___14453]));

var G__14454 = (i__7610__auto___14453 + (1));
i__7610__auto___14453 = G__14454;
continue;
} else {
}
break;
}

var argseq__7617__auto__ = ((((1) < args__7616__auto__.length))?(new cljs.core.IndexedSeq(args__7616__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7617__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14449){
var map__14450 = p__14449;
var map__14450__$1 = ((((!((map__14450 == null)))?((((map__14450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14450):map__14450);
var opts = map__14450__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14447){
var G__14448 = cljs.core.first(seq14447);
var seq14447__$1 = cljs.core.next(seq14447);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14448,seq14447__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14455 = [];
var len__7609__auto___14505 = arguments.length;
var i__7610__auto___14506 = (0);
while(true){
if((i__7610__auto___14506 < len__7609__auto___14505)){
args14455.push((arguments[i__7610__auto___14506]));

var G__14507 = (i__7610__auto___14506 + (1));
i__7610__auto___14506 = G__14507;
continue;
} else {
}
break;
}

var G__14457 = args14455.length;
switch (G__14457) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14455.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14338__auto___14509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___14509){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___14509){
return (function (state_14481){
var state_val_14482 = (state_14481[(1)]);
if((state_val_14482 === (7))){
var inst_14477 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14483_14510 = state_14481__$1;
(statearr_14483_14510[(2)] = inst_14477);

(statearr_14483_14510[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (1))){
var state_14481__$1 = state_14481;
var statearr_14484_14511 = state_14481__$1;
(statearr_14484_14511[(2)] = null);

(statearr_14484_14511[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (4))){
var inst_14460 = (state_14481[(7)]);
var inst_14460__$1 = (state_14481[(2)]);
var inst_14461 = (inst_14460__$1 == null);
var state_14481__$1 = (function (){var statearr_14485 = state_14481;
(statearr_14485[(7)] = inst_14460__$1);

return statearr_14485;
})();
if(cljs.core.truth_(inst_14461)){
var statearr_14486_14512 = state_14481__$1;
(statearr_14486_14512[(1)] = (5));

} else {
var statearr_14487_14513 = state_14481__$1;
(statearr_14487_14513[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (13))){
var state_14481__$1 = state_14481;
var statearr_14488_14514 = state_14481__$1;
(statearr_14488_14514[(2)] = null);

(statearr_14488_14514[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (6))){
var inst_14460 = (state_14481[(7)]);
var state_14481__$1 = state_14481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14481__$1,(11),to,inst_14460);
} else {
if((state_val_14482 === (3))){
var inst_14479 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14481__$1,inst_14479);
} else {
if((state_val_14482 === (12))){
var state_14481__$1 = state_14481;
var statearr_14489_14515 = state_14481__$1;
(statearr_14489_14515[(2)] = null);

(statearr_14489_14515[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (2))){
var state_14481__$1 = state_14481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14481__$1,(4),from);
} else {
if((state_val_14482 === (11))){
var inst_14470 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
if(cljs.core.truth_(inst_14470)){
var statearr_14490_14516 = state_14481__$1;
(statearr_14490_14516[(1)] = (12));

} else {
var statearr_14491_14517 = state_14481__$1;
(statearr_14491_14517[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (9))){
var state_14481__$1 = state_14481;
var statearr_14492_14518 = state_14481__$1;
(statearr_14492_14518[(2)] = null);

(statearr_14492_14518[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (5))){
var state_14481__$1 = state_14481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14493_14519 = state_14481__$1;
(statearr_14493_14519[(1)] = (8));

} else {
var statearr_14494_14520 = state_14481__$1;
(statearr_14494_14520[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (14))){
var inst_14475 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14495_14521 = state_14481__$1;
(statearr_14495_14521[(2)] = inst_14475);

(statearr_14495_14521[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (10))){
var inst_14467 = (state_14481[(2)]);
var state_14481__$1 = state_14481;
var statearr_14496_14522 = state_14481__$1;
(statearr_14496_14522[(2)] = inst_14467);

(statearr_14496_14522[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14482 === (8))){
var inst_14464 = cljs.core.async.close_BANG_(to);
var state_14481__$1 = state_14481;
var statearr_14497_14523 = state_14481__$1;
(statearr_14497_14523[(2)] = inst_14464);

(statearr_14497_14523[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___14509))
;
return ((function (switch__14224__auto__,c__14338__auto___14509){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_14501 = [null,null,null,null,null,null,null,null];
(statearr_14501[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_14501[(1)] = (1));

return statearr_14501;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_14481){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_14481);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e14502){if((e14502 instanceof Object)){
var ex__14228__auto__ = e14502;
var statearr_14503_14524 = state_14481;
(statearr_14503_14524[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14481);

return cljs.core.cst$kw$recur;
} else {
throw e14502;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__14525 = state_14481;
state_14481 = G__14525;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_14481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_14481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___14509))
})();
var state__14340__auto__ = (function (){var statearr_14504 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_14504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___14509);

return statearr_14504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___14509))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__14709){
var vec__14710 = p__14709;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14710,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14710,(1),null);
var job = vec__14710;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14338__auto___14892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___14892,res,vec__14710,v,p,job,jobs,results){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___14892,res,vec__14710,v,p,job,jobs,results){
return (function (state_14715){
var state_val_14716 = (state_14715[(1)]);
if((state_val_14716 === (1))){
var state_14715__$1 = state_14715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14715__$1,(2),res,v);
} else {
if((state_val_14716 === (2))){
var inst_14712 = (state_14715[(2)]);
var inst_14713 = cljs.core.async.close_BANG_(res);
var state_14715__$1 = (function (){var statearr_14717 = state_14715;
(statearr_14717[(7)] = inst_14712);

return statearr_14717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14715__$1,inst_14713);
} else {
return null;
}
}
});})(c__14338__auto___14892,res,vec__14710,v,p,job,jobs,results))
;
return ((function (switch__14224__auto__,c__14338__auto___14892,res,vec__14710,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0 = (function (){
var statearr_14721 = [null,null,null,null,null,null,null,null];
(statearr_14721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__);

(statearr_14721[(1)] = (1));

return statearr_14721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1 = (function (state_14715){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_14715);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e14722){if((e14722 instanceof Object)){
var ex__14228__auto__ = e14722;
var statearr_14723_14893 = state_14715;
(statearr_14723_14893[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14715);

return cljs.core.cst$kw$recur;
} else {
throw e14722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__14894 = state_14715;
state_14715 = G__14894;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = function(state_14715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1.call(this,state_14715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___14892,res,vec__14710,v,p,job,jobs,results))
})();
var state__14340__auto__ = (function (){var statearr_14724 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_14724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___14892);

return statearr_14724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___14892,res,vec__14710,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14725){
var vec__14726 = p__14725;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(1),null);
var job = vec__14726;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7454__auto___14895 = n;
var __14896 = (0);
while(true){
if((__14896 < n__7454__auto___14895)){
var G__14727_14897 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14727_14897) {
case "compute":
var c__14338__auto___14899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14896,c__14338__auto___14899,G__14727_14897,n__7454__auto___14895,jobs,results,process,async){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (__14896,c__14338__auto___14899,G__14727_14897,n__7454__auto___14895,jobs,results,process,async){
return (function (state_14740){
var state_val_14741 = (state_14740[(1)]);
if((state_val_14741 === (1))){
var state_14740__$1 = state_14740;
var statearr_14742_14900 = state_14740__$1;
(statearr_14742_14900[(2)] = null);

(statearr_14742_14900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14741 === (2))){
var state_14740__$1 = state_14740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14740__$1,(4),jobs);
} else {
if((state_val_14741 === (3))){
var inst_14738 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14740__$1,inst_14738);
} else {
if((state_val_14741 === (4))){
var inst_14730 = (state_14740[(2)]);
var inst_14731 = process(inst_14730);
var state_14740__$1 = state_14740;
if(cljs.core.truth_(inst_14731)){
var statearr_14743_14901 = state_14740__$1;
(statearr_14743_14901[(1)] = (5));

} else {
var statearr_14744_14902 = state_14740__$1;
(statearr_14744_14902[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14741 === (5))){
var state_14740__$1 = state_14740;
var statearr_14745_14903 = state_14740__$1;
(statearr_14745_14903[(2)] = null);

(statearr_14745_14903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14741 === (6))){
var state_14740__$1 = state_14740;
var statearr_14746_14904 = state_14740__$1;
(statearr_14746_14904[(2)] = null);

(statearr_14746_14904[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14741 === (7))){
var inst_14736 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
var statearr_14747_14905 = state_14740__$1;
(statearr_14747_14905[(2)] = inst_14736);

(statearr_14747_14905[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14896,c__14338__auto___14899,G__14727_14897,n__7454__auto___14895,jobs,results,process,async))
;
return ((function (__14896,switch__14224__auto__,c__14338__auto___14899,G__14727_14897,n__7454__auto___14895,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0 = (function (){
var statearr_14751 = [null,null,null,null,null,null,null];
(statearr_14751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__);

(statearr_14751[(1)] = (1));

return statearr_14751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1 = (function (state_14740){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_14740);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e14752){if((e14752 instanceof Object)){
var ex__14228__auto__ = e14752;
var statearr_14753_14906 = state_14740;
(statearr_14753_14906[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14740);

return cljs.core.cst$kw$recur;
} else {
throw e14752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__14907 = state_14740;
state_14740 = G__14907;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = function(state_14740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1.call(this,state_14740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__;
})()
;})(__14896,switch__14224__auto__,c__14338__auto___14899,G__14727_14897,n__7454__auto___14895,jobs,results,process,async))
})();
var state__14340__auto__ = (function (){var statearr_14754 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_14754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___14899);

return statearr_14754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(__14896,c__14338__auto___14899,G__14727_14897,n__7454__auto___14895,jobs,results,process,async))
);


break;
case "async":
var c__14338__auto___14908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14896,c__14338__auto___14908,G__14727_14897,n__7454__auto___14895,jobs,results,process,async){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (__14896,c__14338__auto___14908,G__14727_14897,n__7454__auto___14895,jobs,results,process,async){
return (function (state_14767){
var state_val_14768 = (state_14767[(1)]);
if((state_val_14768 === (1))){
var state_14767__$1 = state_14767;
var statearr_14769_14909 = state_14767__$1;
(statearr_14769_14909[(2)] = null);

(statearr_14769_14909[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (2))){
var state_14767__$1 = state_14767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14767__$1,(4),jobs);
} else {
if((state_val_14768 === (3))){
var inst_14765 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14767__$1,inst_14765);
} else {
if((state_val_14768 === (4))){
var inst_14757 = (state_14767[(2)]);
var inst_14758 = async(inst_14757);
var state_14767__$1 = state_14767;
if(cljs.core.truth_(inst_14758)){
var statearr_14770_14910 = state_14767__$1;
(statearr_14770_14910[(1)] = (5));

} else {
var statearr_14771_14911 = state_14767__$1;
(statearr_14771_14911[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (5))){
var state_14767__$1 = state_14767;
var statearr_14772_14912 = state_14767__$1;
(statearr_14772_14912[(2)] = null);

(statearr_14772_14912[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (6))){
var state_14767__$1 = state_14767;
var statearr_14773_14913 = state_14767__$1;
(statearr_14773_14913[(2)] = null);

(statearr_14773_14913[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (7))){
var inst_14763 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
var statearr_14774_14914 = state_14767__$1;
(statearr_14774_14914[(2)] = inst_14763);

(statearr_14774_14914[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14896,c__14338__auto___14908,G__14727_14897,n__7454__auto___14895,jobs,results,process,async))
;
return ((function (__14896,switch__14224__auto__,c__14338__auto___14908,G__14727_14897,n__7454__auto___14895,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0 = (function (){
var statearr_14778 = [null,null,null,null,null,null,null];
(statearr_14778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__);

(statearr_14778[(1)] = (1));

return statearr_14778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1 = (function (state_14767){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_14767);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e14779){if((e14779 instanceof Object)){
var ex__14228__auto__ = e14779;
var statearr_14780_14915 = state_14767;
(statearr_14780_14915[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14767);

return cljs.core.cst$kw$recur;
} else {
throw e14779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__14916 = state_14767;
state_14767 = G__14916;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = function(state_14767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1.call(this,state_14767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__;
})()
;})(__14896,switch__14224__auto__,c__14338__auto___14908,G__14727_14897,n__7454__auto___14895,jobs,results,process,async))
})();
var state__14340__auto__ = (function (){var statearr_14781 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_14781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___14908);

return statearr_14781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(__14896,c__14338__auto___14908,G__14727_14897,n__7454__auto___14895,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14917 = (__14896 + (1));
__14896 = G__14917;
continue;
} else {
}
break;
}

var c__14338__auto___14918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___14918,jobs,results,process,async){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___14918,jobs,results,process,async){
return (function (state_14803){
var state_val_14804 = (state_14803[(1)]);
if((state_val_14804 === (1))){
var state_14803__$1 = state_14803;
var statearr_14805_14919 = state_14803__$1;
(statearr_14805_14919[(2)] = null);

(statearr_14805_14919[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14804 === (2))){
var state_14803__$1 = state_14803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14803__$1,(4),from);
} else {
if((state_val_14804 === (3))){
var inst_14801 = (state_14803[(2)]);
var state_14803__$1 = state_14803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14803__$1,inst_14801);
} else {
if((state_val_14804 === (4))){
var inst_14784 = (state_14803[(7)]);
var inst_14784__$1 = (state_14803[(2)]);
var inst_14785 = (inst_14784__$1 == null);
var state_14803__$1 = (function (){var statearr_14806 = state_14803;
(statearr_14806[(7)] = inst_14784__$1);

return statearr_14806;
})();
if(cljs.core.truth_(inst_14785)){
var statearr_14807_14920 = state_14803__$1;
(statearr_14807_14920[(1)] = (5));

} else {
var statearr_14808_14921 = state_14803__$1;
(statearr_14808_14921[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14804 === (5))){
var inst_14787 = cljs.core.async.close_BANG_(jobs);
var state_14803__$1 = state_14803;
var statearr_14809_14922 = state_14803__$1;
(statearr_14809_14922[(2)] = inst_14787);

(statearr_14809_14922[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14804 === (6))){
var inst_14789 = (state_14803[(8)]);
var inst_14784 = (state_14803[(7)]);
var inst_14789__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14791 = [inst_14784,inst_14789__$1];
var inst_14792 = (new cljs.core.PersistentVector(null,2,(5),inst_14790,inst_14791,null));
var state_14803__$1 = (function (){var statearr_14810 = state_14803;
(statearr_14810[(8)] = inst_14789__$1);

return statearr_14810;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14803__$1,(8),jobs,inst_14792);
} else {
if((state_val_14804 === (7))){
var inst_14799 = (state_14803[(2)]);
var state_14803__$1 = state_14803;
var statearr_14811_14923 = state_14803__$1;
(statearr_14811_14923[(2)] = inst_14799);

(statearr_14811_14923[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14804 === (8))){
var inst_14789 = (state_14803[(8)]);
var inst_14794 = (state_14803[(2)]);
var state_14803__$1 = (function (){var statearr_14812 = state_14803;
(statearr_14812[(9)] = inst_14794);

return statearr_14812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14803__$1,(9),results,inst_14789);
} else {
if((state_val_14804 === (9))){
var inst_14796 = (state_14803[(2)]);
var state_14803__$1 = (function (){var statearr_14813 = state_14803;
(statearr_14813[(10)] = inst_14796);

return statearr_14813;
})();
var statearr_14814_14924 = state_14803__$1;
(statearr_14814_14924[(2)] = null);

(statearr_14814_14924[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___14918,jobs,results,process,async))
;
return ((function (switch__14224__auto__,c__14338__auto___14918,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0 = (function (){
var statearr_14818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__);

(statearr_14818[(1)] = (1));

return statearr_14818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1 = (function (state_14803){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_14803);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e14819){if((e14819 instanceof Object)){
var ex__14228__auto__ = e14819;
var statearr_14820_14925 = state_14803;
(statearr_14820_14925[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14803);

return cljs.core.cst$kw$recur;
} else {
throw e14819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__14926 = state_14803;
state_14803 = G__14926;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = function(state_14803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1.call(this,state_14803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___14918,jobs,results,process,async))
})();
var state__14340__auto__ = (function (){var statearr_14821 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_14821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___14918);

return statearr_14821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___14918,jobs,results,process,async))
);


var c__14338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto__,jobs,results,process,async){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto__,jobs,results,process,async){
return (function (state_14859){
var state_val_14860 = (state_14859[(1)]);
if((state_val_14860 === (7))){
var inst_14855 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
var statearr_14861_14927 = state_14859__$1;
(statearr_14861_14927[(2)] = inst_14855);

(statearr_14861_14927[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (20))){
var state_14859__$1 = state_14859;
var statearr_14862_14928 = state_14859__$1;
(statearr_14862_14928[(2)] = null);

(statearr_14862_14928[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (1))){
var state_14859__$1 = state_14859;
var statearr_14863_14929 = state_14859__$1;
(statearr_14863_14929[(2)] = null);

(statearr_14863_14929[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (4))){
var inst_14824 = (state_14859[(7)]);
var inst_14824__$1 = (state_14859[(2)]);
var inst_14825 = (inst_14824__$1 == null);
var state_14859__$1 = (function (){var statearr_14864 = state_14859;
(statearr_14864[(7)] = inst_14824__$1);

return statearr_14864;
})();
if(cljs.core.truth_(inst_14825)){
var statearr_14865_14930 = state_14859__$1;
(statearr_14865_14930[(1)] = (5));

} else {
var statearr_14866_14931 = state_14859__$1;
(statearr_14866_14931[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (15))){
var inst_14837 = (state_14859[(8)]);
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14859__$1,(18),to,inst_14837);
} else {
if((state_val_14860 === (21))){
var inst_14850 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
var statearr_14867_14932 = state_14859__$1;
(statearr_14867_14932[(2)] = inst_14850);

(statearr_14867_14932[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (13))){
var inst_14852 = (state_14859[(2)]);
var state_14859__$1 = (function (){var statearr_14868 = state_14859;
(statearr_14868[(9)] = inst_14852);

return statearr_14868;
})();
var statearr_14869_14933 = state_14859__$1;
(statearr_14869_14933[(2)] = null);

(statearr_14869_14933[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (6))){
var inst_14824 = (state_14859[(7)]);
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14859__$1,(11),inst_14824);
} else {
if((state_val_14860 === (17))){
var inst_14845 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
if(cljs.core.truth_(inst_14845)){
var statearr_14870_14934 = state_14859__$1;
(statearr_14870_14934[(1)] = (19));

} else {
var statearr_14871_14935 = state_14859__$1;
(statearr_14871_14935[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (3))){
var inst_14857 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14859__$1,inst_14857);
} else {
if((state_val_14860 === (12))){
var inst_14834 = (state_14859[(10)]);
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14859__$1,(14),inst_14834);
} else {
if((state_val_14860 === (2))){
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14859__$1,(4),results);
} else {
if((state_val_14860 === (19))){
var state_14859__$1 = state_14859;
var statearr_14872_14936 = state_14859__$1;
(statearr_14872_14936[(2)] = null);

(statearr_14872_14936[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (11))){
var inst_14834 = (state_14859[(2)]);
var state_14859__$1 = (function (){var statearr_14873 = state_14859;
(statearr_14873[(10)] = inst_14834);

return statearr_14873;
})();
var statearr_14874_14937 = state_14859__$1;
(statearr_14874_14937[(2)] = null);

(statearr_14874_14937[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (9))){
var state_14859__$1 = state_14859;
var statearr_14875_14938 = state_14859__$1;
(statearr_14875_14938[(2)] = null);

(statearr_14875_14938[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (5))){
var state_14859__$1 = state_14859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14876_14939 = state_14859__$1;
(statearr_14876_14939[(1)] = (8));

} else {
var statearr_14877_14940 = state_14859__$1;
(statearr_14877_14940[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (14))){
var inst_14839 = (state_14859[(11)]);
var inst_14837 = (state_14859[(8)]);
var inst_14837__$1 = (state_14859[(2)]);
var inst_14838 = (inst_14837__$1 == null);
var inst_14839__$1 = cljs.core.not(inst_14838);
var state_14859__$1 = (function (){var statearr_14878 = state_14859;
(statearr_14878[(11)] = inst_14839__$1);

(statearr_14878[(8)] = inst_14837__$1);

return statearr_14878;
})();
if(inst_14839__$1){
var statearr_14879_14941 = state_14859__$1;
(statearr_14879_14941[(1)] = (15));

} else {
var statearr_14880_14942 = state_14859__$1;
(statearr_14880_14942[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (16))){
var inst_14839 = (state_14859[(11)]);
var state_14859__$1 = state_14859;
var statearr_14881_14943 = state_14859__$1;
(statearr_14881_14943[(2)] = inst_14839);

(statearr_14881_14943[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (10))){
var inst_14831 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
var statearr_14882_14944 = state_14859__$1;
(statearr_14882_14944[(2)] = inst_14831);

(statearr_14882_14944[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (18))){
var inst_14842 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
var statearr_14883_14945 = state_14859__$1;
(statearr_14883_14945[(2)] = inst_14842);

(statearr_14883_14945[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14860 === (8))){
var inst_14828 = cljs.core.async.close_BANG_(to);
var state_14859__$1 = state_14859;
var statearr_14884_14946 = state_14859__$1;
(statearr_14884_14946[(2)] = inst_14828);

(statearr_14884_14946[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto__,jobs,results,process,async))
;
return ((function (switch__14224__auto__,c__14338__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0 = (function (){
var statearr_14888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__);

(statearr_14888[(1)] = (1));

return statearr_14888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1 = (function (state_14859){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_14859);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e14889){if((e14889 instanceof Object)){
var ex__14228__auto__ = e14889;
var statearr_14890_14947 = state_14859;
(statearr_14890_14947[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14859);

return cljs.core.cst$kw$recur;
} else {
throw e14889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__14948 = state_14859;
state_14859 = G__14948;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__ = function(state_14859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1.call(this,state_14859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto__,jobs,results,process,async))
})();
var state__14340__auto__ = (function (){var statearr_14891 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_14891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto__);

return statearr_14891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto__,jobs,results,process,async))
);

return c__14338__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14949 = [];
var len__7609__auto___14952 = arguments.length;
var i__7610__auto___14953 = (0);
while(true){
if((i__7610__auto___14953 < len__7609__auto___14952)){
args14949.push((arguments[i__7610__auto___14953]));

var G__14954 = (i__7610__auto___14953 + (1));
i__7610__auto___14953 = G__14954;
continue;
} else {
}
break;
}

var G__14951 = args14949.length;
switch (G__14951) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14949.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14956 = [];
var len__7609__auto___14959 = arguments.length;
var i__7610__auto___14960 = (0);
while(true){
if((i__7610__auto___14960 < len__7609__auto___14959)){
args14956.push((arguments[i__7610__auto___14960]));

var G__14961 = (i__7610__auto___14960 + (1));
i__7610__auto___14960 = G__14961;
continue;
} else {
}
break;
}

var G__14958 = args14956.length;
switch (G__14958) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14956.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14963 = [];
var len__7609__auto___15016 = arguments.length;
var i__7610__auto___15017 = (0);
while(true){
if((i__7610__auto___15017 < len__7609__auto___15016)){
args14963.push((arguments[i__7610__auto___15017]));

var G__15018 = (i__7610__auto___15017 + (1));
i__7610__auto___15017 = G__15018;
continue;
} else {
}
break;
}

var G__14965 = args14963.length;
switch (G__14965) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14963.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14338__auto___15020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___15020,tc,fc){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___15020,tc,fc){
return (function (state_14991){
var state_val_14992 = (state_14991[(1)]);
if((state_val_14992 === (7))){
var inst_14987 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_14993_15021 = state_14991__$1;
(statearr_14993_15021[(2)] = inst_14987);

(statearr_14993_15021[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (1))){
var state_14991__$1 = state_14991;
var statearr_14994_15022 = state_14991__$1;
(statearr_14994_15022[(2)] = null);

(statearr_14994_15022[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (4))){
var inst_14968 = (state_14991[(7)]);
var inst_14968__$1 = (state_14991[(2)]);
var inst_14969 = (inst_14968__$1 == null);
var state_14991__$1 = (function (){var statearr_14995 = state_14991;
(statearr_14995[(7)] = inst_14968__$1);

return statearr_14995;
})();
if(cljs.core.truth_(inst_14969)){
var statearr_14996_15023 = state_14991__$1;
(statearr_14996_15023[(1)] = (5));

} else {
var statearr_14997_15024 = state_14991__$1;
(statearr_14997_15024[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (13))){
var state_14991__$1 = state_14991;
var statearr_14998_15025 = state_14991__$1;
(statearr_14998_15025[(2)] = null);

(statearr_14998_15025[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (6))){
var inst_14968 = (state_14991[(7)]);
var inst_14974 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14968) : p.call(null,inst_14968));
var state_14991__$1 = state_14991;
if(cljs.core.truth_(inst_14974)){
var statearr_14999_15026 = state_14991__$1;
(statearr_14999_15026[(1)] = (9));

} else {
var statearr_15000_15027 = state_14991__$1;
(statearr_15000_15027[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (3))){
var inst_14989 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14991__$1,inst_14989);
} else {
if((state_val_14992 === (12))){
var state_14991__$1 = state_14991;
var statearr_15001_15028 = state_14991__$1;
(statearr_15001_15028[(2)] = null);

(statearr_15001_15028[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (2))){
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14991__$1,(4),ch);
} else {
if((state_val_14992 === (11))){
var inst_14968 = (state_14991[(7)]);
var inst_14978 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14991__$1,(8),inst_14978,inst_14968);
} else {
if((state_val_14992 === (9))){
var state_14991__$1 = state_14991;
var statearr_15002_15029 = state_14991__$1;
(statearr_15002_15029[(2)] = tc);

(statearr_15002_15029[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (5))){
var inst_14971 = cljs.core.async.close_BANG_(tc);
var inst_14972 = cljs.core.async.close_BANG_(fc);
var state_14991__$1 = (function (){var statearr_15003 = state_14991;
(statearr_15003[(8)] = inst_14971);

return statearr_15003;
})();
var statearr_15004_15030 = state_14991__$1;
(statearr_15004_15030[(2)] = inst_14972);

(statearr_15004_15030[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (14))){
var inst_14985 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
var statearr_15005_15031 = state_14991__$1;
(statearr_15005_15031[(2)] = inst_14985);

(statearr_15005_15031[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (10))){
var state_14991__$1 = state_14991;
var statearr_15006_15032 = state_14991__$1;
(statearr_15006_15032[(2)] = fc);

(statearr_15006_15032[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14992 === (8))){
var inst_14980 = (state_14991[(2)]);
var state_14991__$1 = state_14991;
if(cljs.core.truth_(inst_14980)){
var statearr_15007_15033 = state_14991__$1;
(statearr_15007_15033[(1)] = (12));

} else {
var statearr_15008_15034 = state_14991__$1;
(statearr_15008_15034[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___15020,tc,fc))
;
return ((function (switch__14224__auto__,c__14338__auto___15020,tc,fc){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_15012 = [null,null,null,null,null,null,null,null,null];
(statearr_15012[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_15012[(1)] = (1));

return statearr_15012;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_14991){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_14991);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e15013){if((e15013 instanceof Object)){
var ex__14228__auto__ = e15013;
var statearr_15014_15035 = state_14991;
(statearr_15014_15035[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14991);

return cljs.core.cst$kw$recur;
} else {
throw e15013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__15036 = state_14991;
state_14991 = G__15036;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_14991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_14991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___15020,tc,fc))
})();
var state__14340__auto__ = (function (){var statearr_15015 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_15015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___15020);

return statearr_15015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___15020,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto__){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto__){
return (function (state_15100){
var state_val_15101 = (state_15100[(1)]);
if((state_val_15101 === (7))){
var inst_15096 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
var statearr_15102_15123 = state_15100__$1;
(statearr_15102_15123[(2)] = inst_15096);

(statearr_15102_15123[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15101 === (1))){
var inst_15080 = init;
var state_15100__$1 = (function (){var statearr_15103 = state_15100;
(statearr_15103[(7)] = inst_15080);

return statearr_15103;
})();
var statearr_15104_15124 = state_15100__$1;
(statearr_15104_15124[(2)] = null);

(statearr_15104_15124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15101 === (4))){
var inst_15083 = (state_15100[(8)]);
var inst_15083__$1 = (state_15100[(2)]);
var inst_15084 = (inst_15083__$1 == null);
var state_15100__$1 = (function (){var statearr_15105 = state_15100;
(statearr_15105[(8)] = inst_15083__$1);

return statearr_15105;
})();
if(cljs.core.truth_(inst_15084)){
var statearr_15106_15125 = state_15100__$1;
(statearr_15106_15125[(1)] = (5));

} else {
var statearr_15107_15126 = state_15100__$1;
(statearr_15107_15126[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15101 === (6))){
var inst_15087 = (state_15100[(9)]);
var inst_15080 = (state_15100[(7)]);
var inst_15083 = (state_15100[(8)]);
var inst_15087__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15080,inst_15083) : f.call(null,inst_15080,inst_15083));
var inst_15088 = cljs.core.reduced_QMARK_(inst_15087__$1);
var state_15100__$1 = (function (){var statearr_15108 = state_15100;
(statearr_15108[(9)] = inst_15087__$1);

return statearr_15108;
})();
if(inst_15088){
var statearr_15109_15127 = state_15100__$1;
(statearr_15109_15127[(1)] = (8));

} else {
var statearr_15110_15128 = state_15100__$1;
(statearr_15110_15128[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15101 === (3))){
var inst_15098 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15100__$1,inst_15098);
} else {
if((state_val_15101 === (2))){
var state_15100__$1 = state_15100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15100__$1,(4),ch);
} else {
if((state_val_15101 === (9))){
var inst_15087 = (state_15100[(9)]);
var inst_15080 = inst_15087;
var state_15100__$1 = (function (){var statearr_15111 = state_15100;
(statearr_15111[(7)] = inst_15080);

return statearr_15111;
})();
var statearr_15112_15129 = state_15100__$1;
(statearr_15112_15129[(2)] = null);

(statearr_15112_15129[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15101 === (5))){
var inst_15080 = (state_15100[(7)]);
var state_15100__$1 = state_15100;
var statearr_15113_15130 = state_15100__$1;
(statearr_15113_15130[(2)] = inst_15080);

(statearr_15113_15130[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15101 === (10))){
var inst_15094 = (state_15100[(2)]);
var state_15100__$1 = state_15100;
var statearr_15114_15131 = state_15100__$1;
(statearr_15114_15131[(2)] = inst_15094);

(statearr_15114_15131[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15101 === (8))){
var inst_15087 = (state_15100[(9)]);
var inst_15090 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15087) : cljs.core.deref.call(null,inst_15087));
var state_15100__$1 = state_15100;
var statearr_15115_15132 = state_15100__$1;
(statearr_15115_15132[(2)] = inst_15090);

(statearr_15115_15132[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto__))
;
return ((function (switch__14224__auto__,c__14338__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14225__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14225__auto____0 = (function (){
var statearr_15119 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15119[(0)] = cljs$core$async$reduce_$_state_machine__14225__auto__);

(statearr_15119[(1)] = (1));

return statearr_15119;
});
var cljs$core$async$reduce_$_state_machine__14225__auto____1 = (function (state_15100){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_15100);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e15120){if((e15120 instanceof Object)){
var ex__14228__auto__ = e15120;
var statearr_15121_15133 = state_15100;
(statearr_15121_15133[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15100);

return cljs.core.cst$kw$recur;
} else {
throw e15120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__15134 = state_15100;
state_15100 = G__15134;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14225__auto__ = function(state_15100){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14225__auto____1.call(this,state_15100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14225__auto____0;
cljs$core$async$reduce_$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14225__auto____1;
return cljs$core$async$reduce_$_state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto__))
})();
var state__14340__auto__ = (function (){var statearr_15122 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_15122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto__);

return statearr_15122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto__))
);

return c__14338__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15135 = [];
var len__7609__auto___15187 = arguments.length;
var i__7610__auto___15188 = (0);
while(true){
if((i__7610__auto___15188 < len__7609__auto___15187)){
args15135.push((arguments[i__7610__auto___15188]));

var G__15189 = (i__7610__auto___15188 + (1));
i__7610__auto___15188 = G__15189;
continue;
} else {
}
break;
}

var G__15137 = args15135.length;
switch (G__15137) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15135.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto__){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto__){
return (function (state_15162){
var state_val_15163 = (state_15162[(1)]);
if((state_val_15163 === (7))){
var inst_15144 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15164_15191 = state_15162__$1;
(statearr_15164_15191[(2)] = inst_15144);

(statearr_15164_15191[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (1))){
var inst_15138 = cljs.core.seq(coll);
var inst_15139 = inst_15138;
var state_15162__$1 = (function (){var statearr_15165 = state_15162;
(statearr_15165[(7)] = inst_15139);

return statearr_15165;
})();
var statearr_15166_15192 = state_15162__$1;
(statearr_15166_15192[(2)] = null);

(statearr_15166_15192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (4))){
var inst_15139 = (state_15162[(7)]);
var inst_15142 = cljs.core.first(inst_15139);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15162__$1,(7),ch,inst_15142);
} else {
if((state_val_15163 === (13))){
var inst_15156 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15167_15193 = state_15162__$1;
(statearr_15167_15193[(2)] = inst_15156);

(statearr_15167_15193[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (6))){
var inst_15147 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
if(cljs.core.truth_(inst_15147)){
var statearr_15168_15194 = state_15162__$1;
(statearr_15168_15194[(1)] = (8));

} else {
var statearr_15169_15195 = state_15162__$1;
(statearr_15169_15195[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (3))){
var inst_15160 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15162__$1,inst_15160);
} else {
if((state_val_15163 === (12))){
var state_15162__$1 = state_15162;
var statearr_15170_15196 = state_15162__$1;
(statearr_15170_15196[(2)] = null);

(statearr_15170_15196[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (2))){
var inst_15139 = (state_15162[(7)]);
var state_15162__$1 = state_15162;
if(cljs.core.truth_(inst_15139)){
var statearr_15171_15197 = state_15162__$1;
(statearr_15171_15197[(1)] = (4));

} else {
var statearr_15172_15198 = state_15162__$1;
(statearr_15172_15198[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (11))){
var inst_15153 = cljs.core.async.close_BANG_(ch);
var state_15162__$1 = state_15162;
var statearr_15173_15199 = state_15162__$1;
(statearr_15173_15199[(2)] = inst_15153);

(statearr_15173_15199[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (9))){
var state_15162__$1 = state_15162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15174_15200 = state_15162__$1;
(statearr_15174_15200[(1)] = (11));

} else {
var statearr_15175_15201 = state_15162__$1;
(statearr_15175_15201[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (5))){
var inst_15139 = (state_15162[(7)]);
var state_15162__$1 = state_15162;
var statearr_15176_15202 = state_15162__$1;
(statearr_15176_15202[(2)] = inst_15139);

(statearr_15176_15202[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (10))){
var inst_15158 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15177_15203 = state_15162__$1;
(statearr_15177_15203[(2)] = inst_15158);

(statearr_15177_15203[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15163 === (8))){
var inst_15139 = (state_15162[(7)]);
var inst_15149 = cljs.core.next(inst_15139);
var inst_15139__$1 = inst_15149;
var state_15162__$1 = (function (){var statearr_15178 = state_15162;
(statearr_15178[(7)] = inst_15139__$1);

return statearr_15178;
})();
var statearr_15179_15204 = state_15162__$1;
(statearr_15179_15204[(2)] = null);

(statearr_15179_15204[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto__))
;
return ((function (switch__14224__auto__,c__14338__auto__){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_15183 = [null,null,null,null,null,null,null,null];
(statearr_15183[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_15183[(1)] = (1));

return statearr_15183;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_15162){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_15162);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e15184){if((e15184 instanceof Object)){
var ex__14228__auto__ = e15184;
var statearr_15185_15205 = state_15162;
(statearr_15185_15205[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15162);

return cljs.core.cst$kw$recur;
} else {
throw e15184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__15206 = state_15162;
state_15162 = G__15206;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_15162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_15162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto__))
})();
var state__14340__auto__ = (function (){var statearr_15186 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_15186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto__);

return statearr_15186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto__))
);

return c__14338__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7203__auto__ = (((_ == null))?null:_);
var m__7204__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7204__auto__.call(null,_));
} else {
var m__7204__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7204__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7204__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7204__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7204__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto__.call(null,m,ch));
} else {
var m__7204__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7204__auto__.call(null,m));
} else {
var m__7204__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7204__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__15431 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15431) : cljs.core.atom.call(null,G__15431));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15432 = (function (mult,ch,cs,meta15433){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15433 = meta15433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15434,meta15433__$1){
var self__ = this;
var _15434__$1 = this;
return (new cljs.core.async.t_cljs$core$async15432(self__.mult,self__.ch,self__.cs,meta15433__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15434){
var self__ = this;
var _15434__$1 = this;
return self__.meta15433;
});})(cs))
;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15432.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15435_15655 = self__.cs;
var G__15436_15656 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15435_15655,G__15436_15656) : cljs.core.reset_BANG_.call(null,G__15435_15655,G__15436_15656));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15432.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15433], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15432";

cljs.core.async.t_cljs$core$async15432.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async15432");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15432 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15432(mult__$1,ch__$1,cs__$1,meta15433){
return (new cljs.core.async.t_cljs$core$async15432(mult__$1,ch__$1,cs__$1,meta15433));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15432(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14338__auto___15657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___15657,cs,m,dchan,dctr,done){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___15657,cs,m,dchan,dctr,done){
return (function (state_15567){
var state_val_15568 = (state_15567[(1)]);
if((state_val_15568 === (7))){
var inst_15563 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15569_15658 = state_15567__$1;
(statearr_15569_15658[(2)] = inst_15563);

(statearr_15569_15658[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (20))){
var inst_15468 = (state_15567[(7)]);
var inst_15478 = cljs.core.first(inst_15468);
var inst_15479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15478,(0),null);
var inst_15480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15478,(1),null);
var state_15567__$1 = (function (){var statearr_15570 = state_15567;
(statearr_15570[(8)] = inst_15479);

return statearr_15570;
})();
if(cljs.core.truth_(inst_15480)){
var statearr_15571_15659 = state_15567__$1;
(statearr_15571_15659[(1)] = (22));

} else {
var statearr_15572_15660 = state_15567__$1;
(statearr_15572_15660[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (27))){
var inst_15439 = (state_15567[(9)]);
var inst_15515 = (state_15567[(10)]);
var inst_15510 = (state_15567[(11)]);
var inst_15508 = (state_15567[(12)]);
var inst_15515__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15508,inst_15510);
var inst_15516 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15515__$1,inst_15439,done);
var state_15567__$1 = (function (){var statearr_15573 = state_15567;
(statearr_15573[(10)] = inst_15515__$1);

return statearr_15573;
})();
if(cljs.core.truth_(inst_15516)){
var statearr_15574_15661 = state_15567__$1;
(statearr_15574_15661[(1)] = (30));

} else {
var statearr_15575_15662 = state_15567__$1;
(statearr_15575_15662[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (1))){
var state_15567__$1 = state_15567;
var statearr_15576_15663 = state_15567__$1;
(statearr_15576_15663[(2)] = null);

(statearr_15576_15663[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (24))){
var inst_15468 = (state_15567[(7)]);
var inst_15485 = (state_15567[(2)]);
var inst_15486 = cljs.core.next(inst_15468);
var inst_15448 = inst_15486;
var inst_15449 = null;
var inst_15450 = (0);
var inst_15451 = (0);
var state_15567__$1 = (function (){var statearr_15577 = state_15567;
(statearr_15577[(13)] = inst_15451);

(statearr_15577[(14)] = inst_15449);

(statearr_15577[(15)] = inst_15448);

(statearr_15577[(16)] = inst_15485);

(statearr_15577[(17)] = inst_15450);

return statearr_15577;
})();
var statearr_15578_15664 = state_15567__$1;
(statearr_15578_15664[(2)] = null);

(statearr_15578_15664[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (39))){
var state_15567__$1 = state_15567;
var statearr_15582_15665 = state_15567__$1;
(statearr_15582_15665[(2)] = null);

(statearr_15582_15665[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (4))){
var inst_15439 = (state_15567[(9)]);
var inst_15439__$1 = (state_15567[(2)]);
var inst_15440 = (inst_15439__$1 == null);
var state_15567__$1 = (function (){var statearr_15583 = state_15567;
(statearr_15583[(9)] = inst_15439__$1);

return statearr_15583;
})();
if(cljs.core.truth_(inst_15440)){
var statearr_15584_15666 = state_15567__$1;
(statearr_15584_15666[(1)] = (5));

} else {
var statearr_15585_15667 = state_15567__$1;
(statearr_15585_15667[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (15))){
var inst_15451 = (state_15567[(13)]);
var inst_15449 = (state_15567[(14)]);
var inst_15448 = (state_15567[(15)]);
var inst_15450 = (state_15567[(17)]);
var inst_15464 = (state_15567[(2)]);
var inst_15465 = (inst_15451 + (1));
var tmp15579 = inst_15449;
var tmp15580 = inst_15448;
var tmp15581 = inst_15450;
var inst_15448__$1 = tmp15580;
var inst_15449__$1 = tmp15579;
var inst_15450__$1 = tmp15581;
var inst_15451__$1 = inst_15465;
var state_15567__$1 = (function (){var statearr_15586 = state_15567;
(statearr_15586[(13)] = inst_15451__$1);

(statearr_15586[(14)] = inst_15449__$1);

(statearr_15586[(15)] = inst_15448__$1);

(statearr_15586[(18)] = inst_15464);

(statearr_15586[(17)] = inst_15450__$1);

return statearr_15586;
})();
var statearr_15587_15668 = state_15567__$1;
(statearr_15587_15668[(2)] = null);

(statearr_15587_15668[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (21))){
var inst_15489 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15591_15669 = state_15567__$1;
(statearr_15591_15669[(2)] = inst_15489);

(statearr_15591_15669[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (31))){
var inst_15515 = (state_15567[(10)]);
var inst_15519 = done(null);
var inst_15520 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15515);
var state_15567__$1 = (function (){var statearr_15592 = state_15567;
(statearr_15592[(19)] = inst_15519);

return statearr_15592;
})();
var statearr_15593_15670 = state_15567__$1;
(statearr_15593_15670[(2)] = inst_15520);

(statearr_15593_15670[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (32))){
var inst_15509 = (state_15567[(20)]);
var inst_15510 = (state_15567[(11)]);
var inst_15508 = (state_15567[(12)]);
var inst_15507 = (state_15567[(21)]);
var inst_15522 = (state_15567[(2)]);
var inst_15523 = (inst_15510 + (1));
var tmp15588 = inst_15509;
var tmp15589 = inst_15508;
var tmp15590 = inst_15507;
var inst_15507__$1 = tmp15590;
var inst_15508__$1 = tmp15589;
var inst_15509__$1 = tmp15588;
var inst_15510__$1 = inst_15523;
var state_15567__$1 = (function (){var statearr_15594 = state_15567;
(statearr_15594[(22)] = inst_15522);

(statearr_15594[(20)] = inst_15509__$1);

(statearr_15594[(11)] = inst_15510__$1);

(statearr_15594[(12)] = inst_15508__$1);

(statearr_15594[(21)] = inst_15507__$1);

return statearr_15594;
})();
var statearr_15595_15671 = state_15567__$1;
(statearr_15595_15671[(2)] = null);

(statearr_15595_15671[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (40))){
var inst_15535 = (state_15567[(23)]);
var inst_15539 = done(null);
var inst_15540 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15535);
var state_15567__$1 = (function (){var statearr_15596 = state_15567;
(statearr_15596[(24)] = inst_15539);

return statearr_15596;
})();
var statearr_15597_15672 = state_15567__$1;
(statearr_15597_15672[(2)] = inst_15540);

(statearr_15597_15672[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (33))){
var inst_15526 = (state_15567[(25)]);
var inst_15528 = cljs.core.chunked_seq_QMARK_(inst_15526);
var state_15567__$1 = state_15567;
if(inst_15528){
var statearr_15598_15673 = state_15567__$1;
(statearr_15598_15673[(1)] = (36));

} else {
var statearr_15599_15674 = state_15567__$1;
(statearr_15599_15674[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (13))){
var inst_15458 = (state_15567[(26)]);
var inst_15461 = cljs.core.async.close_BANG_(inst_15458);
var state_15567__$1 = state_15567;
var statearr_15600_15675 = state_15567__$1;
(statearr_15600_15675[(2)] = inst_15461);

(statearr_15600_15675[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (22))){
var inst_15479 = (state_15567[(8)]);
var inst_15482 = cljs.core.async.close_BANG_(inst_15479);
var state_15567__$1 = state_15567;
var statearr_15601_15676 = state_15567__$1;
(statearr_15601_15676[(2)] = inst_15482);

(statearr_15601_15676[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (36))){
var inst_15526 = (state_15567[(25)]);
var inst_15530 = cljs.core.chunk_first(inst_15526);
var inst_15531 = cljs.core.chunk_rest(inst_15526);
var inst_15532 = cljs.core.count(inst_15530);
var inst_15507 = inst_15531;
var inst_15508 = inst_15530;
var inst_15509 = inst_15532;
var inst_15510 = (0);
var state_15567__$1 = (function (){var statearr_15602 = state_15567;
(statearr_15602[(20)] = inst_15509);

(statearr_15602[(11)] = inst_15510);

(statearr_15602[(12)] = inst_15508);

(statearr_15602[(21)] = inst_15507);

return statearr_15602;
})();
var statearr_15603_15677 = state_15567__$1;
(statearr_15603_15677[(2)] = null);

(statearr_15603_15677[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (41))){
var inst_15526 = (state_15567[(25)]);
var inst_15542 = (state_15567[(2)]);
var inst_15543 = cljs.core.next(inst_15526);
var inst_15507 = inst_15543;
var inst_15508 = null;
var inst_15509 = (0);
var inst_15510 = (0);
var state_15567__$1 = (function (){var statearr_15604 = state_15567;
(statearr_15604[(20)] = inst_15509);

(statearr_15604[(27)] = inst_15542);

(statearr_15604[(11)] = inst_15510);

(statearr_15604[(12)] = inst_15508);

(statearr_15604[(21)] = inst_15507);

return statearr_15604;
})();
var statearr_15605_15678 = state_15567__$1;
(statearr_15605_15678[(2)] = null);

(statearr_15605_15678[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (43))){
var state_15567__$1 = state_15567;
var statearr_15606_15679 = state_15567__$1;
(statearr_15606_15679[(2)] = null);

(statearr_15606_15679[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (29))){
var inst_15551 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15607_15680 = state_15567__$1;
(statearr_15607_15680[(2)] = inst_15551);

(statearr_15607_15680[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (44))){
var inst_15560 = (state_15567[(2)]);
var state_15567__$1 = (function (){var statearr_15608 = state_15567;
(statearr_15608[(28)] = inst_15560);

return statearr_15608;
})();
var statearr_15609_15681 = state_15567__$1;
(statearr_15609_15681[(2)] = null);

(statearr_15609_15681[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (6))){
var inst_15499 = (state_15567[(29)]);
var inst_15498 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15499__$1 = cljs.core.keys(inst_15498);
var inst_15500 = cljs.core.count(inst_15499__$1);
var inst_15501 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15500) : cljs.core.reset_BANG_.call(null,dctr,inst_15500));
var inst_15506 = cljs.core.seq(inst_15499__$1);
var inst_15507 = inst_15506;
var inst_15508 = null;
var inst_15509 = (0);
var inst_15510 = (0);
var state_15567__$1 = (function (){var statearr_15610 = state_15567;
(statearr_15610[(20)] = inst_15509);

(statearr_15610[(29)] = inst_15499__$1);

(statearr_15610[(11)] = inst_15510);

(statearr_15610[(30)] = inst_15501);

(statearr_15610[(12)] = inst_15508);

(statearr_15610[(21)] = inst_15507);

return statearr_15610;
})();
var statearr_15611_15682 = state_15567__$1;
(statearr_15611_15682[(2)] = null);

(statearr_15611_15682[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (28))){
var inst_15526 = (state_15567[(25)]);
var inst_15507 = (state_15567[(21)]);
var inst_15526__$1 = cljs.core.seq(inst_15507);
var state_15567__$1 = (function (){var statearr_15612 = state_15567;
(statearr_15612[(25)] = inst_15526__$1);

return statearr_15612;
})();
if(inst_15526__$1){
var statearr_15613_15683 = state_15567__$1;
(statearr_15613_15683[(1)] = (33));

} else {
var statearr_15614_15684 = state_15567__$1;
(statearr_15614_15684[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (25))){
var inst_15509 = (state_15567[(20)]);
var inst_15510 = (state_15567[(11)]);
var inst_15512 = (inst_15510 < inst_15509);
var inst_15513 = inst_15512;
var state_15567__$1 = state_15567;
if(cljs.core.truth_(inst_15513)){
var statearr_15615_15685 = state_15567__$1;
(statearr_15615_15685[(1)] = (27));

} else {
var statearr_15616_15686 = state_15567__$1;
(statearr_15616_15686[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (34))){
var state_15567__$1 = state_15567;
var statearr_15617_15687 = state_15567__$1;
(statearr_15617_15687[(2)] = null);

(statearr_15617_15687[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (17))){
var state_15567__$1 = state_15567;
var statearr_15618_15688 = state_15567__$1;
(statearr_15618_15688[(2)] = null);

(statearr_15618_15688[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (3))){
var inst_15565 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15567__$1,inst_15565);
} else {
if((state_val_15568 === (12))){
var inst_15494 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15619_15689 = state_15567__$1;
(statearr_15619_15689[(2)] = inst_15494);

(statearr_15619_15689[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (2))){
var state_15567__$1 = state_15567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15567__$1,(4),ch);
} else {
if((state_val_15568 === (23))){
var state_15567__$1 = state_15567;
var statearr_15620_15690 = state_15567__$1;
(statearr_15620_15690[(2)] = null);

(statearr_15620_15690[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (35))){
var inst_15549 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15621_15691 = state_15567__$1;
(statearr_15621_15691[(2)] = inst_15549);

(statearr_15621_15691[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (19))){
var inst_15468 = (state_15567[(7)]);
var inst_15472 = cljs.core.chunk_first(inst_15468);
var inst_15473 = cljs.core.chunk_rest(inst_15468);
var inst_15474 = cljs.core.count(inst_15472);
var inst_15448 = inst_15473;
var inst_15449 = inst_15472;
var inst_15450 = inst_15474;
var inst_15451 = (0);
var state_15567__$1 = (function (){var statearr_15622 = state_15567;
(statearr_15622[(13)] = inst_15451);

(statearr_15622[(14)] = inst_15449);

(statearr_15622[(15)] = inst_15448);

(statearr_15622[(17)] = inst_15450);

return statearr_15622;
})();
var statearr_15623_15692 = state_15567__$1;
(statearr_15623_15692[(2)] = null);

(statearr_15623_15692[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (11))){
var inst_15448 = (state_15567[(15)]);
var inst_15468 = (state_15567[(7)]);
var inst_15468__$1 = cljs.core.seq(inst_15448);
var state_15567__$1 = (function (){var statearr_15624 = state_15567;
(statearr_15624[(7)] = inst_15468__$1);

return statearr_15624;
})();
if(inst_15468__$1){
var statearr_15625_15693 = state_15567__$1;
(statearr_15625_15693[(1)] = (16));

} else {
var statearr_15626_15694 = state_15567__$1;
(statearr_15626_15694[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (9))){
var inst_15496 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15627_15695 = state_15567__$1;
(statearr_15627_15695[(2)] = inst_15496);

(statearr_15627_15695[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (5))){
var inst_15446 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15447 = cljs.core.seq(inst_15446);
var inst_15448 = inst_15447;
var inst_15449 = null;
var inst_15450 = (0);
var inst_15451 = (0);
var state_15567__$1 = (function (){var statearr_15628 = state_15567;
(statearr_15628[(13)] = inst_15451);

(statearr_15628[(14)] = inst_15449);

(statearr_15628[(15)] = inst_15448);

(statearr_15628[(17)] = inst_15450);

return statearr_15628;
})();
var statearr_15629_15696 = state_15567__$1;
(statearr_15629_15696[(2)] = null);

(statearr_15629_15696[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (14))){
var state_15567__$1 = state_15567;
var statearr_15630_15697 = state_15567__$1;
(statearr_15630_15697[(2)] = null);

(statearr_15630_15697[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (45))){
var inst_15557 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15631_15698 = state_15567__$1;
(statearr_15631_15698[(2)] = inst_15557);

(statearr_15631_15698[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (26))){
var inst_15499 = (state_15567[(29)]);
var inst_15553 = (state_15567[(2)]);
var inst_15554 = cljs.core.seq(inst_15499);
var state_15567__$1 = (function (){var statearr_15632 = state_15567;
(statearr_15632[(31)] = inst_15553);

return statearr_15632;
})();
if(inst_15554){
var statearr_15633_15699 = state_15567__$1;
(statearr_15633_15699[(1)] = (42));

} else {
var statearr_15634_15700 = state_15567__$1;
(statearr_15634_15700[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (16))){
var inst_15468 = (state_15567[(7)]);
var inst_15470 = cljs.core.chunked_seq_QMARK_(inst_15468);
var state_15567__$1 = state_15567;
if(inst_15470){
var statearr_15635_15701 = state_15567__$1;
(statearr_15635_15701[(1)] = (19));

} else {
var statearr_15636_15702 = state_15567__$1;
(statearr_15636_15702[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (38))){
var inst_15546 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15637_15703 = state_15567__$1;
(statearr_15637_15703[(2)] = inst_15546);

(statearr_15637_15703[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (30))){
var state_15567__$1 = state_15567;
var statearr_15638_15704 = state_15567__$1;
(statearr_15638_15704[(2)] = null);

(statearr_15638_15704[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (10))){
var inst_15451 = (state_15567[(13)]);
var inst_15449 = (state_15567[(14)]);
var inst_15457 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15449,inst_15451);
var inst_15458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15457,(0),null);
var inst_15459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15457,(1),null);
var state_15567__$1 = (function (){var statearr_15639 = state_15567;
(statearr_15639[(26)] = inst_15458);

return statearr_15639;
})();
if(cljs.core.truth_(inst_15459)){
var statearr_15640_15705 = state_15567__$1;
(statearr_15640_15705[(1)] = (13));

} else {
var statearr_15641_15706 = state_15567__$1;
(statearr_15641_15706[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (18))){
var inst_15492 = (state_15567[(2)]);
var state_15567__$1 = state_15567;
var statearr_15642_15707 = state_15567__$1;
(statearr_15642_15707[(2)] = inst_15492);

(statearr_15642_15707[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (42))){
var state_15567__$1 = state_15567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15567__$1,(45),dchan);
} else {
if((state_val_15568 === (37))){
var inst_15439 = (state_15567[(9)]);
var inst_15535 = (state_15567[(23)]);
var inst_15526 = (state_15567[(25)]);
var inst_15535__$1 = cljs.core.first(inst_15526);
var inst_15536 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15535__$1,inst_15439,done);
var state_15567__$1 = (function (){var statearr_15643 = state_15567;
(statearr_15643[(23)] = inst_15535__$1);

return statearr_15643;
})();
if(cljs.core.truth_(inst_15536)){
var statearr_15644_15708 = state_15567__$1;
(statearr_15644_15708[(1)] = (39));

} else {
var statearr_15645_15709 = state_15567__$1;
(statearr_15645_15709[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15568 === (8))){
var inst_15451 = (state_15567[(13)]);
var inst_15450 = (state_15567[(17)]);
var inst_15453 = (inst_15451 < inst_15450);
var inst_15454 = inst_15453;
var state_15567__$1 = state_15567;
if(cljs.core.truth_(inst_15454)){
var statearr_15646_15710 = state_15567__$1;
(statearr_15646_15710[(1)] = (10));

} else {
var statearr_15647_15711 = state_15567__$1;
(statearr_15647_15711[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___15657,cs,m,dchan,dctr,done))
;
return ((function (switch__14224__auto__,c__14338__auto___15657,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14225__auto__ = null;
var cljs$core$async$mult_$_state_machine__14225__auto____0 = (function (){
var statearr_15651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15651[(0)] = cljs$core$async$mult_$_state_machine__14225__auto__);

(statearr_15651[(1)] = (1));

return statearr_15651;
});
var cljs$core$async$mult_$_state_machine__14225__auto____1 = (function (state_15567){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_15567);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e15652){if((e15652 instanceof Object)){
var ex__14228__auto__ = e15652;
var statearr_15653_15712 = state_15567;
(statearr_15653_15712[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15567);

return cljs.core.cst$kw$recur;
} else {
throw e15652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__15713 = state_15567;
state_15567 = G__15713;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14225__auto__ = function(state_15567){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14225__auto____1.call(this,state_15567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14225__auto____0;
cljs$core$async$mult_$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14225__auto____1;
return cljs$core$async$mult_$_state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___15657,cs,m,dchan,dctr,done))
})();
var state__14340__auto__ = (function (){var statearr_15654 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_15654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___15657);

return statearr_15654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___15657,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15714 = [];
var len__7609__auto___15717 = arguments.length;
var i__7610__auto___15718 = (0);
while(true){
if((i__7610__auto___15718 < len__7609__auto___15717)){
args15714.push((arguments[i__7610__auto___15718]));

var G__15719 = (i__7610__auto___15718 + (1));
i__7610__auto___15718 = G__15719;
continue;
} else {
}
break;
}

var G__15716 = args15714.length;
switch (G__15716) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15714.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto__.call(null,m,ch));
} else {
var m__7204__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto__.call(null,m,ch));
} else {
var m__7204__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7204__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7204__auto__.call(null,m));
} else {
var m__7204__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7204__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7204__auto__.call(null,m,state_map));
} else {
var m__7204__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7204__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7203__auto__ = (((m == null))?null:m);
var m__7204__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7204__auto__.call(null,m,mode));
} else {
var m__7204__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7204__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7616__auto__ = [];
var len__7609__auto___15731 = arguments.length;
var i__7610__auto___15732 = (0);
while(true){
if((i__7610__auto___15732 < len__7609__auto___15731)){
args__7616__auto__.push((arguments[i__7610__auto___15732]));

var G__15733 = (i__7610__auto___15732 + (1));
i__7610__auto___15732 = G__15733;
continue;
} else {
}
break;
}

var argseq__7617__auto__ = ((((3) < args__7616__auto__.length))?(new cljs.core.IndexedSeq(args__7616__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7617__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15725){
var map__15726 = p__15725;
var map__15726__$1 = ((((!((map__15726 == null)))?((((map__15726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15726):map__15726);
var opts = map__15726__$1;
var statearr_15728_15734 = state;
(statearr_15728_15734[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__15726,map__15726__$1,opts){
return (function (val){
var statearr_15729_15735 = state;
(statearr_15729_15735[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15726,map__15726__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15730_15736 = state;
(statearr_15730_15736[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15721){
var G__15722 = cljs.core.first(seq15721);
var seq15721__$1 = cljs.core.next(seq15721);
var G__15723 = cljs.core.first(seq15721__$1);
var seq15721__$2 = cljs.core.next(seq15721__$1);
var G__15724 = cljs.core.first(seq15721__$2);
var seq15721__$3 = cljs.core.next(seq15721__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15722,G__15723,G__15724,seq15721__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__15903 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15903) : cljs.core.atom.call(null,G__15903));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15904 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15905){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15905 = meta15905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15906,meta15905__$1){
var self__ = this;
var _15906__$1 = this;
return (new cljs.core.async.t_cljs$core$async15904(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15905__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15906){
var self__ = this;
var _15906__$1 = this;
return self__.meta15905;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15907_16069 = self__.cs;
var G__15908_16070 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15907_16069,G__15908_16070) : cljs.core.reset_BANG_.call(null,G__15907_16069,G__15908_16070));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15904.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15904.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15905], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15904";

cljs.core.async.t_cljs$core$async15904.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async15904");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15904 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15905){
return (new cljs.core.async.t_cljs$core$async15904(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15905));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15904(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14338__auto___16071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___16071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___16071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16006){
var state_val_16007 = (state_16006[(1)]);
if((state_val_16007 === (7))){
var inst_15924 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
var statearr_16008_16072 = state_16006__$1;
(statearr_16008_16072[(2)] = inst_15924);

(statearr_16008_16072[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (20))){
var inst_15936 = (state_16006[(7)]);
var state_16006__$1 = state_16006;
var statearr_16009_16073 = state_16006__$1;
(statearr_16009_16073[(2)] = inst_15936);

(statearr_16009_16073[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (27))){
var state_16006__$1 = state_16006;
var statearr_16010_16074 = state_16006__$1;
(statearr_16010_16074[(2)] = null);

(statearr_16010_16074[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (1))){
var inst_15912 = (state_16006[(8)]);
var inst_15912__$1 = calc_state();
var inst_15914 = (inst_15912__$1 == null);
var inst_15915 = cljs.core.not(inst_15914);
var state_16006__$1 = (function (){var statearr_16011 = state_16006;
(statearr_16011[(8)] = inst_15912__$1);

return statearr_16011;
})();
if(inst_15915){
var statearr_16012_16075 = state_16006__$1;
(statearr_16012_16075[(1)] = (2));

} else {
var statearr_16013_16076 = state_16006__$1;
(statearr_16013_16076[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (24))){
var inst_15959 = (state_16006[(9)]);
var inst_15966 = (state_16006[(10)]);
var inst_15980 = (state_16006[(11)]);
var inst_15980__$1 = (inst_15959.cljs$core$IFn$_invoke$arity$1 ? inst_15959.cljs$core$IFn$_invoke$arity$1(inst_15966) : inst_15959.call(null,inst_15966));
var state_16006__$1 = (function (){var statearr_16014 = state_16006;
(statearr_16014[(11)] = inst_15980__$1);

return statearr_16014;
})();
if(cljs.core.truth_(inst_15980__$1)){
var statearr_16015_16077 = state_16006__$1;
(statearr_16015_16077[(1)] = (29));

} else {
var statearr_16016_16078 = state_16006__$1;
(statearr_16016_16078[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (4))){
var inst_15927 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
if(cljs.core.truth_(inst_15927)){
var statearr_16017_16079 = state_16006__$1;
(statearr_16017_16079[(1)] = (8));

} else {
var statearr_16018_16080 = state_16006__$1;
(statearr_16018_16080[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (15))){
var inst_15953 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
if(cljs.core.truth_(inst_15953)){
var statearr_16019_16081 = state_16006__$1;
(statearr_16019_16081[(1)] = (19));

} else {
var statearr_16020_16082 = state_16006__$1;
(statearr_16020_16082[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (21))){
var inst_15958 = (state_16006[(12)]);
var inst_15958__$1 = (state_16006[(2)]);
var inst_15959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15958__$1,cljs.core.cst$kw$solos);
var inst_15960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15958__$1,cljs.core.cst$kw$mutes);
var inst_15961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15958__$1,cljs.core.cst$kw$reads);
var state_16006__$1 = (function (){var statearr_16021 = state_16006;
(statearr_16021[(12)] = inst_15958__$1);

(statearr_16021[(9)] = inst_15959);

(statearr_16021[(13)] = inst_15960);

return statearr_16021;
})();
return cljs.core.async.ioc_alts_BANG_(state_16006__$1,(22),inst_15961);
} else {
if((state_val_16007 === (31))){
var inst_15988 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
if(cljs.core.truth_(inst_15988)){
var statearr_16022_16083 = state_16006__$1;
(statearr_16022_16083[(1)] = (32));

} else {
var statearr_16023_16084 = state_16006__$1;
(statearr_16023_16084[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (32))){
var inst_15965 = (state_16006[(14)]);
var state_16006__$1 = state_16006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16006__$1,(35),out,inst_15965);
} else {
if((state_val_16007 === (33))){
var inst_15958 = (state_16006[(12)]);
var inst_15936 = inst_15958;
var state_16006__$1 = (function (){var statearr_16024 = state_16006;
(statearr_16024[(7)] = inst_15936);

return statearr_16024;
})();
var statearr_16025_16085 = state_16006__$1;
(statearr_16025_16085[(2)] = null);

(statearr_16025_16085[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (13))){
var inst_15936 = (state_16006[(7)]);
var inst_15943 = inst_15936.cljs$lang$protocol_mask$partition0$;
var inst_15944 = (inst_15943 & (64));
var inst_15945 = inst_15936.cljs$core$ISeq$;
var inst_15946 = (inst_15944) || (inst_15945);
var state_16006__$1 = state_16006;
if(cljs.core.truth_(inst_15946)){
var statearr_16026_16086 = state_16006__$1;
(statearr_16026_16086[(1)] = (16));

} else {
var statearr_16027_16087 = state_16006__$1;
(statearr_16027_16087[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (22))){
var inst_15966 = (state_16006[(10)]);
var inst_15965 = (state_16006[(14)]);
var inst_15964 = (state_16006[(2)]);
var inst_15965__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15964,(0),null);
var inst_15966__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15964,(1),null);
var inst_15967 = (inst_15965__$1 == null);
var inst_15968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15966__$1,change);
var inst_15969 = (inst_15967) || (inst_15968);
var state_16006__$1 = (function (){var statearr_16028 = state_16006;
(statearr_16028[(10)] = inst_15966__$1);

(statearr_16028[(14)] = inst_15965__$1);

return statearr_16028;
})();
if(cljs.core.truth_(inst_15969)){
var statearr_16029_16088 = state_16006__$1;
(statearr_16029_16088[(1)] = (23));

} else {
var statearr_16030_16089 = state_16006__$1;
(statearr_16030_16089[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (36))){
var inst_15958 = (state_16006[(12)]);
var inst_15936 = inst_15958;
var state_16006__$1 = (function (){var statearr_16031 = state_16006;
(statearr_16031[(7)] = inst_15936);

return statearr_16031;
})();
var statearr_16032_16090 = state_16006__$1;
(statearr_16032_16090[(2)] = null);

(statearr_16032_16090[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (29))){
var inst_15980 = (state_16006[(11)]);
var state_16006__$1 = state_16006;
var statearr_16033_16091 = state_16006__$1;
(statearr_16033_16091[(2)] = inst_15980);

(statearr_16033_16091[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (6))){
var state_16006__$1 = state_16006;
var statearr_16034_16092 = state_16006__$1;
(statearr_16034_16092[(2)] = false);

(statearr_16034_16092[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (28))){
var inst_15976 = (state_16006[(2)]);
var inst_15977 = calc_state();
var inst_15936 = inst_15977;
var state_16006__$1 = (function (){var statearr_16035 = state_16006;
(statearr_16035[(15)] = inst_15976);

(statearr_16035[(7)] = inst_15936);

return statearr_16035;
})();
var statearr_16036_16093 = state_16006__$1;
(statearr_16036_16093[(2)] = null);

(statearr_16036_16093[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (25))){
var inst_16002 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
var statearr_16037_16094 = state_16006__$1;
(statearr_16037_16094[(2)] = inst_16002);

(statearr_16037_16094[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (34))){
var inst_16000 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
var statearr_16038_16095 = state_16006__$1;
(statearr_16038_16095[(2)] = inst_16000);

(statearr_16038_16095[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (17))){
var state_16006__$1 = state_16006;
var statearr_16039_16096 = state_16006__$1;
(statearr_16039_16096[(2)] = false);

(statearr_16039_16096[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (3))){
var state_16006__$1 = state_16006;
var statearr_16040_16097 = state_16006__$1;
(statearr_16040_16097[(2)] = false);

(statearr_16040_16097[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (12))){
var inst_16004 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16006__$1,inst_16004);
} else {
if((state_val_16007 === (2))){
var inst_15912 = (state_16006[(8)]);
var inst_15917 = inst_15912.cljs$lang$protocol_mask$partition0$;
var inst_15918 = (inst_15917 & (64));
var inst_15919 = inst_15912.cljs$core$ISeq$;
var inst_15920 = (inst_15918) || (inst_15919);
var state_16006__$1 = state_16006;
if(cljs.core.truth_(inst_15920)){
var statearr_16041_16098 = state_16006__$1;
(statearr_16041_16098[(1)] = (5));

} else {
var statearr_16042_16099 = state_16006__$1;
(statearr_16042_16099[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (23))){
var inst_15965 = (state_16006[(14)]);
var inst_15971 = (inst_15965 == null);
var state_16006__$1 = state_16006;
if(cljs.core.truth_(inst_15971)){
var statearr_16043_16100 = state_16006__$1;
(statearr_16043_16100[(1)] = (26));

} else {
var statearr_16044_16101 = state_16006__$1;
(statearr_16044_16101[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (35))){
var inst_15991 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
if(cljs.core.truth_(inst_15991)){
var statearr_16045_16102 = state_16006__$1;
(statearr_16045_16102[(1)] = (36));

} else {
var statearr_16046_16103 = state_16006__$1;
(statearr_16046_16103[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (19))){
var inst_15936 = (state_16006[(7)]);
var inst_15955 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15936);
var state_16006__$1 = state_16006;
var statearr_16047_16104 = state_16006__$1;
(statearr_16047_16104[(2)] = inst_15955);

(statearr_16047_16104[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (11))){
var inst_15936 = (state_16006[(7)]);
var inst_15940 = (inst_15936 == null);
var inst_15941 = cljs.core.not(inst_15940);
var state_16006__$1 = state_16006;
if(inst_15941){
var statearr_16048_16105 = state_16006__$1;
(statearr_16048_16105[(1)] = (13));

} else {
var statearr_16049_16106 = state_16006__$1;
(statearr_16049_16106[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (9))){
var inst_15912 = (state_16006[(8)]);
var state_16006__$1 = state_16006;
var statearr_16050_16107 = state_16006__$1;
(statearr_16050_16107[(2)] = inst_15912);

(statearr_16050_16107[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (5))){
var state_16006__$1 = state_16006;
var statearr_16051_16108 = state_16006__$1;
(statearr_16051_16108[(2)] = true);

(statearr_16051_16108[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (14))){
var state_16006__$1 = state_16006;
var statearr_16052_16109 = state_16006__$1;
(statearr_16052_16109[(2)] = false);

(statearr_16052_16109[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (26))){
var inst_15966 = (state_16006[(10)]);
var inst_15973 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15966);
var state_16006__$1 = state_16006;
var statearr_16053_16110 = state_16006__$1;
(statearr_16053_16110[(2)] = inst_15973);

(statearr_16053_16110[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (16))){
var state_16006__$1 = state_16006;
var statearr_16054_16111 = state_16006__$1;
(statearr_16054_16111[(2)] = true);

(statearr_16054_16111[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (38))){
var inst_15996 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
var statearr_16055_16112 = state_16006__$1;
(statearr_16055_16112[(2)] = inst_15996);

(statearr_16055_16112[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (30))){
var inst_15959 = (state_16006[(9)]);
var inst_15966 = (state_16006[(10)]);
var inst_15960 = (state_16006[(13)]);
var inst_15983 = cljs.core.empty_QMARK_(inst_15959);
var inst_15984 = (inst_15960.cljs$core$IFn$_invoke$arity$1 ? inst_15960.cljs$core$IFn$_invoke$arity$1(inst_15966) : inst_15960.call(null,inst_15966));
var inst_15985 = cljs.core.not(inst_15984);
var inst_15986 = (inst_15983) && (inst_15985);
var state_16006__$1 = state_16006;
var statearr_16056_16113 = state_16006__$1;
(statearr_16056_16113[(2)] = inst_15986);

(statearr_16056_16113[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (10))){
var inst_15912 = (state_16006[(8)]);
var inst_15932 = (state_16006[(2)]);
var inst_15933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15932,cljs.core.cst$kw$solos);
var inst_15934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15932,cljs.core.cst$kw$mutes);
var inst_15935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15932,cljs.core.cst$kw$reads);
var inst_15936 = inst_15912;
var state_16006__$1 = (function (){var statearr_16057 = state_16006;
(statearr_16057[(16)] = inst_15933);

(statearr_16057[(17)] = inst_15935);

(statearr_16057[(7)] = inst_15936);

(statearr_16057[(18)] = inst_15934);

return statearr_16057;
})();
var statearr_16058_16114 = state_16006__$1;
(statearr_16058_16114[(2)] = null);

(statearr_16058_16114[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (18))){
var inst_15950 = (state_16006[(2)]);
var state_16006__$1 = state_16006;
var statearr_16059_16115 = state_16006__$1;
(statearr_16059_16115[(2)] = inst_15950);

(statearr_16059_16115[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (37))){
var state_16006__$1 = state_16006;
var statearr_16060_16116 = state_16006__$1;
(statearr_16060_16116[(2)] = null);

(statearr_16060_16116[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16007 === (8))){
var inst_15912 = (state_16006[(8)]);
var inst_15929 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15912);
var state_16006__$1 = state_16006;
var statearr_16061_16117 = state_16006__$1;
(statearr_16061_16117[(2)] = inst_15929);

(statearr_16061_16117[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___16071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14224__auto__,c__14338__auto___16071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14225__auto__ = null;
var cljs$core$async$mix_$_state_machine__14225__auto____0 = (function (){
var statearr_16065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16065[(0)] = cljs$core$async$mix_$_state_machine__14225__auto__);

(statearr_16065[(1)] = (1));

return statearr_16065;
});
var cljs$core$async$mix_$_state_machine__14225__auto____1 = (function (state_16006){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_16006);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e16066){if((e16066 instanceof Object)){
var ex__14228__auto__ = e16066;
var statearr_16067_16118 = state_16006;
(statearr_16067_16118[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16006);

return cljs.core.cst$kw$recur;
} else {
throw e16066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__16119 = state_16006;
state_16006 = G__16119;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14225__auto__ = function(state_16006){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14225__auto____1.call(this,state_16006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14225__auto____0;
cljs$core$async$mix_$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14225__auto____1;
return cljs$core$async$mix_$_state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___16071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14340__auto__ = (function (){var statearr_16068 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_16068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___16071);

return statearr_16068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___16071,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7203__auto__ = (((p == null))?null:p);
var m__7204__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7204__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7204__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7204__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7203__auto__ = (((p == null))?null:p);
var m__7204__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7204__auto__.call(null,p,v,ch));
} else {
var m__7204__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7204__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16120 = [];
var len__7609__auto___16123 = arguments.length;
var i__7610__auto___16124 = (0);
while(true){
if((i__7610__auto___16124 < len__7609__auto___16123)){
args16120.push((arguments[i__7610__auto___16124]));

var G__16125 = (i__7610__auto___16124 + (1));
i__7610__auto___16124 = G__16125;
continue;
} else {
}
break;
}

var G__16122 = args16120.length;
switch (G__16122) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16120.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7203__auto__ = (((p == null))?null:p);
var m__7204__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7204__auto__.call(null,p));
} else {
var m__7204__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7204__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7203__auto__ = (((p == null))?null:p);
var m__7204__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7203__auto__)]);
if(!((m__7204__auto__ == null))){
return (m__7204__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7204__auto__.call(null,p,v));
} else {
var m__7204__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7204__auto____$1 == null))){
return (m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7204__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7204__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16128 = [];
var len__7609__auto___16256 = arguments.length;
var i__7610__auto___16257 = (0);
while(true){
if((i__7610__auto___16257 < len__7609__auto___16256)){
args16128.push((arguments[i__7610__auto___16257]));

var G__16258 = (i__7610__auto___16257 + (1));
i__7610__auto___16257 = G__16258;
continue;
} else {
}
break;
}

var G__16130 = args16128.length;
switch (G__16130) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16128.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__16131 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16131) : cljs.core.atom.call(null,G__16131));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6540__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6540__auto__,mults){
return (function (p1__16127_SHARP_){
if(cljs.core.truth_((p1__16127_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16127_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16127_SHARP_.call(null,topic)))){
return p1__16127_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16127_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6540__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16132 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16133){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16133 = meta16133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16134,meta16133__$1){
var self__ = this;
var _16134__$1 = this;
return (new cljs.core.async.t_cljs$core$async16132(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16133__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16134){
var self__ = this;
var _16134__$1 = this;
return self__.meta16133;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16132.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16132.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16132.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16132.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16132.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16132.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16135 = self__.mults;
var G__16136 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16135,G__16136) : cljs.core.reset_BANG_.call(null,G__16135,G__16136));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16132.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16132.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16133], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16132";

cljs.core.async.t_cljs$core$async16132.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16132");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16132 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16132(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16133){
return (new cljs.core.async.t_cljs$core$async16132(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16133));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16132(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14338__auto___16260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___16260,mults,ensure_mult,p){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___16260,mults,ensure_mult,p){
return (function (state_16208){
var state_val_16209 = (state_16208[(1)]);
if((state_val_16209 === (7))){
var inst_16204 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16210_16261 = state_16208__$1;
(statearr_16210_16261[(2)] = inst_16204);

(statearr_16210_16261[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (20))){
var state_16208__$1 = state_16208;
var statearr_16211_16262 = state_16208__$1;
(statearr_16211_16262[(2)] = null);

(statearr_16211_16262[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (1))){
var state_16208__$1 = state_16208;
var statearr_16212_16263 = state_16208__$1;
(statearr_16212_16263[(2)] = null);

(statearr_16212_16263[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (24))){
var inst_16187 = (state_16208[(7)]);
var inst_16196 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16187);
var state_16208__$1 = state_16208;
var statearr_16213_16264 = state_16208__$1;
(statearr_16213_16264[(2)] = inst_16196);

(statearr_16213_16264[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (4))){
var inst_16139 = (state_16208[(8)]);
var inst_16139__$1 = (state_16208[(2)]);
var inst_16140 = (inst_16139__$1 == null);
var state_16208__$1 = (function (){var statearr_16214 = state_16208;
(statearr_16214[(8)] = inst_16139__$1);

return statearr_16214;
})();
if(cljs.core.truth_(inst_16140)){
var statearr_16215_16265 = state_16208__$1;
(statearr_16215_16265[(1)] = (5));

} else {
var statearr_16216_16266 = state_16208__$1;
(statearr_16216_16266[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (15))){
var inst_16181 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16217_16267 = state_16208__$1;
(statearr_16217_16267[(2)] = inst_16181);

(statearr_16217_16267[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (21))){
var inst_16201 = (state_16208[(2)]);
var state_16208__$1 = (function (){var statearr_16218 = state_16208;
(statearr_16218[(9)] = inst_16201);

return statearr_16218;
})();
var statearr_16219_16268 = state_16208__$1;
(statearr_16219_16268[(2)] = null);

(statearr_16219_16268[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (13))){
var inst_16163 = (state_16208[(10)]);
var inst_16165 = cljs.core.chunked_seq_QMARK_(inst_16163);
var state_16208__$1 = state_16208;
if(inst_16165){
var statearr_16220_16269 = state_16208__$1;
(statearr_16220_16269[(1)] = (16));

} else {
var statearr_16221_16270 = state_16208__$1;
(statearr_16221_16270[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (22))){
var inst_16193 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
if(cljs.core.truth_(inst_16193)){
var statearr_16222_16271 = state_16208__$1;
(statearr_16222_16271[(1)] = (23));

} else {
var statearr_16223_16272 = state_16208__$1;
(statearr_16223_16272[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (6))){
var inst_16187 = (state_16208[(7)]);
var inst_16139 = (state_16208[(8)]);
var inst_16189 = (state_16208[(11)]);
var inst_16187__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16139) : topic_fn.call(null,inst_16139));
var inst_16188 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16189__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16188,inst_16187__$1);
var state_16208__$1 = (function (){var statearr_16224 = state_16208;
(statearr_16224[(7)] = inst_16187__$1);

(statearr_16224[(11)] = inst_16189__$1);

return statearr_16224;
})();
if(cljs.core.truth_(inst_16189__$1)){
var statearr_16225_16273 = state_16208__$1;
(statearr_16225_16273[(1)] = (19));

} else {
var statearr_16226_16274 = state_16208__$1;
(statearr_16226_16274[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (25))){
var inst_16198 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16227_16275 = state_16208__$1;
(statearr_16227_16275[(2)] = inst_16198);

(statearr_16227_16275[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (17))){
var inst_16163 = (state_16208[(10)]);
var inst_16172 = cljs.core.first(inst_16163);
var inst_16173 = cljs.core.async.muxch_STAR_(inst_16172);
var inst_16174 = cljs.core.async.close_BANG_(inst_16173);
var inst_16175 = cljs.core.next(inst_16163);
var inst_16149 = inst_16175;
var inst_16150 = null;
var inst_16151 = (0);
var inst_16152 = (0);
var state_16208__$1 = (function (){var statearr_16228 = state_16208;
(statearr_16228[(12)] = inst_16152);

(statearr_16228[(13)] = inst_16151);

(statearr_16228[(14)] = inst_16150);

(statearr_16228[(15)] = inst_16149);

(statearr_16228[(16)] = inst_16174);

return statearr_16228;
})();
var statearr_16229_16276 = state_16208__$1;
(statearr_16229_16276[(2)] = null);

(statearr_16229_16276[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (3))){
var inst_16206 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16208__$1,inst_16206);
} else {
if((state_val_16209 === (12))){
var inst_16183 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16230_16277 = state_16208__$1;
(statearr_16230_16277[(2)] = inst_16183);

(statearr_16230_16277[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (2))){
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16208__$1,(4),ch);
} else {
if((state_val_16209 === (23))){
var state_16208__$1 = state_16208;
var statearr_16231_16278 = state_16208__$1;
(statearr_16231_16278[(2)] = null);

(statearr_16231_16278[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (19))){
var inst_16139 = (state_16208[(8)]);
var inst_16189 = (state_16208[(11)]);
var inst_16191 = cljs.core.async.muxch_STAR_(inst_16189);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16208__$1,(22),inst_16191,inst_16139);
} else {
if((state_val_16209 === (11))){
var inst_16149 = (state_16208[(15)]);
var inst_16163 = (state_16208[(10)]);
var inst_16163__$1 = cljs.core.seq(inst_16149);
var state_16208__$1 = (function (){var statearr_16232 = state_16208;
(statearr_16232[(10)] = inst_16163__$1);

return statearr_16232;
})();
if(inst_16163__$1){
var statearr_16233_16279 = state_16208__$1;
(statearr_16233_16279[(1)] = (13));

} else {
var statearr_16234_16280 = state_16208__$1;
(statearr_16234_16280[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (9))){
var inst_16185 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16235_16281 = state_16208__$1;
(statearr_16235_16281[(2)] = inst_16185);

(statearr_16235_16281[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (5))){
var inst_16146 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_16147 = cljs.core.vals(inst_16146);
var inst_16148 = cljs.core.seq(inst_16147);
var inst_16149 = inst_16148;
var inst_16150 = null;
var inst_16151 = (0);
var inst_16152 = (0);
var state_16208__$1 = (function (){var statearr_16236 = state_16208;
(statearr_16236[(12)] = inst_16152);

(statearr_16236[(13)] = inst_16151);

(statearr_16236[(14)] = inst_16150);

(statearr_16236[(15)] = inst_16149);

return statearr_16236;
})();
var statearr_16237_16282 = state_16208__$1;
(statearr_16237_16282[(2)] = null);

(statearr_16237_16282[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (14))){
var state_16208__$1 = state_16208;
var statearr_16241_16283 = state_16208__$1;
(statearr_16241_16283[(2)] = null);

(statearr_16241_16283[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (16))){
var inst_16163 = (state_16208[(10)]);
var inst_16167 = cljs.core.chunk_first(inst_16163);
var inst_16168 = cljs.core.chunk_rest(inst_16163);
var inst_16169 = cljs.core.count(inst_16167);
var inst_16149 = inst_16168;
var inst_16150 = inst_16167;
var inst_16151 = inst_16169;
var inst_16152 = (0);
var state_16208__$1 = (function (){var statearr_16242 = state_16208;
(statearr_16242[(12)] = inst_16152);

(statearr_16242[(13)] = inst_16151);

(statearr_16242[(14)] = inst_16150);

(statearr_16242[(15)] = inst_16149);

return statearr_16242;
})();
var statearr_16243_16284 = state_16208__$1;
(statearr_16243_16284[(2)] = null);

(statearr_16243_16284[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (10))){
var inst_16152 = (state_16208[(12)]);
var inst_16151 = (state_16208[(13)]);
var inst_16150 = (state_16208[(14)]);
var inst_16149 = (state_16208[(15)]);
var inst_16157 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16150,inst_16152);
var inst_16158 = cljs.core.async.muxch_STAR_(inst_16157);
var inst_16159 = cljs.core.async.close_BANG_(inst_16158);
var inst_16160 = (inst_16152 + (1));
var tmp16238 = inst_16151;
var tmp16239 = inst_16150;
var tmp16240 = inst_16149;
var inst_16149__$1 = tmp16240;
var inst_16150__$1 = tmp16239;
var inst_16151__$1 = tmp16238;
var inst_16152__$1 = inst_16160;
var state_16208__$1 = (function (){var statearr_16244 = state_16208;
(statearr_16244[(12)] = inst_16152__$1);

(statearr_16244[(13)] = inst_16151__$1);

(statearr_16244[(14)] = inst_16150__$1);

(statearr_16244[(15)] = inst_16149__$1);

(statearr_16244[(17)] = inst_16159);

return statearr_16244;
})();
var statearr_16245_16285 = state_16208__$1;
(statearr_16245_16285[(2)] = null);

(statearr_16245_16285[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (18))){
var inst_16178 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
var statearr_16246_16286 = state_16208__$1;
(statearr_16246_16286[(2)] = inst_16178);

(statearr_16246_16286[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16209 === (8))){
var inst_16152 = (state_16208[(12)]);
var inst_16151 = (state_16208[(13)]);
var inst_16154 = (inst_16152 < inst_16151);
var inst_16155 = inst_16154;
var state_16208__$1 = state_16208;
if(cljs.core.truth_(inst_16155)){
var statearr_16247_16287 = state_16208__$1;
(statearr_16247_16287[(1)] = (10));

} else {
var statearr_16248_16288 = state_16208__$1;
(statearr_16248_16288[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___16260,mults,ensure_mult,p))
;
return ((function (switch__14224__auto__,c__14338__auto___16260,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_16252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16252[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_16252[(1)] = (1));

return statearr_16252;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_16208){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_16208);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e16253){if((e16253 instanceof Object)){
var ex__14228__auto__ = e16253;
var statearr_16254_16289 = state_16208;
(statearr_16254_16289[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16208);

return cljs.core.cst$kw$recur;
} else {
throw e16253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__16290 = state_16208;
state_16208 = G__16290;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_16208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_16208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___16260,mults,ensure_mult,p))
})();
var state__14340__auto__ = (function (){var statearr_16255 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_16255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___16260);

return statearr_16255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___16260,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16291 = [];
var len__7609__auto___16294 = arguments.length;
var i__7610__auto___16295 = (0);
while(true){
if((i__7610__auto___16295 < len__7609__auto___16294)){
args16291.push((arguments[i__7610__auto___16295]));

var G__16296 = (i__7610__auto___16295 + (1));
i__7610__auto___16295 = G__16296;
continue;
} else {
}
break;
}

var G__16293 = args16291.length;
switch (G__16293) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16291.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16298 = [];
var len__7609__auto___16301 = arguments.length;
var i__7610__auto___16302 = (0);
while(true){
if((i__7610__auto___16302 < len__7609__auto___16301)){
args16298.push((arguments[i__7610__auto___16302]));

var G__16303 = (i__7610__auto___16302 + (1));
i__7610__auto___16302 = G__16303;
continue;
} else {
}
break;
}

var G__16300 = args16298.length;
switch (G__16300) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16298.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16305 = [];
var len__7609__auto___16376 = arguments.length;
var i__7610__auto___16377 = (0);
while(true){
if((i__7610__auto___16377 < len__7609__auto___16376)){
args16305.push((arguments[i__7610__auto___16377]));

var G__16378 = (i__7610__auto___16377 + (1));
i__7610__auto___16377 = G__16378;
continue;
} else {
}
break;
}

var G__16307 = args16305.length;
switch (G__16307) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16305.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14338__auto___16380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___16380,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___16380,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16346){
var state_val_16347 = (state_16346[(1)]);
if((state_val_16347 === (7))){
var state_16346__$1 = state_16346;
var statearr_16348_16381 = state_16346__$1;
(statearr_16348_16381[(2)] = null);

(statearr_16348_16381[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (1))){
var state_16346__$1 = state_16346;
var statearr_16349_16382 = state_16346__$1;
(statearr_16349_16382[(2)] = null);

(statearr_16349_16382[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (4))){
var inst_16310 = (state_16346[(7)]);
var inst_16312 = (inst_16310 < cnt);
var state_16346__$1 = state_16346;
if(cljs.core.truth_(inst_16312)){
var statearr_16350_16383 = state_16346__$1;
(statearr_16350_16383[(1)] = (6));

} else {
var statearr_16351_16384 = state_16346__$1;
(statearr_16351_16384[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (15))){
var inst_16342 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
var statearr_16352_16385 = state_16346__$1;
(statearr_16352_16385[(2)] = inst_16342);

(statearr_16352_16385[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (13))){
var inst_16335 = cljs.core.async.close_BANG_(out);
var state_16346__$1 = state_16346;
var statearr_16353_16386 = state_16346__$1;
(statearr_16353_16386[(2)] = inst_16335);

(statearr_16353_16386[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (6))){
var state_16346__$1 = state_16346;
var statearr_16354_16387 = state_16346__$1;
(statearr_16354_16387[(2)] = null);

(statearr_16354_16387[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (3))){
var inst_16344 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16346__$1,inst_16344);
} else {
if((state_val_16347 === (12))){
var inst_16332 = (state_16346[(8)]);
var inst_16332__$1 = (state_16346[(2)]);
var inst_16333 = cljs.core.some(cljs.core.nil_QMARK_,inst_16332__$1);
var state_16346__$1 = (function (){var statearr_16355 = state_16346;
(statearr_16355[(8)] = inst_16332__$1);

return statearr_16355;
})();
if(cljs.core.truth_(inst_16333)){
var statearr_16356_16388 = state_16346__$1;
(statearr_16356_16388[(1)] = (13));

} else {
var statearr_16357_16389 = state_16346__$1;
(statearr_16357_16389[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (2))){
var inst_16309 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16310 = (0);
var state_16346__$1 = (function (){var statearr_16358 = state_16346;
(statearr_16358[(9)] = inst_16309);

(statearr_16358[(7)] = inst_16310);

return statearr_16358;
})();
var statearr_16359_16390 = state_16346__$1;
(statearr_16359_16390[(2)] = null);

(statearr_16359_16390[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (11))){
var inst_16310 = (state_16346[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16346,(10),Object,null,(9));
var inst_16319 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16310) : chs__$1.call(null,inst_16310));
var inst_16320 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16310) : done.call(null,inst_16310));
var inst_16321 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16319,inst_16320);
var state_16346__$1 = state_16346;
var statearr_16360_16391 = state_16346__$1;
(statearr_16360_16391[(2)] = inst_16321);


cljs.core.async.impl.ioc_helpers.process_exception(state_16346__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (9))){
var inst_16310 = (state_16346[(7)]);
var inst_16323 = (state_16346[(2)]);
var inst_16324 = (inst_16310 + (1));
var inst_16310__$1 = inst_16324;
var state_16346__$1 = (function (){var statearr_16361 = state_16346;
(statearr_16361[(7)] = inst_16310__$1);

(statearr_16361[(10)] = inst_16323);

return statearr_16361;
})();
var statearr_16362_16392 = state_16346__$1;
(statearr_16362_16392[(2)] = null);

(statearr_16362_16392[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (5))){
var inst_16330 = (state_16346[(2)]);
var state_16346__$1 = (function (){var statearr_16363 = state_16346;
(statearr_16363[(11)] = inst_16330);

return statearr_16363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16346__$1,(12),dchan);
} else {
if((state_val_16347 === (14))){
var inst_16332 = (state_16346[(8)]);
var inst_16337 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16332);
var state_16346__$1 = state_16346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16346__$1,(16),out,inst_16337);
} else {
if((state_val_16347 === (16))){
var inst_16339 = (state_16346[(2)]);
var state_16346__$1 = (function (){var statearr_16364 = state_16346;
(statearr_16364[(12)] = inst_16339);

return statearr_16364;
})();
var statearr_16365_16393 = state_16346__$1;
(statearr_16365_16393[(2)] = null);

(statearr_16365_16393[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (10))){
var inst_16314 = (state_16346[(2)]);
var inst_16315 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16346__$1 = (function (){var statearr_16366 = state_16346;
(statearr_16366[(13)] = inst_16314);

return statearr_16366;
})();
var statearr_16367_16394 = state_16346__$1;
(statearr_16367_16394[(2)] = inst_16315);


cljs.core.async.impl.ioc_helpers.process_exception(state_16346__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16347 === (8))){
var inst_16328 = (state_16346[(2)]);
var state_16346__$1 = state_16346;
var statearr_16368_16395 = state_16346__$1;
(statearr_16368_16395[(2)] = inst_16328);

(statearr_16368_16395[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___16380,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14224__auto__,c__14338__auto___16380,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_16372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16372[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_16372[(1)] = (1));

return statearr_16372;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_16346){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_16346);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e16373){if((e16373 instanceof Object)){
var ex__14228__auto__ = e16373;
var statearr_16374_16396 = state_16346;
(statearr_16374_16396[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16346);

return cljs.core.cst$kw$recur;
} else {
throw e16373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__16397 = state_16346;
state_16346 = G__16397;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_16346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_16346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___16380,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14340__auto__ = (function (){var statearr_16375 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_16375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___16380);

return statearr_16375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___16380,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16399 = [];
var len__7609__auto___16455 = arguments.length;
var i__7610__auto___16456 = (0);
while(true){
if((i__7610__auto___16456 < len__7609__auto___16455)){
args16399.push((arguments[i__7610__auto___16456]));

var G__16457 = (i__7610__auto___16456 + (1));
i__7610__auto___16456 = G__16457;
continue;
} else {
}
break;
}

var G__16401 = args16399.length;
switch (G__16401) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16399.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14338__auto___16459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___16459,out){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___16459,out){
return (function (state_16431){
var state_val_16432 = (state_16431[(1)]);
if((state_val_16432 === (7))){
var inst_16411 = (state_16431[(7)]);
var inst_16410 = (state_16431[(8)]);
var inst_16410__$1 = (state_16431[(2)]);
var inst_16411__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16410__$1,(0),null);
var inst_16412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16410__$1,(1),null);
var inst_16413 = (inst_16411__$1 == null);
var state_16431__$1 = (function (){var statearr_16433 = state_16431;
(statearr_16433[(9)] = inst_16412);

(statearr_16433[(7)] = inst_16411__$1);

(statearr_16433[(8)] = inst_16410__$1);

return statearr_16433;
})();
if(cljs.core.truth_(inst_16413)){
var statearr_16434_16460 = state_16431__$1;
(statearr_16434_16460[(1)] = (8));

} else {
var statearr_16435_16461 = state_16431__$1;
(statearr_16435_16461[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16432 === (1))){
var inst_16402 = cljs.core.vec(chs);
var inst_16403 = inst_16402;
var state_16431__$1 = (function (){var statearr_16436 = state_16431;
(statearr_16436[(10)] = inst_16403);

return statearr_16436;
})();
var statearr_16437_16462 = state_16431__$1;
(statearr_16437_16462[(2)] = null);

(statearr_16437_16462[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16432 === (4))){
var inst_16403 = (state_16431[(10)]);
var state_16431__$1 = state_16431;
return cljs.core.async.ioc_alts_BANG_(state_16431__$1,(7),inst_16403);
} else {
if((state_val_16432 === (6))){
var inst_16427 = (state_16431[(2)]);
var state_16431__$1 = state_16431;
var statearr_16438_16463 = state_16431__$1;
(statearr_16438_16463[(2)] = inst_16427);

(statearr_16438_16463[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16432 === (3))){
var inst_16429 = (state_16431[(2)]);
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16431__$1,inst_16429);
} else {
if((state_val_16432 === (2))){
var inst_16403 = (state_16431[(10)]);
var inst_16405 = cljs.core.count(inst_16403);
var inst_16406 = (inst_16405 > (0));
var state_16431__$1 = state_16431;
if(cljs.core.truth_(inst_16406)){
var statearr_16440_16464 = state_16431__$1;
(statearr_16440_16464[(1)] = (4));

} else {
var statearr_16441_16465 = state_16431__$1;
(statearr_16441_16465[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16432 === (11))){
var inst_16403 = (state_16431[(10)]);
var inst_16420 = (state_16431[(2)]);
var tmp16439 = inst_16403;
var inst_16403__$1 = tmp16439;
var state_16431__$1 = (function (){var statearr_16442 = state_16431;
(statearr_16442[(10)] = inst_16403__$1);

(statearr_16442[(11)] = inst_16420);

return statearr_16442;
})();
var statearr_16443_16466 = state_16431__$1;
(statearr_16443_16466[(2)] = null);

(statearr_16443_16466[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16432 === (9))){
var inst_16411 = (state_16431[(7)]);
var state_16431__$1 = state_16431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16431__$1,(11),out,inst_16411);
} else {
if((state_val_16432 === (5))){
var inst_16425 = cljs.core.async.close_BANG_(out);
var state_16431__$1 = state_16431;
var statearr_16444_16467 = state_16431__$1;
(statearr_16444_16467[(2)] = inst_16425);

(statearr_16444_16467[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16432 === (10))){
var inst_16423 = (state_16431[(2)]);
var state_16431__$1 = state_16431;
var statearr_16445_16468 = state_16431__$1;
(statearr_16445_16468[(2)] = inst_16423);

(statearr_16445_16468[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16432 === (8))){
var inst_16412 = (state_16431[(9)]);
var inst_16403 = (state_16431[(10)]);
var inst_16411 = (state_16431[(7)]);
var inst_16410 = (state_16431[(8)]);
var inst_16415 = (function (){var cs = inst_16403;
var vec__16408 = inst_16410;
var v = inst_16411;
var c = inst_16412;
return ((function (cs,vec__16408,v,c,inst_16412,inst_16403,inst_16411,inst_16410,state_val_16432,c__14338__auto___16459,out){
return (function (p1__16398_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16398_SHARP_);
});
;})(cs,vec__16408,v,c,inst_16412,inst_16403,inst_16411,inst_16410,state_val_16432,c__14338__auto___16459,out))
})();
var inst_16416 = cljs.core.filterv(inst_16415,inst_16403);
var inst_16403__$1 = inst_16416;
var state_16431__$1 = (function (){var statearr_16446 = state_16431;
(statearr_16446[(10)] = inst_16403__$1);

return statearr_16446;
})();
var statearr_16447_16469 = state_16431__$1;
(statearr_16447_16469[(2)] = null);

(statearr_16447_16469[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___16459,out))
;
return ((function (switch__14224__auto__,c__14338__auto___16459,out){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_16451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16451[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_16451[(1)] = (1));

return statearr_16451;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_16431){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_16431);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e16452){if((e16452 instanceof Object)){
var ex__14228__auto__ = e16452;
var statearr_16453_16470 = state_16431;
(statearr_16453_16470[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16431);

return cljs.core.cst$kw$recur;
} else {
throw e16452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__16471 = state_16431;
state_16431 = G__16471;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_16431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_16431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___16459,out))
})();
var state__14340__auto__ = (function (){var statearr_16454 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_16454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___16459);

return statearr_16454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___16459,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16472 = [];
var len__7609__auto___16521 = arguments.length;
var i__7610__auto___16522 = (0);
while(true){
if((i__7610__auto___16522 < len__7609__auto___16521)){
args16472.push((arguments[i__7610__auto___16522]));

var G__16523 = (i__7610__auto___16522 + (1));
i__7610__auto___16522 = G__16523;
continue;
} else {
}
break;
}

var G__16474 = args16472.length;
switch (G__16474) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16472.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14338__auto___16525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___16525,out){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___16525,out){
return (function (state_16498){
var state_val_16499 = (state_16498[(1)]);
if((state_val_16499 === (7))){
var inst_16480 = (state_16498[(7)]);
var inst_16480__$1 = (state_16498[(2)]);
var inst_16481 = (inst_16480__$1 == null);
var inst_16482 = cljs.core.not(inst_16481);
var state_16498__$1 = (function (){var statearr_16500 = state_16498;
(statearr_16500[(7)] = inst_16480__$1);

return statearr_16500;
})();
if(inst_16482){
var statearr_16501_16526 = state_16498__$1;
(statearr_16501_16526[(1)] = (8));

} else {
var statearr_16502_16527 = state_16498__$1;
(statearr_16502_16527[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16499 === (1))){
var inst_16475 = (0);
var state_16498__$1 = (function (){var statearr_16503 = state_16498;
(statearr_16503[(8)] = inst_16475);

return statearr_16503;
})();
var statearr_16504_16528 = state_16498__$1;
(statearr_16504_16528[(2)] = null);

(statearr_16504_16528[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16499 === (4))){
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16498__$1,(7),ch);
} else {
if((state_val_16499 === (6))){
var inst_16493 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16505_16529 = state_16498__$1;
(statearr_16505_16529[(2)] = inst_16493);

(statearr_16505_16529[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16499 === (3))){
var inst_16495 = (state_16498[(2)]);
var inst_16496 = cljs.core.async.close_BANG_(out);
var state_16498__$1 = (function (){var statearr_16506 = state_16498;
(statearr_16506[(9)] = inst_16495);

return statearr_16506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16498__$1,inst_16496);
} else {
if((state_val_16499 === (2))){
var inst_16475 = (state_16498[(8)]);
var inst_16477 = (inst_16475 < n);
var state_16498__$1 = state_16498;
if(cljs.core.truth_(inst_16477)){
var statearr_16507_16530 = state_16498__$1;
(statearr_16507_16530[(1)] = (4));

} else {
var statearr_16508_16531 = state_16498__$1;
(statearr_16508_16531[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16499 === (11))){
var inst_16475 = (state_16498[(8)]);
var inst_16485 = (state_16498[(2)]);
var inst_16486 = (inst_16475 + (1));
var inst_16475__$1 = inst_16486;
var state_16498__$1 = (function (){var statearr_16509 = state_16498;
(statearr_16509[(10)] = inst_16485);

(statearr_16509[(8)] = inst_16475__$1);

return statearr_16509;
})();
var statearr_16510_16532 = state_16498__$1;
(statearr_16510_16532[(2)] = null);

(statearr_16510_16532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16499 === (9))){
var state_16498__$1 = state_16498;
var statearr_16511_16533 = state_16498__$1;
(statearr_16511_16533[(2)] = null);

(statearr_16511_16533[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16499 === (5))){
var state_16498__$1 = state_16498;
var statearr_16512_16534 = state_16498__$1;
(statearr_16512_16534[(2)] = null);

(statearr_16512_16534[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16499 === (10))){
var inst_16490 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16513_16535 = state_16498__$1;
(statearr_16513_16535[(2)] = inst_16490);

(statearr_16513_16535[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16499 === (8))){
var inst_16480 = (state_16498[(7)]);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16498__$1,(11),out,inst_16480);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___16525,out))
;
return ((function (switch__14224__auto__,c__14338__auto___16525,out){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_16517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16517[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_16517[(1)] = (1));

return statearr_16517;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_16498){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_16498);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e16518){if((e16518 instanceof Object)){
var ex__14228__auto__ = e16518;
var statearr_16519_16536 = state_16498;
(statearr_16519_16536[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16498);

return cljs.core.cst$kw$recur;
} else {
throw e16518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__16537 = state_16498;
state_16498 = G__16537;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_16498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_16498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___16525,out))
})();
var state__14340__auto__ = (function (){var statearr_16520 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_16520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___16525);

return statearr_16520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___16525,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16547 = (function (map_LT_,f,ch,meta16548){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16548 = meta16548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16549,meta16548__$1){
var self__ = this;
var _16549__$1 = this;
return (new cljs.core.async.t_cljs$core$async16547(self__.map_LT_,self__.f,self__.ch,meta16548__$1));
});

cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16549){
var self__ = this;
var _16549__$1 = this;
return self__.meta16548;
});

cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16550 = (function (map_LT_,f,ch,meta16548,_,fn1,meta16551){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16548 = meta16548;
this._ = _;
this.fn1 = fn1;
this.meta16551 = meta16551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16552,meta16551__$1){
var self__ = this;
var _16552__$1 = this;
return (new cljs.core.async.t_cljs$core$async16550(self__.map_LT_,self__.f,self__.ch,self__.meta16548,self__._,self__.fn1,meta16551__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16552){
var self__ = this;
var _16552__$1 = this;
return self__.meta16551;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16550.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16538_SHARP_){
var G__16553 = (((p1__16538_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16538_SHARP_) : self__.f.call(null,p1__16538_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16553) : f1.call(null,G__16553));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16550.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16548,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16547], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16551], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16550";

cljs.core.async.t_cljs$core$async16550.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16550");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16550 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16550(map_LT___$1,f__$1,ch__$1,meta16548__$1,___$2,fn1__$1,meta16551){
return (new cljs.core.async.t_cljs$core$async16550(map_LT___$1,f__$1,ch__$1,meta16548__$1,___$2,fn1__$1,meta16551));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16550(self__.map_LT_,self__.f,self__.ch,self__.meta16548,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6528__auto__ = ret;
if(cljs.core.truth_(and__6528__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6528__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16554 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16554) : self__.f.call(null,G__16554));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16548], null);
});

cljs.core.async.t_cljs$core$async16547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16547";

cljs.core.async.t_cljs$core$async16547.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16547");
});

cljs.core.async.__GT_t_cljs$core$async16547 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16547(map_LT___$1,f__$1,ch__$1,meta16548){
return (new cljs.core.async.t_cljs$core$async16547(map_LT___$1,f__$1,ch__$1,meta16548));
});

}

return (new cljs.core.async.t_cljs$core$async16547(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16558 = (function (map_GT_,f,ch,meta16559){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16559 = meta16559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16560,meta16559__$1){
var self__ = this;
var _16560__$1 = this;
return (new cljs.core.async.t_cljs$core$async16558(self__.map_GT_,self__.f,self__.ch,meta16559__$1));
});

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16560){
var self__ = this;
var _16560__$1 = this;
return self__.meta16559;
});

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16559], null);
});

cljs.core.async.t_cljs$core$async16558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16558";

cljs.core.async.t_cljs$core$async16558.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16558");
});

cljs.core.async.__GT_t_cljs$core$async16558 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16558(map_GT___$1,f__$1,ch__$1,meta16559){
return (new cljs.core.async.t_cljs$core$async16558(map_GT___$1,f__$1,ch__$1,meta16559));
});

}

return (new cljs.core.async.t_cljs$core$async16558(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16564 = (function (filter_GT_,p,ch,meta16565){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16565 = meta16565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16566,meta16565__$1){
var self__ = this;
var _16566__$1 = this;
return (new cljs.core.async.t_cljs$core$async16564(self__.filter_GT_,self__.p,self__.ch,meta16565__$1));
});

cljs.core.async.t_cljs$core$async16564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16566){
var self__ = this;
var _16566__$1 = this;
return self__.meta16565;
});

cljs.core.async.t_cljs$core$async16564.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16564.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16564.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16565], null);
});

cljs.core.async.t_cljs$core$async16564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16564";

cljs.core.async.t_cljs$core$async16564.cljs$lang$ctorPrWriter = (function (this__7146__auto__,writer__7147__auto__,opt__7148__auto__){
return cljs.core._write(writer__7147__auto__,"cljs.core.async/t_cljs$core$async16564");
});

cljs.core.async.__GT_t_cljs$core$async16564 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16564(filter_GT___$1,p__$1,ch__$1,meta16565){
return (new cljs.core.async.t_cljs$core$async16564(filter_GT___$1,p__$1,ch__$1,meta16565));
});

}

return (new cljs.core.async.t_cljs$core$async16564(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16567 = [];
var len__7609__auto___16611 = arguments.length;
var i__7610__auto___16612 = (0);
while(true){
if((i__7610__auto___16612 < len__7609__auto___16611)){
args16567.push((arguments[i__7610__auto___16612]));

var G__16613 = (i__7610__auto___16612 + (1));
i__7610__auto___16612 = G__16613;
continue;
} else {
}
break;
}

var G__16569 = args16567.length;
switch (G__16569) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16567.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14338__auto___16615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___16615,out){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___16615,out){
return (function (state_16590){
var state_val_16591 = (state_16590[(1)]);
if((state_val_16591 === (7))){
var inst_16586 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16592_16616 = state_16590__$1;
(statearr_16592_16616[(2)] = inst_16586);

(statearr_16592_16616[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16591 === (1))){
var state_16590__$1 = state_16590;
var statearr_16593_16617 = state_16590__$1;
(statearr_16593_16617[(2)] = null);

(statearr_16593_16617[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16591 === (4))){
var inst_16572 = (state_16590[(7)]);
var inst_16572__$1 = (state_16590[(2)]);
var inst_16573 = (inst_16572__$1 == null);
var state_16590__$1 = (function (){var statearr_16594 = state_16590;
(statearr_16594[(7)] = inst_16572__$1);

return statearr_16594;
})();
if(cljs.core.truth_(inst_16573)){
var statearr_16595_16618 = state_16590__$1;
(statearr_16595_16618[(1)] = (5));

} else {
var statearr_16596_16619 = state_16590__$1;
(statearr_16596_16619[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16591 === (6))){
var inst_16572 = (state_16590[(7)]);
var inst_16577 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16572) : p.call(null,inst_16572));
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16577)){
var statearr_16597_16620 = state_16590__$1;
(statearr_16597_16620[(1)] = (8));

} else {
var statearr_16598_16621 = state_16590__$1;
(statearr_16598_16621[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16591 === (3))){
var inst_16588 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16590__$1,inst_16588);
} else {
if((state_val_16591 === (2))){
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16590__$1,(4),ch);
} else {
if((state_val_16591 === (11))){
var inst_16580 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16599_16622 = state_16590__$1;
(statearr_16599_16622[(2)] = inst_16580);

(statearr_16599_16622[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16591 === (9))){
var state_16590__$1 = state_16590;
var statearr_16600_16623 = state_16590__$1;
(statearr_16600_16623[(2)] = null);

(statearr_16600_16623[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16591 === (5))){
var inst_16575 = cljs.core.async.close_BANG_(out);
var state_16590__$1 = state_16590;
var statearr_16601_16624 = state_16590__$1;
(statearr_16601_16624[(2)] = inst_16575);

(statearr_16601_16624[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16591 === (10))){
var inst_16583 = (state_16590[(2)]);
var state_16590__$1 = (function (){var statearr_16602 = state_16590;
(statearr_16602[(8)] = inst_16583);

return statearr_16602;
})();
var statearr_16603_16625 = state_16590__$1;
(statearr_16603_16625[(2)] = null);

(statearr_16603_16625[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16591 === (8))){
var inst_16572 = (state_16590[(7)]);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16590__$1,(11),out,inst_16572);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___16615,out))
;
return ((function (switch__14224__auto__,c__14338__auto___16615,out){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_16607 = [null,null,null,null,null,null,null,null,null];
(statearr_16607[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_16607[(1)] = (1));

return statearr_16607;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_16590){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_16590);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e16608){if((e16608 instanceof Object)){
var ex__14228__auto__ = e16608;
var statearr_16609_16626 = state_16590;
(statearr_16609_16626[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16590);

return cljs.core.cst$kw$recur;
} else {
throw e16608;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__16627 = state_16590;
state_16590 = G__16627;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_16590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_16590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___16615,out))
})();
var state__14340__auto__ = (function (){var statearr_16610 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_16610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___16615);

return statearr_16610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___16615,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16628 = [];
var len__7609__auto___16631 = arguments.length;
var i__7610__auto___16632 = (0);
while(true){
if((i__7610__auto___16632 < len__7609__auto___16631)){
args16628.push((arguments[i__7610__auto___16632]));

var G__16633 = (i__7610__auto___16632 + (1));
i__7610__auto___16632 = G__16633;
continue;
} else {
}
break;
}

var G__16630 = args16628.length;
switch (G__16630) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16628.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14338__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto__){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto__){
return (function (state_16800){
var state_val_16801 = (state_16800[(1)]);
if((state_val_16801 === (7))){
var inst_16796 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16802_16843 = state_16800__$1;
(statearr_16802_16843[(2)] = inst_16796);

(statearr_16802_16843[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (20))){
var inst_16766 = (state_16800[(7)]);
var inst_16777 = (state_16800[(2)]);
var inst_16778 = cljs.core.next(inst_16766);
var inst_16752 = inst_16778;
var inst_16753 = null;
var inst_16754 = (0);
var inst_16755 = (0);
var state_16800__$1 = (function (){var statearr_16803 = state_16800;
(statearr_16803[(8)] = inst_16777);

(statearr_16803[(9)] = inst_16754);

(statearr_16803[(10)] = inst_16753);

(statearr_16803[(11)] = inst_16755);

(statearr_16803[(12)] = inst_16752);

return statearr_16803;
})();
var statearr_16804_16844 = state_16800__$1;
(statearr_16804_16844[(2)] = null);

(statearr_16804_16844[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (1))){
var state_16800__$1 = state_16800;
var statearr_16805_16845 = state_16800__$1;
(statearr_16805_16845[(2)] = null);

(statearr_16805_16845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (4))){
var inst_16741 = (state_16800[(13)]);
var inst_16741__$1 = (state_16800[(2)]);
var inst_16742 = (inst_16741__$1 == null);
var state_16800__$1 = (function (){var statearr_16806 = state_16800;
(statearr_16806[(13)] = inst_16741__$1);

return statearr_16806;
})();
if(cljs.core.truth_(inst_16742)){
var statearr_16807_16846 = state_16800__$1;
(statearr_16807_16846[(1)] = (5));

} else {
var statearr_16808_16847 = state_16800__$1;
(statearr_16808_16847[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (15))){
var state_16800__$1 = state_16800;
var statearr_16812_16848 = state_16800__$1;
(statearr_16812_16848[(2)] = null);

(statearr_16812_16848[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (21))){
var state_16800__$1 = state_16800;
var statearr_16813_16849 = state_16800__$1;
(statearr_16813_16849[(2)] = null);

(statearr_16813_16849[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (13))){
var inst_16754 = (state_16800[(9)]);
var inst_16753 = (state_16800[(10)]);
var inst_16755 = (state_16800[(11)]);
var inst_16752 = (state_16800[(12)]);
var inst_16762 = (state_16800[(2)]);
var inst_16763 = (inst_16755 + (1));
var tmp16809 = inst_16754;
var tmp16810 = inst_16753;
var tmp16811 = inst_16752;
var inst_16752__$1 = tmp16811;
var inst_16753__$1 = tmp16810;
var inst_16754__$1 = tmp16809;
var inst_16755__$1 = inst_16763;
var state_16800__$1 = (function (){var statearr_16814 = state_16800;
(statearr_16814[(14)] = inst_16762);

(statearr_16814[(9)] = inst_16754__$1);

(statearr_16814[(10)] = inst_16753__$1);

(statearr_16814[(11)] = inst_16755__$1);

(statearr_16814[(12)] = inst_16752__$1);

return statearr_16814;
})();
var statearr_16815_16850 = state_16800__$1;
(statearr_16815_16850[(2)] = null);

(statearr_16815_16850[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (22))){
var state_16800__$1 = state_16800;
var statearr_16816_16851 = state_16800__$1;
(statearr_16816_16851[(2)] = null);

(statearr_16816_16851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (6))){
var inst_16741 = (state_16800[(13)]);
var inst_16750 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16741) : f.call(null,inst_16741));
var inst_16751 = cljs.core.seq(inst_16750);
var inst_16752 = inst_16751;
var inst_16753 = null;
var inst_16754 = (0);
var inst_16755 = (0);
var state_16800__$1 = (function (){var statearr_16817 = state_16800;
(statearr_16817[(9)] = inst_16754);

(statearr_16817[(10)] = inst_16753);

(statearr_16817[(11)] = inst_16755);

(statearr_16817[(12)] = inst_16752);

return statearr_16817;
})();
var statearr_16818_16852 = state_16800__$1;
(statearr_16818_16852[(2)] = null);

(statearr_16818_16852[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (17))){
var inst_16766 = (state_16800[(7)]);
var inst_16770 = cljs.core.chunk_first(inst_16766);
var inst_16771 = cljs.core.chunk_rest(inst_16766);
var inst_16772 = cljs.core.count(inst_16770);
var inst_16752 = inst_16771;
var inst_16753 = inst_16770;
var inst_16754 = inst_16772;
var inst_16755 = (0);
var state_16800__$1 = (function (){var statearr_16819 = state_16800;
(statearr_16819[(9)] = inst_16754);

(statearr_16819[(10)] = inst_16753);

(statearr_16819[(11)] = inst_16755);

(statearr_16819[(12)] = inst_16752);

return statearr_16819;
})();
var statearr_16820_16853 = state_16800__$1;
(statearr_16820_16853[(2)] = null);

(statearr_16820_16853[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (3))){
var inst_16798 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16800__$1,inst_16798);
} else {
if((state_val_16801 === (12))){
var inst_16786 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16821_16854 = state_16800__$1;
(statearr_16821_16854[(2)] = inst_16786);

(statearr_16821_16854[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (2))){
var state_16800__$1 = state_16800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16800__$1,(4),in$);
} else {
if((state_val_16801 === (23))){
var inst_16794 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16822_16855 = state_16800__$1;
(statearr_16822_16855[(2)] = inst_16794);

(statearr_16822_16855[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (19))){
var inst_16781 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16823_16856 = state_16800__$1;
(statearr_16823_16856[(2)] = inst_16781);

(statearr_16823_16856[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (11))){
var inst_16766 = (state_16800[(7)]);
var inst_16752 = (state_16800[(12)]);
var inst_16766__$1 = cljs.core.seq(inst_16752);
var state_16800__$1 = (function (){var statearr_16824 = state_16800;
(statearr_16824[(7)] = inst_16766__$1);

return statearr_16824;
})();
if(inst_16766__$1){
var statearr_16825_16857 = state_16800__$1;
(statearr_16825_16857[(1)] = (14));

} else {
var statearr_16826_16858 = state_16800__$1;
(statearr_16826_16858[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (9))){
var inst_16788 = (state_16800[(2)]);
var inst_16789 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16800__$1 = (function (){var statearr_16827 = state_16800;
(statearr_16827[(15)] = inst_16788);

return statearr_16827;
})();
if(cljs.core.truth_(inst_16789)){
var statearr_16828_16859 = state_16800__$1;
(statearr_16828_16859[(1)] = (21));

} else {
var statearr_16829_16860 = state_16800__$1;
(statearr_16829_16860[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (5))){
var inst_16744 = cljs.core.async.close_BANG_(out);
var state_16800__$1 = state_16800;
var statearr_16830_16861 = state_16800__$1;
(statearr_16830_16861[(2)] = inst_16744);

(statearr_16830_16861[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (14))){
var inst_16766 = (state_16800[(7)]);
var inst_16768 = cljs.core.chunked_seq_QMARK_(inst_16766);
var state_16800__$1 = state_16800;
if(inst_16768){
var statearr_16831_16862 = state_16800__$1;
(statearr_16831_16862[(1)] = (17));

} else {
var statearr_16832_16863 = state_16800__$1;
(statearr_16832_16863[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (16))){
var inst_16784 = (state_16800[(2)]);
var state_16800__$1 = state_16800;
var statearr_16833_16864 = state_16800__$1;
(statearr_16833_16864[(2)] = inst_16784);

(statearr_16833_16864[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16801 === (10))){
var inst_16753 = (state_16800[(10)]);
var inst_16755 = (state_16800[(11)]);
var inst_16760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16753,inst_16755);
var state_16800__$1 = state_16800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16800__$1,(13),out,inst_16760);
} else {
if((state_val_16801 === (18))){
var inst_16766 = (state_16800[(7)]);
var inst_16775 = cljs.core.first(inst_16766);
var state_16800__$1 = state_16800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16800__$1,(20),out,inst_16775);
} else {
if((state_val_16801 === (8))){
var inst_16754 = (state_16800[(9)]);
var inst_16755 = (state_16800[(11)]);
var inst_16757 = (inst_16755 < inst_16754);
var inst_16758 = inst_16757;
var state_16800__$1 = state_16800;
if(cljs.core.truth_(inst_16758)){
var statearr_16834_16865 = state_16800__$1;
(statearr_16834_16865[(1)] = (10));

} else {
var statearr_16835_16866 = state_16800__$1;
(statearr_16835_16866[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto__))
;
return ((function (switch__14224__auto__,c__14338__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14225__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14225__auto____0 = (function (){
var statearr_16839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16839[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14225__auto__);

(statearr_16839[(1)] = (1));

return statearr_16839;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14225__auto____1 = (function (state_16800){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_16800);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e16840){if((e16840 instanceof Object)){
var ex__14228__auto__ = e16840;
var statearr_16841_16867 = state_16800;
(statearr_16841_16867[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16800);

return cljs.core.cst$kw$recur;
} else {
throw e16840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__16868 = state_16800;
state_16800 = G__16868;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14225__auto__ = function(state_16800){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14225__auto____1.call(this,state_16800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14225__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14225__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto__))
})();
var state__14340__auto__ = (function (){var statearr_16842 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_16842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto__);

return statearr_16842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto__))
);

return c__14338__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16869 = [];
var len__7609__auto___16872 = arguments.length;
var i__7610__auto___16873 = (0);
while(true){
if((i__7610__auto___16873 < len__7609__auto___16872)){
args16869.push((arguments[i__7610__auto___16873]));

var G__16874 = (i__7610__auto___16873 + (1));
i__7610__auto___16873 = G__16874;
continue;
} else {
}
break;
}

var G__16871 = args16869.length;
switch (G__16871) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16869.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16876 = [];
var len__7609__auto___16879 = arguments.length;
var i__7610__auto___16880 = (0);
while(true){
if((i__7610__auto___16880 < len__7609__auto___16879)){
args16876.push((arguments[i__7610__auto___16880]));

var G__16881 = (i__7610__auto___16880 + (1));
i__7610__auto___16880 = G__16881;
continue;
} else {
}
break;
}

var G__16878 = args16876.length;
switch (G__16878) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16876.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16883 = [];
var len__7609__auto___16934 = arguments.length;
var i__7610__auto___16935 = (0);
while(true){
if((i__7610__auto___16935 < len__7609__auto___16934)){
args16883.push((arguments[i__7610__auto___16935]));

var G__16936 = (i__7610__auto___16935 + (1));
i__7610__auto___16935 = G__16936;
continue;
} else {
}
break;
}

var G__16885 = args16883.length;
switch (G__16885) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16883.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14338__auto___16938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___16938,out){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___16938,out){
return (function (state_16909){
var state_val_16910 = (state_16909[(1)]);
if((state_val_16910 === (7))){
var inst_16904 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
var statearr_16911_16939 = state_16909__$1;
(statearr_16911_16939[(2)] = inst_16904);

(statearr_16911_16939[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (1))){
var inst_16886 = null;
var state_16909__$1 = (function (){var statearr_16912 = state_16909;
(statearr_16912[(7)] = inst_16886);

return statearr_16912;
})();
var statearr_16913_16940 = state_16909__$1;
(statearr_16913_16940[(2)] = null);

(statearr_16913_16940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (4))){
var inst_16889 = (state_16909[(8)]);
var inst_16889__$1 = (state_16909[(2)]);
var inst_16890 = (inst_16889__$1 == null);
var inst_16891 = cljs.core.not(inst_16890);
var state_16909__$1 = (function (){var statearr_16914 = state_16909;
(statearr_16914[(8)] = inst_16889__$1);

return statearr_16914;
})();
if(inst_16891){
var statearr_16915_16941 = state_16909__$1;
(statearr_16915_16941[(1)] = (5));

} else {
var statearr_16916_16942 = state_16909__$1;
(statearr_16916_16942[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (6))){
var state_16909__$1 = state_16909;
var statearr_16917_16943 = state_16909__$1;
(statearr_16917_16943[(2)] = null);

(statearr_16917_16943[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (3))){
var inst_16906 = (state_16909[(2)]);
var inst_16907 = cljs.core.async.close_BANG_(out);
var state_16909__$1 = (function (){var statearr_16918 = state_16909;
(statearr_16918[(9)] = inst_16906);

return statearr_16918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16909__$1,inst_16907);
} else {
if((state_val_16910 === (2))){
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16909__$1,(4),ch);
} else {
if((state_val_16910 === (11))){
var inst_16889 = (state_16909[(8)]);
var inst_16898 = (state_16909[(2)]);
var inst_16886 = inst_16889;
var state_16909__$1 = (function (){var statearr_16919 = state_16909;
(statearr_16919[(10)] = inst_16898);

(statearr_16919[(7)] = inst_16886);

return statearr_16919;
})();
var statearr_16920_16944 = state_16909__$1;
(statearr_16920_16944[(2)] = null);

(statearr_16920_16944[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (9))){
var inst_16889 = (state_16909[(8)]);
var state_16909__$1 = state_16909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16909__$1,(11),out,inst_16889);
} else {
if((state_val_16910 === (5))){
var inst_16889 = (state_16909[(8)]);
var inst_16886 = (state_16909[(7)]);
var inst_16893 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16889,inst_16886);
var state_16909__$1 = state_16909;
if(inst_16893){
var statearr_16922_16945 = state_16909__$1;
(statearr_16922_16945[(1)] = (8));

} else {
var statearr_16923_16946 = state_16909__$1;
(statearr_16923_16946[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (10))){
var inst_16901 = (state_16909[(2)]);
var state_16909__$1 = state_16909;
var statearr_16924_16947 = state_16909__$1;
(statearr_16924_16947[(2)] = inst_16901);

(statearr_16924_16947[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16910 === (8))){
var inst_16886 = (state_16909[(7)]);
var tmp16921 = inst_16886;
var inst_16886__$1 = tmp16921;
var state_16909__$1 = (function (){var statearr_16925 = state_16909;
(statearr_16925[(7)] = inst_16886__$1);

return statearr_16925;
})();
var statearr_16926_16948 = state_16909__$1;
(statearr_16926_16948[(2)] = null);

(statearr_16926_16948[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___16938,out))
;
return ((function (switch__14224__auto__,c__14338__auto___16938,out){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_16930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16930[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_16930[(1)] = (1));

return statearr_16930;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_16909){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_16909);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e16931){if((e16931 instanceof Object)){
var ex__14228__auto__ = e16931;
var statearr_16932_16949 = state_16909;
(statearr_16932_16949[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16909);

return cljs.core.cst$kw$recur;
} else {
throw e16931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__16950 = state_16909;
state_16909 = G__16950;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_16909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_16909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___16938,out))
})();
var state__14340__auto__ = (function (){var statearr_16933 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_16933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___16938);

return statearr_16933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___16938,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16951 = [];
var len__7609__auto___17021 = arguments.length;
var i__7610__auto___17022 = (0);
while(true){
if((i__7610__auto___17022 < len__7609__auto___17021)){
args16951.push((arguments[i__7610__auto___17022]));

var G__17023 = (i__7610__auto___17022 + (1));
i__7610__auto___17022 = G__17023;
continue;
} else {
}
break;
}

var G__16953 = args16951.length;
switch (G__16953) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16951.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14338__auto___17025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___17025,out){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___17025,out){
return (function (state_16991){
var state_val_16992 = (state_16991[(1)]);
if((state_val_16992 === (7))){
var inst_16987 = (state_16991[(2)]);
var state_16991__$1 = state_16991;
var statearr_16993_17026 = state_16991__$1;
(statearr_16993_17026[(2)] = inst_16987);

(statearr_16993_17026[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (1))){
var inst_16954 = (new Array(n));
var inst_16955 = inst_16954;
var inst_16956 = (0);
var state_16991__$1 = (function (){var statearr_16994 = state_16991;
(statearr_16994[(7)] = inst_16955);

(statearr_16994[(8)] = inst_16956);

return statearr_16994;
})();
var statearr_16995_17027 = state_16991__$1;
(statearr_16995_17027[(2)] = null);

(statearr_16995_17027[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (4))){
var inst_16959 = (state_16991[(9)]);
var inst_16959__$1 = (state_16991[(2)]);
var inst_16960 = (inst_16959__$1 == null);
var inst_16961 = cljs.core.not(inst_16960);
var state_16991__$1 = (function (){var statearr_16996 = state_16991;
(statearr_16996[(9)] = inst_16959__$1);

return statearr_16996;
})();
if(inst_16961){
var statearr_16997_17028 = state_16991__$1;
(statearr_16997_17028[(1)] = (5));

} else {
var statearr_16998_17029 = state_16991__$1;
(statearr_16998_17029[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (15))){
var inst_16981 = (state_16991[(2)]);
var state_16991__$1 = state_16991;
var statearr_16999_17030 = state_16991__$1;
(statearr_16999_17030[(2)] = inst_16981);

(statearr_16999_17030[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (13))){
var state_16991__$1 = state_16991;
var statearr_17000_17031 = state_16991__$1;
(statearr_17000_17031[(2)] = null);

(statearr_17000_17031[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (6))){
var inst_16956 = (state_16991[(8)]);
var inst_16977 = (inst_16956 > (0));
var state_16991__$1 = state_16991;
if(cljs.core.truth_(inst_16977)){
var statearr_17001_17032 = state_16991__$1;
(statearr_17001_17032[(1)] = (12));

} else {
var statearr_17002_17033 = state_16991__$1;
(statearr_17002_17033[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (3))){
var inst_16989 = (state_16991[(2)]);
var state_16991__$1 = state_16991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16991__$1,inst_16989);
} else {
if((state_val_16992 === (12))){
var inst_16955 = (state_16991[(7)]);
var inst_16979 = cljs.core.vec(inst_16955);
var state_16991__$1 = state_16991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16991__$1,(15),out,inst_16979);
} else {
if((state_val_16992 === (2))){
var state_16991__$1 = state_16991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16991__$1,(4),ch);
} else {
if((state_val_16992 === (11))){
var inst_16971 = (state_16991[(2)]);
var inst_16972 = (new Array(n));
var inst_16955 = inst_16972;
var inst_16956 = (0);
var state_16991__$1 = (function (){var statearr_17003 = state_16991;
(statearr_17003[(7)] = inst_16955);

(statearr_17003[(10)] = inst_16971);

(statearr_17003[(8)] = inst_16956);

return statearr_17003;
})();
var statearr_17004_17034 = state_16991__$1;
(statearr_17004_17034[(2)] = null);

(statearr_17004_17034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (9))){
var inst_16955 = (state_16991[(7)]);
var inst_16969 = cljs.core.vec(inst_16955);
var state_16991__$1 = state_16991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16991__$1,(11),out,inst_16969);
} else {
if((state_val_16992 === (5))){
var inst_16955 = (state_16991[(7)]);
var inst_16964 = (state_16991[(11)]);
var inst_16959 = (state_16991[(9)]);
var inst_16956 = (state_16991[(8)]);
var inst_16963 = (inst_16955[inst_16956] = inst_16959);
var inst_16964__$1 = (inst_16956 + (1));
var inst_16965 = (inst_16964__$1 < n);
var state_16991__$1 = (function (){var statearr_17005 = state_16991;
(statearr_17005[(12)] = inst_16963);

(statearr_17005[(11)] = inst_16964__$1);

return statearr_17005;
})();
if(cljs.core.truth_(inst_16965)){
var statearr_17006_17035 = state_16991__$1;
(statearr_17006_17035[(1)] = (8));

} else {
var statearr_17007_17036 = state_16991__$1;
(statearr_17007_17036[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (14))){
var inst_16984 = (state_16991[(2)]);
var inst_16985 = cljs.core.async.close_BANG_(out);
var state_16991__$1 = (function (){var statearr_17009 = state_16991;
(statearr_17009[(13)] = inst_16984);

return statearr_17009;
})();
var statearr_17010_17037 = state_16991__$1;
(statearr_17010_17037[(2)] = inst_16985);

(statearr_17010_17037[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (10))){
var inst_16975 = (state_16991[(2)]);
var state_16991__$1 = state_16991;
var statearr_17011_17038 = state_16991__$1;
(statearr_17011_17038[(2)] = inst_16975);

(statearr_17011_17038[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16992 === (8))){
var inst_16955 = (state_16991[(7)]);
var inst_16964 = (state_16991[(11)]);
var tmp17008 = inst_16955;
var inst_16955__$1 = tmp17008;
var inst_16956 = inst_16964;
var state_16991__$1 = (function (){var statearr_17012 = state_16991;
(statearr_17012[(7)] = inst_16955__$1);

(statearr_17012[(8)] = inst_16956);

return statearr_17012;
})();
var statearr_17013_17039 = state_16991__$1;
(statearr_17013_17039[(2)] = null);

(statearr_17013_17039[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___17025,out))
;
return ((function (switch__14224__auto__,c__14338__auto___17025,out){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_17017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17017[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_17017[(1)] = (1));

return statearr_17017;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_16991){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_16991);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e17018){if((e17018 instanceof Object)){
var ex__14228__auto__ = e17018;
var statearr_17019_17040 = state_16991;
(statearr_17019_17040[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16991);

return cljs.core.cst$kw$recur;
} else {
throw e17018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__17041 = state_16991;
state_16991 = G__17041;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_16991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_16991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___17025,out))
})();
var state__14340__auto__ = (function (){var statearr_17020 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_17020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___17025);

return statearr_17020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___17025,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args17042 = [];
var len__7609__auto___17116 = arguments.length;
var i__7610__auto___17117 = (0);
while(true){
if((i__7610__auto___17117 < len__7609__auto___17116)){
args17042.push((arguments[i__7610__auto___17117]));

var G__17118 = (i__7610__auto___17117 + (1));
i__7610__auto___17117 = G__17118;
continue;
} else {
}
break;
}

var G__17044 = args17042.length;
switch (G__17044) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17042.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14338__auto___17120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14338__auto___17120,out){
return (function (){
var f__14339__auto__ = (function (){var switch__14224__auto__ = ((function (c__14338__auto___17120,out){
return (function (state_17086){
var state_val_17087 = (state_17086[(1)]);
if((state_val_17087 === (7))){
var inst_17082 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17088_17121 = state_17086__$1;
(statearr_17088_17121[(2)] = inst_17082);

(statearr_17088_17121[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (1))){
var inst_17045 = [];
var inst_17046 = inst_17045;
var inst_17047 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17086__$1 = (function (){var statearr_17089 = state_17086;
(statearr_17089[(7)] = inst_17046);

(statearr_17089[(8)] = inst_17047);

return statearr_17089;
})();
var statearr_17090_17122 = state_17086__$1;
(statearr_17090_17122[(2)] = null);

(statearr_17090_17122[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (4))){
var inst_17050 = (state_17086[(9)]);
var inst_17050__$1 = (state_17086[(2)]);
var inst_17051 = (inst_17050__$1 == null);
var inst_17052 = cljs.core.not(inst_17051);
var state_17086__$1 = (function (){var statearr_17091 = state_17086;
(statearr_17091[(9)] = inst_17050__$1);

return statearr_17091;
})();
if(inst_17052){
var statearr_17092_17123 = state_17086__$1;
(statearr_17092_17123[(1)] = (5));

} else {
var statearr_17093_17124 = state_17086__$1;
(statearr_17093_17124[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (15))){
var inst_17076 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17094_17125 = state_17086__$1;
(statearr_17094_17125[(2)] = inst_17076);

(statearr_17094_17125[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (13))){
var state_17086__$1 = state_17086;
var statearr_17095_17126 = state_17086__$1;
(statearr_17095_17126[(2)] = null);

(statearr_17095_17126[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (6))){
var inst_17046 = (state_17086[(7)]);
var inst_17071 = inst_17046.length;
var inst_17072 = (inst_17071 > (0));
var state_17086__$1 = state_17086;
if(cljs.core.truth_(inst_17072)){
var statearr_17096_17127 = state_17086__$1;
(statearr_17096_17127[(1)] = (12));

} else {
var statearr_17097_17128 = state_17086__$1;
(statearr_17097_17128[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (3))){
var inst_17084 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17086__$1,inst_17084);
} else {
if((state_val_17087 === (12))){
var inst_17046 = (state_17086[(7)]);
var inst_17074 = cljs.core.vec(inst_17046);
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17086__$1,(15),out,inst_17074);
} else {
if((state_val_17087 === (2))){
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17086__$1,(4),ch);
} else {
if((state_val_17087 === (11))){
var inst_17054 = (state_17086[(10)]);
var inst_17050 = (state_17086[(9)]);
var inst_17064 = (state_17086[(2)]);
var inst_17065 = [];
var inst_17066 = inst_17065.push(inst_17050);
var inst_17046 = inst_17065;
var inst_17047 = inst_17054;
var state_17086__$1 = (function (){var statearr_17098 = state_17086;
(statearr_17098[(11)] = inst_17064);

(statearr_17098[(12)] = inst_17066);

(statearr_17098[(7)] = inst_17046);

(statearr_17098[(8)] = inst_17047);

return statearr_17098;
})();
var statearr_17099_17129 = state_17086__$1;
(statearr_17099_17129[(2)] = null);

(statearr_17099_17129[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (9))){
var inst_17046 = (state_17086[(7)]);
var inst_17062 = cljs.core.vec(inst_17046);
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17086__$1,(11),out,inst_17062);
} else {
if((state_val_17087 === (5))){
var inst_17054 = (state_17086[(10)]);
var inst_17047 = (state_17086[(8)]);
var inst_17050 = (state_17086[(9)]);
var inst_17054__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17050) : f.call(null,inst_17050));
var inst_17055 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17054__$1,inst_17047);
var inst_17056 = cljs.core.keyword_identical_QMARK_(inst_17047,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17057 = (inst_17055) || (inst_17056);
var state_17086__$1 = (function (){var statearr_17100 = state_17086;
(statearr_17100[(10)] = inst_17054__$1);

return statearr_17100;
})();
if(cljs.core.truth_(inst_17057)){
var statearr_17101_17130 = state_17086__$1;
(statearr_17101_17130[(1)] = (8));

} else {
var statearr_17102_17131 = state_17086__$1;
(statearr_17102_17131[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (14))){
var inst_17079 = (state_17086[(2)]);
var inst_17080 = cljs.core.async.close_BANG_(out);
var state_17086__$1 = (function (){var statearr_17104 = state_17086;
(statearr_17104[(13)] = inst_17079);

return statearr_17104;
})();
var statearr_17105_17132 = state_17086__$1;
(statearr_17105_17132[(2)] = inst_17080);

(statearr_17105_17132[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (10))){
var inst_17069 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17106_17133 = state_17086__$1;
(statearr_17106_17133[(2)] = inst_17069);

(statearr_17106_17133[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17087 === (8))){
var inst_17054 = (state_17086[(10)]);
var inst_17046 = (state_17086[(7)]);
var inst_17050 = (state_17086[(9)]);
var inst_17059 = inst_17046.push(inst_17050);
var tmp17103 = inst_17046;
var inst_17046__$1 = tmp17103;
var inst_17047 = inst_17054;
var state_17086__$1 = (function (){var statearr_17107 = state_17086;
(statearr_17107[(7)] = inst_17046__$1);

(statearr_17107[(8)] = inst_17047);

(statearr_17107[(14)] = inst_17059);

return statearr_17107;
})();
var statearr_17108_17134 = state_17086__$1;
(statearr_17108_17134[(2)] = null);

(statearr_17108_17134[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14338__auto___17120,out))
;
return ((function (switch__14224__auto__,c__14338__auto___17120,out){
return (function() {
var cljs$core$async$state_machine__14225__auto__ = null;
var cljs$core$async$state_machine__14225__auto____0 = (function (){
var statearr_17112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17112[(0)] = cljs$core$async$state_machine__14225__auto__);

(statearr_17112[(1)] = (1));

return statearr_17112;
});
var cljs$core$async$state_machine__14225__auto____1 = (function (state_17086){
while(true){
var ret_value__14226__auto__ = (function (){try{while(true){
var result__14227__auto__ = switch__14224__auto__(state_17086);
if(cljs.core.keyword_identical_QMARK_(result__14227__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__14227__auto__;
}
break;
}
}catch (e17113){if((e17113 instanceof Object)){
var ex__14228__auto__ = e17113;
var statearr_17114_17135 = state_17086;
(statearr_17114_17135[(5)] = ex__14228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17086);

return cljs.core.cst$kw$recur;
} else {
throw e17113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14226__auto__,cljs.core.cst$kw$recur)){
var G__17136 = state_17086;
state_17086 = G__17136;
continue;
} else {
return ret_value__14226__auto__;
}
break;
}
});
cljs$core$async$state_machine__14225__auto__ = function(state_17086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14225__auto____1.call(this,state_17086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14225__auto____0;
cljs$core$async$state_machine__14225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14225__auto____1;
return cljs$core$async$state_machine__14225__auto__;
})()
;})(switch__14224__auto__,c__14338__auto___17120,out))
})();
var state__14340__auto__ = (function (){var statearr_17115 = (f__14339__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14339__auto__.cljs$core$IFn$_invoke$arity$0() : f__14339__auto__.call(null));
(statearr_17115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14338__auto___17120);

return statearr_17115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14340__auto__);
});})(c__14338__auto___17120,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
