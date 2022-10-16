goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30312 = arguments.length;
switch (G__30312) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30334 = (function (f,blockable,meta30335){
this.f = f;
this.blockable = blockable;
this.meta30335 = meta30335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30336,meta30335__$1){
var self__ = this;
var _30336__$1 = this;
return (new cljs.core.async.t_cljs$core$async30334(self__.f,self__.blockable,meta30335__$1));
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30336){
var self__ = this;
var _30336__$1 = this;
return self__.meta30335;
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30335","meta30335",-1009123233,null)], null);
}));

(cljs.core.async.t_cljs$core$async30334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30334");

(cljs.core.async.t_cljs$core$async30334.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30334.
 */
cljs.core.async.__GT_t_cljs$core$async30334 = (function cljs$core$async$__GT_t_cljs$core$async30334(f__$1,blockable__$1,meta30335){
return (new cljs.core.async.t_cljs$core$async30334(f__$1,blockable__$1,meta30335));
});

}

return (new cljs.core.async.t_cljs$core$async30334(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__30343 = arguments.length;
switch (G__30343) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30353 = arguments.length;
switch (G__30353) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__30358 = arguments.length;
switch (G__30358) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32413 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32413) : fn1.call(null,val_32413));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32413) : fn1.call(null,val_32413));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30364 = arguments.length;
switch (G__30364) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32415 = n;
var x_32416 = (0);
while(true){
if((x_32416 < n__4666__auto___32415)){
(a[x_32416] = x_32416);

var G__32417 = (x_32416 + (1));
x_32416 = G__32417;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30418 = (function (flag,meta30419){
this.flag = flag;
this.meta30419 = meta30419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30420,meta30419__$1){
var self__ = this;
var _30420__$1 = this;
return (new cljs.core.async.t_cljs$core$async30418(self__.flag,meta30419__$1));
}));

(cljs.core.async.t_cljs$core$async30418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30420){
var self__ = this;
var _30420__$1 = this;
return self__.meta30419;
}));

(cljs.core.async.t_cljs$core$async30418.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30419","meta30419",1638755333,null)], null);
}));

(cljs.core.async.t_cljs$core$async30418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30418");

(cljs.core.async.t_cljs$core$async30418.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30418.
 */
cljs.core.async.__GT_t_cljs$core$async30418 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30418(flag__$1,meta30419){
return (new cljs.core.async.t_cljs$core$async30418(flag__$1,meta30419));
});

}

return (new cljs.core.async.t_cljs$core$async30418(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30437 = (function (flag,cb,meta30438){
this.flag = flag;
this.cb = cb;
this.meta30438 = meta30438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30439,meta30438__$1){
var self__ = this;
var _30439__$1 = this;
return (new cljs.core.async.t_cljs$core$async30437(self__.flag,self__.cb,meta30438__$1));
}));

(cljs.core.async.t_cljs$core$async30437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30439){
var self__ = this;
var _30439__$1 = this;
return self__.meta30438;
}));

(cljs.core.async.t_cljs$core$async30437.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30438","meta30438",-1430827399,null)], null);
}));

(cljs.core.async.t_cljs$core$async30437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30437");

(cljs.core.async.t_cljs$core$async30437.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30437.
 */
cljs.core.async.__GT_t_cljs$core$async30437 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30437(flag__$1,cb__$1,meta30438){
return (new cljs.core.async.t_cljs$core$async30437(flag__$1,cb__$1,meta30438));
});

}

return (new cljs.core.async.t_cljs$core$async30437(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30462_SHARP_){
var G__30476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30462_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30476) : fret.call(null,G__30476));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30463_SHARP_){
var G__30478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30463_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30478) : fret.call(null,G__30478));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32424 = (i + (1));
i = G__32424;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4795__auto__ = [];
var len__4789__auto___32426 = arguments.length;
var i__4790__auto___32427 = (0);
while(true){
if((i__4790__auto___32427 < len__4789__auto___32426)){
args__4795__auto__.push((arguments[i__4790__auto___32427]));

var G__32428 = (i__4790__auto___32427 + (1));
i__4790__auto___32427 = G__32428;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30493){
var map__30494 = p__30493;
var map__30494__$1 = (((((!((map__30494 == null))))?(((((map__30494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30494):map__30494);
var opts = map__30494__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30485){
var G__30486 = cljs.core.first(seq30485);
var seq30485__$1 = cljs.core.next(seq30485);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30486,seq30485__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
return cljs.core.deref(ret);
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
var G__30509 = arguments.length;
switch (G__30509) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30223__auto___32433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_30563){
var state_val_30564 = (state_30563[(1)]);
if((state_val_30564 === (7))){
var inst_30555 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
var statearr_30575_32434 = state_30563__$1;
(statearr_30575_32434[(2)] = inst_30555);

(statearr_30575_32434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (1))){
var state_30563__$1 = state_30563;
var statearr_30576_32435 = state_30563__$1;
(statearr_30576_32435[(2)] = null);

(statearr_30576_32435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (4))){
var inst_30535 = (state_30563[(7)]);
var inst_30535__$1 = (state_30563[(2)]);
var inst_30537 = (inst_30535__$1 == null);
var state_30563__$1 = (function (){var statearr_30577 = state_30563;
(statearr_30577[(7)] = inst_30535__$1);

return statearr_30577;
})();
if(cljs.core.truth_(inst_30537)){
var statearr_30578_32436 = state_30563__$1;
(statearr_30578_32436[(1)] = (5));

} else {
var statearr_30579_32437 = state_30563__$1;
(statearr_30579_32437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (13))){
var state_30563__$1 = state_30563;
var statearr_30581_32438 = state_30563__$1;
(statearr_30581_32438[(2)] = null);

(statearr_30581_32438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (6))){
var inst_30535 = (state_30563[(7)]);
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30563__$1,(11),to,inst_30535);
} else {
if((state_val_30564 === (3))){
var inst_30558 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30563__$1,inst_30558);
} else {
if((state_val_30564 === (12))){
var state_30563__$1 = state_30563;
var statearr_30582_32439 = state_30563__$1;
(statearr_30582_32439[(2)] = null);

(statearr_30582_32439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (2))){
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30563__$1,(4),from);
} else {
if((state_val_30564 === (11))){
var inst_30548 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
if(cljs.core.truth_(inst_30548)){
var statearr_30583_32442 = state_30563__$1;
(statearr_30583_32442[(1)] = (12));

} else {
var statearr_30584_32443 = state_30563__$1;
(statearr_30584_32443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (9))){
var state_30563__$1 = state_30563;
var statearr_30585_32444 = state_30563__$1;
(statearr_30585_32444[(2)] = null);

(statearr_30585_32444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (5))){
var state_30563__$1 = state_30563;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30586_32446 = state_30563__$1;
(statearr_30586_32446[(1)] = (8));

} else {
var statearr_30587_32447 = state_30563__$1;
(statearr_30587_32447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (14))){
var inst_30553 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
var statearr_30588_32448 = state_30563__$1;
(statearr_30588_32448[(2)] = inst_30553);

(statearr_30588_32448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (10))){
var inst_30544 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
var statearr_30590_32450 = state_30563__$1;
(statearr_30590_32450[(2)] = inst_30544);

(statearr_30590_32450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (8))){
var inst_30541 = cljs.core.async.close_BANG_(to);
var state_30563__$1 = state_30563;
var statearr_30591_32453 = state_30563__$1;
(statearr_30591_32453[(2)] = inst_30541);

(statearr_30591_32453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_30592 = [null,null,null,null,null,null,null,null];
(statearr_30592[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_30592[(1)] = (1));

return statearr_30592;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_30563){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_30563);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e30593){if((e30593 instanceof Object)){
var ex__29917__auto__ = e30593;
var statearr_30594_32455 = state_30563;
(statearr_30594_32455[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32456 = state_30563;
state_30563 = G__32456;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_30563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_30563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_30595 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_30595[(6)] = c__30223__auto___32433);

return statearr_30595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30601){
var vec__30606 = p__30601;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30606,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30606,(1),null);
var job = vec__30606;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30223__auto___32459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_30613){
var state_val_30614 = (state_30613[(1)]);
if((state_val_30614 === (1))){
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30613__$1,(2),res,v);
} else {
if((state_val_30614 === (2))){
var inst_30610 = (state_30613[(2)]);
var inst_30611 = cljs.core.async.close_BANG_(res);
var state_30613__$1 = (function (){var statearr_30615 = state_30613;
(statearr_30615[(7)] = inst_30610);

return statearr_30615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30613__$1,inst_30611);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0 = (function (){
var statearr_30616 = [null,null,null,null,null,null,null,null];
(statearr_30616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__);

(statearr_30616[(1)] = (1));

return statearr_30616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1 = (function (state_30613){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_30613);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e30617){if((e30617 instanceof Object)){
var ex__29917__auto__ = e30617;
var statearr_30618_32460 = state_30613;
(statearr_30618_32460[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32461 = state_30613;
state_30613 = G__32461;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = function(state_30613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1.call(this,state_30613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_30619 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_30619[(6)] = c__30223__auto___32459);

return statearr_30619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30620){
var vec__30621 = p__30620;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30621,(1),null);
var job = vec__30621;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32462 = n;
var __32463 = (0);
while(true){
if((__32463 < n__4666__auto___32462)){
var G__30628_32464 = type;
var G__30628_32465__$1 = (((G__30628_32464 instanceof cljs.core.Keyword))?G__30628_32464.fqn:null);
switch (G__30628_32465__$1) {
case "compute":
var c__30223__auto___32467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32463,c__30223__auto___32467,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async){
return (function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = ((function (__32463,c__30223__auto___32467,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async){
return (function (state_30641){
var state_val_30642 = (state_30641[(1)]);
if((state_val_30642 === (1))){
var state_30641__$1 = state_30641;
var statearr_30646_32468 = state_30641__$1;
(statearr_30646_32468[(2)] = null);

(statearr_30646_32468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (2))){
var state_30641__$1 = state_30641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30641__$1,(4),jobs);
} else {
if((state_val_30642 === (3))){
var inst_30639 = (state_30641[(2)]);
var state_30641__$1 = state_30641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30641__$1,inst_30639);
} else {
if((state_val_30642 === (4))){
var inst_30631 = (state_30641[(2)]);
var inst_30632 = process(inst_30631);
var state_30641__$1 = state_30641;
if(cljs.core.truth_(inst_30632)){
var statearr_30647_32469 = state_30641__$1;
(statearr_30647_32469[(1)] = (5));

} else {
var statearr_30648_32470 = state_30641__$1;
(statearr_30648_32470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (5))){
var state_30641__$1 = state_30641;
var statearr_30649_32471 = state_30641__$1;
(statearr_30649_32471[(2)] = null);

(statearr_30649_32471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (6))){
var state_30641__$1 = state_30641;
var statearr_30652_32472 = state_30641__$1;
(statearr_30652_32472[(2)] = null);

(statearr_30652_32472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30642 === (7))){
var inst_30637 = (state_30641[(2)]);
var state_30641__$1 = state_30641;
var statearr_30653_32473 = state_30641__$1;
(statearr_30653_32473[(2)] = inst_30637);

(statearr_30653_32473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32463,c__30223__auto___32467,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async))
;
return ((function (__32463,switch__29913__auto__,c__30223__auto___32467,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0 = (function (){
var statearr_30654 = [null,null,null,null,null,null,null];
(statearr_30654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__);

(statearr_30654[(1)] = (1));

return statearr_30654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1 = (function (state_30641){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_30641);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e30655){if((e30655 instanceof Object)){
var ex__29917__auto__ = e30655;
var statearr_30656_32474 = state_30641;
(statearr_30656_32474[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32475 = state_30641;
state_30641 = G__32475;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = function(state_30641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1.call(this,state_30641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__;
})()
;})(__32463,switch__29913__auto__,c__30223__auto___32467,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async))
})();
var state__30225__auto__ = (function (){var statearr_30660 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_30660[(6)] = c__30223__auto___32467);

return statearr_30660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
});})(__32463,c__30223__auto___32467,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async))
);


break;
case "async":
var c__30223__auto___32476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32463,c__30223__auto___32476,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async){
return (function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = ((function (__32463,c__30223__auto___32476,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async){
return (function (state_30676){
var state_val_30677 = (state_30676[(1)]);
if((state_val_30677 === (1))){
var state_30676__$1 = state_30676;
var statearr_30684_32477 = state_30676__$1;
(statearr_30684_32477[(2)] = null);

(statearr_30684_32477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (2))){
var state_30676__$1 = state_30676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30676__$1,(4),jobs);
} else {
if((state_val_30677 === (3))){
var inst_30674 = (state_30676[(2)]);
var state_30676__$1 = state_30676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30676__$1,inst_30674);
} else {
if((state_val_30677 === (4))){
var inst_30666 = (state_30676[(2)]);
var inst_30667 = async(inst_30666);
var state_30676__$1 = state_30676;
if(cljs.core.truth_(inst_30667)){
var statearr_30694_32478 = state_30676__$1;
(statearr_30694_32478[(1)] = (5));

} else {
var statearr_30696_32479 = state_30676__$1;
(statearr_30696_32479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (5))){
var state_30676__$1 = state_30676;
var statearr_30697_32480 = state_30676__$1;
(statearr_30697_32480[(2)] = null);

(statearr_30697_32480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (6))){
var state_30676__$1 = state_30676;
var statearr_30699_32481 = state_30676__$1;
(statearr_30699_32481[(2)] = null);

(statearr_30699_32481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30677 === (7))){
var inst_30672 = (state_30676[(2)]);
var state_30676__$1 = state_30676;
var statearr_30700_32484 = state_30676__$1;
(statearr_30700_32484[(2)] = inst_30672);

(statearr_30700_32484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32463,c__30223__auto___32476,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async))
;
return ((function (__32463,switch__29913__auto__,c__30223__auto___32476,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0 = (function (){
var statearr_30702 = [null,null,null,null,null,null,null];
(statearr_30702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__);

(statearr_30702[(1)] = (1));

return statearr_30702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1 = (function (state_30676){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_30676);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e30703){if((e30703 instanceof Object)){
var ex__29917__auto__ = e30703;
var statearr_30704_32485 = state_30676;
(statearr_30704_32485[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32486 = state_30676;
state_30676 = G__32486;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = function(state_30676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1.call(this,state_30676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__;
})()
;})(__32463,switch__29913__auto__,c__30223__auto___32476,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async))
})();
var state__30225__auto__ = (function (){var statearr_30708 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_30708[(6)] = c__30223__auto___32476);

return statearr_30708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
});})(__32463,c__30223__auto___32476,G__30628_32464,G__30628_32465__$1,n__4666__auto___32462,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30628_32465__$1)].join('')));

}

var G__32487 = (__32463 + (1));
__32463 = G__32487;
continue;
} else {
}
break;
}

var c__30223__auto___32488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_30742){
var state_val_30743 = (state_30742[(1)]);
if((state_val_30743 === (7))){
var inst_30738 = (state_30742[(2)]);
var state_30742__$1 = state_30742;
var statearr_30753_32489 = state_30742__$1;
(statearr_30753_32489[(2)] = inst_30738);

(statearr_30753_32489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (1))){
var state_30742__$1 = state_30742;
var statearr_30754_32490 = state_30742__$1;
(statearr_30754_32490[(2)] = null);

(statearr_30754_32490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (4))){
var inst_30717 = (state_30742[(7)]);
var inst_30717__$1 = (state_30742[(2)]);
var inst_30718 = (inst_30717__$1 == null);
var state_30742__$1 = (function (){var statearr_30755 = state_30742;
(statearr_30755[(7)] = inst_30717__$1);

return statearr_30755;
})();
if(cljs.core.truth_(inst_30718)){
var statearr_30756_32491 = state_30742__$1;
(statearr_30756_32491[(1)] = (5));

} else {
var statearr_30757_32492 = state_30742__$1;
(statearr_30757_32492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (6))){
var inst_30722 = (state_30742[(8)]);
var inst_30717 = (state_30742[(7)]);
var inst_30722__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30726 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30727 = [inst_30717,inst_30722__$1];
var inst_30728 = (new cljs.core.PersistentVector(null,2,(5),inst_30726,inst_30727,null));
var state_30742__$1 = (function (){var statearr_30758 = state_30742;
(statearr_30758[(8)] = inst_30722__$1);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30742__$1,(8),jobs,inst_30728);
} else {
if((state_val_30743 === (3))){
var inst_30740 = (state_30742[(2)]);
var state_30742__$1 = state_30742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30742__$1,inst_30740);
} else {
if((state_val_30743 === (2))){
var state_30742__$1 = state_30742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30742__$1,(4),from);
} else {
if((state_val_30743 === (9))){
var inst_30735 = (state_30742[(2)]);
var state_30742__$1 = (function (){var statearr_30760 = state_30742;
(statearr_30760[(9)] = inst_30735);

return statearr_30760;
})();
var statearr_30762_32493 = state_30742__$1;
(statearr_30762_32493[(2)] = null);

(statearr_30762_32493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (5))){
var inst_30720 = cljs.core.async.close_BANG_(jobs);
var state_30742__$1 = state_30742;
var statearr_30763_32494 = state_30742__$1;
(statearr_30763_32494[(2)] = inst_30720);

(statearr_30763_32494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30743 === (8))){
var inst_30722 = (state_30742[(8)]);
var inst_30730 = (state_30742[(2)]);
var state_30742__$1 = (function (){var statearr_30764 = state_30742;
(statearr_30764[(10)] = inst_30730);

return statearr_30764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30742__$1,(9),results,inst_30722);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0 = (function (){
var statearr_30765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__);

(statearr_30765[(1)] = (1));

return statearr_30765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1 = (function (state_30742){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_30742);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e30766){if((e30766 instanceof Object)){
var ex__29917__auto__ = e30766;
var statearr_30767_32498 = state_30742;
(statearr_30767_32498[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32499 = state_30742;
state_30742 = G__32499;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = function(state_30742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1.call(this,state_30742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_30772 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_30772[(6)] = c__30223__auto___32488);

return statearr_30772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


var c__30223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_30919){
var state_val_30920 = (state_30919[(1)]);
if((state_val_30920 === (7))){
var inst_30915 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30921_32502 = state_30919__$1;
(statearr_30921_32502[(2)] = inst_30915);

(statearr_30921_32502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (20))){
var state_30919__$1 = state_30919;
var statearr_30923_32503 = state_30919__$1;
(statearr_30923_32503[(2)] = null);

(statearr_30923_32503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (1))){
var state_30919__$1 = state_30919;
var statearr_30924_32505 = state_30919__$1;
(statearr_30924_32505[(2)] = null);

(statearr_30924_32505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (4))){
var inst_30781 = (state_30919[(7)]);
var inst_30781__$1 = (state_30919[(2)]);
var inst_30882 = (inst_30781__$1 == null);
var state_30919__$1 = (function (){var statearr_30925 = state_30919;
(statearr_30925[(7)] = inst_30781__$1);

return statearr_30925;
})();
if(cljs.core.truth_(inst_30882)){
var statearr_30926_32508 = state_30919__$1;
(statearr_30926_32508[(1)] = (5));

} else {
var statearr_30927_32509 = state_30919__$1;
(statearr_30927_32509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (15))){
var inst_30896 = (state_30919[(8)]);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30919__$1,(18),to,inst_30896);
} else {
if((state_val_30920 === (21))){
var inst_30910 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30928_32511 = state_30919__$1;
(statearr_30928_32511[(2)] = inst_30910);

(statearr_30928_32511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (13))){
var inst_30912 = (state_30919[(2)]);
var state_30919__$1 = (function (){var statearr_30929 = state_30919;
(statearr_30929[(9)] = inst_30912);

return statearr_30929;
})();
var statearr_30930_32512 = state_30919__$1;
(statearr_30930_32512[(2)] = null);

(statearr_30930_32512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (6))){
var inst_30781 = (state_30919[(7)]);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30919__$1,(11),inst_30781);
} else {
if((state_val_30920 === (17))){
var inst_30905 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
if(cljs.core.truth_(inst_30905)){
var statearr_30931_32513 = state_30919__$1;
(statearr_30931_32513[(1)] = (19));

} else {
var statearr_30932_32514 = state_30919__$1;
(statearr_30932_32514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (3))){
var inst_30917 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30919__$1,inst_30917);
} else {
if((state_val_30920 === (12))){
var inst_30891 = (state_30919[(10)]);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30919__$1,(14),inst_30891);
} else {
if((state_val_30920 === (2))){
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30919__$1,(4),results);
} else {
if((state_val_30920 === (19))){
var state_30919__$1 = state_30919;
var statearr_30933_32516 = state_30919__$1;
(statearr_30933_32516[(2)] = null);

(statearr_30933_32516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (11))){
var inst_30891 = (state_30919[(2)]);
var state_30919__$1 = (function (){var statearr_30934 = state_30919;
(statearr_30934[(10)] = inst_30891);

return statearr_30934;
})();
var statearr_30935_32520 = state_30919__$1;
(statearr_30935_32520[(2)] = null);

(statearr_30935_32520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (9))){
var state_30919__$1 = state_30919;
var statearr_30936_32522 = state_30919__$1;
(statearr_30936_32522[(2)] = null);

(statearr_30936_32522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (5))){
var state_30919__$1 = state_30919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30937_32524 = state_30919__$1;
(statearr_30937_32524[(1)] = (8));

} else {
var statearr_30938_32525 = state_30919__$1;
(statearr_30938_32525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (14))){
var inst_30896 = (state_30919[(8)]);
var inst_30896__$1 = (state_30919[(2)]);
var inst_30898 = (inst_30896__$1 == null);
var inst_30899 = cljs.core.not(inst_30898);
var state_30919__$1 = (function (){var statearr_30939 = state_30919;
(statearr_30939[(8)] = inst_30896__$1);

return statearr_30939;
})();
if(inst_30899){
var statearr_30940_32526 = state_30919__$1;
(statearr_30940_32526[(1)] = (15));

} else {
var statearr_30941_32527 = state_30919__$1;
(statearr_30941_32527[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (16))){
var state_30919__$1 = state_30919;
var statearr_30942_32529 = state_30919__$1;
(statearr_30942_32529[(2)] = false);

(statearr_30942_32529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (10))){
var inst_30888 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30943_32530 = state_30919__$1;
(statearr_30943_32530[(2)] = inst_30888);

(statearr_30943_32530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (18))){
var inst_30902 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30944_32531 = state_30919__$1;
(statearr_30944_32531[(2)] = inst_30902);

(statearr_30944_32531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (8))){
var inst_30885 = cljs.core.async.close_BANG_(to);
var state_30919__$1 = state_30919;
var statearr_30945_32538 = state_30919__$1;
(statearr_30945_32538[(2)] = inst_30885);

(statearr_30945_32538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0 = (function (){
var statearr_30946 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__);

(statearr_30946[(1)] = (1));

return statearr_30946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1 = (function (state_30919){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_30919);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e30947){if((e30947 instanceof Object)){
var ex__29917__auto__ = e30947;
var statearr_30948_32543 = state_30919;
(statearr_30948_32543[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32544 = state_30919;
state_30919 = G__32544;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__ = function(state_30919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1.call(this,state_30919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_30949 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_30949[(6)] = c__30223__auto__);

return statearr_30949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));

return c__30223__auto__;
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
var G__30954 = arguments.length;
switch (G__30954) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__30958 = arguments.length;
switch (G__30958) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__30965 = arguments.length;
switch (G__30965) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30223__auto___32564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_30994){
var state_val_30995 = (state_30994[(1)]);
if((state_val_30995 === (7))){
var inst_30990 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
var statearr_30996_32565 = state_30994__$1;
(statearr_30996_32565[(2)] = inst_30990);

(statearr_30996_32565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (1))){
var state_30994__$1 = state_30994;
var statearr_30997_32568 = state_30994__$1;
(statearr_30997_32568[(2)] = null);

(statearr_30997_32568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (4))){
var inst_30971 = (state_30994[(7)]);
var inst_30971__$1 = (state_30994[(2)]);
var inst_30972 = (inst_30971__$1 == null);
var state_30994__$1 = (function (){var statearr_30998 = state_30994;
(statearr_30998[(7)] = inst_30971__$1);

return statearr_30998;
})();
if(cljs.core.truth_(inst_30972)){
var statearr_31001_32571 = state_30994__$1;
(statearr_31001_32571[(1)] = (5));

} else {
var statearr_31004_32572 = state_30994__$1;
(statearr_31004_32572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (13))){
var state_30994__$1 = state_30994;
var statearr_31005_32573 = state_30994__$1;
(statearr_31005_32573[(2)] = null);

(statearr_31005_32573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (6))){
var inst_30971 = (state_30994[(7)]);
var inst_30977 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30971) : p.call(null,inst_30971));
var state_30994__$1 = state_30994;
if(cljs.core.truth_(inst_30977)){
var statearr_31006_32575 = state_30994__$1;
(statearr_31006_32575[(1)] = (9));

} else {
var statearr_31011_32576 = state_30994__$1;
(statearr_31011_32576[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (3))){
var inst_30992 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30994__$1,inst_30992);
} else {
if((state_val_30995 === (12))){
var state_30994__$1 = state_30994;
var statearr_31012_32577 = state_30994__$1;
(statearr_31012_32577[(2)] = null);

(statearr_31012_32577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (2))){
var state_30994__$1 = state_30994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30994__$1,(4),ch);
} else {
if((state_val_30995 === (11))){
var inst_30971 = (state_30994[(7)]);
var inst_30981 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30994__$1,(8),inst_30981,inst_30971);
} else {
if((state_val_30995 === (9))){
var state_30994__$1 = state_30994;
var statearr_31013_32583 = state_30994__$1;
(statearr_31013_32583[(2)] = tc);

(statearr_31013_32583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (5))){
var inst_30974 = cljs.core.async.close_BANG_(tc);
var inst_30975 = cljs.core.async.close_BANG_(fc);
var state_30994__$1 = (function (){var statearr_31014 = state_30994;
(statearr_31014[(8)] = inst_30974);

return statearr_31014;
})();
var statearr_31015_32584 = state_30994__$1;
(statearr_31015_32584[(2)] = inst_30975);

(statearr_31015_32584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (14))){
var inst_30988 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
var statearr_31016_32585 = state_30994__$1;
(statearr_31016_32585[(2)] = inst_30988);

(statearr_31016_32585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (10))){
var state_30994__$1 = state_30994;
var statearr_31017_32586 = state_30994__$1;
(statearr_31017_32586[(2)] = fc);

(statearr_31017_32586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30995 === (8))){
var inst_30983 = (state_30994[(2)]);
var state_30994__$1 = state_30994;
if(cljs.core.truth_(inst_30983)){
var statearr_31018_32587 = state_30994__$1;
(statearr_31018_32587[(1)] = (12));

} else {
var statearr_31019_32588 = state_30994__$1;
(statearr_31019_32588[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_31020 = [null,null,null,null,null,null,null,null,null];
(statearr_31020[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_31020[(1)] = (1));

return statearr_31020;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_30994){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_30994);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e31021){if((e31021 instanceof Object)){
var ex__29917__auto__ = e31021;
var statearr_31022_32591 = state_30994;
(statearr_31022_32591[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32594 = state_30994;
state_30994 = G__32594;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_30994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_30994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_31023 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_31023[(6)] = c__30223__auto___32564);

return statearr_31023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_31044){
var state_val_31045 = (state_31044[(1)]);
if((state_val_31045 === (7))){
var inst_31040 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31046_32599 = state_31044__$1;
(statearr_31046_32599[(2)] = inst_31040);

(statearr_31046_32599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (1))){
var inst_31024 = init;
var state_31044__$1 = (function (){var statearr_31047 = state_31044;
(statearr_31047[(7)] = inst_31024);

return statearr_31047;
})();
var statearr_31048_32600 = state_31044__$1;
(statearr_31048_32600[(2)] = null);

(statearr_31048_32600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (4))){
var inst_31027 = (state_31044[(8)]);
var inst_31027__$1 = (state_31044[(2)]);
var inst_31028 = (inst_31027__$1 == null);
var state_31044__$1 = (function (){var statearr_31049 = state_31044;
(statearr_31049[(8)] = inst_31027__$1);

return statearr_31049;
})();
if(cljs.core.truth_(inst_31028)){
var statearr_31050_32601 = state_31044__$1;
(statearr_31050_32601[(1)] = (5));

} else {
var statearr_31051_32602 = state_31044__$1;
(statearr_31051_32602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (6))){
var inst_31024 = (state_31044[(7)]);
var inst_31031 = (state_31044[(9)]);
var inst_31027 = (state_31044[(8)]);
var inst_31031__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31024,inst_31027) : f.call(null,inst_31024,inst_31027));
var inst_31032 = cljs.core.reduced_QMARK_(inst_31031__$1);
var state_31044__$1 = (function (){var statearr_31052 = state_31044;
(statearr_31052[(9)] = inst_31031__$1);

return statearr_31052;
})();
if(inst_31032){
var statearr_31053_32605 = state_31044__$1;
(statearr_31053_32605[(1)] = (8));

} else {
var statearr_31054_32606 = state_31044__$1;
(statearr_31054_32606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (3))){
var inst_31042 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31044__$1,inst_31042);
} else {
if((state_val_31045 === (2))){
var state_31044__$1 = state_31044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31044__$1,(4),ch);
} else {
if((state_val_31045 === (9))){
var inst_31031 = (state_31044[(9)]);
var inst_31024 = inst_31031;
var state_31044__$1 = (function (){var statearr_31055 = state_31044;
(statearr_31055[(7)] = inst_31024);

return statearr_31055;
})();
var statearr_31056_32609 = state_31044__$1;
(statearr_31056_32609[(2)] = null);

(statearr_31056_32609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (5))){
var inst_31024 = (state_31044[(7)]);
var state_31044__$1 = state_31044;
var statearr_31057_32610 = state_31044__$1;
(statearr_31057_32610[(2)] = inst_31024);

(statearr_31057_32610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (10))){
var inst_31038 = (state_31044[(2)]);
var state_31044__$1 = state_31044;
var statearr_31058_32611 = state_31044__$1;
(statearr_31058_32611[(2)] = inst_31038);

(statearr_31058_32611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31045 === (8))){
var inst_31031 = (state_31044[(9)]);
var inst_31034 = cljs.core.deref(inst_31031);
var state_31044__$1 = state_31044;
var statearr_31059_32612 = state_31044__$1;
(statearr_31059_32612[(2)] = inst_31034);

(statearr_31059_32612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29914__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29914__auto____0 = (function (){
var statearr_31060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31060[(0)] = cljs$core$async$reduce_$_state_machine__29914__auto__);

(statearr_31060[(1)] = (1));

return statearr_31060;
});
var cljs$core$async$reduce_$_state_machine__29914__auto____1 = (function (state_31044){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_31044);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e31065){if((e31065 instanceof Object)){
var ex__29917__auto__ = e31065;
var statearr_31066_32613 = state_31044;
(statearr_31066_32613[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31065;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32615 = state_31044;
state_31044 = G__32615;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29914__auto__ = function(state_31044){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29914__auto____1.call(this,state_31044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29914__auto____0;
cljs$core$async$reduce_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29914__auto____1;
return cljs$core$async$reduce_$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_31072 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_31072[(6)] = c__30223__auto__);

return statearr_31072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));

return c__30223__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_31082){
var state_val_31083 = (state_31082[(1)]);
if((state_val_31083 === (1))){
var inst_31073 = cljs.core.async.reduce(f__$1,init,ch);
var state_31082__$1 = state_31082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31082__$1,(2),inst_31073);
} else {
if((state_val_31083 === (2))){
var inst_31075 = (state_31082[(2)]);
var inst_31076 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31075) : f__$1.call(null,inst_31075));
var state_31082__$1 = state_31082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31082__$1,inst_31076);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29914__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29914__auto____0 = (function (){
var statearr_31084 = [null,null,null,null,null,null,null];
(statearr_31084[(0)] = cljs$core$async$transduce_$_state_machine__29914__auto__);

(statearr_31084[(1)] = (1));

return statearr_31084;
});
var cljs$core$async$transduce_$_state_machine__29914__auto____1 = (function (state_31082){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_31082);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e31085){if((e31085 instanceof Object)){
var ex__29917__auto__ = e31085;
var statearr_31086_32617 = state_31082;
(statearr_31086_32617[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31085;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32618 = state_31082;
state_31082 = G__32618;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29914__auto__ = function(state_31082){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29914__auto____1.call(this,state_31082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29914__auto____0;
cljs$core$async$transduce_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29914__auto____1;
return cljs$core$async$transduce_$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_31087 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_31087[(6)] = c__30223__auto__);

return statearr_31087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));

return c__30223__auto__;
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
var G__31089 = arguments.length;
switch (G__31089) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_31114){
var state_val_31115 = (state_31114[(1)]);
if((state_val_31115 === (7))){
var inst_31096 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31116_32620 = state_31114__$1;
(statearr_31116_32620[(2)] = inst_31096);

(statearr_31116_32620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (1))){
var inst_31090 = cljs.core.seq(coll);
var inst_31091 = inst_31090;
var state_31114__$1 = (function (){var statearr_31117 = state_31114;
(statearr_31117[(7)] = inst_31091);

return statearr_31117;
})();
var statearr_31118_32621 = state_31114__$1;
(statearr_31118_32621[(2)] = null);

(statearr_31118_32621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (4))){
var inst_31091 = (state_31114[(7)]);
var inst_31094 = cljs.core.first(inst_31091);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31114__$1,(7),ch,inst_31094);
} else {
if((state_val_31115 === (13))){
var inst_31108 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31119_32622 = state_31114__$1;
(statearr_31119_32622[(2)] = inst_31108);

(statearr_31119_32622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (6))){
var inst_31099 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
if(cljs.core.truth_(inst_31099)){
var statearr_31120_32623 = state_31114__$1;
(statearr_31120_32623[(1)] = (8));

} else {
var statearr_31121_32624 = state_31114__$1;
(statearr_31121_32624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (3))){
var inst_31112 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31114__$1,inst_31112);
} else {
if((state_val_31115 === (12))){
var state_31114__$1 = state_31114;
var statearr_31122_32626 = state_31114__$1;
(statearr_31122_32626[(2)] = null);

(statearr_31122_32626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (2))){
var inst_31091 = (state_31114[(7)]);
var state_31114__$1 = state_31114;
if(cljs.core.truth_(inst_31091)){
var statearr_31123_32628 = state_31114__$1;
(statearr_31123_32628[(1)] = (4));

} else {
var statearr_31124_32630 = state_31114__$1;
(statearr_31124_32630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (11))){
var inst_31105 = cljs.core.async.close_BANG_(ch);
var state_31114__$1 = state_31114;
var statearr_31125_32638 = state_31114__$1;
(statearr_31125_32638[(2)] = inst_31105);

(statearr_31125_32638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (9))){
var state_31114__$1 = state_31114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31126_32640 = state_31114__$1;
(statearr_31126_32640[(1)] = (11));

} else {
var statearr_31127_32641 = state_31114__$1;
(statearr_31127_32641[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (5))){
var inst_31091 = (state_31114[(7)]);
var state_31114__$1 = state_31114;
var statearr_31128_32644 = state_31114__$1;
(statearr_31128_32644[(2)] = inst_31091);

(statearr_31128_32644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (10))){
var inst_31110 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31130_32645 = state_31114__$1;
(statearr_31130_32645[(2)] = inst_31110);

(statearr_31130_32645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (8))){
var inst_31091 = (state_31114[(7)]);
var inst_31101 = cljs.core.next(inst_31091);
var inst_31091__$1 = inst_31101;
var state_31114__$1 = (function (){var statearr_31133 = state_31114;
(statearr_31133[(7)] = inst_31091__$1);

return statearr_31133;
})();
var statearr_31134_32646 = state_31114__$1;
(statearr_31134_32646[(2)] = null);

(statearr_31134_32646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_31139 = [null,null,null,null,null,null,null,null];
(statearr_31139[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_31139[(1)] = (1));

return statearr_31139;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_31114){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_31114);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e31140){if((e31140 instanceof Object)){
var ex__29917__auto__ = e31140;
var statearr_31142_32647 = state_31114;
(statearr_31142_32647[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32648 = state_31114;
state_31114 = G__32648;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_31114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_31114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_31145 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_31145[(6)] = c__30223__auto__);

return statearr_31145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));

return c__30223__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31146 = (function (ch,cs,meta31147){
this.ch = ch;
this.cs = cs;
this.meta31147 = meta31147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31148,meta31147__$1){
var self__ = this;
var _31148__$1 = this;
return (new cljs.core.async.t_cljs$core$async31146(self__.ch,self__.cs,meta31147__$1));
}));

(cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31148){
var self__ = this;
var _31148__$1 = this;
return self__.meta31147;
}));

(cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31146.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31147","meta31147",1868148959,null)], null);
}));

(cljs.core.async.t_cljs$core$async31146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31146");

(cljs.core.async.t_cljs$core$async31146.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31146.
 */
cljs.core.async.__GT_t_cljs$core$async31146 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31146(ch__$1,cs__$1,meta31147){
return (new cljs.core.async.t_cljs$core$async31146(ch__$1,cs__$1,meta31147));
});

}

return (new cljs.core.async.t_cljs$core$async31146(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30223__auto___32663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_31284){
var state_val_31285 = (state_31284[(1)]);
if((state_val_31285 === (7))){
var inst_31280 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31286_32665 = state_31284__$1;
(statearr_31286_32665[(2)] = inst_31280);

(statearr_31286_32665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (20))){
var inst_31182 = (state_31284[(7)]);
var inst_31194 = cljs.core.first(inst_31182);
var inst_31195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31194,(0),null);
var inst_31196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31194,(1),null);
var state_31284__$1 = (function (){var statearr_31287 = state_31284;
(statearr_31287[(8)] = inst_31195);

return statearr_31287;
})();
if(cljs.core.truth_(inst_31196)){
var statearr_31288_32667 = state_31284__$1;
(statearr_31288_32667[(1)] = (22));

} else {
var statearr_31289_32668 = state_31284__$1;
(statearr_31289_32668[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (27))){
var inst_31231 = (state_31284[(9)]);
var inst_31224 = (state_31284[(10)]);
var inst_31226 = (state_31284[(11)]);
var inst_31151 = (state_31284[(12)]);
var inst_31231__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31224,inst_31226);
var inst_31232 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31231__$1,inst_31151,done);
var state_31284__$1 = (function (){var statearr_31290 = state_31284;
(statearr_31290[(9)] = inst_31231__$1);

return statearr_31290;
})();
if(cljs.core.truth_(inst_31232)){
var statearr_31291_32671 = state_31284__$1;
(statearr_31291_32671[(1)] = (30));

} else {
var statearr_31292_32672 = state_31284__$1;
(statearr_31292_32672[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (1))){
var state_31284__$1 = state_31284;
var statearr_31293_32673 = state_31284__$1;
(statearr_31293_32673[(2)] = null);

(statearr_31293_32673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (24))){
var inst_31182 = (state_31284[(7)]);
var inst_31201 = (state_31284[(2)]);
var inst_31202 = cljs.core.next(inst_31182);
var inst_31160 = inst_31202;
var inst_31161 = null;
var inst_31162 = (0);
var inst_31163 = (0);
var state_31284__$1 = (function (){var statearr_31294 = state_31284;
(statearr_31294[(13)] = inst_31162);

(statearr_31294[(14)] = inst_31160);

(statearr_31294[(15)] = inst_31163);

(statearr_31294[(16)] = inst_31201);

(statearr_31294[(17)] = inst_31161);

return statearr_31294;
})();
var statearr_31295_32674 = state_31284__$1;
(statearr_31295_32674[(2)] = null);

(statearr_31295_32674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (39))){
var state_31284__$1 = state_31284;
var statearr_31299_32675 = state_31284__$1;
(statearr_31299_32675[(2)] = null);

(statearr_31299_32675[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (4))){
var inst_31151 = (state_31284[(12)]);
var inst_31151__$1 = (state_31284[(2)]);
var inst_31152 = (inst_31151__$1 == null);
var state_31284__$1 = (function (){var statearr_31300 = state_31284;
(statearr_31300[(12)] = inst_31151__$1);

return statearr_31300;
})();
if(cljs.core.truth_(inst_31152)){
var statearr_31301_32680 = state_31284__$1;
(statearr_31301_32680[(1)] = (5));

} else {
var statearr_31302_32681 = state_31284__$1;
(statearr_31302_32681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (15))){
var inst_31162 = (state_31284[(13)]);
var inst_31160 = (state_31284[(14)]);
var inst_31163 = (state_31284[(15)]);
var inst_31161 = (state_31284[(17)]);
var inst_31178 = (state_31284[(2)]);
var inst_31179 = (inst_31163 + (1));
var tmp31296 = inst_31162;
var tmp31297 = inst_31160;
var tmp31298 = inst_31161;
var inst_31160__$1 = tmp31297;
var inst_31161__$1 = tmp31298;
var inst_31162__$1 = tmp31296;
var inst_31163__$1 = inst_31179;
var state_31284__$1 = (function (){var statearr_31303 = state_31284;
(statearr_31303[(13)] = inst_31162__$1);

(statearr_31303[(14)] = inst_31160__$1);

(statearr_31303[(15)] = inst_31163__$1);

(statearr_31303[(18)] = inst_31178);

(statearr_31303[(17)] = inst_31161__$1);

return statearr_31303;
})();
var statearr_31304_32688 = state_31284__$1;
(statearr_31304_32688[(2)] = null);

(statearr_31304_32688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (21))){
var inst_31205 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31308_32690 = state_31284__$1;
(statearr_31308_32690[(2)] = inst_31205);

(statearr_31308_32690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (31))){
var inst_31231 = (state_31284[(9)]);
var inst_31235 = done(null);
var inst_31236 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31231);
var state_31284__$1 = (function (){var statearr_31309 = state_31284;
(statearr_31309[(19)] = inst_31235);

return statearr_31309;
})();
var statearr_31310_32694 = state_31284__$1;
(statearr_31310_32694[(2)] = inst_31236);

(statearr_31310_32694[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (32))){
var inst_31225 = (state_31284[(20)]);
var inst_31223 = (state_31284[(21)]);
var inst_31224 = (state_31284[(10)]);
var inst_31226 = (state_31284[(11)]);
var inst_31238 = (state_31284[(2)]);
var inst_31239 = (inst_31226 + (1));
var tmp31305 = inst_31225;
var tmp31306 = inst_31223;
var tmp31307 = inst_31224;
var inst_31223__$1 = tmp31306;
var inst_31224__$1 = tmp31307;
var inst_31225__$1 = tmp31305;
var inst_31226__$1 = inst_31239;
var state_31284__$1 = (function (){var statearr_31311 = state_31284;
(statearr_31311[(20)] = inst_31225__$1);

(statearr_31311[(21)] = inst_31223__$1);

(statearr_31311[(10)] = inst_31224__$1);

(statearr_31311[(11)] = inst_31226__$1);

(statearr_31311[(22)] = inst_31238);

return statearr_31311;
})();
var statearr_31312_32701 = state_31284__$1;
(statearr_31312_32701[(2)] = null);

(statearr_31312_32701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (40))){
var inst_31251 = (state_31284[(23)]);
var inst_31255 = done(null);
var inst_31256 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31251);
var state_31284__$1 = (function (){var statearr_31313 = state_31284;
(statearr_31313[(24)] = inst_31255);

return statearr_31313;
})();
var statearr_31314_32702 = state_31284__$1;
(statearr_31314_32702[(2)] = inst_31256);

(statearr_31314_32702[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (33))){
var inst_31242 = (state_31284[(25)]);
var inst_31244 = cljs.core.chunked_seq_QMARK_(inst_31242);
var state_31284__$1 = state_31284;
if(inst_31244){
var statearr_31315_32703 = state_31284__$1;
(statearr_31315_32703[(1)] = (36));

} else {
var statearr_31316_32704 = state_31284__$1;
(statearr_31316_32704[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (13))){
var inst_31172 = (state_31284[(26)]);
var inst_31175 = cljs.core.async.close_BANG_(inst_31172);
var state_31284__$1 = state_31284;
var statearr_31317_32705 = state_31284__$1;
(statearr_31317_32705[(2)] = inst_31175);

(statearr_31317_32705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (22))){
var inst_31195 = (state_31284[(8)]);
var inst_31198 = cljs.core.async.close_BANG_(inst_31195);
var state_31284__$1 = state_31284;
var statearr_31318_32709 = state_31284__$1;
(statearr_31318_32709[(2)] = inst_31198);

(statearr_31318_32709[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (36))){
var inst_31242 = (state_31284[(25)]);
var inst_31246 = cljs.core.chunk_first(inst_31242);
var inst_31247 = cljs.core.chunk_rest(inst_31242);
var inst_31248 = cljs.core.count(inst_31246);
var inst_31223 = inst_31247;
var inst_31224 = inst_31246;
var inst_31225 = inst_31248;
var inst_31226 = (0);
var state_31284__$1 = (function (){var statearr_31319 = state_31284;
(statearr_31319[(20)] = inst_31225);

(statearr_31319[(21)] = inst_31223);

(statearr_31319[(10)] = inst_31224);

(statearr_31319[(11)] = inst_31226);

return statearr_31319;
})();
var statearr_31320_32710 = state_31284__$1;
(statearr_31320_32710[(2)] = null);

(statearr_31320_32710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (41))){
var inst_31242 = (state_31284[(25)]);
var inst_31258 = (state_31284[(2)]);
var inst_31259 = cljs.core.next(inst_31242);
var inst_31223 = inst_31259;
var inst_31224 = null;
var inst_31225 = (0);
var inst_31226 = (0);
var state_31284__$1 = (function (){var statearr_31322 = state_31284;
(statearr_31322[(20)] = inst_31225);

(statearr_31322[(21)] = inst_31223);

(statearr_31322[(27)] = inst_31258);

(statearr_31322[(10)] = inst_31224);

(statearr_31322[(11)] = inst_31226);

return statearr_31322;
})();
var statearr_31324_32711 = state_31284__$1;
(statearr_31324_32711[(2)] = null);

(statearr_31324_32711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (43))){
var state_31284__$1 = state_31284;
var statearr_31325_32712 = state_31284__$1;
(statearr_31325_32712[(2)] = null);

(statearr_31325_32712[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (29))){
var inst_31267 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31326_32713 = state_31284__$1;
(statearr_31326_32713[(2)] = inst_31267);

(statearr_31326_32713[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (44))){
var inst_31277 = (state_31284[(2)]);
var state_31284__$1 = (function (){var statearr_31327 = state_31284;
(statearr_31327[(28)] = inst_31277);

return statearr_31327;
})();
var statearr_31328_32714 = state_31284__$1;
(statearr_31328_32714[(2)] = null);

(statearr_31328_32714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (6))){
var inst_31215 = (state_31284[(29)]);
var inst_31214 = cljs.core.deref(cs);
var inst_31215__$1 = cljs.core.keys(inst_31214);
var inst_31216 = cljs.core.count(inst_31215__$1);
var inst_31217 = cljs.core.reset_BANG_(dctr,inst_31216);
var inst_31222 = cljs.core.seq(inst_31215__$1);
var inst_31223 = inst_31222;
var inst_31224 = null;
var inst_31225 = (0);
var inst_31226 = (0);
var state_31284__$1 = (function (){var statearr_31329 = state_31284;
(statearr_31329[(29)] = inst_31215__$1);

(statearr_31329[(20)] = inst_31225);

(statearr_31329[(21)] = inst_31223);

(statearr_31329[(10)] = inst_31224);

(statearr_31329[(11)] = inst_31226);

(statearr_31329[(30)] = inst_31217);

return statearr_31329;
})();
var statearr_31330_32715 = state_31284__$1;
(statearr_31330_32715[(2)] = null);

(statearr_31330_32715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (28))){
var inst_31223 = (state_31284[(21)]);
var inst_31242 = (state_31284[(25)]);
var inst_31242__$1 = cljs.core.seq(inst_31223);
var state_31284__$1 = (function (){var statearr_31331 = state_31284;
(statearr_31331[(25)] = inst_31242__$1);

return statearr_31331;
})();
if(inst_31242__$1){
var statearr_31332_32717 = state_31284__$1;
(statearr_31332_32717[(1)] = (33));

} else {
var statearr_31333_32718 = state_31284__$1;
(statearr_31333_32718[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (25))){
var inst_31225 = (state_31284[(20)]);
var inst_31226 = (state_31284[(11)]);
var inst_31228 = (inst_31226 < inst_31225);
var inst_31229 = inst_31228;
var state_31284__$1 = state_31284;
if(cljs.core.truth_(inst_31229)){
var statearr_31334_32720 = state_31284__$1;
(statearr_31334_32720[(1)] = (27));

} else {
var statearr_31335_32721 = state_31284__$1;
(statearr_31335_32721[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (34))){
var state_31284__$1 = state_31284;
var statearr_31336_32722 = state_31284__$1;
(statearr_31336_32722[(2)] = null);

(statearr_31336_32722[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (17))){
var state_31284__$1 = state_31284;
var statearr_31341_32723 = state_31284__$1;
(statearr_31341_32723[(2)] = null);

(statearr_31341_32723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (3))){
var inst_31282 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31284__$1,inst_31282);
} else {
if((state_val_31285 === (12))){
var inst_31210 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31346_32724 = state_31284__$1;
(statearr_31346_32724[(2)] = inst_31210);

(statearr_31346_32724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (2))){
var state_31284__$1 = state_31284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31284__$1,(4),ch);
} else {
if((state_val_31285 === (23))){
var state_31284__$1 = state_31284;
var statearr_31353_32757 = state_31284__$1;
(statearr_31353_32757[(2)] = null);

(statearr_31353_32757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (35))){
var inst_31265 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31356_32761 = state_31284__$1;
(statearr_31356_32761[(2)] = inst_31265);

(statearr_31356_32761[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (19))){
var inst_31182 = (state_31284[(7)]);
var inst_31186 = cljs.core.chunk_first(inst_31182);
var inst_31187 = cljs.core.chunk_rest(inst_31182);
var inst_31188 = cljs.core.count(inst_31186);
var inst_31160 = inst_31187;
var inst_31161 = inst_31186;
var inst_31162 = inst_31188;
var inst_31163 = (0);
var state_31284__$1 = (function (){var statearr_31358 = state_31284;
(statearr_31358[(13)] = inst_31162);

(statearr_31358[(14)] = inst_31160);

(statearr_31358[(15)] = inst_31163);

(statearr_31358[(17)] = inst_31161);

return statearr_31358;
})();
var statearr_31361_32768 = state_31284__$1;
(statearr_31361_32768[(2)] = null);

(statearr_31361_32768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (11))){
var inst_31160 = (state_31284[(14)]);
var inst_31182 = (state_31284[(7)]);
var inst_31182__$1 = cljs.core.seq(inst_31160);
var state_31284__$1 = (function (){var statearr_31362 = state_31284;
(statearr_31362[(7)] = inst_31182__$1);

return statearr_31362;
})();
if(inst_31182__$1){
var statearr_31363_32772 = state_31284__$1;
(statearr_31363_32772[(1)] = (16));

} else {
var statearr_31364_32773 = state_31284__$1;
(statearr_31364_32773[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (9))){
var inst_31212 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31365_32774 = state_31284__$1;
(statearr_31365_32774[(2)] = inst_31212);

(statearr_31365_32774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (5))){
var inst_31158 = cljs.core.deref(cs);
var inst_31159 = cljs.core.seq(inst_31158);
var inst_31160 = inst_31159;
var inst_31161 = null;
var inst_31162 = (0);
var inst_31163 = (0);
var state_31284__$1 = (function (){var statearr_31370 = state_31284;
(statearr_31370[(13)] = inst_31162);

(statearr_31370[(14)] = inst_31160);

(statearr_31370[(15)] = inst_31163);

(statearr_31370[(17)] = inst_31161);

return statearr_31370;
})();
var statearr_31373_32781 = state_31284__$1;
(statearr_31373_32781[(2)] = null);

(statearr_31373_32781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (14))){
var state_31284__$1 = state_31284;
var statearr_31378_32782 = state_31284__$1;
(statearr_31378_32782[(2)] = null);

(statearr_31378_32782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (45))){
var inst_31273 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31379_32783 = state_31284__$1;
(statearr_31379_32783[(2)] = inst_31273);

(statearr_31379_32783[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (26))){
var inst_31215 = (state_31284[(29)]);
var inst_31269 = (state_31284[(2)]);
var inst_31270 = cljs.core.seq(inst_31215);
var state_31284__$1 = (function (){var statearr_31382 = state_31284;
(statearr_31382[(31)] = inst_31269);

return statearr_31382;
})();
if(inst_31270){
var statearr_31383_32784 = state_31284__$1;
(statearr_31383_32784[(1)] = (42));

} else {
var statearr_31384_32785 = state_31284__$1;
(statearr_31384_32785[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (16))){
var inst_31182 = (state_31284[(7)]);
var inst_31184 = cljs.core.chunked_seq_QMARK_(inst_31182);
var state_31284__$1 = state_31284;
if(inst_31184){
var statearr_31387_32787 = state_31284__$1;
(statearr_31387_32787[(1)] = (19));

} else {
var statearr_31389_32788 = state_31284__$1;
(statearr_31389_32788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (38))){
var inst_31262 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31390_32789 = state_31284__$1;
(statearr_31390_32789[(2)] = inst_31262);

(statearr_31390_32789[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (30))){
var state_31284__$1 = state_31284;
var statearr_31395_32790 = state_31284__$1;
(statearr_31395_32790[(2)] = null);

(statearr_31395_32790[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (10))){
var inst_31163 = (state_31284[(15)]);
var inst_31161 = (state_31284[(17)]);
var inst_31171 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31161,inst_31163);
var inst_31172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31171,(0),null);
var inst_31173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31171,(1),null);
var state_31284__$1 = (function (){var statearr_31396 = state_31284;
(statearr_31396[(26)] = inst_31172);

return statearr_31396;
})();
if(cljs.core.truth_(inst_31173)){
var statearr_31397_32791 = state_31284__$1;
(statearr_31397_32791[(1)] = (13));

} else {
var statearr_31398_32792 = state_31284__$1;
(statearr_31398_32792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (18))){
var inst_31208 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31400_32793 = state_31284__$1;
(statearr_31400_32793[(2)] = inst_31208);

(statearr_31400_32793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (42))){
var state_31284__$1 = state_31284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31284__$1,(45),dchan);
} else {
if((state_val_31285 === (37))){
var inst_31251 = (state_31284[(23)]);
var inst_31151 = (state_31284[(12)]);
var inst_31242 = (state_31284[(25)]);
var inst_31251__$1 = cljs.core.first(inst_31242);
var inst_31252 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31251__$1,inst_31151,done);
var state_31284__$1 = (function (){var statearr_31403 = state_31284;
(statearr_31403[(23)] = inst_31251__$1);

return statearr_31403;
})();
if(cljs.core.truth_(inst_31252)){
var statearr_31404_32794 = state_31284__$1;
(statearr_31404_32794[(1)] = (39));

} else {
var statearr_31405_32795 = state_31284__$1;
(statearr_31405_32795[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (8))){
var inst_31162 = (state_31284[(13)]);
var inst_31163 = (state_31284[(15)]);
var inst_31165 = (inst_31163 < inst_31162);
var inst_31166 = inst_31165;
var state_31284__$1 = state_31284;
if(cljs.core.truth_(inst_31166)){
var statearr_31406_32796 = state_31284__$1;
(statearr_31406_32796[(1)] = (10));

} else {
var statearr_31407_32799 = state_31284__$1;
(statearr_31407_32799[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__29914__auto__ = null;
var cljs$core$async$mult_$_state_machine__29914__auto____0 = (function (){
var statearr_31408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31408[(0)] = cljs$core$async$mult_$_state_machine__29914__auto__);

(statearr_31408[(1)] = (1));

return statearr_31408;
});
var cljs$core$async$mult_$_state_machine__29914__auto____1 = (function (state_31284){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_31284);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e31409){if((e31409 instanceof Object)){
var ex__29917__auto__ = e31409;
var statearr_31410_32800 = state_31284;
(statearr_31410_32800[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32801 = state_31284;
state_31284 = G__32801;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29914__auto__ = function(state_31284){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29914__auto____1.call(this,state_31284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29914__auto____0;
cljs$core$async$mult_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29914__auto____1;
return cljs$core$async$mult_$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_31417 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_31417[(6)] = c__30223__auto___32663);

return statearr_31417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31425 = arguments.length;
switch (G__31425) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32812 = arguments.length;
var i__4790__auto___32813 = (0);
while(true){
if((i__4790__auto___32813 < len__4789__auto___32812)){
args__4795__auto__.push((arguments[i__4790__auto___32813]));

var G__32814 = (i__4790__auto___32813 + (1));
i__4790__auto___32813 = G__32814;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31479){
var map__31481 = p__31479;
var map__31481__$1 = (((((!((map__31481 == null))))?(((((map__31481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31481):map__31481);
var opts = map__31481__$1;
var statearr_31488_32815 = state;
(statearr_31488_32815[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31489_32817 = state;
(statearr_31489_32817[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31493_32821 = state;
(statearr_31493_32821[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31467){
var G__31468 = cljs.core.first(seq31467);
var seq31467__$1 = cljs.core.next(seq31467);
var G__31469 = cljs.core.first(seq31467__$1);
var seq31467__$2 = cljs.core.next(seq31467__$1);
var G__31470 = cljs.core.first(seq31467__$2);
var seq31467__$3 = cljs.core.next(seq31467__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31468,G__31469,G__31470,seq31467__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31508 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31509){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31509 = meta31509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31510,meta31509__$1){
var self__ = this;
var _31510__$1 = this;
return (new cljs.core.async.t_cljs$core$async31508(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31509__$1));
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31510){
var self__ = this;
var _31510__$1 = this;
return self__.meta31509;
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31509","meta31509",571921484,null)], null);
}));

(cljs.core.async.t_cljs$core$async31508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31508");

(cljs.core.async.t_cljs$core$async31508.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31508.
 */
cljs.core.async.__GT_t_cljs$core$async31508 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31508(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31509){
return (new cljs.core.async.t_cljs$core$async31508(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31509));
});

}

return (new cljs.core.async.t_cljs$core$async31508(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30223__auto___32845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_31646){
var state_val_31648 = (state_31646[(1)]);
if((state_val_31648 === (7))){
var inst_31549 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31652_32846 = state_31646__$1;
(statearr_31652_32846[(2)] = inst_31549);

(statearr_31652_32846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (20))){
var inst_31561 = (state_31646[(7)]);
var state_31646__$1 = state_31646;
var statearr_31655_32847 = state_31646__$1;
(statearr_31655_32847[(2)] = inst_31561);

(statearr_31655_32847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (27))){
var state_31646__$1 = state_31646;
var statearr_31657_32848 = state_31646__$1;
(statearr_31657_32848[(2)] = null);

(statearr_31657_32848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (1))){
var inst_31536 = (state_31646[(8)]);
var inst_31536__$1 = calc_state();
var inst_31538 = (inst_31536__$1 == null);
var inst_31539 = cljs.core.not(inst_31538);
var state_31646__$1 = (function (){var statearr_31659 = state_31646;
(statearr_31659[(8)] = inst_31536__$1);

return statearr_31659;
})();
if(inst_31539){
var statearr_31661_32849 = state_31646__$1;
(statearr_31661_32849[(1)] = (2));

} else {
var statearr_31663_32850 = state_31646__$1;
(statearr_31663_32850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (24))){
var inst_31614 = (state_31646[(9)]);
var inst_31598 = (state_31646[(10)]);
var inst_31589 = (state_31646[(11)]);
var inst_31614__$1 = (inst_31589.cljs$core$IFn$_invoke$arity$1 ? inst_31589.cljs$core$IFn$_invoke$arity$1(inst_31598) : inst_31589.call(null,inst_31598));
var state_31646__$1 = (function (){var statearr_31668 = state_31646;
(statearr_31668[(9)] = inst_31614__$1);

return statearr_31668;
})();
if(cljs.core.truth_(inst_31614__$1)){
var statearr_31669_32857 = state_31646__$1;
(statearr_31669_32857[(1)] = (29));

} else {
var statearr_31670_32858 = state_31646__$1;
(statearr_31670_32858[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (4))){
var inst_31552 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31552)){
var statearr_31673_32859 = state_31646__$1;
(statearr_31673_32859[(1)] = (8));

} else {
var statearr_31678_32860 = state_31646__$1;
(statearr_31678_32860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (15))){
var inst_31579 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31579)){
var statearr_31679_32861 = state_31646__$1;
(statearr_31679_32861[(1)] = (19));

} else {
var statearr_31680_32862 = state_31646__$1;
(statearr_31680_32862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (21))){
var inst_31588 = (state_31646[(12)]);
var inst_31588__$1 = (state_31646[(2)]);
var inst_31589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31588__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31588__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31588__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31646__$1 = (function (){var statearr_31683 = state_31646;
(statearr_31683[(13)] = inst_31590);

(statearr_31683[(12)] = inst_31588__$1);

(statearr_31683[(11)] = inst_31589);

return statearr_31683;
})();
return cljs.core.async.ioc_alts_BANG_(state_31646__$1,(22),inst_31591);
} else {
if((state_val_31648 === (31))){
var inst_31626 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31626)){
var statearr_31684_32863 = state_31646__$1;
(statearr_31684_32863[(1)] = (32));

} else {
var statearr_31689_32864 = state_31646__$1;
(statearr_31689_32864[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (32))){
var inst_31597 = (state_31646[(14)]);
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31646__$1,(35),out,inst_31597);
} else {
if((state_val_31648 === (33))){
var inst_31588 = (state_31646[(12)]);
var inst_31561 = inst_31588;
var state_31646__$1 = (function (){var statearr_31691 = state_31646;
(statearr_31691[(7)] = inst_31561);

return statearr_31691;
})();
var statearr_31694_32865 = state_31646__$1;
(statearr_31694_32865[(2)] = null);

(statearr_31694_32865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (13))){
var inst_31561 = (state_31646[(7)]);
var inst_31568 = inst_31561.cljs$lang$protocol_mask$partition0$;
var inst_31569 = (inst_31568 & (64));
var inst_31570 = inst_31561.cljs$core$ISeq$;
var inst_31571 = (cljs.core.PROTOCOL_SENTINEL === inst_31570);
var inst_31572 = ((inst_31569) || (inst_31571));
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31572)){
var statearr_31697_32866 = state_31646__$1;
(statearr_31697_32866[(1)] = (16));

} else {
var statearr_31702_32867 = state_31646__$1;
(statearr_31702_32867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (22))){
var inst_31597 = (state_31646[(14)]);
var inst_31598 = (state_31646[(10)]);
var inst_31596 = (state_31646[(2)]);
var inst_31597__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31596,(0),null);
var inst_31598__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31596,(1),null);
var inst_31601 = (inst_31597__$1 == null);
var inst_31602 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31598__$1,change);
var inst_31603 = ((inst_31601) || (inst_31602));
var state_31646__$1 = (function (){var statearr_31703 = state_31646;
(statearr_31703[(14)] = inst_31597__$1);

(statearr_31703[(10)] = inst_31598__$1);

return statearr_31703;
})();
if(cljs.core.truth_(inst_31603)){
var statearr_31704_32874 = state_31646__$1;
(statearr_31704_32874[(1)] = (23));

} else {
var statearr_31707_32875 = state_31646__$1;
(statearr_31707_32875[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (36))){
var inst_31588 = (state_31646[(12)]);
var inst_31561 = inst_31588;
var state_31646__$1 = (function (){var statearr_31708 = state_31646;
(statearr_31708[(7)] = inst_31561);

return statearr_31708;
})();
var statearr_31709_32876 = state_31646__$1;
(statearr_31709_32876[(2)] = null);

(statearr_31709_32876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (29))){
var inst_31614 = (state_31646[(9)]);
var state_31646__$1 = state_31646;
var statearr_31710_32877 = state_31646__$1;
(statearr_31710_32877[(2)] = inst_31614);

(statearr_31710_32877[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (6))){
var state_31646__$1 = state_31646;
var statearr_31711_32878 = state_31646__$1;
(statearr_31711_32878[(2)] = false);

(statearr_31711_32878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (28))){
var inst_31610 = (state_31646[(2)]);
var inst_31611 = calc_state();
var inst_31561 = inst_31611;
var state_31646__$1 = (function (){var statearr_31712 = state_31646;
(statearr_31712[(7)] = inst_31561);

(statearr_31712[(15)] = inst_31610);

return statearr_31712;
})();
var statearr_31713_32879 = state_31646__$1;
(statearr_31713_32879[(2)] = null);

(statearr_31713_32879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (25))){
var inst_31640 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31714_32880 = state_31646__$1;
(statearr_31714_32880[(2)] = inst_31640);

(statearr_31714_32880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (34))){
var inst_31638 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31716_32881 = state_31646__$1;
(statearr_31716_32881[(2)] = inst_31638);

(statearr_31716_32881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (17))){
var state_31646__$1 = state_31646;
var statearr_31718_32882 = state_31646__$1;
(statearr_31718_32882[(2)] = false);

(statearr_31718_32882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (3))){
var state_31646__$1 = state_31646;
var statearr_31720_32883 = state_31646__$1;
(statearr_31720_32883[(2)] = false);

(statearr_31720_32883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (12))){
var inst_31642 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31646__$1,inst_31642);
} else {
if((state_val_31648 === (2))){
var inst_31536 = (state_31646[(8)]);
var inst_31541 = inst_31536.cljs$lang$protocol_mask$partition0$;
var inst_31542 = (inst_31541 & (64));
var inst_31543 = inst_31536.cljs$core$ISeq$;
var inst_31544 = (cljs.core.PROTOCOL_SENTINEL === inst_31543);
var inst_31545 = ((inst_31542) || (inst_31544));
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31545)){
var statearr_31729_32884 = state_31646__$1;
(statearr_31729_32884[(1)] = (5));

} else {
var statearr_31730_32885 = state_31646__$1;
(statearr_31730_32885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (23))){
var inst_31597 = (state_31646[(14)]);
var inst_31605 = (inst_31597 == null);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31605)){
var statearr_31731_32886 = state_31646__$1;
(statearr_31731_32886[(1)] = (26));

} else {
var statearr_31732_32887 = state_31646__$1;
(statearr_31732_32887[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (35))){
var inst_31629 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31629)){
var statearr_31733_32888 = state_31646__$1;
(statearr_31733_32888[(1)] = (36));

} else {
var statearr_31734_32889 = state_31646__$1;
(statearr_31734_32889[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (19))){
var inst_31561 = (state_31646[(7)]);
var inst_31585 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31561);
var state_31646__$1 = state_31646;
var statearr_31736_32890 = state_31646__$1;
(statearr_31736_32890[(2)] = inst_31585);

(statearr_31736_32890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (11))){
var inst_31561 = (state_31646[(7)]);
var inst_31565 = (inst_31561 == null);
var inst_31566 = cljs.core.not(inst_31565);
var state_31646__$1 = state_31646;
if(inst_31566){
var statearr_31737_32891 = state_31646__$1;
(statearr_31737_32891[(1)] = (13));

} else {
var statearr_31738_32892 = state_31646__$1;
(statearr_31738_32892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (9))){
var inst_31536 = (state_31646[(8)]);
var state_31646__$1 = state_31646;
var statearr_31739_32893 = state_31646__$1;
(statearr_31739_32893[(2)] = inst_31536);

(statearr_31739_32893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (5))){
var state_31646__$1 = state_31646;
var statearr_31740_32894 = state_31646__$1;
(statearr_31740_32894[(2)] = true);

(statearr_31740_32894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (14))){
var state_31646__$1 = state_31646;
var statearr_31741_32895 = state_31646__$1;
(statearr_31741_32895[(2)] = false);

(statearr_31741_32895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (26))){
var inst_31598 = (state_31646[(10)]);
var inst_31607 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31598);
var state_31646__$1 = state_31646;
var statearr_31742_32896 = state_31646__$1;
(statearr_31742_32896[(2)] = inst_31607);

(statearr_31742_32896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (16))){
var state_31646__$1 = state_31646;
var statearr_31743_32897 = state_31646__$1;
(statearr_31743_32897[(2)] = true);

(statearr_31743_32897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (38))){
var inst_31634 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31744_32898 = state_31646__$1;
(statearr_31744_32898[(2)] = inst_31634);

(statearr_31744_32898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (30))){
var inst_31590 = (state_31646[(13)]);
var inst_31598 = (state_31646[(10)]);
var inst_31589 = (state_31646[(11)]);
var inst_31621 = cljs.core.empty_QMARK_(inst_31589);
var inst_31622 = (inst_31590.cljs$core$IFn$_invoke$arity$1 ? inst_31590.cljs$core$IFn$_invoke$arity$1(inst_31598) : inst_31590.call(null,inst_31598));
var inst_31623 = cljs.core.not(inst_31622);
var inst_31624 = ((inst_31621) && (inst_31623));
var state_31646__$1 = state_31646;
var statearr_31745_32899 = state_31646__$1;
(statearr_31745_32899[(2)] = inst_31624);

(statearr_31745_32899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (10))){
var inst_31536 = (state_31646[(8)]);
var inst_31557 = (state_31646[(2)]);
var inst_31558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31557,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31557,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31557,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31561 = inst_31536;
var state_31646__$1 = (function (){var statearr_31746 = state_31646;
(statearr_31746[(7)] = inst_31561);

(statearr_31746[(16)] = inst_31558);

(statearr_31746[(17)] = inst_31559);

(statearr_31746[(18)] = inst_31560);

return statearr_31746;
})();
var statearr_31747_32900 = state_31646__$1;
(statearr_31747_32900[(2)] = null);

(statearr_31747_32900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (18))){
var inst_31576 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31748_32901 = state_31646__$1;
(statearr_31748_32901[(2)] = inst_31576);

(statearr_31748_32901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (37))){
var state_31646__$1 = state_31646;
var statearr_31749_32902 = state_31646__$1;
(statearr_31749_32902[(2)] = null);

(statearr_31749_32902[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (8))){
var inst_31536 = (state_31646[(8)]);
var inst_31554 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31536);
var state_31646__$1 = state_31646;
var statearr_31750_32904 = state_31646__$1;
(statearr_31750_32904[(2)] = inst_31554);

(statearr_31750_32904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__29914__auto__ = null;
var cljs$core$async$mix_$_state_machine__29914__auto____0 = (function (){
var statearr_31752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31752[(0)] = cljs$core$async$mix_$_state_machine__29914__auto__);

(statearr_31752[(1)] = (1));

return statearr_31752;
});
var cljs$core$async$mix_$_state_machine__29914__auto____1 = (function (state_31646){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_31646);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e31753){if((e31753 instanceof Object)){
var ex__29917__auto__ = e31753;
var statearr_31754_32910 = state_31646;
(statearr_31754_32910[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32911 = state_31646;
state_31646 = G__32911;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29914__auto__ = function(state_31646){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29914__auto____1.call(this,state_31646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29914__auto____0;
cljs$core$async$mix_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29914__auto____1;
return cljs$core$async$mix_$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_31755 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_31755[(6)] = c__30223__auto___32845);

return statearr_31755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31770 = arguments.length;
switch (G__31770) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__31773 = arguments.length;
switch (G__31773) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31771_SHARP_){
if(cljs.core.truth_((p1__31771_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31771_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31771_SHARP_.call(null,topic)))){
return p1__31771_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31771_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31774 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31775){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31775 = meta31775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31776,meta31775__$1){
var self__ = this;
var _31776__$1 = this;
return (new cljs.core.async.t_cljs$core$async31774(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31775__$1));
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31776){
var self__ = this;
var _31776__$1 = this;
return self__.meta31775;
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31774.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31775","meta31775",739762635,null)], null);
}));

(cljs.core.async.t_cljs$core$async31774.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31774");

(cljs.core.async.t_cljs$core$async31774.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31774");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31774.
 */
cljs.core.async.__GT_t_cljs$core$async31774 = (function cljs$core$async$__GT_t_cljs$core$async31774(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31775){
return (new cljs.core.async.t_cljs$core$async31774(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31775));
});

}

return (new cljs.core.async.t_cljs$core$async31774(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30223__auto___32922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_31848){
var state_val_31849 = (state_31848[(1)]);
if((state_val_31849 === (7))){
var inst_31844 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31850_32923 = state_31848__$1;
(statearr_31850_32923[(2)] = inst_31844);

(statearr_31850_32923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (20))){
var state_31848__$1 = state_31848;
var statearr_31851_32924 = state_31848__$1;
(statearr_31851_32924[(2)] = null);

(statearr_31851_32924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (1))){
var state_31848__$1 = state_31848;
var statearr_31852_32925 = state_31848__$1;
(statearr_31852_32925[(2)] = null);

(statearr_31852_32925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (24))){
var inst_31827 = (state_31848[(7)]);
var inst_31836 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31827);
var state_31848__$1 = state_31848;
var statearr_31853_32926 = state_31848__$1;
(statearr_31853_32926[(2)] = inst_31836);

(statearr_31853_32926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (4))){
var inst_31779 = (state_31848[(8)]);
var inst_31779__$1 = (state_31848[(2)]);
var inst_31780 = (inst_31779__$1 == null);
var state_31848__$1 = (function (){var statearr_31854 = state_31848;
(statearr_31854[(8)] = inst_31779__$1);

return statearr_31854;
})();
if(cljs.core.truth_(inst_31780)){
var statearr_31855_32927 = state_31848__$1;
(statearr_31855_32927[(1)] = (5));

} else {
var statearr_31856_32928 = state_31848__$1;
(statearr_31856_32928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (15))){
var inst_31821 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31857_32929 = state_31848__$1;
(statearr_31857_32929[(2)] = inst_31821);

(statearr_31857_32929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (21))){
var inst_31841 = (state_31848[(2)]);
var state_31848__$1 = (function (){var statearr_31858 = state_31848;
(statearr_31858[(9)] = inst_31841);

return statearr_31858;
})();
var statearr_31859_32930 = state_31848__$1;
(statearr_31859_32930[(2)] = null);

(statearr_31859_32930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (13))){
var inst_31803 = (state_31848[(10)]);
var inst_31805 = cljs.core.chunked_seq_QMARK_(inst_31803);
var state_31848__$1 = state_31848;
if(inst_31805){
var statearr_31860_32931 = state_31848__$1;
(statearr_31860_32931[(1)] = (16));

} else {
var statearr_31861_32932 = state_31848__$1;
(statearr_31861_32932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (22))){
var inst_31833 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
if(cljs.core.truth_(inst_31833)){
var statearr_31862_32933 = state_31848__$1;
(statearr_31862_32933[(1)] = (23));

} else {
var statearr_31863_32934 = state_31848__$1;
(statearr_31863_32934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (6))){
var inst_31829 = (state_31848[(11)]);
var inst_31779 = (state_31848[(8)]);
var inst_31827 = (state_31848[(7)]);
var inst_31827__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31779) : topic_fn.call(null,inst_31779));
var inst_31828 = cljs.core.deref(mults);
var inst_31829__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31828,inst_31827__$1);
var state_31848__$1 = (function (){var statearr_31864 = state_31848;
(statearr_31864[(11)] = inst_31829__$1);

(statearr_31864[(7)] = inst_31827__$1);

return statearr_31864;
})();
if(cljs.core.truth_(inst_31829__$1)){
var statearr_31865_32935 = state_31848__$1;
(statearr_31865_32935[(1)] = (19));

} else {
var statearr_31866_32937 = state_31848__$1;
(statearr_31866_32937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (25))){
var inst_31838 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31867_32938 = state_31848__$1;
(statearr_31867_32938[(2)] = inst_31838);

(statearr_31867_32938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (17))){
var inst_31803 = (state_31848[(10)]);
var inst_31812 = cljs.core.first(inst_31803);
var inst_31813 = cljs.core.async.muxch_STAR_(inst_31812);
var inst_31814 = cljs.core.async.close_BANG_(inst_31813);
var inst_31815 = cljs.core.next(inst_31803);
var inst_31789 = inst_31815;
var inst_31790 = null;
var inst_31791 = (0);
var inst_31792 = (0);
var state_31848__$1 = (function (){var statearr_31868 = state_31848;
(statearr_31868[(12)] = inst_31789);

(statearr_31868[(13)] = inst_31791);

(statearr_31868[(14)] = inst_31814);

(statearr_31868[(15)] = inst_31792);

(statearr_31868[(16)] = inst_31790);

return statearr_31868;
})();
var statearr_31869_32939 = state_31848__$1;
(statearr_31869_32939[(2)] = null);

(statearr_31869_32939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (3))){
var inst_31846 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31848__$1,inst_31846);
} else {
if((state_val_31849 === (12))){
var inst_31823 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31870_32944 = state_31848__$1;
(statearr_31870_32944[(2)] = inst_31823);

(statearr_31870_32944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (2))){
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31848__$1,(4),ch);
} else {
if((state_val_31849 === (23))){
var state_31848__$1 = state_31848;
var statearr_31871_32945 = state_31848__$1;
(statearr_31871_32945[(2)] = null);

(statearr_31871_32945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (19))){
var inst_31829 = (state_31848[(11)]);
var inst_31779 = (state_31848[(8)]);
var inst_31831 = cljs.core.async.muxch_STAR_(inst_31829);
var state_31848__$1 = state_31848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31848__$1,(22),inst_31831,inst_31779);
} else {
if((state_val_31849 === (11))){
var inst_31789 = (state_31848[(12)]);
var inst_31803 = (state_31848[(10)]);
var inst_31803__$1 = cljs.core.seq(inst_31789);
var state_31848__$1 = (function (){var statearr_31872 = state_31848;
(statearr_31872[(10)] = inst_31803__$1);

return statearr_31872;
})();
if(inst_31803__$1){
var statearr_31873_32946 = state_31848__$1;
(statearr_31873_32946[(1)] = (13));

} else {
var statearr_31874_32947 = state_31848__$1;
(statearr_31874_32947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (9))){
var inst_31825 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31875_32948 = state_31848__$1;
(statearr_31875_32948[(2)] = inst_31825);

(statearr_31875_32948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (5))){
var inst_31786 = cljs.core.deref(mults);
var inst_31787 = cljs.core.vals(inst_31786);
var inst_31788 = cljs.core.seq(inst_31787);
var inst_31789 = inst_31788;
var inst_31790 = null;
var inst_31791 = (0);
var inst_31792 = (0);
var state_31848__$1 = (function (){var statearr_31876 = state_31848;
(statearr_31876[(12)] = inst_31789);

(statearr_31876[(13)] = inst_31791);

(statearr_31876[(15)] = inst_31792);

(statearr_31876[(16)] = inst_31790);

return statearr_31876;
})();
var statearr_31877_32949 = state_31848__$1;
(statearr_31877_32949[(2)] = null);

(statearr_31877_32949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (14))){
var state_31848__$1 = state_31848;
var statearr_31881_32950 = state_31848__$1;
(statearr_31881_32950[(2)] = null);

(statearr_31881_32950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (16))){
var inst_31803 = (state_31848[(10)]);
var inst_31807 = cljs.core.chunk_first(inst_31803);
var inst_31808 = cljs.core.chunk_rest(inst_31803);
var inst_31809 = cljs.core.count(inst_31807);
var inst_31789 = inst_31808;
var inst_31790 = inst_31807;
var inst_31791 = inst_31809;
var inst_31792 = (0);
var state_31848__$1 = (function (){var statearr_31882 = state_31848;
(statearr_31882[(12)] = inst_31789);

(statearr_31882[(13)] = inst_31791);

(statearr_31882[(15)] = inst_31792);

(statearr_31882[(16)] = inst_31790);

return statearr_31882;
})();
var statearr_31883_32951 = state_31848__$1;
(statearr_31883_32951[(2)] = null);

(statearr_31883_32951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (10))){
var inst_31789 = (state_31848[(12)]);
var inst_31791 = (state_31848[(13)]);
var inst_31792 = (state_31848[(15)]);
var inst_31790 = (state_31848[(16)]);
var inst_31797 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31790,inst_31792);
var inst_31798 = cljs.core.async.muxch_STAR_(inst_31797);
var inst_31799 = cljs.core.async.close_BANG_(inst_31798);
var inst_31800 = (inst_31792 + (1));
var tmp31878 = inst_31789;
var tmp31879 = inst_31791;
var tmp31880 = inst_31790;
var inst_31789__$1 = tmp31878;
var inst_31790__$1 = tmp31880;
var inst_31791__$1 = tmp31879;
var inst_31792__$1 = inst_31800;
var state_31848__$1 = (function (){var statearr_31884 = state_31848;
(statearr_31884[(12)] = inst_31789__$1);

(statearr_31884[(13)] = inst_31791__$1);

(statearr_31884[(15)] = inst_31792__$1);

(statearr_31884[(17)] = inst_31799);

(statearr_31884[(16)] = inst_31790__$1);

return statearr_31884;
})();
var statearr_31885_32956 = state_31848__$1;
(statearr_31885_32956[(2)] = null);

(statearr_31885_32956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (18))){
var inst_31818 = (state_31848[(2)]);
var state_31848__$1 = state_31848;
var statearr_31886_32960 = state_31848__$1;
(statearr_31886_32960[(2)] = inst_31818);

(statearr_31886_32960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31849 === (8))){
var inst_31791 = (state_31848[(13)]);
var inst_31792 = (state_31848[(15)]);
var inst_31794 = (inst_31792 < inst_31791);
var inst_31795 = inst_31794;
var state_31848__$1 = state_31848;
if(cljs.core.truth_(inst_31795)){
var statearr_31887_32961 = state_31848__$1;
(statearr_31887_32961[(1)] = (10));

} else {
var statearr_31888_32962 = state_31848__$1;
(statearr_31888_32962[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_31889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31889[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_31889[(1)] = (1));

return statearr_31889;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_31848){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_31848);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e31890){if((e31890 instanceof Object)){
var ex__29917__auto__ = e31890;
var statearr_31891_32969 = state_31848;
(statearr_31891_32969[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32970 = state_31848;
state_31848 = G__32970;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_31848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_31848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_31892 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_31892[(6)] = c__30223__auto___32922);

return statearr_31892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31894 = arguments.length;
switch (G__31894) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__31896 = arguments.length;
switch (G__31896) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__31898 = arguments.length;
switch (G__31898) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30223__auto___32985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_31937){
var state_val_31938 = (state_31937[(1)]);
if((state_val_31938 === (7))){
var state_31937__$1 = state_31937;
var statearr_31939_32986 = state_31937__$1;
(statearr_31939_32986[(2)] = null);

(statearr_31939_32986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (1))){
var state_31937__$1 = state_31937;
var statearr_31940_32987 = state_31937__$1;
(statearr_31940_32987[(2)] = null);

(statearr_31940_32987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (4))){
var inst_31901 = (state_31937[(7)]);
var inst_31903 = (inst_31901 < cnt);
var state_31937__$1 = state_31937;
if(cljs.core.truth_(inst_31903)){
var statearr_31941_32990 = state_31937__$1;
(statearr_31941_32990[(1)] = (6));

} else {
var statearr_31942_32991 = state_31937__$1;
(statearr_31942_32991[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (15))){
var inst_31933 = (state_31937[(2)]);
var state_31937__$1 = state_31937;
var statearr_31943_32992 = state_31937__$1;
(statearr_31943_32992[(2)] = inst_31933);

(statearr_31943_32992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (13))){
var inst_31926 = cljs.core.async.close_BANG_(out);
var state_31937__$1 = state_31937;
var statearr_31944_32996 = state_31937__$1;
(statearr_31944_32996[(2)] = inst_31926);

(statearr_31944_32996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (6))){
var state_31937__$1 = state_31937;
var statearr_31945_32997 = state_31937__$1;
(statearr_31945_32997[(2)] = null);

(statearr_31945_32997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (3))){
var inst_31935 = (state_31937[(2)]);
var state_31937__$1 = state_31937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31937__$1,inst_31935);
} else {
if((state_val_31938 === (12))){
var inst_31923 = (state_31937[(8)]);
var inst_31923__$1 = (state_31937[(2)]);
var inst_31924 = cljs.core.some(cljs.core.nil_QMARK_,inst_31923__$1);
var state_31937__$1 = (function (){var statearr_31946 = state_31937;
(statearr_31946[(8)] = inst_31923__$1);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31924)){
var statearr_31947_32999 = state_31937__$1;
(statearr_31947_32999[(1)] = (13));

} else {
var statearr_31948_33000 = state_31937__$1;
(statearr_31948_33000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (2))){
var inst_31900 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31901 = (0);
var state_31937__$1 = (function (){var statearr_31949 = state_31937;
(statearr_31949[(9)] = inst_31900);

(statearr_31949[(7)] = inst_31901);

return statearr_31949;
})();
var statearr_31950_33003 = state_31937__$1;
(statearr_31950_33003[(2)] = null);

(statearr_31950_33003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (11))){
var inst_31901 = (state_31937[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31937,(10),Object,null,(9));
var inst_31910 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31901) : chs__$1.call(null,inst_31901));
var inst_31911 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31901) : done.call(null,inst_31901));
var inst_31912 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31910,inst_31911);
var state_31937__$1 = state_31937;
var statearr_31951_33004 = state_31937__$1;
(statearr_31951_33004[(2)] = inst_31912);


cljs.core.async.impl.ioc_helpers.process_exception(state_31937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (9))){
var inst_31901 = (state_31937[(7)]);
var inst_31914 = (state_31937[(2)]);
var inst_31915 = (inst_31901 + (1));
var inst_31901__$1 = inst_31915;
var state_31937__$1 = (function (){var statearr_31952 = state_31937;
(statearr_31952[(7)] = inst_31901__$1);

(statearr_31952[(10)] = inst_31914);

return statearr_31952;
})();
var statearr_31953_33005 = state_31937__$1;
(statearr_31953_33005[(2)] = null);

(statearr_31953_33005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (5))){
var inst_31921 = (state_31937[(2)]);
var state_31937__$1 = (function (){var statearr_31954 = state_31937;
(statearr_31954[(11)] = inst_31921);

return statearr_31954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31937__$1,(12),dchan);
} else {
if((state_val_31938 === (14))){
var inst_31923 = (state_31937[(8)]);
var inst_31928 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31923);
var state_31937__$1 = state_31937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31937__$1,(16),out,inst_31928);
} else {
if((state_val_31938 === (16))){
var inst_31930 = (state_31937[(2)]);
var state_31937__$1 = (function (){var statearr_31955 = state_31937;
(statearr_31955[(12)] = inst_31930);

return statearr_31955;
})();
var statearr_31956_33006 = state_31937__$1;
(statearr_31956_33006[(2)] = null);

(statearr_31956_33006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (10))){
var inst_31905 = (state_31937[(2)]);
var inst_31906 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31937__$1 = (function (){var statearr_31957 = state_31937;
(statearr_31957[(13)] = inst_31905);

return statearr_31957;
})();
var statearr_31958_33007 = state_31937__$1;
(statearr_31958_33007[(2)] = inst_31906);


cljs.core.async.impl.ioc_helpers.process_exception(state_31937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31938 === (8))){
var inst_31919 = (state_31937[(2)]);
var state_31937__$1 = state_31937;
var statearr_31959_33008 = state_31937__$1;
(statearr_31959_33008[(2)] = inst_31919);

(statearr_31959_33008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_31960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31960[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_31960[(1)] = (1));

return statearr_31960;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_31937){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_31937);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e31961){if((e31961 instanceof Object)){
var ex__29917__auto__ = e31961;
var statearr_31962_33009 = state_31937;
(statearr_31962_33009[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33010 = state_31937;
state_31937 = G__33010;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_31937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_31937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_31963 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_31963[(6)] = c__30223__auto___32985);

return statearr_31963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31966 = arguments.length;
switch (G__31966) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30223__auto___33012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_31998){
var state_val_31999 = (state_31998[(1)]);
if((state_val_31999 === (7))){
var inst_31977 = (state_31998[(7)]);
var inst_31978 = (state_31998[(8)]);
var inst_31977__$1 = (state_31998[(2)]);
var inst_31978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977__$1,(0),null);
var inst_31979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31977__$1,(1),null);
var inst_31980 = (inst_31978__$1 == null);
var state_31998__$1 = (function (){var statearr_32000 = state_31998;
(statearr_32000[(7)] = inst_31977__$1);

(statearr_32000[(9)] = inst_31979);

(statearr_32000[(8)] = inst_31978__$1);

return statearr_32000;
})();
if(cljs.core.truth_(inst_31980)){
var statearr_32001_33017 = state_31998__$1;
(statearr_32001_33017[(1)] = (8));

} else {
var statearr_32002_33018 = state_31998__$1;
(statearr_32002_33018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (1))){
var inst_31967 = cljs.core.vec(chs);
var inst_31968 = inst_31967;
var state_31998__$1 = (function (){var statearr_32003 = state_31998;
(statearr_32003[(10)] = inst_31968);

return statearr_32003;
})();
var statearr_32004_33019 = state_31998__$1;
(statearr_32004_33019[(2)] = null);

(statearr_32004_33019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (4))){
var inst_31968 = (state_31998[(10)]);
var state_31998__$1 = state_31998;
return cljs.core.async.ioc_alts_BANG_(state_31998__$1,(7),inst_31968);
} else {
if((state_val_31999 === (6))){
var inst_31994 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32005_33020 = state_31998__$1;
(statearr_32005_33020[(2)] = inst_31994);

(statearr_32005_33020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (3))){
var inst_31996 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31998__$1,inst_31996);
} else {
if((state_val_31999 === (2))){
var inst_31968 = (state_31998[(10)]);
var inst_31970 = cljs.core.count(inst_31968);
var inst_31971 = (inst_31970 > (0));
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31971)){
var statearr_32007_33021 = state_31998__$1;
(statearr_32007_33021[(1)] = (4));

} else {
var statearr_32008_33022 = state_31998__$1;
(statearr_32008_33022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (11))){
var inst_31968 = (state_31998[(10)]);
var inst_31987 = (state_31998[(2)]);
var tmp32006 = inst_31968;
var inst_31968__$1 = tmp32006;
var state_31998__$1 = (function (){var statearr_32009 = state_31998;
(statearr_32009[(11)] = inst_31987);

(statearr_32009[(10)] = inst_31968__$1);

return statearr_32009;
})();
var statearr_32010_33023 = state_31998__$1;
(statearr_32010_33023[(2)] = null);

(statearr_32010_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (9))){
var inst_31978 = (state_31998[(8)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31998__$1,(11),out,inst_31978);
} else {
if((state_val_31999 === (5))){
var inst_31992 = cljs.core.async.close_BANG_(out);
var state_31998__$1 = state_31998;
var statearr_32011_33028 = state_31998__$1;
(statearr_32011_33028[(2)] = inst_31992);

(statearr_32011_33028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (10))){
var inst_31990 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32012_33030 = state_31998__$1;
(statearr_32012_33030[(2)] = inst_31990);

(statearr_32012_33030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (8))){
var inst_31977 = (state_31998[(7)]);
var inst_31979 = (state_31998[(9)]);
var inst_31968 = (state_31998[(10)]);
var inst_31978 = (state_31998[(8)]);
var inst_31982 = (function (){var cs = inst_31968;
var vec__31973 = inst_31977;
var v = inst_31978;
var c = inst_31979;
return (function (p1__31964_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31964_SHARP_);
});
})();
var inst_31983 = cljs.core.filterv(inst_31982,inst_31968);
var inst_31968__$1 = inst_31983;
var state_31998__$1 = (function (){var statearr_32013 = state_31998;
(statearr_32013[(10)] = inst_31968__$1);

return statearr_32013;
})();
var statearr_32014_33031 = state_31998__$1;
(statearr_32014_33031[(2)] = null);

(statearr_32014_33031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_32015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32015[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_32015[(1)] = (1));

return statearr_32015;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_31998){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_31998);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e32016){if((e32016 instanceof Object)){
var ex__29917__auto__ = e32016;
var statearr_32017_33033 = state_31998;
(statearr_32017_33033[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33034 = state_31998;
state_31998 = G__33034;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_31998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_31998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_32018 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_32018[(6)] = c__30223__auto___33012);

return statearr_32018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__32020 = arguments.length;
switch (G__32020) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30223__auto___33040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_32044){
var state_val_32045 = (state_32044[(1)]);
if((state_val_32045 === (7))){
var inst_32026 = (state_32044[(7)]);
var inst_32026__$1 = (state_32044[(2)]);
var inst_32027 = (inst_32026__$1 == null);
var inst_32028 = cljs.core.not(inst_32027);
var state_32044__$1 = (function (){var statearr_32046 = state_32044;
(statearr_32046[(7)] = inst_32026__$1);

return statearr_32046;
})();
if(inst_32028){
var statearr_32047_33041 = state_32044__$1;
(statearr_32047_33041[(1)] = (8));

} else {
var statearr_32048_33042 = state_32044__$1;
(statearr_32048_33042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (1))){
var inst_32021 = (0);
var state_32044__$1 = (function (){var statearr_32049 = state_32044;
(statearr_32049[(8)] = inst_32021);

return statearr_32049;
})();
var statearr_32050_33043 = state_32044__$1;
(statearr_32050_33043[(2)] = null);

(statearr_32050_33043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (4))){
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32044__$1,(7),ch);
} else {
if((state_val_32045 === (6))){
var inst_32039 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32051_33044 = state_32044__$1;
(statearr_32051_33044[(2)] = inst_32039);

(statearr_32051_33044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (3))){
var inst_32041 = (state_32044[(2)]);
var inst_32042 = cljs.core.async.close_BANG_(out);
var state_32044__$1 = (function (){var statearr_32052 = state_32044;
(statearr_32052[(9)] = inst_32041);

return statearr_32052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32044__$1,inst_32042);
} else {
if((state_val_32045 === (2))){
var inst_32021 = (state_32044[(8)]);
var inst_32023 = (inst_32021 < n);
var state_32044__$1 = state_32044;
if(cljs.core.truth_(inst_32023)){
var statearr_32053_33046 = state_32044__$1;
(statearr_32053_33046[(1)] = (4));

} else {
var statearr_32054_33047 = state_32044__$1;
(statearr_32054_33047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (11))){
var inst_32021 = (state_32044[(8)]);
var inst_32031 = (state_32044[(2)]);
var inst_32032 = (inst_32021 + (1));
var inst_32021__$1 = inst_32032;
var state_32044__$1 = (function (){var statearr_32055 = state_32044;
(statearr_32055[(8)] = inst_32021__$1);

(statearr_32055[(10)] = inst_32031);

return statearr_32055;
})();
var statearr_32056_33048 = state_32044__$1;
(statearr_32056_33048[(2)] = null);

(statearr_32056_33048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (9))){
var state_32044__$1 = state_32044;
var statearr_32057_33049 = state_32044__$1;
(statearr_32057_33049[(2)] = null);

(statearr_32057_33049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (5))){
var state_32044__$1 = state_32044;
var statearr_32058_33050 = state_32044__$1;
(statearr_32058_33050[(2)] = null);

(statearr_32058_33050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (10))){
var inst_32036 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32059_33051 = state_32044__$1;
(statearr_32059_33051[(2)] = inst_32036);

(statearr_32059_33051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32045 === (8))){
var inst_32026 = (state_32044[(7)]);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32044__$1,(11),out,inst_32026);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_32060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32060[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_32060[(1)] = (1));

return statearr_32060;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_32044){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_32044);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e32061){if((e32061 instanceof Object)){
var ex__29917__auto__ = e32061;
var statearr_32062_33059 = state_32044;
(statearr_32062_33059[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33060 = state_32044;
state_32044 = G__33060;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_32044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_32044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_32063 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_32063[(6)] = c__30223__auto___33040);

return statearr_32063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32065 = (function (f,ch,meta32066){
this.f = f;
this.ch = ch;
this.meta32066 = meta32066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32067,meta32066__$1){
var self__ = this;
var _32067__$1 = this;
return (new cljs.core.async.t_cljs$core$async32065(self__.f,self__.ch,meta32066__$1));
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32067){
var self__ = this;
var _32067__$1 = this;
return self__.meta32066;
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32068 = (function (f,ch,meta32066,_,fn1,meta32069){
this.f = f;
this.ch = ch;
this.meta32066 = meta32066;
this._ = _;
this.fn1 = fn1;
this.meta32069 = meta32069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32070,meta32069__$1){
var self__ = this;
var _32070__$1 = this;
return (new cljs.core.async.t_cljs$core$async32068(self__.f,self__.ch,self__.meta32066,self__._,self__.fn1,meta32069__$1));
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32070){
var self__ = this;
var _32070__$1 = this;
return self__.meta32069;
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32064_SHARP_){
var G__32071 = (((p1__32064_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32064_SHARP_) : self__.f.call(null,p1__32064_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32071) : f1.call(null,G__32071));
});
}));

(cljs.core.async.t_cljs$core$async32068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32066","meta32066",-1003302684,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32065","cljs.core.async/t_cljs$core$async32065",-1628997228,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32069","meta32069",763657709,null)], null);
}));

(cljs.core.async.t_cljs$core$async32068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32068");

(cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32068.
 */
cljs.core.async.__GT_t_cljs$core$async32068 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32068(f__$1,ch__$1,meta32066__$1,___$2,fn1__$1,meta32069){
return (new cljs.core.async.t_cljs$core$async32068(f__$1,ch__$1,meta32066__$1,___$2,fn1__$1,meta32069));
});

}

return (new cljs.core.async.t_cljs$core$async32068(self__.f,self__.ch,self__.meta32066,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32072 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32072) : self__.f.call(null,G__32072));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32066","meta32066",-1003302684,null)], null);
}));

(cljs.core.async.t_cljs$core$async32065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32065");

(cljs.core.async.t_cljs$core$async32065.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32065.
 */
cljs.core.async.__GT_t_cljs$core$async32065 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32065(f__$1,ch__$1,meta32066){
return (new cljs.core.async.t_cljs$core$async32065(f__$1,ch__$1,meta32066));
});

}

return (new cljs.core.async.t_cljs$core$async32065(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32073 = (function (f,ch,meta32074){
this.f = f;
this.ch = ch;
this.meta32074 = meta32074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32075,meta32074__$1){
var self__ = this;
var _32075__$1 = this;
return (new cljs.core.async.t_cljs$core$async32073(self__.f,self__.ch,meta32074__$1));
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32075){
var self__ = this;
var _32075__$1 = this;
return self__.meta32074;
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32074","meta32074",1175675589,null)], null);
}));

(cljs.core.async.t_cljs$core$async32073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32073");

(cljs.core.async.t_cljs$core$async32073.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32073.
 */
cljs.core.async.__GT_t_cljs$core$async32073 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32073(f__$1,ch__$1,meta32074){
return (new cljs.core.async.t_cljs$core$async32073(f__$1,ch__$1,meta32074));
});

}

return (new cljs.core.async.t_cljs$core$async32073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32076 = (function (p,ch,meta32077){
this.p = p;
this.ch = ch;
this.meta32077 = meta32077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32078,meta32077__$1){
var self__ = this;
var _32078__$1 = this;
return (new cljs.core.async.t_cljs$core$async32076(self__.p,self__.ch,meta32077__$1));
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32078){
var self__ = this;
var _32078__$1 = this;
return self__.meta32077;
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32077","meta32077",-1464118207,null)], null);
}));

(cljs.core.async.t_cljs$core$async32076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32076");

(cljs.core.async.t_cljs$core$async32076.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async32076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32076.
 */
cljs.core.async.__GT_t_cljs$core$async32076 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32076(p__$1,ch__$1,meta32077){
return (new cljs.core.async.t_cljs$core$async32076(p__$1,ch__$1,meta32077));
});

}

return (new cljs.core.async.t_cljs$core$async32076(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32080 = arguments.length;
switch (G__32080) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30223__auto___33076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_32101){
var state_val_32102 = (state_32101[(1)]);
if((state_val_32102 === (7))){
var inst_32097 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32103_33077 = state_32101__$1;
(statearr_32103_33077[(2)] = inst_32097);

(statearr_32103_33077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (1))){
var state_32101__$1 = state_32101;
var statearr_32104_33078 = state_32101__$1;
(statearr_32104_33078[(2)] = null);

(statearr_32104_33078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (4))){
var inst_32083 = (state_32101[(7)]);
var inst_32083__$1 = (state_32101[(2)]);
var inst_32084 = (inst_32083__$1 == null);
var state_32101__$1 = (function (){var statearr_32105 = state_32101;
(statearr_32105[(7)] = inst_32083__$1);

return statearr_32105;
})();
if(cljs.core.truth_(inst_32084)){
var statearr_32106_33079 = state_32101__$1;
(statearr_32106_33079[(1)] = (5));

} else {
var statearr_32107_33080 = state_32101__$1;
(statearr_32107_33080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (6))){
var inst_32083 = (state_32101[(7)]);
var inst_32088 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32083) : p.call(null,inst_32083));
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32088)){
var statearr_32108_33081 = state_32101__$1;
(statearr_32108_33081[(1)] = (8));

} else {
var statearr_32109_33082 = state_32101__$1;
(statearr_32109_33082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (3))){
var inst_32099 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32101__$1,inst_32099);
} else {
if((state_val_32102 === (2))){
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32101__$1,(4),ch);
} else {
if((state_val_32102 === (11))){
var inst_32091 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32110_33084 = state_32101__$1;
(statearr_32110_33084[(2)] = inst_32091);

(statearr_32110_33084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (9))){
var state_32101__$1 = state_32101;
var statearr_32111_33085 = state_32101__$1;
(statearr_32111_33085[(2)] = null);

(statearr_32111_33085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (5))){
var inst_32086 = cljs.core.async.close_BANG_(out);
var state_32101__$1 = state_32101;
var statearr_32112_33086 = state_32101__$1;
(statearr_32112_33086[(2)] = inst_32086);

(statearr_32112_33086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (10))){
var inst_32094 = (state_32101[(2)]);
var state_32101__$1 = (function (){var statearr_32113 = state_32101;
(statearr_32113[(8)] = inst_32094);

return statearr_32113;
})();
var statearr_32114_33087 = state_32101__$1;
(statearr_32114_33087[(2)] = null);

(statearr_32114_33087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (8))){
var inst_32083 = (state_32101[(7)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32101__$1,(11),out,inst_32083);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_32115 = [null,null,null,null,null,null,null,null,null];
(statearr_32115[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_32115[(1)] = (1));

return statearr_32115;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_32101){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_32101);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e32116){if((e32116 instanceof Object)){
var ex__29917__auto__ = e32116;
var statearr_32117_33088 = state_32101;
(statearr_32117_33088[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33089 = state_32101;
state_32101 = G__33089;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_32101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_32101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_32118 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_32118[(6)] = c__30223__auto___33076);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32120 = arguments.length;
switch (G__32120) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_32182){
var state_val_32183 = (state_32182[(1)]);
if((state_val_32183 === (7))){
var inst_32178 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32184_33098 = state_32182__$1;
(statearr_32184_33098[(2)] = inst_32178);

(statearr_32184_33098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (20))){
var inst_32148 = (state_32182[(7)]);
var inst_32159 = (state_32182[(2)]);
var inst_32160 = cljs.core.next(inst_32148);
var inst_32134 = inst_32160;
var inst_32135 = null;
var inst_32136 = (0);
var inst_32137 = (0);
var state_32182__$1 = (function (){var statearr_32185 = state_32182;
(statearr_32185[(8)] = inst_32134);

(statearr_32185[(9)] = inst_32137);

(statearr_32185[(10)] = inst_32135);

(statearr_32185[(11)] = inst_32136);

(statearr_32185[(12)] = inst_32159);

return statearr_32185;
})();
var statearr_32186_33099 = state_32182__$1;
(statearr_32186_33099[(2)] = null);

(statearr_32186_33099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (1))){
var state_32182__$1 = state_32182;
var statearr_32187_33100 = state_32182__$1;
(statearr_32187_33100[(2)] = null);

(statearr_32187_33100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (4))){
var inst_32123 = (state_32182[(13)]);
var inst_32123__$1 = (state_32182[(2)]);
var inst_32124 = (inst_32123__$1 == null);
var state_32182__$1 = (function (){var statearr_32188 = state_32182;
(statearr_32188[(13)] = inst_32123__$1);

return statearr_32188;
})();
if(cljs.core.truth_(inst_32124)){
var statearr_32189_33102 = state_32182__$1;
(statearr_32189_33102[(1)] = (5));

} else {
var statearr_32190_33103 = state_32182__$1;
(statearr_32190_33103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (15))){
var state_32182__$1 = state_32182;
var statearr_32194_33104 = state_32182__$1;
(statearr_32194_33104[(2)] = null);

(statearr_32194_33104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (21))){
var state_32182__$1 = state_32182;
var statearr_32195_33105 = state_32182__$1;
(statearr_32195_33105[(2)] = null);

(statearr_32195_33105[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (13))){
var inst_32134 = (state_32182[(8)]);
var inst_32137 = (state_32182[(9)]);
var inst_32135 = (state_32182[(10)]);
var inst_32136 = (state_32182[(11)]);
var inst_32144 = (state_32182[(2)]);
var inst_32145 = (inst_32137 + (1));
var tmp32191 = inst_32134;
var tmp32192 = inst_32135;
var tmp32193 = inst_32136;
var inst_32134__$1 = tmp32191;
var inst_32135__$1 = tmp32192;
var inst_32136__$1 = tmp32193;
var inst_32137__$1 = inst_32145;
var state_32182__$1 = (function (){var statearr_32196 = state_32182;
(statearr_32196[(8)] = inst_32134__$1);

(statearr_32196[(14)] = inst_32144);

(statearr_32196[(9)] = inst_32137__$1);

(statearr_32196[(10)] = inst_32135__$1);

(statearr_32196[(11)] = inst_32136__$1);

return statearr_32196;
})();
var statearr_32197_33106 = state_32182__$1;
(statearr_32197_33106[(2)] = null);

(statearr_32197_33106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (22))){
var state_32182__$1 = state_32182;
var statearr_32198_33107 = state_32182__$1;
(statearr_32198_33107[(2)] = null);

(statearr_32198_33107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (6))){
var inst_32123 = (state_32182[(13)]);
var inst_32132 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32123) : f.call(null,inst_32123));
var inst_32133 = cljs.core.seq(inst_32132);
var inst_32134 = inst_32133;
var inst_32135 = null;
var inst_32136 = (0);
var inst_32137 = (0);
var state_32182__$1 = (function (){var statearr_32199 = state_32182;
(statearr_32199[(8)] = inst_32134);

(statearr_32199[(9)] = inst_32137);

(statearr_32199[(10)] = inst_32135);

(statearr_32199[(11)] = inst_32136);

return statearr_32199;
})();
var statearr_32200_33109 = state_32182__$1;
(statearr_32200_33109[(2)] = null);

(statearr_32200_33109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (17))){
var inst_32148 = (state_32182[(7)]);
var inst_32152 = cljs.core.chunk_first(inst_32148);
var inst_32153 = cljs.core.chunk_rest(inst_32148);
var inst_32154 = cljs.core.count(inst_32152);
var inst_32134 = inst_32153;
var inst_32135 = inst_32152;
var inst_32136 = inst_32154;
var inst_32137 = (0);
var state_32182__$1 = (function (){var statearr_32201 = state_32182;
(statearr_32201[(8)] = inst_32134);

(statearr_32201[(9)] = inst_32137);

(statearr_32201[(10)] = inst_32135);

(statearr_32201[(11)] = inst_32136);

return statearr_32201;
})();
var statearr_32202_33110 = state_32182__$1;
(statearr_32202_33110[(2)] = null);

(statearr_32202_33110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (3))){
var inst_32180 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32182__$1,inst_32180);
} else {
if((state_val_32183 === (12))){
var inst_32168 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32203_33111 = state_32182__$1;
(statearr_32203_33111[(2)] = inst_32168);

(statearr_32203_33111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (2))){
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32182__$1,(4),in$);
} else {
if((state_val_32183 === (23))){
var inst_32176 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32204_33112 = state_32182__$1;
(statearr_32204_33112[(2)] = inst_32176);

(statearr_32204_33112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (19))){
var inst_32163 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32205_33113 = state_32182__$1;
(statearr_32205_33113[(2)] = inst_32163);

(statearr_32205_33113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (11))){
var inst_32134 = (state_32182[(8)]);
var inst_32148 = (state_32182[(7)]);
var inst_32148__$1 = cljs.core.seq(inst_32134);
var state_32182__$1 = (function (){var statearr_32206 = state_32182;
(statearr_32206[(7)] = inst_32148__$1);

return statearr_32206;
})();
if(inst_32148__$1){
var statearr_32207_33114 = state_32182__$1;
(statearr_32207_33114[(1)] = (14));

} else {
var statearr_32208_33115 = state_32182__$1;
(statearr_32208_33115[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (9))){
var inst_32170 = (state_32182[(2)]);
var inst_32171 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32182__$1 = (function (){var statearr_32209 = state_32182;
(statearr_32209[(15)] = inst_32170);

return statearr_32209;
})();
if(cljs.core.truth_(inst_32171)){
var statearr_32210_33116 = state_32182__$1;
(statearr_32210_33116[(1)] = (21));

} else {
var statearr_32211_33117 = state_32182__$1;
(statearr_32211_33117[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (5))){
var inst_32126 = cljs.core.async.close_BANG_(out);
var state_32182__$1 = state_32182;
var statearr_32212_33118 = state_32182__$1;
(statearr_32212_33118[(2)] = inst_32126);

(statearr_32212_33118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (14))){
var inst_32148 = (state_32182[(7)]);
var inst_32150 = cljs.core.chunked_seq_QMARK_(inst_32148);
var state_32182__$1 = state_32182;
if(inst_32150){
var statearr_32213_33119 = state_32182__$1;
(statearr_32213_33119[(1)] = (17));

} else {
var statearr_32214_33120 = state_32182__$1;
(statearr_32214_33120[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (16))){
var inst_32166 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32215_33121 = state_32182__$1;
(statearr_32215_33121[(2)] = inst_32166);

(statearr_32215_33121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (10))){
var inst_32137 = (state_32182[(9)]);
var inst_32135 = (state_32182[(10)]);
var inst_32142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32135,inst_32137);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32182__$1,(13),out,inst_32142);
} else {
if((state_val_32183 === (18))){
var inst_32148 = (state_32182[(7)]);
var inst_32157 = cljs.core.first(inst_32148);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32182__$1,(20),out,inst_32157);
} else {
if((state_val_32183 === (8))){
var inst_32137 = (state_32182[(9)]);
var inst_32136 = (state_32182[(11)]);
var inst_32139 = (inst_32137 < inst_32136);
var inst_32140 = inst_32139;
var state_32182__$1 = state_32182;
if(cljs.core.truth_(inst_32140)){
var statearr_32216_33126 = state_32182__$1;
(statearr_32216_33126[(1)] = (10));

} else {
var statearr_32217_33128 = state_32182__$1;
(statearr_32217_33128[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29914__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29914__auto____0 = (function (){
var statearr_32218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32218[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29914__auto__);

(statearr_32218[(1)] = (1));

return statearr_32218;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29914__auto____1 = (function (state_32182){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_32182);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e32219){if((e32219 instanceof Object)){
var ex__29917__auto__ = e32219;
var statearr_32220_33133 = state_32182;
(statearr_32220_33133[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33135 = state_32182;
state_32182 = G__33135;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29914__auto__ = function(state_32182){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29914__auto____1.call(this,state_32182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29914__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29914__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_32221 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_32221[(6)] = c__30223__auto__);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));

return c__30223__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32223 = arguments.length;
switch (G__32223) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32225 = arguments.length;
switch (G__32225) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32227 = arguments.length;
switch (G__32227) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30223__auto___33141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_32251){
var state_val_32252 = (state_32251[(1)]);
if((state_val_32252 === (7))){
var inst_32246 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32253_33142 = state_32251__$1;
(statearr_32253_33142[(2)] = inst_32246);

(statearr_32253_33142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (1))){
var inst_32228 = null;
var state_32251__$1 = (function (){var statearr_32254 = state_32251;
(statearr_32254[(7)] = inst_32228);

return statearr_32254;
})();
var statearr_32255_33145 = state_32251__$1;
(statearr_32255_33145[(2)] = null);

(statearr_32255_33145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (4))){
var inst_32231 = (state_32251[(8)]);
var inst_32231__$1 = (state_32251[(2)]);
var inst_32232 = (inst_32231__$1 == null);
var inst_32233 = cljs.core.not(inst_32232);
var state_32251__$1 = (function (){var statearr_32256 = state_32251;
(statearr_32256[(8)] = inst_32231__$1);

return statearr_32256;
})();
if(inst_32233){
var statearr_32257_33146 = state_32251__$1;
(statearr_32257_33146[(1)] = (5));

} else {
var statearr_32258_33147 = state_32251__$1;
(statearr_32258_33147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (6))){
var state_32251__$1 = state_32251;
var statearr_32259_33148 = state_32251__$1;
(statearr_32259_33148[(2)] = null);

(statearr_32259_33148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (3))){
var inst_32248 = (state_32251[(2)]);
var inst_32249 = cljs.core.async.close_BANG_(out);
var state_32251__$1 = (function (){var statearr_32260 = state_32251;
(statearr_32260[(9)] = inst_32248);

return statearr_32260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32251__$1,inst_32249);
} else {
if((state_val_32252 === (2))){
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32251__$1,(4),ch);
} else {
if((state_val_32252 === (11))){
var inst_32231 = (state_32251[(8)]);
var inst_32240 = (state_32251[(2)]);
var inst_32228 = inst_32231;
var state_32251__$1 = (function (){var statearr_32261 = state_32251;
(statearr_32261[(7)] = inst_32228);

(statearr_32261[(10)] = inst_32240);

return statearr_32261;
})();
var statearr_32262_33150 = state_32251__$1;
(statearr_32262_33150[(2)] = null);

(statearr_32262_33150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (9))){
var inst_32231 = (state_32251[(8)]);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32251__$1,(11),out,inst_32231);
} else {
if((state_val_32252 === (5))){
var inst_32228 = (state_32251[(7)]);
var inst_32231 = (state_32251[(8)]);
var inst_32235 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32231,inst_32228);
var state_32251__$1 = state_32251;
if(inst_32235){
var statearr_32264_33151 = state_32251__$1;
(statearr_32264_33151[(1)] = (8));

} else {
var statearr_32265_33152 = state_32251__$1;
(statearr_32265_33152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (10))){
var inst_32243 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32266_33153 = state_32251__$1;
(statearr_32266_33153[(2)] = inst_32243);

(statearr_32266_33153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (8))){
var inst_32228 = (state_32251[(7)]);
var tmp32263 = inst_32228;
var inst_32228__$1 = tmp32263;
var state_32251__$1 = (function (){var statearr_32267 = state_32251;
(statearr_32267[(7)] = inst_32228__$1);

return statearr_32267;
})();
var statearr_32268_33154 = state_32251__$1;
(statearr_32268_33154[(2)] = null);

(statearr_32268_33154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_32269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32269[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_32269[(1)] = (1));

return statearr_32269;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_32251){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_32251);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e32270){if((e32270 instanceof Object)){
var ex__29917__auto__ = e32270;
var statearr_32271_33156 = state_32251;
(statearr_32271_33156[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_32251;
state_32251 = G__33157;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_32251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_32251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_32272 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_32272[(6)] = c__30223__auto___33141);

return statearr_32272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32274 = arguments.length;
switch (G__32274) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30223__auto___33164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_32312){
var state_val_32313 = (state_32312[(1)]);
if((state_val_32313 === (7))){
var inst_32308 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32314_33171 = state_32312__$1;
(statearr_32314_33171[(2)] = inst_32308);

(statearr_32314_33171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (1))){
var inst_32275 = (new Array(n));
var inst_32276 = inst_32275;
var inst_32277 = (0);
var state_32312__$1 = (function (){var statearr_32315 = state_32312;
(statearr_32315[(7)] = inst_32277);

(statearr_32315[(8)] = inst_32276);

return statearr_32315;
})();
var statearr_32316_33172 = state_32312__$1;
(statearr_32316_33172[(2)] = null);

(statearr_32316_33172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (4))){
var inst_32280 = (state_32312[(9)]);
var inst_32280__$1 = (state_32312[(2)]);
var inst_32281 = (inst_32280__$1 == null);
var inst_32282 = cljs.core.not(inst_32281);
var state_32312__$1 = (function (){var statearr_32317 = state_32312;
(statearr_32317[(9)] = inst_32280__$1);

return statearr_32317;
})();
if(inst_32282){
var statearr_32318_33173 = state_32312__$1;
(statearr_32318_33173[(1)] = (5));

} else {
var statearr_32319_33174 = state_32312__$1;
(statearr_32319_33174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (15))){
var inst_32302 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32320_33178 = state_32312__$1;
(statearr_32320_33178[(2)] = inst_32302);

(statearr_32320_33178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (13))){
var state_32312__$1 = state_32312;
var statearr_32321_33179 = state_32312__$1;
(statearr_32321_33179[(2)] = null);

(statearr_32321_33179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (6))){
var inst_32277 = (state_32312[(7)]);
var inst_32298 = (inst_32277 > (0));
var state_32312__$1 = state_32312;
if(cljs.core.truth_(inst_32298)){
var statearr_32322_33180 = state_32312__$1;
(statearr_32322_33180[(1)] = (12));

} else {
var statearr_32323_33181 = state_32312__$1;
(statearr_32323_33181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (3))){
var inst_32310 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32312__$1,inst_32310);
} else {
if((state_val_32313 === (12))){
var inst_32276 = (state_32312[(8)]);
var inst_32300 = cljs.core.vec(inst_32276);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32312__$1,(15),out,inst_32300);
} else {
if((state_val_32313 === (2))){
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32312__$1,(4),ch);
} else {
if((state_val_32313 === (11))){
var inst_32292 = (state_32312[(2)]);
var inst_32293 = (new Array(n));
var inst_32276 = inst_32293;
var inst_32277 = (0);
var state_32312__$1 = (function (){var statearr_32324 = state_32312;
(statearr_32324[(7)] = inst_32277);

(statearr_32324[(8)] = inst_32276);

(statearr_32324[(10)] = inst_32292);

return statearr_32324;
})();
var statearr_32325_33188 = state_32312__$1;
(statearr_32325_33188[(2)] = null);

(statearr_32325_33188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (9))){
var inst_32276 = (state_32312[(8)]);
var inst_32290 = cljs.core.vec(inst_32276);
var state_32312__$1 = state_32312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32312__$1,(11),out,inst_32290);
} else {
if((state_val_32313 === (5))){
var inst_32277 = (state_32312[(7)]);
var inst_32280 = (state_32312[(9)]);
var inst_32276 = (state_32312[(8)]);
var inst_32285 = (state_32312[(11)]);
var inst_32284 = (inst_32276[inst_32277] = inst_32280);
var inst_32285__$1 = (inst_32277 + (1));
var inst_32286 = (inst_32285__$1 < n);
var state_32312__$1 = (function (){var statearr_32326 = state_32312;
(statearr_32326[(12)] = inst_32284);

(statearr_32326[(11)] = inst_32285__$1);

return statearr_32326;
})();
if(cljs.core.truth_(inst_32286)){
var statearr_32327_33189 = state_32312__$1;
(statearr_32327_33189[(1)] = (8));

} else {
var statearr_32328_33190 = state_32312__$1;
(statearr_32328_33190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (14))){
var inst_32305 = (state_32312[(2)]);
var inst_32306 = cljs.core.async.close_BANG_(out);
var state_32312__$1 = (function (){var statearr_32330 = state_32312;
(statearr_32330[(13)] = inst_32305);

return statearr_32330;
})();
var statearr_32331_33192 = state_32312__$1;
(statearr_32331_33192[(2)] = inst_32306);

(statearr_32331_33192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (10))){
var inst_32296 = (state_32312[(2)]);
var state_32312__$1 = state_32312;
var statearr_32332_33193 = state_32312__$1;
(statearr_32332_33193[(2)] = inst_32296);

(statearr_32332_33193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32313 === (8))){
var inst_32276 = (state_32312[(8)]);
var inst_32285 = (state_32312[(11)]);
var tmp32329 = inst_32276;
var inst_32276__$1 = tmp32329;
var inst_32277 = inst_32285;
var state_32312__$1 = (function (){var statearr_32333 = state_32312;
(statearr_32333[(7)] = inst_32277);

(statearr_32333[(8)] = inst_32276__$1);

return statearr_32333;
})();
var statearr_32334_33194 = state_32312__$1;
(statearr_32334_33194[(2)] = null);

(statearr_32334_33194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_32335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32335[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_32335[(1)] = (1));

return statearr_32335;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_32312){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_32312);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e32336){if((e32336 instanceof Object)){
var ex__29917__auto__ = e32336;
var statearr_32337_33204 = state_32312;
(statearr_32337_33204[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33205 = state_32312;
state_32312 = G__33205;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_32312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_32312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_32338 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_32338[(6)] = c__30223__auto___33164);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32340 = arguments.length;
switch (G__32340) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30223__auto___33213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_32382){
var state_val_32383 = (state_32382[(1)]);
if((state_val_32383 === (7))){
var inst_32378 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32384_33214 = state_32382__$1;
(statearr_32384_33214[(2)] = inst_32378);

(statearr_32384_33214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (1))){
var inst_32341 = [];
var inst_32342 = inst_32341;
var inst_32343 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32382__$1 = (function (){var statearr_32385 = state_32382;
(statearr_32385[(7)] = inst_32343);

(statearr_32385[(8)] = inst_32342);

return statearr_32385;
})();
var statearr_32386_33215 = state_32382__$1;
(statearr_32386_33215[(2)] = null);

(statearr_32386_33215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (4))){
var inst_32346 = (state_32382[(9)]);
var inst_32346__$1 = (state_32382[(2)]);
var inst_32347 = (inst_32346__$1 == null);
var inst_32348 = cljs.core.not(inst_32347);
var state_32382__$1 = (function (){var statearr_32387 = state_32382;
(statearr_32387[(9)] = inst_32346__$1);

return statearr_32387;
})();
if(inst_32348){
var statearr_32388_33216 = state_32382__$1;
(statearr_32388_33216[(1)] = (5));

} else {
var statearr_32389_33217 = state_32382__$1;
(statearr_32389_33217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (15))){
var inst_32372 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32390_33218 = state_32382__$1;
(statearr_32390_33218[(2)] = inst_32372);

(statearr_32390_33218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (13))){
var state_32382__$1 = state_32382;
var statearr_32391_33219 = state_32382__$1;
(statearr_32391_33219[(2)] = null);

(statearr_32391_33219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (6))){
var inst_32342 = (state_32382[(8)]);
var inst_32367 = inst_32342.length;
var inst_32368 = (inst_32367 > (0));
var state_32382__$1 = state_32382;
if(cljs.core.truth_(inst_32368)){
var statearr_32392_33226 = state_32382__$1;
(statearr_32392_33226[(1)] = (12));

} else {
var statearr_32393_33227 = state_32382__$1;
(statearr_32393_33227[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (3))){
var inst_32380 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32382__$1,inst_32380);
} else {
if((state_val_32383 === (12))){
var inst_32342 = (state_32382[(8)]);
var inst_32370 = cljs.core.vec(inst_32342);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32382__$1,(15),out,inst_32370);
} else {
if((state_val_32383 === (2))){
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32382__$1,(4),ch);
} else {
if((state_val_32383 === (11))){
var inst_32350 = (state_32382[(10)]);
var inst_32346 = (state_32382[(9)]);
var inst_32360 = (state_32382[(2)]);
var inst_32361 = [];
var inst_32362 = inst_32361.push(inst_32346);
var inst_32342 = inst_32361;
var inst_32343 = inst_32350;
var state_32382__$1 = (function (){var statearr_32394 = state_32382;
(statearr_32394[(7)] = inst_32343);

(statearr_32394[(11)] = inst_32360);

(statearr_32394[(12)] = inst_32362);

(statearr_32394[(8)] = inst_32342);

return statearr_32394;
})();
var statearr_32395_33228 = state_32382__$1;
(statearr_32395_33228[(2)] = null);

(statearr_32395_33228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (9))){
var inst_32342 = (state_32382[(8)]);
var inst_32358 = cljs.core.vec(inst_32342);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32382__$1,(11),out,inst_32358);
} else {
if((state_val_32383 === (5))){
var inst_32350 = (state_32382[(10)]);
var inst_32343 = (state_32382[(7)]);
var inst_32346 = (state_32382[(9)]);
var inst_32350__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32346) : f.call(null,inst_32346));
var inst_32351 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32350__$1,inst_32343);
var inst_32352 = cljs.core.keyword_identical_QMARK_(inst_32343,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32353 = ((inst_32351) || (inst_32352));
var state_32382__$1 = (function (){var statearr_32396 = state_32382;
(statearr_32396[(10)] = inst_32350__$1);

return statearr_32396;
})();
if(cljs.core.truth_(inst_32353)){
var statearr_32397_33229 = state_32382__$1;
(statearr_32397_33229[(1)] = (8));

} else {
var statearr_32398_33230 = state_32382__$1;
(statearr_32398_33230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (14))){
var inst_32375 = (state_32382[(2)]);
var inst_32376 = cljs.core.async.close_BANG_(out);
var state_32382__$1 = (function (){var statearr_32400 = state_32382;
(statearr_32400[(13)] = inst_32375);

return statearr_32400;
})();
var statearr_32401_33231 = state_32382__$1;
(statearr_32401_33231[(2)] = inst_32376);

(statearr_32401_33231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (10))){
var inst_32365 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32402_33232 = state_32382__$1;
(statearr_32402_33232[(2)] = inst_32365);

(statearr_32402_33232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (8))){
var inst_32350 = (state_32382[(10)]);
var inst_32346 = (state_32382[(9)]);
var inst_32342 = (state_32382[(8)]);
var inst_32355 = inst_32342.push(inst_32346);
var tmp32399 = inst_32342;
var inst_32342__$1 = tmp32399;
var inst_32343 = inst_32350;
var state_32382__$1 = (function (){var statearr_32403 = state_32382;
(statearr_32403[(14)] = inst_32355);

(statearr_32403[(7)] = inst_32343);

(statearr_32403[(8)] = inst_32342__$1);

return statearr_32403;
})();
var statearr_32404_33233 = state_32382__$1;
(statearr_32404_33233[(2)] = null);

(statearr_32404_33233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__29914__auto__ = null;
var cljs$core$async$state_machine__29914__auto____0 = (function (){
var statearr_32405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32405[(0)] = cljs$core$async$state_machine__29914__auto__);

(statearr_32405[(1)] = (1));

return statearr_32405;
});
var cljs$core$async$state_machine__29914__auto____1 = (function (state_32382){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_32382);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e32406){if((e32406 instanceof Object)){
var ex__29917__auto__ = e32406;
var statearr_32407_33234 = state_32382;
(statearr_32407_33234[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33235 = state_32382;
state_32382 = G__33235;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
cljs$core$async$state_machine__29914__auto__ = function(state_32382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29914__auto____1.call(this,state_32382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29914__auto____0;
cljs$core$async$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29914__auto____1;
return cljs$core$async$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_32408 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_32408[(6)] = c__30223__auto___33213);

return statearr_32408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
