// Compiled by ClojureScript 0.0-2356
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23493 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23493 = (function (f,fn_handler,meta23494){
this.f = f;
this.fn_handler = fn_handler;
this.meta23494 = meta23494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23493.cljs$lang$type = true;
cljs.core.async.t23493.cljs$lang$ctorStr = "cljs.core.async/t23493";
cljs.core.async.t23493.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23493");
});
cljs.core.async.t23493.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23495){var self__ = this;
var _23495__$1 = this;return self__.meta23494;
});
cljs.core.async.t23493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23495,meta23494__$1){var self__ = this;
var _23495__$1 = this;return (new cljs.core.async.t23493(self__.f,self__.fn_handler,meta23494__$1));
});
cljs.core.async.__GT_t23493 = (function __GT_t23493(f__$1,fn_handler__$1,meta23494){return (new cljs.core.async.t23493(f__$1,fn_handler__$1,meta23494));
});
}
return (new cljs.core.async.t23493(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23497 = buff;if(G__23497)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__23497.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23497.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23497);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23497);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_23498 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23498);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_23498,ret){
return (function (){return fn1.call(null,val_23498);
});})(val_23498,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4508__auto___23499 = n;var x_23500 = (0);while(true){
if((x_23500 < n__4508__auto___23499))
{(a[x_23500] = (0));
{
var G__23501 = (x_23500 + (1));
x_23500 = G__23501;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__23502 = (i + (1));
i = G__23502;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23506 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23506 = (function (flag,alt_flag,meta23507){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23507 = meta23507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23506.cljs$lang$type = true;
cljs.core.async.t23506.cljs$lang$ctorStr = "cljs.core.async/t23506";
cljs.core.async.t23506.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23506");
});})(flag))
;
cljs.core.async.t23506.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t23506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t23506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23508){var self__ = this;
var _23508__$1 = this;return self__.meta23507;
});})(flag))
;
cljs.core.async.t23506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23508,meta23507__$1){var self__ = this;
var _23508__$1 = this;return (new cljs.core.async.t23506(self__.flag,self__.alt_flag,meta23507__$1));
});})(flag))
;
cljs.core.async.__GT_t23506 = ((function (flag){
return (function __GT_t23506(flag__$1,alt_flag__$1,meta23507){return (new cljs.core.async.t23506(flag__$1,alt_flag__$1,meta23507));
});})(flag))
;
}
return (new cljs.core.async.t23506(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23512 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23512 = (function (cb,flag,alt_handler,meta23513){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23513 = meta23513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23512.cljs$lang$type = true;
cljs.core.async.t23512.cljs$lang$ctorStr = "cljs.core.async/t23512";
cljs.core.async.t23512.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t23512");
});
cljs.core.async.t23512.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23514){var self__ = this;
var _23514__$1 = this;return self__.meta23513;
});
cljs.core.async.t23512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23514,meta23513__$1){var self__ = this;
var _23514__$1 = this;return (new cljs.core.async.t23512(self__.cb,self__.flag,self__.alt_handler,meta23513__$1));
});
cljs.core.async.__GT_t23512 = (function __GT_t23512(cb__$1,flag__$1,alt_handler__$1,meta23513){return (new cljs.core.async.t23512(cb__$1,flag__$1,alt_handler__$1,meta23513));
});
}
return (new cljs.core.async.t23512(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23515_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23515_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23516_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23516_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3639__auto__ = wport;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23517 = (i + (1));
i = G__23517;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3639__auto__ = ret;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3627__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3627__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__23518){var map__23520 = p__23518;var map__23520__$1 = ((cljs.core.seq_QMARK_.call(null,map__23520))?cljs.core.apply.call(null,cljs.core.hash_map,map__23520):map__23520);var opts = map__23520__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__23518 = null;if (arguments.length > 1) {
  p__23518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23518);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23521){
var ports = cljs.core.first(arglist__23521);
var p__23518 = cljs.core.rest(arglist__23521);
return alts_BANG___delegate(ports,p__23518);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__9125__auto___23616 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23616){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23616){
return (function (state_23592){var state_val_23593 = (state_23592[(1)]);if((state_val_23593 === (7)))
{var inst_23588 = (state_23592[(2)]);var state_23592__$1 = state_23592;var statearr_23594_23617 = state_23592__$1;(statearr_23594_23617[(2)] = inst_23588);
(statearr_23594_23617[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (1)))
{var state_23592__$1 = state_23592;var statearr_23595_23618 = state_23592__$1;(statearr_23595_23618[(2)] = null);
(statearr_23595_23618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (4)))
{var inst_23571 = (state_23592[(7)]);var inst_23571__$1 = (state_23592[(2)]);var inst_23572 = (inst_23571__$1 == null);var state_23592__$1 = (function (){var statearr_23596 = state_23592;(statearr_23596[(7)] = inst_23571__$1);
return statearr_23596;
})();if(cljs.core.truth_(inst_23572))
{var statearr_23597_23619 = state_23592__$1;(statearr_23597_23619[(1)] = (5));
} else
{var statearr_23598_23620 = state_23592__$1;(statearr_23598_23620[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (13)))
{var state_23592__$1 = state_23592;var statearr_23599_23621 = state_23592__$1;(statearr_23599_23621[(2)] = null);
(statearr_23599_23621[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (6)))
{var inst_23571 = (state_23592[(7)]);var state_23592__$1 = state_23592;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23592__$1,(11),to,inst_23571);
} else
{if((state_val_23593 === (3)))
{var inst_23590 = (state_23592[(2)]);var state_23592__$1 = state_23592;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23592__$1,inst_23590);
} else
{if((state_val_23593 === (12)))
{var state_23592__$1 = state_23592;var statearr_23600_23622 = state_23592__$1;(statearr_23600_23622[(2)] = null);
(statearr_23600_23622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (2)))
{var state_23592__$1 = state_23592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23592__$1,(4),from);
} else
{if((state_val_23593 === (11)))
{var inst_23581 = (state_23592[(2)]);var state_23592__$1 = state_23592;if(cljs.core.truth_(inst_23581))
{var statearr_23601_23623 = state_23592__$1;(statearr_23601_23623[(1)] = (12));
} else
{var statearr_23602_23624 = state_23592__$1;(statearr_23602_23624[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (9)))
{var state_23592__$1 = state_23592;var statearr_23603_23625 = state_23592__$1;(statearr_23603_23625[(2)] = null);
(statearr_23603_23625[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (5)))
{var state_23592__$1 = state_23592;if(cljs.core.truth_(close_QMARK_))
{var statearr_23604_23626 = state_23592__$1;(statearr_23604_23626[(1)] = (8));
} else
{var statearr_23605_23627 = state_23592__$1;(statearr_23605_23627[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (14)))
{var inst_23586 = (state_23592[(2)]);var state_23592__$1 = state_23592;var statearr_23606_23628 = state_23592__$1;(statearr_23606_23628[(2)] = inst_23586);
(statearr_23606_23628[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (10)))
{var inst_23578 = (state_23592[(2)]);var state_23592__$1 = state_23592;var statearr_23607_23629 = state_23592__$1;(statearr_23607_23629[(2)] = inst_23578);
(statearr_23607_23629[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23593 === (8)))
{var inst_23575 = cljs.core.async.close_BANG_.call(null,to);var state_23592__$1 = state_23592;var statearr_23608_23630 = state_23592__$1;(statearr_23608_23630[(2)] = inst_23575);
(statearr_23608_23630[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___23616))
;return ((function (switch__9110__auto__,c__9125__auto___23616){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23612 = [null,null,null,null,null,null,null,null];(statearr_23612[(0)] = state_machine__9111__auto__);
(statearr_23612[(1)] = (1));
return statearr_23612;
});
var state_machine__9111__auto____1 = (function (state_23592){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23592);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23613){if((e23613 instanceof Object))
{var ex__9114__auto__ = e23613;var statearr_23614_23631 = state_23592;(statearr_23614_23631[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23613;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23632 = state_23592;
state_23592 = G__23632;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23592){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23616))
})();var state__9127__auto__ = (function (){var statearr_23615 = f__9126__auto__.call(null);(statearr_23615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23616);
return statearr_23615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23616))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__23816){var vec__23817 = p__23816;var v = cljs.core.nth.call(null,vec__23817,(0),null);var p = cljs.core.nth.call(null,vec__23817,(1),null);var job = vec__23817;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__9125__auto___23999 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___23999,res,vec__23817,v,p,job,jobs,results){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___23999,res,vec__23817,v,p,job,jobs,results){
return (function (state_23822){var state_val_23823 = (state_23822[(1)]);if((state_val_23823 === (2)))
{var inst_23819 = (state_23822[(2)]);var inst_23820 = cljs.core.async.close_BANG_.call(null,res);var state_23822__$1 = (function (){var statearr_23824 = state_23822;(statearr_23824[(7)] = inst_23819);
return statearr_23824;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23822__$1,inst_23820);
} else
{if((state_val_23823 === (1)))
{var state_23822__$1 = state_23822;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23822__$1,(2),res,v);
} else
{return null;
}
}
});})(c__9125__auto___23999,res,vec__23817,v,p,job,jobs,results))
;return ((function (switch__9110__auto__,c__9125__auto___23999,res,vec__23817,v,p,job,jobs,results){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23828 = [null,null,null,null,null,null,null,null];(statearr_23828[(0)] = state_machine__9111__auto__);
(statearr_23828[(1)] = (1));
return statearr_23828;
});
var state_machine__9111__auto____1 = (function (state_23822){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23822);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23829){if((e23829 instanceof Object))
{var ex__9114__auto__ = e23829;var statearr_23830_24000 = state_23822;(statearr_23830_24000[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23822);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23829;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24001 = state_23822;
state_23822 = G__24001;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23822){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___23999,res,vec__23817,v,p,job,jobs,results))
})();var state__9127__auto__ = (function (){var statearr_23831 = f__9126__auto__.call(null);(statearr_23831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___23999);
return statearr_23831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___23999,res,vec__23817,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__23832){var vec__23833 = p__23832;var v = cljs.core.nth.call(null,vec__23833,(0),null);var p = cljs.core.nth.call(null,vec__23833,(1),null);var job = vec__23833;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4508__auto___24002 = n;var __24003 = (0);while(true){
if((__24003 < n__4508__auto___24002))
{var G__23834_24004 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__23834_24004) {
case "async":
var c__9125__auto___24006 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24003,c__9125__auto___24006,G__23834_24004,n__4508__auto___24002,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24003,c__9125__auto___24006,G__23834_24004,n__4508__auto___24002,jobs,results,process,async){
return (function (state_23847){var state_val_23848 = (state_23847[(1)]);if((state_val_23848 === (7)))
{var inst_23843 = (state_23847[(2)]);var state_23847__$1 = state_23847;var statearr_23849_24007 = state_23847__$1;(statearr_23849_24007[(2)] = inst_23843);
(statearr_23849_24007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23848 === (6)))
{var state_23847__$1 = state_23847;var statearr_23850_24008 = state_23847__$1;(statearr_23850_24008[(2)] = null);
(statearr_23850_24008[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23848 === (5)))
{var state_23847__$1 = state_23847;var statearr_23851_24009 = state_23847__$1;(statearr_23851_24009[(2)] = null);
(statearr_23851_24009[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23848 === (4)))
{var inst_23837 = (state_23847[(2)]);var inst_23838 = async.call(null,inst_23837);var state_23847__$1 = state_23847;if(cljs.core.truth_(inst_23838))
{var statearr_23852_24010 = state_23847__$1;(statearr_23852_24010[(1)] = (5));
} else
{var statearr_23853_24011 = state_23847__$1;(statearr_23853_24011[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23848 === (3)))
{var inst_23845 = (state_23847[(2)]);var state_23847__$1 = state_23847;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23847__$1,inst_23845);
} else
{if((state_val_23848 === (2)))
{var state_23847__$1 = state_23847;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23847__$1,(4),jobs);
} else
{if((state_val_23848 === (1)))
{var state_23847__$1 = state_23847;var statearr_23854_24012 = state_23847__$1;(statearr_23854_24012[(2)] = null);
(statearr_23854_24012[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__24003,c__9125__auto___24006,G__23834_24004,n__4508__auto___24002,jobs,results,process,async))
;return ((function (__24003,switch__9110__auto__,c__9125__auto___24006,G__23834_24004,n__4508__auto___24002,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23858 = [null,null,null,null,null,null,null];(statearr_23858[(0)] = state_machine__9111__auto__);
(statearr_23858[(1)] = (1));
return statearr_23858;
});
var state_machine__9111__auto____1 = (function (state_23847){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23847);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23859){if((e23859 instanceof Object))
{var ex__9114__auto__ = e23859;var statearr_23860_24013 = state_23847;(statearr_23860_24013[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23847);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23859;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24014 = state_23847;
state_23847 = G__24014;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23847){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24003,switch__9110__auto__,c__9125__auto___24006,G__23834_24004,n__4508__auto___24002,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23861 = f__9126__auto__.call(null);(statearr_23861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24006);
return statearr_23861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24003,c__9125__auto___24006,G__23834_24004,n__4508__auto___24002,jobs,results,process,async))
);

break;
case "compute":
var c__9125__auto___24015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__24003,c__9125__auto___24015,G__23834_24004,n__4508__auto___24002,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (__24003,c__9125__auto___24015,G__23834_24004,n__4508__auto___24002,jobs,results,process,async){
return (function (state_23874){var state_val_23875 = (state_23874[(1)]);if((state_val_23875 === (7)))
{var inst_23870 = (state_23874[(2)]);var state_23874__$1 = state_23874;var statearr_23876_24016 = state_23874__$1;(statearr_23876_24016[(2)] = inst_23870);
(statearr_23876_24016[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23875 === (6)))
{var state_23874__$1 = state_23874;var statearr_23877_24017 = state_23874__$1;(statearr_23877_24017[(2)] = null);
(statearr_23877_24017[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23875 === (5)))
{var state_23874__$1 = state_23874;var statearr_23878_24018 = state_23874__$1;(statearr_23878_24018[(2)] = null);
(statearr_23878_24018[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23875 === (4)))
{var inst_23864 = (state_23874[(2)]);var inst_23865 = process.call(null,inst_23864);var state_23874__$1 = state_23874;if(cljs.core.truth_(inst_23865))
{var statearr_23879_24019 = state_23874__$1;(statearr_23879_24019[(1)] = (5));
} else
{var statearr_23880_24020 = state_23874__$1;(statearr_23880_24020[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23875 === (3)))
{var inst_23872 = (state_23874[(2)]);var state_23874__$1 = state_23874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23874__$1,inst_23872);
} else
{if((state_val_23875 === (2)))
{var state_23874__$1 = state_23874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23874__$1,(4),jobs);
} else
{if((state_val_23875 === (1)))
{var state_23874__$1 = state_23874;var statearr_23881_24021 = state_23874__$1;(statearr_23881_24021[(2)] = null);
(statearr_23881_24021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__24003,c__9125__auto___24015,G__23834_24004,n__4508__auto___24002,jobs,results,process,async))
;return ((function (__24003,switch__9110__auto__,c__9125__auto___24015,G__23834_24004,n__4508__auto___24002,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23885 = [null,null,null,null,null,null,null];(statearr_23885[(0)] = state_machine__9111__auto__);
(statearr_23885[(1)] = (1));
return statearr_23885;
});
var state_machine__9111__auto____1 = (function (state_23874){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23874);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23886){if((e23886 instanceof Object))
{var ex__9114__auto__ = e23886;var statearr_23887_24022 = state_23874;(statearr_23887_24022[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23886;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24023 = state_23874;
state_23874 = G__24023;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23874){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(__24003,switch__9110__auto__,c__9125__auto___24015,G__23834_24004,n__4508__auto___24002,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23888 = f__9126__auto__.call(null);(statearr_23888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24015);
return statearr_23888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(__24003,c__9125__auto___24015,G__23834_24004,n__4508__auto___24002,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__24024 = (__24003 + (1));
__24003 = G__24024;
continue;
}
} else
{}
break;
}
var c__9125__auto___24025 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24025,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24025,jobs,results,process,async){
return (function (state_23910){var state_val_23911 = (state_23910[(1)]);if((state_val_23911 === (9)))
{var inst_23903 = (state_23910[(2)]);var state_23910__$1 = (function (){var statearr_23912 = state_23910;(statearr_23912[(7)] = inst_23903);
return statearr_23912;
})();var statearr_23913_24026 = state_23910__$1;(statearr_23913_24026[(2)] = null);
(statearr_23913_24026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (8)))
{var inst_23896 = (state_23910[(8)]);var inst_23901 = (state_23910[(2)]);var state_23910__$1 = (function (){var statearr_23914 = state_23910;(statearr_23914[(9)] = inst_23901);
return statearr_23914;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23910__$1,(9),results,inst_23896);
} else
{if((state_val_23911 === (7)))
{var inst_23906 = (state_23910[(2)]);var state_23910__$1 = state_23910;var statearr_23915_24027 = state_23910__$1;(statearr_23915_24027[(2)] = inst_23906);
(statearr_23915_24027[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (6)))
{var inst_23891 = (state_23910[(10)]);var inst_23896 = (state_23910[(8)]);var inst_23896__$1 = cljs.core.async.chan.call(null,(1));var inst_23897 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23898 = [inst_23891,inst_23896__$1];var inst_23899 = (new cljs.core.PersistentVector(null,2,(5),inst_23897,inst_23898,null));var state_23910__$1 = (function (){var statearr_23916 = state_23910;(statearr_23916[(8)] = inst_23896__$1);
return statearr_23916;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23910__$1,(8),jobs,inst_23899);
} else
{if((state_val_23911 === (5)))
{var inst_23894 = cljs.core.async.close_BANG_.call(null,jobs);var state_23910__$1 = state_23910;var statearr_23917_24028 = state_23910__$1;(statearr_23917_24028[(2)] = inst_23894);
(statearr_23917_24028[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (4)))
{var inst_23891 = (state_23910[(10)]);var inst_23891__$1 = (state_23910[(2)]);var inst_23892 = (inst_23891__$1 == null);var state_23910__$1 = (function (){var statearr_23918 = state_23910;(statearr_23918[(10)] = inst_23891__$1);
return statearr_23918;
})();if(cljs.core.truth_(inst_23892))
{var statearr_23919_24029 = state_23910__$1;(statearr_23919_24029[(1)] = (5));
} else
{var statearr_23920_24030 = state_23910__$1;(statearr_23920_24030[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23911 === (3)))
{var inst_23908 = (state_23910[(2)]);var state_23910__$1 = state_23910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23910__$1,inst_23908);
} else
{if((state_val_23911 === (2)))
{var state_23910__$1 = state_23910;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23910__$1,(4),from);
} else
{if((state_val_23911 === (1)))
{var state_23910__$1 = state_23910;var statearr_23921_24031 = state_23910__$1;(statearr_23921_24031[(2)] = null);
(statearr_23921_24031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___24025,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto___24025,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23925 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23925[(0)] = state_machine__9111__auto__);
(statearr_23925[(1)] = (1));
return statearr_23925;
});
var state_machine__9111__auto____1 = (function (state_23910){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23910);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23926){if((e23926 instanceof Object))
{var ex__9114__auto__ = e23926;var statearr_23927_24032 = state_23910;(statearr_23927_24032[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23910);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23926;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24033 = state_23910;
state_23910 = G__24033;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23910){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24025,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23928 = f__9126__auto__.call(null);(statearr_23928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24025);
return statearr_23928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24025,jobs,results,process,async))
);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,jobs,results,process,async){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,jobs,results,process,async){
return (function (state_23966){var state_val_23967 = (state_23966[(1)]);if((state_val_23967 === (7)))
{var inst_23962 = (state_23966[(2)]);var state_23966__$1 = state_23966;var statearr_23968_24034 = state_23966__$1;(statearr_23968_24034[(2)] = inst_23962);
(statearr_23968_24034[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (20)))
{var state_23966__$1 = state_23966;var statearr_23969_24035 = state_23966__$1;(statearr_23969_24035[(2)] = null);
(statearr_23969_24035[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (1)))
{var state_23966__$1 = state_23966;var statearr_23970_24036 = state_23966__$1;(statearr_23970_24036[(2)] = null);
(statearr_23970_24036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (4)))
{var inst_23931 = (state_23966[(7)]);var inst_23931__$1 = (state_23966[(2)]);var inst_23932 = (inst_23931__$1 == null);var state_23966__$1 = (function (){var statearr_23971 = state_23966;(statearr_23971[(7)] = inst_23931__$1);
return statearr_23971;
})();if(cljs.core.truth_(inst_23932))
{var statearr_23972_24037 = state_23966__$1;(statearr_23972_24037[(1)] = (5));
} else
{var statearr_23973_24038 = state_23966__$1;(statearr_23973_24038[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (15)))
{var inst_23944 = (state_23966[(8)]);var state_23966__$1 = state_23966;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23966__$1,(18),to,inst_23944);
} else
{if((state_val_23967 === (21)))
{var inst_23957 = (state_23966[(2)]);var state_23966__$1 = state_23966;var statearr_23974_24039 = state_23966__$1;(statearr_23974_24039[(2)] = inst_23957);
(statearr_23974_24039[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (13)))
{var inst_23959 = (state_23966[(2)]);var state_23966__$1 = (function (){var statearr_23975 = state_23966;(statearr_23975[(9)] = inst_23959);
return statearr_23975;
})();var statearr_23976_24040 = state_23966__$1;(statearr_23976_24040[(2)] = null);
(statearr_23976_24040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (6)))
{var inst_23931 = (state_23966[(7)]);var state_23966__$1 = state_23966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23966__$1,(11),inst_23931);
} else
{if((state_val_23967 === (17)))
{var inst_23952 = (state_23966[(2)]);var state_23966__$1 = state_23966;if(cljs.core.truth_(inst_23952))
{var statearr_23977_24041 = state_23966__$1;(statearr_23977_24041[(1)] = (19));
} else
{var statearr_23978_24042 = state_23966__$1;(statearr_23978_24042[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (3)))
{var inst_23964 = (state_23966[(2)]);var state_23966__$1 = state_23966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23966__$1,inst_23964);
} else
{if((state_val_23967 === (12)))
{var inst_23941 = (state_23966[(10)]);var state_23966__$1 = state_23966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23966__$1,(14),inst_23941);
} else
{if((state_val_23967 === (2)))
{var state_23966__$1 = state_23966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23966__$1,(4),results);
} else
{if((state_val_23967 === (19)))
{var state_23966__$1 = state_23966;var statearr_23979_24043 = state_23966__$1;(statearr_23979_24043[(2)] = null);
(statearr_23979_24043[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (11)))
{var inst_23941 = (state_23966[(2)]);var state_23966__$1 = (function (){var statearr_23980 = state_23966;(statearr_23980[(10)] = inst_23941);
return statearr_23980;
})();var statearr_23981_24044 = state_23966__$1;(statearr_23981_24044[(2)] = null);
(statearr_23981_24044[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (9)))
{var state_23966__$1 = state_23966;var statearr_23982_24045 = state_23966__$1;(statearr_23982_24045[(2)] = null);
(statearr_23982_24045[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (5)))
{var state_23966__$1 = state_23966;if(cljs.core.truth_(close_QMARK_))
{var statearr_23983_24046 = state_23966__$1;(statearr_23983_24046[(1)] = (8));
} else
{var statearr_23984_24047 = state_23966__$1;(statearr_23984_24047[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (14)))
{var inst_23946 = (state_23966[(11)]);var inst_23944 = (state_23966[(8)]);var inst_23944__$1 = (state_23966[(2)]);var inst_23945 = (inst_23944__$1 == null);var inst_23946__$1 = cljs.core.not.call(null,inst_23945);var state_23966__$1 = (function (){var statearr_23985 = state_23966;(statearr_23985[(11)] = inst_23946__$1);
(statearr_23985[(8)] = inst_23944__$1);
return statearr_23985;
})();if(inst_23946__$1)
{var statearr_23986_24048 = state_23966__$1;(statearr_23986_24048[(1)] = (15));
} else
{var statearr_23987_24049 = state_23966__$1;(statearr_23987_24049[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (16)))
{var inst_23946 = (state_23966[(11)]);var state_23966__$1 = state_23966;var statearr_23988_24050 = state_23966__$1;(statearr_23988_24050[(2)] = inst_23946);
(statearr_23988_24050[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (10)))
{var inst_23938 = (state_23966[(2)]);var state_23966__$1 = state_23966;var statearr_23989_24051 = state_23966__$1;(statearr_23989_24051[(2)] = inst_23938);
(statearr_23989_24051[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (18)))
{var inst_23949 = (state_23966[(2)]);var state_23966__$1 = state_23966;var statearr_23990_24052 = state_23966__$1;(statearr_23990_24052[(2)] = inst_23949);
(statearr_23990_24052[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23967 === (8)))
{var inst_23935 = cljs.core.async.close_BANG_.call(null,to);var state_23966__$1 = state_23966;var statearr_23991_24053 = state_23966__$1;(statearr_23991_24053[(2)] = inst_23935);
(statearr_23991_24053[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__,jobs,results,process,async))
;return ((function (switch__9110__auto__,c__9125__auto__,jobs,results,process,async){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_23995 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23995[(0)] = state_machine__9111__auto__);
(statearr_23995[(1)] = (1));
return statearr_23995;
});
var state_machine__9111__auto____1 = (function (state_23966){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_23966);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e23996){if((e23996 instanceof Object))
{var ex__9114__auto__ = e23996;var statearr_23997_24054 = state_23966;(statearr_23997_24054[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23966);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23996;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24055 = state_23966;
state_23966 = G__24055;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_23966){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_23966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,jobs,results,process,async))
})();var state__9127__auto__ = (function (){var statearr_23998 = f__9126__auto__.call(null);(statearr_23998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_23998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,jobs,results,process,async))
);
return c__9125__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__9125__auto___24156 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24156,tc,fc){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24156,tc,fc){
return (function (state_24131){var state_val_24132 = (state_24131[(1)]);if((state_val_24132 === (7)))
{var inst_24127 = (state_24131[(2)]);var state_24131__$1 = state_24131;var statearr_24133_24157 = state_24131__$1;(statearr_24133_24157[(2)] = inst_24127);
(statearr_24133_24157[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (1)))
{var state_24131__$1 = state_24131;var statearr_24134_24158 = state_24131__$1;(statearr_24134_24158[(2)] = null);
(statearr_24134_24158[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (4)))
{var inst_24108 = (state_24131[(7)]);var inst_24108__$1 = (state_24131[(2)]);var inst_24109 = (inst_24108__$1 == null);var state_24131__$1 = (function (){var statearr_24135 = state_24131;(statearr_24135[(7)] = inst_24108__$1);
return statearr_24135;
})();if(cljs.core.truth_(inst_24109))
{var statearr_24136_24159 = state_24131__$1;(statearr_24136_24159[(1)] = (5));
} else
{var statearr_24137_24160 = state_24131__$1;(statearr_24137_24160[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (13)))
{var state_24131__$1 = state_24131;var statearr_24138_24161 = state_24131__$1;(statearr_24138_24161[(2)] = null);
(statearr_24138_24161[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (6)))
{var inst_24108 = (state_24131[(7)]);var inst_24114 = p.call(null,inst_24108);var state_24131__$1 = state_24131;if(cljs.core.truth_(inst_24114))
{var statearr_24139_24162 = state_24131__$1;(statearr_24139_24162[(1)] = (9));
} else
{var statearr_24140_24163 = state_24131__$1;(statearr_24140_24163[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (3)))
{var inst_24129 = (state_24131[(2)]);var state_24131__$1 = state_24131;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24131__$1,inst_24129);
} else
{if((state_val_24132 === (12)))
{var state_24131__$1 = state_24131;var statearr_24141_24164 = state_24131__$1;(statearr_24141_24164[(2)] = null);
(statearr_24141_24164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (2)))
{var state_24131__$1 = state_24131;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24131__$1,(4),ch);
} else
{if((state_val_24132 === (11)))
{var inst_24108 = (state_24131[(7)]);var inst_24118 = (state_24131[(2)]);var state_24131__$1 = state_24131;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24131__$1,(8),inst_24118,inst_24108);
} else
{if((state_val_24132 === (9)))
{var state_24131__$1 = state_24131;var statearr_24142_24165 = state_24131__$1;(statearr_24142_24165[(2)] = tc);
(statearr_24142_24165[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (5)))
{var inst_24111 = cljs.core.async.close_BANG_.call(null,tc);var inst_24112 = cljs.core.async.close_BANG_.call(null,fc);var state_24131__$1 = (function (){var statearr_24143 = state_24131;(statearr_24143[(8)] = inst_24111);
return statearr_24143;
})();var statearr_24144_24166 = state_24131__$1;(statearr_24144_24166[(2)] = inst_24112);
(statearr_24144_24166[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (14)))
{var inst_24125 = (state_24131[(2)]);var state_24131__$1 = state_24131;var statearr_24145_24167 = state_24131__$1;(statearr_24145_24167[(2)] = inst_24125);
(statearr_24145_24167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (10)))
{var state_24131__$1 = state_24131;var statearr_24146_24168 = state_24131__$1;(statearr_24146_24168[(2)] = fc);
(statearr_24146_24168[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24132 === (8)))
{var inst_24120 = (state_24131[(2)]);var state_24131__$1 = state_24131;if(cljs.core.truth_(inst_24120))
{var statearr_24147_24169 = state_24131__$1;(statearr_24147_24169[(1)] = (12));
} else
{var statearr_24148_24170 = state_24131__$1;(statearr_24148_24170[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___24156,tc,fc))
;return ((function (switch__9110__auto__,c__9125__auto___24156,tc,fc){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24152 = [null,null,null,null,null,null,null,null,null];(statearr_24152[(0)] = state_machine__9111__auto__);
(statearr_24152[(1)] = (1));
return statearr_24152;
});
var state_machine__9111__auto____1 = (function (state_24131){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24131);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24153){if((e24153 instanceof Object))
{var ex__9114__auto__ = e24153;var statearr_24154_24171 = state_24131;(statearr_24154_24171[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24131);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24153;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24172 = state_24131;
state_24131 = G__24172;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24131){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24156,tc,fc))
})();var state__9127__auto__ = (function (){var statearr_24155 = f__9126__auto__.call(null);(statearr_24155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24156);
return statearr_24155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24156,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_24219){var state_val_24220 = (state_24219[(1)]);if((state_val_24220 === (7)))
{var inst_24215 = (state_24219[(2)]);var state_24219__$1 = state_24219;var statearr_24221_24237 = state_24219__$1;(statearr_24221_24237[(2)] = inst_24215);
(statearr_24221_24237[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24220 === (6)))
{var inst_24208 = (state_24219[(7)]);var inst_24205 = (state_24219[(8)]);var inst_24212 = f.call(null,inst_24205,inst_24208);var inst_24205__$1 = inst_24212;var state_24219__$1 = (function (){var statearr_24222 = state_24219;(statearr_24222[(8)] = inst_24205__$1);
return statearr_24222;
})();var statearr_24223_24238 = state_24219__$1;(statearr_24223_24238[(2)] = null);
(statearr_24223_24238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24220 === (5)))
{var inst_24205 = (state_24219[(8)]);var state_24219__$1 = state_24219;var statearr_24224_24239 = state_24219__$1;(statearr_24224_24239[(2)] = inst_24205);
(statearr_24224_24239[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24220 === (4)))
{var inst_24208 = (state_24219[(7)]);var inst_24208__$1 = (state_24219[(2)]);var inst_24209 = (inst_24208__$1 == null);var state_24219__$1 = (function (){var statearr_24225 = state_24219;(statearr_24225[(7)] = inst_24208__$1);
return statearr_24225;
})();if(cljs.core.truth_(inst_24209))
{var statearr_24226_24240 = state_24219__$1;(statearr_24226_24240[(1)] = (5));
} else
{var statearr_24227_24241 = state_24219__$1;(statearr_24227_24241[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24220 === (3)))
{var inst_24217 = (state_24219[(2)]);var state_24219__$1 = state_24219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24219__$1,inst_24217);
} else
{if((state_val_24220 === (2)))
{var state_24219__$1 = state_24219;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24219__$1,(4),ch);
} else
{if((state_val_24220 === (1)))
{var inst_24205 = init;var state_24219__$1 = (function (){var statearr_24228 = state_24219;(statearr_24228[(8)] = inst_24205);
return statearr_24228;
})();var statearr_24229_24242 = state_24219__$1;(statearr_24229_24242[(2)] = null);
(statearr_24229_24242[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24233 = [null,null,null,null,null,null,null,null,null];(statearr_24233[(0)] = state_machine__9111__auto__);
(statearr_24233[(1)] = (1));
return statearr_24233;
});
var state_machine__9111__auto____1 = (function (state_24219){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24219);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24234){if((e24234 instanceof Object))
{var ex__9114__auto__ = e24234;var statearr_24235_24243 = state_24219;(statearr_24235_24243[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24219);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24234;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24244 = state_24219;
state_24219 = G__24244;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24219){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24236 = f__9126__auto__.call(null);(statearr_24236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_24318){var state_val_24319 = (state_24318[(1)]);if((state_val_24319 === (7)))
{var inst_24300 = (state_24318[(2)]);var state_24318__$1 = state_24318;var statearr_24320_24343 = state_24318__$1;(statearr_24320_24343[(2)] = inst_24300);
(statearr_24320_24343[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (1)))
{var inst_24294 = cljs.core.seq.call(null,coll);var inst_24295 = inst_24294;var state_24318__$1 = (function (){var statearr_24321 = state_24318;(statearr_24321[(7)] = inst_24295);
return statearr_24321;
})();var statearr_24322_24344 = state_24318__$1;(statearr_24322_24344[(2)] = null);
(statearr_24322_24344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (4)))
{var inst_24295 = (state_24318[(7)]);var inst_24298 = cljs.core.first.call(null,inst_24295);var state_24318__$1 = state_24318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24318__$1,(7),ch,inst_24298);
} else
{if((state_val_24319 === (13)))
{var inst_24312 = (state_24318[(2)]);var state_24318__$1 = state_24318;var statearr_24323_24345 = state_24318__$1;(statearr_24323_24345[(2)] = inst_24312);
(statearr_24323_24345[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (6)))
{var inst_24303 = (state_24318[(2)]);var state_24318__$1 = state_24318;if(cljs.core.truth_(inst_24303))
{var statearr_24324_24346 = state_24318__$1;(statearr_24324_24346[(1)] = (8));
} else
{var statearr_24325_24347 = state_24318__$1;(statearr_24325_24347[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (3)))
{var inst_24316 = (state_24318[(2)]);var state_24318__$1 = state_24318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24318__$1,inst_24316);
} else
{if((state_val_24319 === (12)))
{var state_24318__$1 = state_24318;var statearr_24326_24348 = state_24318__$1;(statearr_24326_24348[(2)] = null);
(statearr_24326_24348[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (2)))
{var inst_24295 = (state_24318[(7)]);var state_24318__$1 = state_24318;if(cljs.core.truth_(inst_24295))
{var statearr_24327_24349 = state_24318__$1;(statearr_24327_24349[(1)] = (4));
} else
{var statearr_24328_24350 = state_24318__$1;(statearr_24328_24350[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (11)))
{var inst_24309 = cljs.core.async.close_BANG_.call(null,ch);var state_24318__$1 = state_24318;var statearr_24329_24351 = state_24318__$1;(statearr_24329_24351[(2)] = inst_24309);
(statearr_24329_24351[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (9)))
{var state_24318__$1 = state_24318;if(cljs.core.truth_(close_QMARK_))
{var statearr_24330_24352 = state_24318__$1;(statearr_24330_24352[(1)] = (11));
} else
{var statearr_24331_24353 = state_24318__$1;(statearr_24331_24353[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (5)))
{var inst_24295 = (state_24318[(7)]);var state_24318__$1 = state_24318;var statearr_24332_24354 = state_24318__$1;(statearr_24332_24354[(2)] = inst_24295);
(statearr_24332_24354[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (10)))
{var inst_24314 = (state_24318[(2)]);var state_24318__$1 = state_24318;var statearr_24333_24355 = state_24318__$1;(statearr_24333_24355[(2)] = inst_24314);
(statearr_24333_24355[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24319 === (8)))
{var inst_24295 = (state_24318[(7)]);var inst_24305 = cljs.core.next.call(null,inst_24295);var inst_24295__$1 = inst_24305;var state_24318__$1 = (function (){var statearr_24334 = state_24318;(statearr_24334[(7)] = inst_24295__$1);
return statearr_24334;
})();var statearr_24335_24356 = state_24318__$1;(statearr_24335_24356[(2)] = null);
(statearr_24335_24356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24339 = [null,null,null,null,null,null,null,null];(statearr_24339[(0)] = state_machine__9111__auto__);
(statearr_24339[(1)] = (1));
return statearr_24339;
});
var state_machine__9111__auto____1 = (function (state_24318){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24318);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24340){if((e24340 instanceof Object))
{var ex__9114__auto__ = e24340;var statearr_24341_24357 = state_24318;(statearr_24341_24357[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24340;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24358 = state_24318;
state_24318 = G__24358;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24318){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_24342 = f__9126__auto__.call(null);(statearr_24342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_24342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24360 = {};return obj24360;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3627__auto__ = _;if(and__3627__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4275__auto__ = (((_ == null))?null:_);return (function (){var or__3639__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24362 = {};return obj24362;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24584 = (function (cs,ch,mult,meta24585){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24585 = meta24585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24584.cljs$lang$type = true;
cljs.core.async.t24584.cljs$lang$ctorStr = "cljs.core.async/t24584";
cljs.core.async.t24584.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24584");
});})(cs))
;
cljs.core.async.t24584.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24584.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24584.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24584.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24584.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24584.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24586){var self__ = this;
var _24586__$1 = this;return self__.meta24585;
});})(cs))
;
cljs.core.async.t24584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24586,meta24585__$1){var self__ = this;
var _24586__$1 = this;return (new cljs.core.async.t24584(self__.cs,self__.ch,self__.mult,meta24585__$1));
});})(cs))
;
cljs.core.async.__GT_t24584 = ((function (cs){
return (function __GT_t24584(cs__$1,ch__$1,mult__$1,meta24585){return (new cljs.core.async.t24584(cs__$1,ch__$1,mult__$1,meta24585));
});})(cs))
;
}
return (new cljs.core.async.t24584(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__9125__auto___24805 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___24805,cs,m,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___24805,cs,m,dchan,dctr,done){
return (function (state_24717){var state_val_24718 = (state_24717[(1)]);if((state_val_24718 === (7)))
{var inst_24713 = (state_24717[(2)]);var state_24717__$1 = state_24717;var statearr_24719_24806 = state_24717__$1;(statearr_24719_24806[(2)] = inst_24713);
(statearr_24719_24806[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (20)))
{var inst_24618 = (state_24717[(7)]);var inst_24628 = cljs.core.first.call(null,inst_24618);var inst_24629 = cljs.core.nth.call(null,inst_24628,(0),null);var inst_24630 = cljs.core.nth.call(null,inst_24628,(1),null);var state_24717__$1 = (function (){var statearr_24720 = state_24717;(statearr_24720[(8)] = inst_24629);
return statearr_24720;
})();if(cljs.core.truth_(inst_24630))
{var statearr_24721_24807 = state_24717__$1;(statearr_24721_24807[(1)] = (22));
} else
{var statearr_24722_24808 = state_24717__$1;(statearr_24722_24808[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (27)))
{var inst_24589 = (state_24717[(9)]);var inst_24660 = (state_24717[(10)]);var inst_24665 = (state_24717[(11)]);var inst_24658 = (state_24717[(12)]);var inst_24665__$1 = cljs.core._nth.call(null,inst_24658,inst_24660);var inst_24666 = cljs.core.async.put_BANG_.call(null,inst_24665__$1,inst_24589,done);var state_24717__$1 = (function (){var statearr_24723 = state_24717;(statearr_24723[(11)] = inst_24665__$1);
return statearr_24723;
})();if(cljs.core.truth_(inst_24666))
{var statearr_24724_24809 = state_24717__$1;(statearr_24724_24809[(1)] = (30));
} else
{var statearr_24725_24810 = state_24717__$1;(statearr_24725_24810[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (1)))
{var state_24717__$1 = state_24717;var statearr_24726_24811 = state_24717__$1;(statearr_24726_24811[(2)] = null);
(statearr_24726_24811[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (24)))
{var inst_24618 = (state_24717[(7)]);var inst_24635 = (state_24717[(2)]);var inst_24636 = cljs.core.next.call(null,inst_24618);var inst_24598 = inst_24636;var inst_24599 = null;var inst_24600 = (0);var inst_24601 = (0);var state_24717__$1 = (function (){var statearr_24727 = state_24717;(statearr_24727[(13)] = inst_24598);
(statearr_24727[(14)] = inst_24601);
(statearr_24727[(15)] = inst_24600);
(statearr_24727[(16)] = inst_24599);
(statearr_24727[(17)] = inst_24635);
return statearr_24727;
})();var statearr_24728_24812 = state_24717__$1;(statearr_24728_24812[(2)] = null);
(statearr_24728_24812[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (39)))
{var state_24717__$1 = state_24717;var statearr_24732_24813 = state_24717__$1;(statearr_24732_24813[(2)] = null);
(statearr_24732_24813[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (4)))
{var inst_24589 = (state_24717[(9)]);var inst_24589__$1 = (state_24717[(2)]);var inst_24590 = (inst_24589__$1 == null);var state_24717__$1 = (function (){var statearr_24733 = state_24717;(statearr_24733[(9)] = inst_24589__$1);
return statearr_24733;
})();if(cljs.core.truth_(inst_24590))
{var statearr_24734_24814 = state_24717__$1;(statearr_24734_24814[(1)] = (5));
} else
{var statearr_24735_24815 = state_24717__$1;(statearr_24735_24815[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (15)))
{var inst_24598 = (state_24717[(13)]);var inst_24601 = (state_24717[(14)]);var inst_24600 = (state_24717[(15)]);var inst_24599 = (state_24717[(16)]);var inst_24614 = (state_24717[(2)]);var inst_24615 = (inst_24601 + (1));var tmp24729 = inst_24598;var tmp24730 = inst_24600;var tmp24731 = inst_24599;var inst_24598__$1 = tmp24729;var inst_24599__$1 = tmp24731;var inst_24600__$1 = tmp24730;var inst_24601__$1 = inst_24615;var state_24717__$1 = (function (){var statearr_24736 = state_24717;(statearr_24736[(13)] = inst_24598__$1);
(statearr_24736[(14)] = inst_24601__$1);
(statearr_24736[(15)] = inst_24600__$1);
(statearr_24736[(18)] = inst_24614);
(statearr_24736[(16)] = inst_24599__$1);
return statearr_24736;
})();var statearr_24737_24816 = state_24717__$1;(statearr_24737_24816[(2)] = null);
(statearr_24737_24816[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (21)))
{var inst_24639 = (state_24717[(2)]);var state_24717__$1 = state_24717;var statearr_24741_24817 = state_24717__$1;(statearr_24741_24817[(2)] = inst_24639);
(statearr_24741_24817[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (31)))
{var inst_24665 = (state_24717[(11)]);var inst_24669 = done.call(null,null);var inst_24670 = cljs.core.async.untap_STAR_.call(null,m,inst_24665);var state_24717__$1 = (function (){var statearr_24742 = state_24717;(statearr_24742[(19)] = inst_24669);
return statearr_24742;
})();var statearr_24743_24818 = state_24717__$1;(statearr_24743_24818[(2)] = inst_24670);
(statearr_24743_24818[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (32)))
{var inst_24657 = (state_24717[(20)]);var inst_24659 = (state_24717[(21)]);var inst_24660 = (state_24717[(10)]);var inst_24658 = (state_24717[(12)]);var inst_24672 = (state_24717[(2)]);var inst_24673 = (inst_24660 + (1));var tmp24738 = inst_24657;var tmp24739 = inst_24659;var tmp24740 = inst_24658;var inst_24657__$1 = tmp24738;var inst_24658__$1 = tmp24740;var inst_24659__$1 = tmp24739;var inst_24660__$1 = inst_24673;var state_24717__$1 = (function (){var statearr_24744 = state_24717;(statearr_24744[(20)] = inst_24657__$1);
(statearr_24744[(21)] = inst_24659__$1);
(statearr_24744[(22)] = inst_24672);
(statearr_24744[(10)] = inst_24660__$1);
(statearr_24744[(12)] = inst_24658__$1);
return statearr_24744;
})();var statearr_24745_24819 = state_24717__$1;(statearr_24745_24819[(2)] = null);
(statearr_24745_24819[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (40)))
{var inst_24685 = (state_24717[(23)]);var inst_24689 = done.call(null,null);var inst_24690 = cljs.core.async.untap_STAR_.call(null,m,inst_24685);var state_24717__$1 = (function (){var statearr_24746 = state_24717;(statearr_24746[(24)] = inst_24689);
return statearr_24746;
})();var statearr_24747_24820 = state_24717__$1;(statearr_24747_24820[(2)] = inst_24690);
(statearr_24747_24820[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (33)))
{var inst_24676 = (state_24717[(25)]);var inst_24678 = cljs.core.chunked_seq_QMARK_.call(null,inst_24676);var state_24717__$1 = state_24717;if(inst_24678)
{var statearr_24748_24821 = state_24717__$1;(statearr_24748_24821[(1)] = (36));
} else
{var statearr_24749_24822 = state_24717__$1;(statearr_24749_24822[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (13)))
{var inst_24608 = (state_24717[(26)]);var inst_24611 = cljs.core.async.close_BANG_.call(null,inst_24608);var state_24717__$1 = state_24717;var statearr_24750_24823 = state_24717__$1;(statearr_24750_24823[(2)] = inst_24611);
(statearr_24750_24823[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (22)))
{var inst_24629 = (state_24717[(8)]);var inst_24632 = cljs.core.async.close_BANG_.call(null,inst_24629);var state_24717__$1 = state_24717;var statearr_24751_24824 = state_24717__$1;(statearr_24751_24824[(2)] = inst_24632);
(statearr_24751_24824[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (36)))
{var inst_24676 = (state_24717[(25)]);var inst_24680 = cljs.core.chunk_first.call(null,inst_24676);var inst_24681 = cljs.core.chunk_rest.call(null,inst_24676);var inst_24682 = cljs.core.count.call(null,inst_24680);var inst_24657 = inst_24681;var inst_24658 = inst_24680;var inst_24659 = inst_24682;var inst_24660 = (0);var state_24717__$1 = (function (){var statearr_24752 = state_24717;(statearr_24752[(20)] = inst_24657);
(statearr_24752[(21)] = inst_24659);
(statearr_24752[(10)] = inst_24660);
(statearr_24752[(12)] = inst_24658);
return statearr_24752;
})();var statearr_24753_24825 = state_24717__$1;(statearr_24753_24825[(2)] = null);
(statearr_24753_24825[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (41)))
{var inst_24676 = (state_24717[(25)]);var inst_24692 = (state_24717[(2)]);var inst_24693 = cljs.core.next.call(null,inst_24676);var inst_24657 = inst_24693;var inst_24658 = null;var inst_24659 = (0);var inst_24660 = (0);var state_24717__$1 = (function (){var statearr_24754 = state_24717;(statearr_24754[(20)] = inst_24657);
(statearr_24754[(21)] = inst_24659);
(statearr_24754[(10)] = inst_24660);
(statearr_24754[(27)] = inst_24692);
(statearr_24754[(12)] = inst_24658);
return statearr_24754;
})();var statearr_24755_24826 = state_24717__$1;(statearr_24755_24826[(2)] = null);
(statearr_24755_24826[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (43)))
{var state_24717__$1 = state_24717;var statearr_24756_24827 = state_24717__$1;(statearr_24756_24827[(2)] = null);
(statearr_24756_24827[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (29)))
{var inst_24701 = (state_24717[(2)]);var state_24717__$1 = state_24717;var statearr_24757_24828 = state_24717__$1;(statearr_24757_24828[(2)] = inst_24701);
(statearr_24757_24828[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (44)))
{var inst_24710 = (state_24717[(2)]);var state_24717__$1 = (function (){var statearr_24758 = state_24717;(statearr_24758[(28)] = inst_24710);
return statearr_24758;
})();var statearr_24759_24829 = state_24717__$1;(statearr_24759_24829[(2)] = null);
(statearr_24759_24829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (6)))
{var inst_24649 = (state_24717[(29)]);var inst_24648 = cljs.core.deref.call(null,cs);var inst_24649__$1 = cljs.core.keys.call(null,inst_24648);var inst_24650 = cljs.core.count.call(null,inst_24649__$1);var inst_24651 = cljs.core.reset_BANG_.call(null,dctr,inst_24650);var inst_24656 = cljs.core.seq.call(null,inst_24649__$1);var inst_24657 = inst_24656;var inst_24658 = null;var inst_24659 = (0);var inst_24660 = (0);var state_24717__$1 = (function (){var statearr_24760 = state_24717;(statearr_24760[(20)] = inst_24657);
(statearr_24760[(21)] = inst_24659);
(statearr_24760[(10)] = inst_24660);
(statearr_24760[(29)] = inst_24649__$1);
(statearr_24760[(30)] = inst_24651);
(statearr_24760[(12)] = inst_24658);
return statearr_24760;
})();var statearr_24761_24830 = state_24717__$1;(statearr_24761_24830[(2)] = null);
(statearr_24761_24830[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (28)))
{var inst_24657 = (state_24717[(20)]);var inst_24676 = (state_24717[(25)]);var inst_24676__$1 = cljs.core.seq.call(null,inst_24657);var state_24717__$1 = (function (){var statearr_24762 = state_24717;(statearr_24762[(25)] = inst_24676__$1);
return statearr_24762;
})();if(inst_24676__$1)
{var statearr_24763_24831 = state_24717__$1;(statearr_24763_24831[(1)] = (33));
} else
{var statearr_24764_24832 = state_24717__$1;(statearr_24764_24832[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (25)))
{var inst_24659 = (state_24717[(21)]);var inst_24660 = (state_24717[(10)]);var inst_24662 = (inst_24660 < inst_24659);var inst_24663 = inst_24662;var state_24717__$1 = state_24717;if(cljs.core.truth_(inst_24663))
{var statearr_24765_24833 = state_24717__$1;(statearr_24765_24833[(1)] = (27));
} else
{var statearr_24766_24834 = state_24717__$1;(statearr_24766_24834[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (34)))
{var state_24717__$1 = state_24717;var statearr_24767_24835 = state_24717__$1;(statearr_24767_24835[(2)] = null);
(statearr_24767_24835[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (17)))
{var state_24717__$1 = state_24717;var statearr_24768_24836 = state_24717__$1;(statearr_24768_24836[(2)] = null);
(statearr_24768_24836[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (3)))
{var inst_24715 = (state_24717[(2)]);var state_24717__$1 = state_24717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24717__$1,inst_24715);
} else
{if((state_val_24718 === (12)))
{var inst_24644 = (state_24717[(2)]);var state_24717__$1 = state_24717;var statearr_24769_24837 = state_24717__$1;(statearr_24769_24837[(2)] = inst_24644);
(statearr_24769_24837[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (2)))
{var state_24717__$1 = state_24717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24717__$1,(4),ch);
} else
{if((state_val_24718 === (23)))
{var state_24717__$1 = state_24717;var statearr_24770_24838 = state_24717__$1;(statearr_24770_24838[(2)] = null);
(statearr_24770_24838[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (35)))
{var inst_24699 = (state_24717[(2)]);var state_24717__$1 = state_24717;var statearr_24771_24839 = state_24717__$1;(statearr_24771_24839[(2)] = inst_24699);
(statearr_24771_24839[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (19)))
{var inst_24618 = (state_24717[(7)]);var inst_24622 = cljs.core.chunk_first.call(null,inst_24618);var inst_24623 = cljs.core.chunk_rest.call(null,inst_24618);var inst_24624 = cljs.core.count.call(null,inst_24622);var inst_24598 = inst_24623;var inst_24599 = inst_24622;var inst_24600 = inst_24624;var inst_24601 = (0);var state_24717__$1 = (function (){var statearr_24772 = state_24717;(statearr_24772[(13)] = inst_24598);
(statearr_24772[(14)] = inst_24601);
(statearr_24772[(15)] = inst_24600);
(statearr_24772[(16)] = inst_24599);
return statearr_24772;
})();var statearr_24773_24840 = state_24717__$1;(statearr_24773_24840[(2)] = null);
(statearr_24773_24840[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (11)))
{var inst_24598 = (state_24717[(13)]);var inst_24618 = (state_24717[(7)]);var inst_24618__$1 = cljs.core.seq.call(null,inst_24598);var state_24717__$1 = (function (){var statearr_24774 = state_24717;(statearr_24774[(7)] = inst_24618__$1);
return statearr_24774;
})();if(inst_24618__$1)
{var statearr_24775_24841 = state_24717__$1;(statearr_24775_24841[(1)] = (16));
} else
{var statearr_24776_24842 = state_24717__$1;(statearr_24776_24842[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (9)))
{var inst_24646 = (state_24717[(2)]);var state_24717__$1 = state_24717;var statearr_24777_24843 = state_24717__$1;(statearr_24777_24843[(2)] = inst_24646);
(statearr_24777_24843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (5)))
{var inst_24596 = cljs.core.deref.call(null,cs);var inst_24597 = cljs.core.seq.call(null,inst_24596);var inst_24598 = inst_24597;var inst_24599 = null;var inst_24600 = (0);var inst_24601 = (0);var state_24717__$1 = (function (){var statearr_24778 = state_24717;(statearr_24778[(13)] = inst_24598);
(statearr_24778[(14)] = inst_24601);
(statearr_24778[(15)] = inst_24600);
(statearr_24778[(16)] = inst_24599);
return statearr_24778;
})();var statearr_24779_24844 = state_24717__$1;(statearr_24779_24844[(2)] = null);
(statearr_24779_24844[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (14)))
{var state_24717__$1 = state_24717;var statearr_24780_24845 = state_24717__$1;(statearr_24780_24845[(2)] = null);
(statearr_24780_24845[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (45)))
{var inst_24707 = (state_24717[(2)]);var state_24717__$1 = state_24717;var statearr_24781_24846 = state_24717__$1;(statearr_24781_24846[(2)] = inst_24707);
(statearr_24781_24846[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (26)))
{var inst_24649 = (state_24717[(29)]);var inst_24703 = (state_24717[(2)]);var inst_24704 = cljs.core.seq.call(null,inst_24649);var state_24717__$1 = (function (){var statearr_24782 = state_24717;(statearr_24782[(31)] = inst_24703);
return statearr_24782;
})();if(inst_24704)
{var statearr_24783_24847 = state_24717__$1;(statearr_24783_24847[(1)] = (42));
} else
{var statearr_24784_24848 = state_24717__$1;(statearr_24784_24848[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (16)))
{var inst_24618 = (state_24717[(7)]);var inst_24620 = cljs.core.chunked_seq_QMARK_.call(null,inst_24618);var state_24717__$1 = state_24717;if(inst_24620)
{var statearr_24785_24849 = state_24717__$1;(statearr_24785_24849[(1)] = (19));
} else
{var statearr_24786_24850 = state_24717__$1;(statearr_24786_24850[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (38)))
{var inst_24696 = (state_24717[(2)]);var state_24717__$1 = state_24717;var statearr_24787_24851 = state_24717__$1;(statearr_24787_24851[(2)] = inst_24696);
(statearr_24787_24851[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (30)))
{var state_24717__$1 = state_24717;var statearr_24788_24852 = state_24717__$1;(statearr_24788_24852[(2)] = null);
(statearr_24788_24852[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (10)))
{var inst_24601 = (state_24717[(14)]);var inst_24599 = (state_24717[(16)]);var inst_24607 = cljs.core._nth.call(null,inst_24599,inst_24601);var inst_24608 = cljs.core.nth.call(null,inst_24607,(0),null);var inst_24609 = cljs.core.nth.call(null,inst_24607,(1),null);var state_24717__$1 = (function (){var statearr_24789 = state_24717;(statearr_24789[(26)] = inst_24608);
return statearr_24789;
})();if(cljs.core.truth_(inst_24609))
{var statearr_24790_24853 = state_24717__$1;(statearr_24790_24853[(1)] = (13));
} else
{var statearr_24791_24854 = state_24717__$1;(statearr_24791_24854[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (18)))
{var inst_24642 = (state_24717[(2)]);var state_24717__$1 = state_24717;var statearr_24792_24855 = state_24717__$1;(statearr_24792_24855[(2)] = inst_24642);
(statearr_24792_24855[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (42)))
{var state_24717__$1 = state_24717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24717__$1,(45),dchan);
} else
{if((state_val_24718 === (37)))
{var inst_24589 = (state_24717[(9)]);var inst_24685 = (state_24717[(23)]);var inst_24676 = (state_24717[(25)]);var inst_24685__$1 = cljs.core.first.call(null,inst_24676);var inst_24686 = cljs.core.async.put_BANG_.call(null,inst_24685__$1,inst_24589,done);var state_24717__$1 = (function (){var statearr_24793 = state_24717;(statearr_24793[(23)] = inst_24685__$1);
return statearr_24793;
})();if(cljs.core.truth_(inst_24686))
{var statearr_24794_24856 = state_24717__$1;(statearr_24794_24856[(1)] = (39));
} else
{var statearr_24795_24857 = state_24717__$1;(statearr_24795_24857[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24718 === (8)))
{var inst_24601 = (state_24717[(14)]);var inst_24600 = (state_24717[(15)]);var inst_24603 = (inst_24601 < inst_24600);var inst_24604 = inst_24603;var state_24717__$1 = state_24717;if(cljs.core.truth_(inst_24604))
{var statearr_24796_24858 = state_24717__$1;(statearr_24796_24858[(1)] = (10));
} else
{var statearr_24797_24859 = state_24717__$1;(statearr_24797_24859[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___24805,cs,m,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___24805,cs,m,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_24801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24801[(0)] = state_machine__9111__auto__);
(statearr_24801[(1)] = (1));
return statearr_24801;
});
var state_machine__9111__auto____1 = (function (state_24717){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_24717);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e24802){if((e24802 instanceof Object))
{var ex__9114__auto__ = e24802;var statearr_24803_24860 = state_24717;(statearr_24803_24860[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24717);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24802;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24861 = state_24717;
state_24717 = G__24861;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_24717){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_24717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___24805,cs,m,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_24804 = f__9126__auto__.call(null);(statearr_24804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___24805);
return statearr_24804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___24805,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj24863 = {};return obj24863;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3627__auto__ = m;if(and__3627__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4275__auto__ = (((m == null))?null:m);return (function (){var or__3639__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__24864){var map__24869 = p__24864;var map__24869__$1 = ((cljs.core.seq_QMARK_.call(null,map__24869))?cljs.core.apply.call(null,cljs.core.hash_map,map__24869):map__24869);var opts = map__24869__$1;var statearr_24870_24873 = state;(statearr_24870_24873[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__24869,map__24869__$1,opts){
return (function (val){var statearr_24871_24874 = state;(statearr_24871_24874[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24869,map__24869__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_24872_24875 = state;(statearr_24872_24875[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__24864 = null;if (arguments.length > 3) {
  p__24864 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__24864);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__24876){
var state = cljs.core.first(arglist__24876);
arglist__24876 = cljs.core.next(arglist__24876);
var cont_block = cljs.core.first(arglist__24876);
arglist__24876 = cljs.core.next(arglist__24876);
var ports = cljs.core.first(arglist__24876);
var p__24864 = cljs.core.rest(arglist__24876);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__24864);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24996 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24996 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24997){
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
this.meta24997 = meta24997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24996.cljs$lang$type = true;
cljs.core.async.t24996.cljs$lang$ctorStr = "cljs.core.async/t24996";
cljs.core.async.t24996.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t24996");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24996.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24996.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24996.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24996.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24996.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24996.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24996.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24998){var self__ = this;
var _24998__$1 = this;return self__.meta24997;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24998,meta24997__$1){var self__ = this;
var _24998__$1 = this;return (new cljs.core.async.t24996(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24997__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24996 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24996(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24997){return (new cljs.core.async.t24996(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24997));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24996(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__9125__auto___25115 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25068){var state_val_25069 = (state_25068[(1)]);if((state_val_25069 === (7)))
{var inst_25012 = (state_25068[(7)]);var inst_25017 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25012);var state_25068__$1 = state_25068;var statearr_25070_25116 = state_25068__$1;(statearr_25070_25116[(2)] = inst_25017);
(statearr_25070_25116[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (20)))
{var inst_25027 = (state_25068[(8)]);var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25068__$1,(23),out,inst_25027);
} else
{if((state_val_25069 === (1)))
{var inst_25002 = (state_25068[(9)]);var inst_25002__$1 = calc_state.call(null);var inst_25003 = cljs.core.seq_QMARK_.call(null,inst_25002__$1);var state_25068__$1 = (function (){var statearr_25071 = state_25068;(statearr_25071[(9)] = inst_25002__$1);
return statearr_25071;
})();if(inst_25003)
{var statearr_25072_25117 = state_25068__$1;(statearr_25072_25117[(1)] = (2));
} else
{var statearr_25073_25118 = state_25068__$1;(statearr_25073_25118[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (24)))
{var inst_25020 = (state_25068[(10)]);var inst_25012 = inst_25020;var state_25068__$1 = (function (){var statearr_25074 = state_25068;(statearr_25074[(7)] = inst_25012);
return statearr_25074;
})();var statearr_25075_25119 = state_25068__$1;(statearr_25075_25119[(2)] = null);
(statearr_25075_25119[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (4)))
{var inst_25002 = (state_25068[(9)]);var inst_25008 = (state_25068[(2)]);var inst_25009 = cljs.core.get.call(null,inst_25008,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25010 = cljs.core.get.call(null,inst_25008,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25011 = cljs.core.get.call(null,inst_25008,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_25012 = inst_25002;var state_25068__$1 = (function (){var statearr_25076 = state_25068;(statearr_25076[(11)] = inst_25009);
(statearr_25076[(12)] = inst_25010);
(statearr_25076[(13)] = inst_25011);
(statearr_25076[(7)] = inst_25012);
return statearr_25076;
})();var statearr_25077_25120 = state_25068__$1;(statearr_25077_25120[(2)] = null);
(statearr_25077_25120[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (15)))
{var state_25068__$1 = state_25068;var statearr_25078_25121 = state_25068__$1;(statearr_25078_25121[(2)] = null);
(statearr_25078_25121[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (21)))
{var inst_25020 = (state_25068[(10)]);var inst_25012 = inst_25020;var state_25068__$1 = (function (){var statearr_25079 = state_25068;(statearr_25079[(7)] = inst_25012);
return statearr_25079;
})();var statearr_25080_25122 = state_25068__$1;(statearr_25080_25122[(2)] = null);
(statearr_25080_25122[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (13)))
{var inst_25064 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25081_25123 = state_25068__$1;(statearr_25081_25123[(2)] = inst_25064);
(statearr_25081_25123[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (22)))
{var inst_25062 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25082_25124 = state_25068__$1;(statearr_25082_25124[(2)] = inst_25062);
(statearr_25082_25124[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (6)))
{var inst_25066 = (state_25068[(2)]);var state_25068__$1 = state_25068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25068__$1,inst_25066);
} else
{if((state_val_25069 === (25)))
{var state_25068__$1 = state_25068;var statearr_25083_25125 = state_25068__$1;(statearr_25083_25125[(2)] = null);
(statearr_25083_25125[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (17)))
{var inst_25042 = (state_25068[(14)]);var state_25068__$1 = state_25068;var statearr_25084_25126 = state_25068__$1;(statearr_25084_25126[(2)] = inst_25042);
(statearr_25084_25126[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (3)))
{var inst_25002 = (state_25068[(9)]);var state_25068__$1 = state_25068;var statearr_25085_25127 = state_25068__$1;(statearr_25085_25127[(2)] = inst_25002);
(statearr_25085_25127[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (12)))
{var inst_25028 = (state_25068[(15)]);var inst_25023 = (state_25068[(16)]);var inst_25042 = (state_25068[(14)]);var inst_25042__$1 = inst_25023.call(null,inst_25028);var state_25068__$1 = (function (){var statearr_25086 = state_25068;(statearr_25086[(14)] = inst_25042__$1);
return statearr_25086;
})();if(cljs.core.truth_(inst_25042__$1))
{var statearr_25087_25128 = state_25068__$1;(statearr_25087_25128[(1)] = (17));
} else
{var statearr_25088_25129 = state_25068__$1;(statearr_25088_25129[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (2)))
{var inst_25002 = (state_25068[(9)]);var inst_25005 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25002);var state_25068__$1 = state_25068;var statearr_25089_25130 = state_25068__$1;(statearr_25089_25130[(2)] = inst_25005);
(statearr_25089_25130[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (23)))
{var inst_25053 = (state_25068[(2)]);var state_25068__$1 = state_25068;if(cljs.core.truth_(inst_25053))
{var statearr_25090_25131 = state_25068__$1;(statearr_25090_25131[(1)] = (24));
} else
{var statearr_25091_25132 = state_25068__$1;(statearr_25091_25132[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (19)))
{var inst_25050 = (state_25068[(2)]);var state_25068__$1 = state_25068;if(cljs.core.truth_(inst_25050))
{var statearr_25092_25133 = state_25068__$1;(statearr_25092_25133[(1)] = (20));
} else
{var statearr_25093_25134 = state_25068__$1;(statearr_25093_25134[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (11)))
{var inst_25027 = (state_25068[(8)]);var inst_25033 = (inst_25027 == null);var state_25068__$1 = state_25068;if(cljs.core.truth_(inst_25033))
{var statearr_25094_25135 = state_25068__$1;(statearr_25094_25135[(1)] = (14));
} else
{var statearr_25095_25136 = state_25068__$1;(statearr_25095_25136[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (9)))
{var inst_25020 = (state_25068[(10)]);var inst_25020__$1 = (state_25068[(2)]);var inst_25021 = cljs.core.get.call(null,inst_25020__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_25022 = cljs.core.get.call(null,inst_25020__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_25023 = cljs.core.get.call(null,inst_25020__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_25068__$1 = (function (){var statearr_25096 = state_25068;(statearr_25096[(17)] = inst_25022);
(statearr_25096[(10)] = inst_25020__$1);
(statearr_25096[(16)] = inst_25023);
return statearr_25096;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_25068__$1,(10),inst_25021);
} else
{if((state_val_25069 === (5)))
{var inst_25012 = (state_25068[(7)]);var inst_25015 = cljs.core.seq_QMARK_.call(null,inst_25012);var state_25068__$1 = state_25068;if(inst_25015)
{var statearr_25097_25137 = state_25068__$1;(statearr_25097_25137[(1)] = (7));
} else
{var statearr_25098_25138 = state_25068__$1;(statearr_25098_25138[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (14)))
{var inst_25028 = (state_25068[(15)]);var inst_25035 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25028);var state_25068__$1 = state_25068;var statearr_25099_25139 = state_25068__$1;(statearr_25099_25139[(2)] = inst_25035);
(statearr_25099_25139[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (26)))
{var inst_25058 = (state_25068[(2)]);var state_25068__$1 = state_25068;var statearr_25100_25140 = state_25068__$1;(statearr_25100_25140[(2)] = inst_25058);
(statearr_25100_25140[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (16)))
{var inst_25038 = (state_25068[(2)]);var inst_25039 = calc_state.call(null);var inst_25012 = inst_25039;var state_25068__$1 = (function (){var statearr_25101 = state_25068;(statearr_25101[(7)] = inst_25012);
(statearr_25101[(18)] = inst_25038);
return statearr_25101;
})();var statearr_25102_25141 = state_25068__$1;(statearr_25102_25141[(2)] = null);
(statearr_25102_25141[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (10)))
{var inst_25028 = (state_25068[(15)]);var inst_25027 = (state_25068[(8)]);var inst_25026 = (state_25068[(2)]);var inst_25027__$1 = cljs.core.nth.call(null,inst_25026,(0),null);var inst_25028__$1 = cljs.core.nth.call(null,inst_25026,(1),null);var inst_25029 = (inst_25027__$1 == null);var inst_25030 = cljs.core._EQ_.call(null,inst_25028__$1,change);var inst_25031 = (inst_25029) || (inst_25030);var state_25068__$1 = (function (){var statearr_25103 = state_25068;(statearr_25103[(15)] = inst_25028__$1);
(statearr_25103[(8)] = inst_25027__$1);
return statearr_25103;
})();if(cljs.core.truth_(inst_25031))
{var statearr_25104_25142 = state_25068__$1;(statearr_25104_25142[(1)] = (11));
} else
{var statearr_25105_25143 = state_25068__$1;(statearr_25105_25143[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (18)))
{var inst_25022 = (state_25068[(17)]);var inst_25028 = (state_25068[(15)]);var inst_25023 = (state_25068[(16)]);var inst_25045 = cljs.core.empty_QMARK_.call(null,inst_25023);var inst_25046 = inst_25022.call(null,inst_25028);var inst_25047 = cljs.core.not.call(null,inst_25046);var inst_25048 = (inst_25045) && (inst_25047);var state_25068__$1 = state_25068;var statearr_25106_25144 = state_25068__$1;(statearr_25106_25144[(2)] = inst_25048);
(statearr_25106_25144[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25069 === (8)))
{var inst_25012 = (state_25068[(7)]);var state_25068__$1 = state_25068;var statearr_25107_25145 = state_25068__$1;(statearr_25107_25145[(2)] = inst_25012);
(statearr_25107_25145[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__9110__auto__,c__9125__auto___25115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25111[(0)] = state_machine__9111__auto__);
(statearr_25111[(1)] = (1));
return statearr_25111;
});
var state_machine__9111__auto____1 = (function (state_25068){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25068);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25112){if((e25112 instanceof Object))
{var ex__9114__auto__ = e25112;var statearr_25113_25146 = state_25068;(statearr_25113_25146[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25068);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25112;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25147 = state_25068;
state_25068 = G__25147;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25068){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__9127__auto__ = (function (){var statearr_25114 = f__9126__auto__.call(null);(statearr_25114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25115);
return statearr_25114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj25149 = {};return obj25149;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3627__auto__ = p;if(and__3627__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3627__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4275__auto__ = (((p == null))?null:p);return (function (){var or__3639__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3639__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3639__auto__,mults){
return (function (p1__25150_SHARP_){if(cljs.core.truth_(p1__25150_SHARP_.call(null,topic)))
{return p1__25150_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25150_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3639__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25273 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25274){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25274 = meta25274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25273.cljs$lang$type = true;
cljs.core.async.t25273.cljs$lang$ctorStr = "cljs.core.async/t25273";
cljs.core.async.t25273.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25273");
});})(mults,ensure_mult))
;
cljs.core.async.t25273.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25273.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25273.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25273.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25275){var self__ = this;
var _25275__$1 = this;return self__.meta25274;
});})(mults,ensure_mult))
;
cljs.core.async.t25273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25275,meta25274__$1){var self__ = this;
var _25275__$1 = this;return (new cljs.core.async.t25273(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25274__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25273 = ((function (mults,ensure_mult){
return (function __GT_t25273(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25274){return (new cljs.core.async.t25273(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25274));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25273(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__9125__auto___25395 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25395,mults,ensure_mult,p){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25395,mults,ensure_mult,p){
return (function (state_25347){var state_val_25348 = (state_25347[(1)]);if((state_val_25348 === (7)))
{var inst_25343 = (state_25347[(2)]);var state_25347__$1 = state_25347;var statearr_25349_25396 = state_25347__$1;(statearr_25349_25396[(2)] = inst_25343);
(statearr_25349_25396[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (20)))
{var state_25347__$1 = state_25347;var statearr_25350_25397 = state_25347__$1;(statearr_25350_25397[(2)] = null);
(statearr_25350_25397[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (1)))
{var state_25347__$1 = state_25347;var statearr_25351_25398 = state_25347__$1;(statearr_25351_25398[(2)] = null);
(statearr_25351_25398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (24)))
{var inst_25326 = (state_25347[(7)]);var inst_25335 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25326);var state_25347__$1 = state_25347;var statearr_25352_25399 = state_25347__$1;(statearr_25352_25399[(2)] = inst_25335);
(statearr_25352_25399[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (4)))
{var inst_25278 = (state_25347[(8)]);var inst_25278__$1 = (state_25347[(2)]);var inst_25279 = (inst_25278__$1 == null);var state_25347__$1 = (function (){var statearr_25353 = state_25347;(statearr_25353[(8)] = inst_25278__$1);
return statearr_25353;
})();if(cljs.core.truth_(inst_25279))
{var statearr_25354_25400 = state_25347__$1;(statearr_25354_25400[(1)] = (5));
} else
{var statearr_25355_25401 = state_25347__$1;(statearr_25355_25401[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (15)))
{var inst_25320 = (state_25347[(2)]);var state_25347__$1 = state_25347;var statearr_25356_25402 = state_25347__$1;(statearr_25356_25402[(2)] = inst_25320);
(statearr_25356_25402[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (21)))
{var inst_25340 = (state_25347[(2)]);var state_25347__$1 = (function (){var statearr_25357 = state_25347;(statearr_25357[(9)] = inst_25340);
return statearr_25357;
})();var statearr_25358_25403 = state_25347__$1;(statearr_25358_25403[(2)] = null);
(statearr_25358_25403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (13)))
{var inst_25302 = (state_25347[(10)]);var inst_25304 = cljs.core.chunked_seq_QMARK_.call(null,inst_25302);var state_25347__$1 = state_25347;if(inst_25304)
{var statearr_25359_25404 = state_25347__$1;(statearr_25359_25404[(1)] = (16));
} else
{var statearr_25360_25405 = state_25347__$1;(statearr_25360_25405[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (22)))
{var inst_25332 = (state_25347[(2)]);var state_25347__$1 = state_25347;if(cljs.core.truth_(inst_25332))
{var statearr_25361_25406 = state_25347__$1;(statearr_25361_25406[(1)] = (23));
} else
{var statearr_25362_25407 = state_25347__$1;(statearr_25362_25407[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (6)))
{var inst_25278 = (state_25347[(8)]);var inst_25326 = (state_25347[(7)]);var inst_25328 = (state_25347[(11)]);var inst_25326__$1 = topic_fn.call(null,inst_25278);var inst_25327 = cljs.core.deref.call(null,mults);var inst_25328__$1 = cljs.core.get.call(null,inst_25327,inst_25326__$1);var state_25347__$1 = (function (){var statearr_25363 = state_25347;(statearr_25363[(7)] = inst_25326__$1);
(statearr_25363[(11)] = inst_25328__$1);
return statearr_25363;
})();if(cljs.core.truth_(inst_25328__$1))
{var statearr_25364_25408 = state_25347__$1;(statearr_25364_25408[(1)] = (19));
} else
{var statearr_25365_25409 = state_25347__$1;(statearr_25365_25409[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (25)))
{var inst_25337 = (state_25347[(2)]);var state_25347__$1 = state_25347;var statearr_25366_25410 = state_25347__$1;(statearr_25366_25410[(2)] = inst_25337);
(statearr_25366_25410[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (17)))
{var inst_25302 = (state_25347[(10)]);var inst_25311 = cljs.core.first.call(null,inst_25302);var inst_25312 = cljs.core.async.muxch_STAR_.call(null,inst_25311);var inst_25313 = cljs.core.async.close_BANG_.call(null,inst_25312);var inst_25314 = cljs.core.next.call(null,inst_25302);var inst_25288 = inst_25314;var inst_25289 = null;var inst_25290 = (0);var inst_25291 = (0);var state_25347__$1 = (function (){var statearr_25367 = state_25347;(statearr_25367[(12)] = inst_25291);
(statearr_25367[(13)] = inst_25290);
(statearr_25367[(14)] = inst_25288);
(statearr_25367[(15)] = inst_25289);
(statearr_25367[(16)] = inst_25313);
return statearr_25367;
})();var statearr_25368_25411 = state_25347__$1;(statearr_25368_25411[(2)] = null);
(statearr_25368_25411[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (3)))
{var inst_25345 = (state_25347[(2)]);var state_25347__$1 = state_25347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25347__$1,inst_25345);
} else
{if((state_val_25348 === (12)))
{var inst_25322 = (state_25347[(2)]);var state_25347__$1 = state_25347;var statearr_25369_25412 = state_25347__$1;(statearr_25369_25412[(2)] = inst_25322);
(statearr_25369_25412[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (2)))
{var state_25347__$1 = state_25347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25347__$1,(4),ch);
} else
{if((state_val_25348 === (23)))
{var state_25347__$1 = state_25347;var statearr_25370_25413 = state_25347__$1;(statearr_25370_25413[(2)] = null);
(statearr_25370_25413[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (19)))
{var inst_25278 = (state_25347[(8)]);var inst_25328 = (state_25347[(11)]);var inst_25330 = cljs.core.async.muxch_STAR_.call(null,inst_25328);var state_25347__$1 = state_25347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25347__$1,(22),inst_25330,inst_25278);
} else
{if((state_val_25348 === (11)))
{var inst_25302 = (state_25347[(10)]);var inst_25288 = (state_25347[(14)]);var inst_25302__$1 = cljs.core.seq.call(null,inst_25288);var state_25347__$1 = (function (){var statearr_25371 = state_25347;(statearr_25371[(10)] = inst_25302__$1);
return statearr_25371;
})();if(inst_25302__$1)
{var statearr_25372_25414 = state_25347__$1;(statearr_25372_25414[(1)] = (13));
} else
{var statearr_25373_25415 = state_25347__$1;(statearr_25373_25415[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (9)))
{var inst_25324 = (state_25347[(2)]);var state_25347__$1 = state_25347;var statearr_25374_25416 = state_25347__$1;(statearr_25374_25416[(2)] = inst_25324);
(statearr_25374_25416[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (5)))
{var inst_25285 = cljs.core.deref.call(null,mults);var inst_25286 = cljs.core.vals.call(null,inst_25285);var inst_25287 = cljs.core.seq.call(null,inst_25286);var inst_25288 = inst_25287;var inst_25289 = null;var inst_25290 = (0);var inst_25291 = (0);var state_25347__$1 = (function (){var statearr_25375 = state_25347;(statearr_25375[(12)] = inst_25291);
(statearr_25375[(13)] = inst_25290);
(statearr_25375[(14)] = inst_25288);
(statearr_25375[(15)] = inst_25289);
return statearr_25375;
})();var statearr_25376_25417 = state_25347__$1;(statearr_25376_25417[(2)] = null);
(statearr_25376_25417[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (14)))
{var state_25347__$1 = state_25347;var statearr_25380_25418 = state_25347__$1;(statearr_25380_25418[(2)] = null);
(statearr_25380_25418[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (16)))
{var inst_25302 = (state_25347[(10)]);var inst_25306 = cljs.core.chunk_first.call(null,inst_25302);var inst_25307 = cljs.core.chunk_rest.call(null,inst_25302);var inst_25308 = cljs.core.count.call(null,inst_25306);var inst_25288 = inst_25307;var inst_25289 = inst_25306;var inst_25290 = inst_25308;var inst_25291 = (0);var state_25347__$1 = (function (){var statearr_25381 = state_25347;(statearr_25381[(12)] = inst_25291);
(statearr_25381[(13)] = inst_25290);
(statearr_25381[(14)] = inst_25288);
(statearr_25381[(15)] = inst_25289);
return statearr_25381;
})();var statearr_25382_25419 = state_25347__$1;(statearr_25382_25419[(2)] = null);
(statearr_25382_25419[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (10)))
{var inst_25291 = (state_25347[(12)]);var inst_25290 = (state_25347[(13)]);var inst_25288 = (state_25347[(14)]);var inst_25289 = (state_25347[(15)]);var inst_25296 = cljs.core._nth.call(null,inst_25289,inst_25291);var inst_25297 = cljs.core.async.muxch_STAR_.call(null,inst_25296);var inst_25298 = cljs.core.async.close_BANG_.call(null,inst_25297);var inst_25299 = (inst_25291 + (1));var tmp25377 = inst_25290;var tmp25378 = inst_25288;var tmp25379 = inst_25289;var inst_25288__$1 = tmp25378;var inst_25289__$1 = tmp25379;var inst_25290__$1 = tmp25377;var inst_25291__$1 = inst_25299;var state_25347__$1 = (function (){var statearr_25383 = state_25347;(statearr_25383[(17)] = inst_25298);
(statearr_25383[(12)] = inst_25291__$1);
(statearr_25383[(13)] = inst_25290__$1);
(statearr_25383[(14)] = inst_25288__$1);
(statearr_25383[(15)] = inst_25289__$1);
return statearr_25383;
})();var statearr_25384_25420 = state_25347__$1;(statearr_25384_25420[(2)] = null);
(statearr_25384_25420[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (18)))
{var inst_25317 = (state_25347[(2)]);var state_25347__$1 = state_25347;var statearr_25385_25421 = state_25347__$1;(statearr_25385_25421[(2)] = inst_25317);
(statearr_25385_25421[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25348 === (8)))
{var inst_25291 = (state_25347[(12)]);var inst_25290 = (state_25347[(13)]);var inst_25293 = (inst_25291 < inst_25290);var inst_25294 = inst_25293;var state_25347__$1 = state_25347;if(cljs.core.truth_(inst_25294))
{var statearr_25386_25422 = state_25347__$1;(statearr_25386_25422[(1)] = (10));
} else
{var statearr_25387_25423 = state_25347__$1;(statearr_25387_25423[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25395,mults,ensure_mult,p))
;return ((function (switch__9110__auto__,c__9125__auto___25395,mults,ensure_mult,p){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25391[(0)] = state_machine__9111__auto__);
(statearr_25391[(1)] = (1));
return statearr_25391;
});
var state_machine__9111__auto____1 = (function (state_25347){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25347);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25392){if((e25392 instanceof Object))
{var ex__9114__auto__ = e25392;var statearr_25393_25424 = state_25347;(statearr_25393_25424[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25347);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25392;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25425 = state_25347;
state_25347 = G__25425;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25347){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25395,mults,ensure_mult,p))
})();var state__9127__auto__ = (function (){var statearr_25394 = f__9126__auto__.call(null);(statearr_25394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25395);
return statearr_25394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25395,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__9125__auto___25562 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25562,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25562,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25532){var state_val_25533 = (state_25532[(1)]);if((state_val_25533 === (7)))
{var state_25532__$1 = state_25532;var statearr_25534_25563 = state_25532__$1;(statearr_25534_25563[(2)] = null);
(statearr_25534_25563[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (1)))
{var state_25532__$1 = state_25532;var statearr_25535_25564 = state_25532__$1;(statearr_25535_25564[(2)] = null);
(statearr_25535_25564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (4)))
{var inst_25496 = (state_25532[(7)]);var inst_25498 = (inst_25496 < cnt);var state_25532__$1 = state_25532;if(cljs.core.truth_(inst_25498))
{var statearr_25536_25565 = state_25532__$1;(statearr_25536_25565[(1)] = (6));
} else
{var statearr_25537_25566 = state_25532__$1;(statearr_25537_25566[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (15)))
{var inst_25528 = (state_25532[(2)]);var state_25532__$1 = state_25532;var statearr_25538_25567 = state_25532__$1;(statearr_25538_25567[(2)] = inst_25528);
(statearr_25538_25567[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (13)))
{var inst_25521 = cljs.core.async.close_BANG_.call(null,out);var state_25532__$1 = state_25532;var statearr_25539_25568 = state_25532__$1;(statearr_25539_25568[(2)] = inst_25521);
(statearr_25539_25568[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (6)))
{var state_25532__$1 = state_25532;var statearr_25540_25569 = state_25532__$1;(statearr_25540_25569[(2)] = null);
(statearr_25540_25569[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (3)))
{var inst_25530 = (state_25532[(2)]);var state_25532__$1 = state_25532;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25532__$1,inst_25530);
} else
{if((state_val_25533 === (12)))
{var inst_25518 = (state_25532[(8)]);var inst_25518__$1 = (state_25532[(2)]);var inst_25519 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25518__$1);var state_25532__$1 = (function (){var statearr_25541 = state_25532;(statearr_25541[(8)] = inst_25518__$1);
return statearr_25541;
})();if(cljs.core.truth_(inst_25519))
{var statearr_25542_25570 = state_25532__$1;(statearr_25542_25570[(1)] = (13));
} else
{var statearr_25543_25571 = state_25532__$1;(statearr_25543_25571[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (2)))
{var inst_25495 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25496 = (0);var state_25532__$1 = (function (){var statearr_25544 = state_25532;(statearr_25544[(9)] = inst_25495);
(statearr_25544[(7)] = inst_25496);
return statearr_25544;
})();var statearr_25545_25572 = state_25532__$1;(statearr_25545_25572[(2)] = null);
(statearr_25545_25572[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (11)))
{var inst_25496 = (state_25532[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25532,(10),Object,null,(9));var inst_25505 = chs__$1.call(null,inst_25496);var inst_25506 = done.call(null,inst_25496);var inst_25507 = cljs.core.async.take_BANG_.call(null,inst_25505,inst_25506);var state_25532__$1 = state_25532;var statearr_25546_25573 = state_25532__$1;(statearr_25546_25573[(2)] = inst_25507);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25532__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (9)))
{var inst_25496 = (state_25532[(7)]);var inst_25509 = (state_25532[(2)]);var inst_25510 = (inst_25496 + (1));var inst_25496__$1 = inst_25510;var state_25532__$1 = (function (){var statearr_25547 = state_25532;(statearr_25547[(10)] = inst_25509);
(statearr_25547[(7)] = inst_25496__$1);
return statearr_25547;
})();var statearr_25548_25574 = state_25532__$1;(statearr_25548_25574[(2)] = null);
(statearr_25548_25574[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (5)))
{var inst_25516 = (state_25532[(2)]);var state_25532__$1 = (function (){var statearr_25549 = state_25532;(statearr_25549[(11)] = inst_25516);
return statearr_25549;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25532__$1,(12),dchan);
} else
{if((state_val_25533 === (14)))
{var inst_25518 = (state_25532[(8)]);var inst_25523 = cljs.core.apply.call(null,f,inst_25518);var state_25532__$1 = state_25532;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25532__$1,(16),out,inst_25523);
} else
{if((state_val_25533 === (16)))
{var inst_25525 = (state_25532[(2)]);var state_25532__$1 = (function (){var statearr_25550 = state_25532;(statearr_25550[(12)] = inst_25525);
return statearr_25550;
})();var statearr_25551_25575 = state_25532__$1;(statearr_25551_25575[(2)] = null);
(statearr_25551_25575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (10)))
{var inst_25500 = (state_25532[(2)]);var inst_25501 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25532__$1 = (function (){var statearr_25552 = state_25532;(statearr_25552[(13)] = inst_25500);
return statearr_25552;
})();var statearr_25553_25576 = state_25532__$1;(statearr_25553_25576[(2)] = inst_25501);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25532__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25533 === (8)))
{var inst_25514 = (state_25532[(2)]);var state_25532__$1 = state_25532;var statearr_25554_25577 = state_25532__$1;(statearr_25554_25577[(2)] = inst_25514);
(statearr_25554_25577[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25562,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__9110__auto__,c__9125__auto___25562,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25558[(0)] = state_machine__9111__auto__);
(statearr_25558[(1)] = (1));
return statearr_25558;
});
var state_machine__9111__auto____1 = (function (state_25532){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25532);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25559){if((e25559 instanceof Object))
{var ex__9114__auto__ = e25559;var statearr_25560_25578 = state_25532;(statearr_25560_25578[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25532);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25559;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25579 = state_25532;
state_25532 = G__25579;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25532){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25562,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__9127__auto__ = (function (){var statearr_25561 = f__9126__auto__.call(null);(statearr_25561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25562);
return statearr_25561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25562,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25687 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25687,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25687,out){
return (function (state_25663){var state_val_25664 = (state_25663[(1)]);if((state_val_25664 === (7)))
{var inst_25643 = (state_25663[(7)]);var inst_25642 = (state_25663[(8)]);var inst_25642__$1 = (state_25663[(2)]);var inst_25643__$1 = cljs.core.nth.call(null,inst_25642__$1,(0),null);var inst_25644 = cljs.core.nth.call(null,inst_25642__$1,(1),null);var inst_25645 = (inst_25643__$1 == null);var state_25663__$1 = (function (){var statearr_25665 = state_25663;(statearr_25665[(9)] = inst_25644);
(statearr_25665[(7)] = inst_25643__$1);
(statearr_25665[(8)] = inst_25642__$1);
return statearr_25665;
})();if(cljs.core.truth_(inst_25645))
{var statearr_25666_25688 = state_25663__$1;(statearr_25666_25688[(1)] = (8));
} else
{var statearr_25667_25689 = state_25663__$1;(statearr_25667_25689[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25664 === (1)))
{var inst_25634 = cljs.core.vec.call(null,chs);var inst_25635 = inst_25634;var state_25663__$1 = (function (){var statearr_25668 = state_25663;(statearr_25668[(10)] = inst_25635);
return statearr_25668;
})();var statearr_25669_25690 = state_25663__$1;(statearr_25669_25690[(2)] = null);
(statearr_25669_25690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25664 === (4)))
{var inst_25635 = (state_25663[(10)]);var state_25663__$1 = state_25663;return cljs.core.async.ioc_alts_BANG_.call(null,state_25663__$1,(7),inst_25635);
} else
{if((state_val_25664 === (6)))
{var inst_25659 = (state_25663[(2)]);var state_25663__$1 = state_25663;var statearr_25670_25691 = state_25663__$1;(statearr_25670_25691[(2)] = inst_25659);
(statearr_25670_25691[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25664 === (3)))
{var inst_25661 = (state_25663[(2)]);var state_25663__$1 = state_25663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25663__$1,inst_25661);
} else
{if((state_val_25664 === (2)))
{var inst_25635 = (state_25663[(10)]);var inst_25637 = cljs.core.count.call(null,inst_25635);var inst_25638 = (inst_25637 > (0));var state_25663__$1 = state_25663;if(cljs.core.truth_(inst_25638))
{var statearr_25672_25692 = state_25663__$1;(statearr_25672_25692[(1)] = (4));
} else
{var statearr_25673_25693 = state_25663__$1;(statearr_25673_25693[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25664 === (11)))
{var inst_25635 = (state_25663[(10)]);var inst_25652 = (state_25663[(2)]);var tmp25671 = inst_25635;var inst_25635__$1 = tmp25671;var state_25663__$1 = (function (){var statearr_25674 = state_25663;(statearr_25674[(11)] = inst_25652);
(statearr_25674[(10)] = inst_25635__$1);
return statearr_25674;
})();var statearr_25675_25694 = state_25663__$1;(statearr_25675_25694[(2)] = null);
(statearr_25675_25694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25664 === (9)))
{var inst_25643 = (state_25663[(7)]);var state_25663__$1 = state_25663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25663__$1,(11),out,inst_25643);
} else
{if((state_val_25664 === (5)))
{var inst_25657 = cljs.core.async.close_BANG_.call(null,out);var state_25663__$1 = state_25663;var statearr_25676_25695 = state_25663__$1;(statearr_25676_25695[(2)] = inst_25657);
(statearr_25676_25695[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25664 === (10)))
{var inst_25655 = (state_25663[(2)]);var state_25663__$1 = state_25663;var statearr_25677_25696 = state_25663__$1;(statearr_25677_25696[(2)] = inst_25655);
(statearr_25677_25696[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25664 === (8)))
{var inst_25644 = (state_25663[(9)]);var inst_25643 = (state_25663[(7)]);var inst_25642 = (state_25663[(8)]);var inst_25635 = (state_25663[(10)]);var inst_25647 = (function (){var c = inst_25644;var v = inst_25643;var vec__25640 = inst_25642;var cs = inst_25635;return ((function (c,v,vec__25640,cs,inst_25644,inst_25643,inst_25642,inst_25635,state_val_25664,c__9125__auto___25687,out){
return (function (p1__25580_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25580_SHARP_);
});
;})(c,v,vec__25640,cs,inst_25644,inst_25643,inst_25642,inst_25635,state_val_25664,c__9125__auto___25687,out))
})();var inst_25648 = cljs.core.filterv.call(null,inst_25647,inst_25635);var inst_25635__$1 = inst_25648;var state_25663__$1 = (function (){var statearr_25678 = state_25663;(statearr_25678[(10)] = inst_25635__$1);
return statearr_25678;
})();var statearr_25679_25697 = state_25663__$1;(statearr_25679_25697[(2)] = null);
(statearr_25679_25697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25687,out))
;return ((function (switch__9110__auto__,c__9125__auto___25687,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25683 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25683[(0)] = state_machine__9111__auto__);
(statearr_25683[(1)] = (1));
return statearr_25683;
});
var state_machine__9111__auto____1 = (function (state_25663){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25663);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25684){if((e25684 instanceof Object))
{var ex__9114__auto__ = e25684;var statearr_25685_25698 = state_25663;(statearr_25685_25698[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25663);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25684;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25699 = state_25663;
state_25663 = G__25699;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25663){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25687,out))
})();var state__9127__auto__ = (function (){var statearr_25686 = f__9126__auto__.call(null);(statearr_25686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25687);
return statearr_25686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25687,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25792 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25792,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25792,out){
return (function (state_25769){var state_val_25770 = (state_25769[(1)]);if((state_val_25770 === (7)))
{var inst_25751 = (state_25769[(7)]);var inst_25751__$1 = (state_25769[(2)]);var inst_25752 = (inst_25751__$1 == null);var inst_25753 = cljs.core.not.call(null,inst_25752);var state_25769__$1 = (function (){var statearr_25771 = state_25769;(statearr_25771[(7)] = inst_25751__$1);
return statearr_25771;
})();if(inst_25753)
{var statearr_25772_25793 = state_25769__$1;(statearr_25772_25793[(1)] = (8));
} else
{var statearr_25773_25794 = state_25769__$1;(statearr_25773_25794[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25770 === (1)))
{var inst_25746 = (0);var state_25769__$1 = (function (){var statearr_25774 = state_25769;(statearr_25774[(8)] = inst_25746);
return statearr_25774;
})();var statearr_25775_25795 = state_25769__$1;(statearr_25775_25795[(2)] = null);
(statearr_25775_25795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25770 === (4)))
{var state_25769__$1 = state_25769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25769__$1,(7),ch);
} else
{if((state_val_25770 === (6)))
{var inst_25764 = (state_25769[(2)]);var state_25769__$1 = state_25769;var statearr_25776_25796 = state_25769__$1;(statearr_25776_25796[(2)] = inst_25764);
(statearr_25776_25796[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25770 === (3)))
{var inst_25766 = (state_25769[(2)]);var inst_25767 = cljs.core.async.close_BANG_.call(null,out);var state_25769__$1 = (function (){var statearr_25777 = state_25769;(statearr_25777[(9)] = inst_25766);
return statearr_25777;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25769__$1,inst_25767);
} else
{if((state_val_25770 === (2)))
{var inst_25746 = (state_25769[(8)]);var inst_25748 = (inst_25746 < n);var state_25769__$1 = state_25769;if(cljs.core.truth_(inst_25748))
{var statearr_25778_25797 = state_25769__$1;(statearr_25778_25797[(1)] = (4));
} else
{var statearr_25779_25798 = state_25769__$1;(statearr_25779_25798[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25770 === (11)))
{var inst_25746 = (state_25769[(8)]);var inst_25756 = (state_25769[(2)]);var inst_25757 = (inst_25746 + (1));var inst_25746__$1 = inst_25757;var state_25769__$1 = (function (){var statearr_25780 = state_25769;(statearr_25780[(10)] = inst_25756);
(statearr_25780[(8)] = inst_25746__$1);
return statearr_25780;
})();var statearr_25781_25799 = state_25769__$1;(statearr_25781_25799[(2)] = null);
(statearr_25781_25799[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25770 === (9)))
{var state_25769__$1 = state_25769;var statearr_25782_25800 = state_25769__$1;(statearr_25782_25800[(2)] = null);
(statearr_25782_25800[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25770 === (5)))
{var state_25769__$1 = state_25769;var statearr_25783_25801 = state_25769__$1;(statearr_25783_25801[(2)] = null);
(statearr_25783_25801[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25770 === (10)))
{var inst_25761 = (state_25769[(2)]);var state_25769__$1 = state_25769;var statearr_25784_25802 = state_25769__$1;(statearr_25784_25802[(2)] = inst_25761);
(statearr_25784_25802[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25770 === (8)))
{var inst_25751 = (state_25769[(7)]);var state_25769__$1 = state_25769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25769__$1,(11),out,inst_25751);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25792,out))
;return ((function (switch__9110__auto__,c__9125__auto___25792,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25788 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25788[(0)] = state_machine__9111__auto__);
(statearr_25788[(1)] = (1));
return statearr_25788;
});
var state_machine__9111__auto____1 = (function (state_25769){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25769);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25789){if((e25789 instanceof Object))
{var ex__9114__auto__ = e25789;var statearr_25790_25803 = state_25769;(statearr_25790_25803[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25789;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25804 = state_25769;
state_25769 = G__25804;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25769){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25792,out))
})();var state__9127__auto__ = (function (){var statearr_25791 = f__9126__auto__.call(null);(statearr_25791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25792);
return statearr_25791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25792,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25812 = (function (ch,f,map_LT_,meta25813){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25813 = meta25813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25812.cljs$lang$type = true;
cljs.core.async.t25812.cljs$lang$ctorStr = "cljs.core.async/t25812";
cljs.core.async.t25812.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25812");
});
cljs.core.async.t25812.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t25812.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25815 = (function (fn1,_,meta25813,ch,f,map_LT_,meta25816){
this.fn1 = fn1;
this._ = _;
this.meta25813 = meta25813;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25816 = meta25816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25815.cljs$lang$type = true;
cljs.core.async.t25815.cljs$lang$ctorStr = "cljs.core.async/t25815";
cljs.core.async.t25815.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25815");
});})(___$1))
;
cljs.core.async.t25815.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t25815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__25805_SHARP_){return f1.call(null,(((p1__25805_SHARP_ == null))?null:self__.f.call(null,p1__25805_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t25815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25817){var self__ = this;
var _25817__$1 = this;return self__.meta25816;
});})(___$1))
;
cljs.core.async.t25815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25817,meta25816__$1){var self__ = this;
var _25817__$1 = this;return (new cljs.core.async.t25815(self__.fn1,self__._,self__.meta25813,self__.ch,self__.f,self__.map_LT_,meta25816__$1));
});})(___$1))
;
cljs.core.async.__GT_t25815 = ((function (___$1){
return (function __GT_t25815(fn1__$1,___$2,meta25813__$1,ch__$2,f__$2,map_LT___$2,meta25816){return (new cljs.core.async.t25815(fn1__$1,___$2,meta25813__$1,ch__$2,f__$2,map_LT___$2,meta25816));
});})(___$1))
;
}
return (new cljs.core.async.t25815(fn1,___$1,self__.meta25813,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3627__auto__ = ret;if(cljs.core.truth_(and__3627__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t25812.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25812.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25814){var self__ = this;
var _25814__$1 = this;return self__.meta25813;
});
cljs.core.async.t25812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25814,meta25813__$1){var self__ = this;
var _25814__$1 = this;return (new cljs.core.async.t25812(self__.ch,self__.f,self__.map_LT_,meta25813__$1));
});
cljs.core.async.__GT_t25812 = (function __GT_t25812(ch__$1,f__$1,map_LT___$1,meta25813){return (new cljs.core.async.t25812(ch__$1,f__$1,map_LT___$1,meta25813));
});
}
return (new cljs.core.async.t25812(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25821 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25821 = (function (ch,f,map_GT_,meta25822){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25822 = meta25822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25821.cljs$lang$type = true;
cljs.core.async.t25821.cljs$lang$ctorStr = "cljs.core.async/t25821";
cljs.core.async.t25821.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25821");
});
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25823){var self__ = this;
var _25823__$1 = this;return self__.meta25822;
});
cljs.core.async.t25821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25823,meta25822__$1){var self__ = this;
var _25823__$1 = this;return (new cljs.core.async.t25821(self__.ch,self__.f,self__.map_GT_,meta25822__$1));
});
cljs.core.async.__GT_t25821 = (function __GT_t25821(ch__$1,f__$1,map_GT___$1,meta25822){return (new cljs.core.async.t25821(ch__$1,f__$1,map_GT___$1,meta25822));
});
}
return (new cljs.core.async.t25821(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25827 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25827 = (function (ch,p,filter_GT_,meta25828){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25828 = meta25828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25827.cljs$lang$type = true;
cljs.core.async.t25827.cljs$lang$ctorStr = "cljs.core.async/t25827";
cljs.core.async.t25827.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"cljs.core.async/t25827");
});
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25827.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t25827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25829){var self__ = this;
var _25829__$1 = this;return self__.meta25828;
});
cljs.core.async.t25827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25829,meta25828__$1){var self__ = this;
var _25829__$1 = this;return (new cljs.core.async.t25827(self__.ch,self__.p,self__.filter_GT_,meta25828__$1));
});
cljs.core.async.__GT_t25827 = (function __GT_t25827(ch__$1,p__$1,filter_GT___$1,meta25828){return (new cljs.core.async.t25827(ch__$1,p__$1,filter_GT___$1,meta25828));
});
}
return (new cljs.core.async.t25827(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___25912 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___25912,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___25912,out){
return (function (state_25891){var state_val_25892 = (state_25891[(1)]);if((state_val_25892 === (7)))
{var inst_25887 = (state_25891[(2)]);var state_25891__$1 = state_25891;var statearr_25893_25913 = state_25891__$1;(statearr_25893_25913[(2)] = inst_25887);
(statearr_25893_25913[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (1)))
{var state_25891__$1 = state_25891;var statearr_25894_25914 = state_25891__$1;(statearr_25894_25914[(2)] = null);
(statearr_25894_25914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (4)))
{var inst_25873 = (state_25891[(7)]);var inst_25873__$1 = (state_25891[(2)]);var inst_25874 = (inst_25873__$1 == null);var state_25891__$1 = (function (){var statearr_25895 = state_25891;(statearr_25895[(7)] = inst_25873__$1);
return statearr_25895;
})();if(cljs.core.truth_(inst_25874))
{var statearr_25896_25915 = state_25891__$1;(statearr_25896_25915[(1)] = (5));
} else
{var statearr_25897_25916 = state_25891__$1;(statearr_25897_25916[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (6)))
{var inst_25873 = (state_25891[(7)]);var inst_25878 = p.call(null,inst_25873);var state_25891__$1 = state_25891;if(cljs.core.truth_(inst_25878))
{var statearr_25898_25917 = state_25891__$1;(statearr_25898_25917[(1)] = (8));
} else
{var statearr_25899_25918 = state_25891__$1;(statearr_25899_25918[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (3)))
{var inst_25889 = (state_25891[(2)]);var state_25891__$1 = state_25891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25891__$1,inst_25889);
} else
{if((state_val_25892 === (2)))
{var state_25891__$1 = state_25891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25891__$1,(4),ch);
} else
{if((state_val_25892 === (11)))
{var inst_25881 = (state_25891[(2)]);var state_25891__$1 = state_25891;var statearr_25900_25919 = state_25891__$1;(statearr_25900_25919[(2)] = inst_25881);
(statearr_25900_25919[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (9)))
{var state_25891__$1 = state_25891;var statearr_25901_25920 = state_25891__$1;(statearr_25901_25920[(2)] = null);
(statearr_25901_25920[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (5)))
{var inst_25876 = cljs.core.async.close_BANG_.call(null,out);var state_25891__$1 = state_25891;var statearr_25902_25921 = state_25891__$1;(statearr_25902_25921[(2)] = inst_25876);
(statearr_25902_25921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (10)))
{var inst_25884 = (state_25891[(2)]);var state_25891__$1 = (function (){var statearr_25903 = state_25891;(statearr_25903[(8)] = inst_25884);
return statearr_25903;
})();var statearr_25904_25922 = state_25891__$1;(statearr_25904_25922[(2)] = null);
(statearr_25904_25922[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25892 === (8)))
{var inst_25873 = (state_25891[(7)]);var state_25891__$1 = state_25891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25891__$1,(11),out,inst_25873);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___25912,out))
;return ((function (switch__9110__auto__,c__9125__auto___25912,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_25908 = [null,null,null,null,null,null,null,null,null];(statearr_25908[(0)] = state_machine__9111__auto__);
(statearr_25908[(1)] = (1));
return statearr_25908;
});
var state_machine__9111__auto____1 = (function (state_25891){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_25891);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e25909){if((e25909 instanceof Object))
{var ex__9114__auto__ = e25909;var statearr_25910_25923 = state_25891;(statearr_25910_25923[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e25909;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25924 = state_25891;
state_25891 = G__25924;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_25891){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_25891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___25912,out))
})();var state__9127__auto__ = (function (){var statearr_25911 = f__9126__auto__.call(null);(statearr_25911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___25912);
return statearr_25911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___25912,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_26090){var state_val_26091 = (state_26090[(1)]);if((state_val_26091 === (7)))
{var inst_26086 = (state_26090[(2)]);var state_26090__$1 = state_26090;var statearr_26092_26133 = state_26090__$1;(statearr_26092_26133[(2)] = inst_26086);
(statearr_26092_26133[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (20)))
{var inst_26056 = (state_26090[(7)]);var inst_26067 = (state_26090[(2)]);var inst_26068 = cljs.core.next.call(null,inst_26056);var inst_26042 = inst_26068;var inst_26043 = null;var inst_26044 = (0);var inst_26045 = (0);var state_26090__$1 = (function (){var statearr_26093 = state_26090;(statearr_26093[(8)] = inst_26044);
(statearr_26093[(9)] = inst_26067);
(statearr_26093[(10)] = inst_26045);
(statearr_26093[(11)] = inst_26043);
(statearr_26093[(12)] = inst_26042);
return statearr_26093;
})();var statearr_26094_26134 = state_26090__$1;(statearr_26094_26134[(2)] = null);
(statearr_26094_26134[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (1)))
{var state_26090__$1 = state_26090;var statearr_26095_26135 = state_26090__$1;(statearr_26095_26135[(2)] = null);
(statearr_26095_26135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (4)))
{var inst_26031 = (state_26090[(13)]);var inst_26031__$1 = (state_26090[(2)]);var inst_26032 = (inst_26031__$1 == null);var state_26090__$1 = (function (){var statearr_26096 = state_26090;(statearr_26096[(13)] = inst_26031__$1);
return statearr_26096;
})();if(cljs.core.truth_(inst_26032))
{var statearr_26097_26136 = state_26090__$1;(statearr_26097_26136[(1)] = (5));
} else
{var statearr_26098_26137 = state_26090__$1;(statearr_26098_26137[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (15)))
{var state_26090__$1 = state_26090;var statearr_26102_26138 = state_26090__$1;(statearr_26102_26138[(2)] = null);
(statearr_26102_26138[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (21)))
{var state_26090__$1 = state_26090;var statearr_26103_26139 = state_26090__$1;(statearr_26103_26139[(2)] = null);
(statearr_26103_26139[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (13)))
{var inst_26044 = (state_26090[(8)]);var inst_26045 = (state_26090[(10)]);var inst_26043 = (state_26090[(11)]);var inst_26042 = (state_26090[(12)]);var inst_26052 = (state_26090[(2)]);var inst_26053 = (inst_26045 + (1));var tmp26099 = inst_26044;var tmp26100 = inst_26043;var tmp26101 = inst_26042;var inst_26042__$1 = tmp26101;var inst_26043__$1 = tmp26100;var inst_26044__$1 = tmp26099;var inst_26045__$1 = inst_26053;var state_26090__$1 = (function (){var statearr_26104 = state_26090;(statearr_26104[(8)] = inst_26044__$1);
(statearr_26104[(10)] = inst_26045__$1);
(statearr_26104[(11)] = inst_26043__$1);
(statearr_26104[(14)] = inst_26052);
(statearr_26104[(12)] = inst_26042__$1);
return statearr_26104;
})();var statearr_26105_26140 = state_26090__$1;(statearr_26105_26140[(2)] = null);
(statearr_26105_26140[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (22)))
{var state_26090__$1 = state_26090;var statearr_26106_26141 = state_26090__$1;(statearr_26106_26141[(2)] = null);
(statearr_26106_26141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (6)))
{var inst_26031 = (state_26090[(13)]);var inst_26040 = f.call(null,inst_26031);var inst_26041 = cljs.core.seq.call(null,inst_26040);var inst_26042 = inst_26041;var inst_26043 = null;var inst_26044 = (0);var inst_26045 = (0);var state_26090__$1 = (function (){var statearr_26107 = state_26090;(statearr_26107[(8)] = inst_26044);
(statearr_26107[(10)] = inst_26045);
(statearr_26107[(11)] = inst_26043);
(statearr_26107[(12)] = inst_26042);
return statearr_26107;
})();var statearr_26108_26142 = state_26090__$1;(statearr_26108_26142[(2)] = null);
(statearr_26108_26142[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (17)))
{var inst_26056 = (state_26090[(7)]);var inst_26060 = cljs.core.chunk_first.call(null,inst_26056);var inst_26061 = cljs.core.chunk_rest.call(null,inst_26056);var inst_26062 = cljs.core.count.call(null,inst_26060);var inst_26042 = inst_26061;var inst_26043 = inst_26060;var inst_26044 = inst_26062;var inst_26045 = (0);var state_26090__$1 = (function (){var statearr_26109 = state_26090;(statearr_26109[(8)] = inst_26044);
(statearr_26109[(10)] = inst_26045);
(statearr_26109[(11)] = inst_26043);
(statearr_26109[(12)] = inst_26042);
return statearr_26109;
})();var statearr_26110_26143 = state_26090__$1;(statearr_26110_26143[(2)] = null);
(statearr_26110_26143[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (3)))
{var inst_26088 = (state_26090[(2)]);var state_26090__$1 = state_26090;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26090__$1,inst_26088);
} else
{if((state_val_26091 === (12)))
{var inst_26076 = (state_26090[(2)]);var state_26090__$1 = state_26090;var statearr_26111_26144 = state_26090__$1;(statearr_26111_26144[(2)] = inst_26076);
(statearr_26111_26144[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (2)))
{var state_26090__$1 = state_26090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26090__$1,(4),in$);
} else
{if((state_val_26091 === (23)))
{var inst_26084 = (state_26090[(2)]);var state_26090__$1 = state_26090;var statearr_26112_26145 = state_26090__$1;(statearr_26112_26145[(2)] = inst_26084);
(statearr_26112_26145[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (19)))
{var inst_26071 = (state_26090[(2)]);var state_26090__$1 = state_26090;var statearr_26113_26146 = state_26090__$1;(statearr_26113_26146[(2)] = inst_26071);
(statearr_26113_26146[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (11)))
{var inst_26056 = (state_26090[(7)]);var inst_26042 = (state_26090[(12)]);var inst_26056__$1 = cljs.core.seq.call(null,inst_26042);var state_26090__$1 = (function (){var statearr_26114 = state_26090;(statearr_26114[(7)] = inst_26056__$1);
return statearr_26114;
})();if(inst_26056__$1)
{var statearr_26115_26147 = state_26090__$1;(statearr_26115_26147[(1)] = (14));
} else
{var statearr_26116_26148 = state_26090__$1;(statearr_26116_26148[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (9)))
{var inst_26078 = (state_26090[(2)]);var inst_26079 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_26090__$1 = (function (){var statearr_26117 = state_26090;(statearr_26117[(15)] = inst_26078);
return statearr_26117;
})();if(cljs.core.truth_(inst_26079))
{var statearr_26118_26149 = state_26090__$1;(statearr_26118_26149[(1)] = (21));
} else
{var statearr_26119_26150 = state_26090__$1;(statearr_26119_26150[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (5)))
{var inst_26034 = cljs.core.async.close_BANG_.call(null,out);var state_26090__$1 = state_26090;var statearr_26120_26151 = state_26090__$1;(statearr_26120_26151[(2)] = inst_26034);
(statearr_26120_26151[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (14)))
{var inst_26056 = (state_26090[(7)]);var inst_26058 = cljs.core.chunked_seq_QMARK_.call(null,inst_26056);var state_26090__$1 = state_26090;if(inst_26058)
{var statearr_26121_26152 = state_26090__$1;(statearr_26121_26152[(1)] = (17));
} else
{var statearr_26122_26153 = state_26090__$1;(statearr_26122_26153[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (16)))
{var inst_26074 = (state_26090[(2)]);var state_26090__$1 = state_26090;var statearr_26123_26154 = state_26090__$1;(statearr_26123_26154[(2)] = inst_26074);
(statearr_26123_26154[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26091 === (10)))
{var inst_26045 = (state_26090[(10)]);var inst_26043 = (state_26090[(11)]);var inst_26050 = cljs.core._nth.call(null,inst_26043,inst_26045);var state_26090__$1 = state_26090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26090__$1,(13),out,inst_26050);
} else
{if((state_val_26091 === (18)))
{var inst_26056 = (state_26090[(7)]);var inst_26065 = cljs.core.first.call(null,inst_26056);var state_26090__$1 = state_26090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26090__$1,(20),out,inst_26065);
} else
{if((state_val_26091 === (8)))
{var inst_26044 = (state_26090[(8)]);var inst_26045 = (state_26090[(10)]);var inst_26047 = (inst_26045 < inst_26044);var inst_26048 = inst_26047;var state_26090__$1 = state_26090;if(cljs.core.truth_(inst_26048))
{var statearr_26124_26155 = state_26090__$1;(statearr_26124_26155[(1)] = (10));
} else
{var statearr_26125_26156 = state_26090__$1;(statearr_26125_26156[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26129[(0)] = state_machine__9111__auto__);
(statearr_26129[(1)] = (1));
return statearr_26129;
});
var state_machine__9111__auto____1 = (function (state_26090){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26090);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26130){if((e26130 instanceof Object))
{var ex__9114__auto__ = e26130;var statearr_26131_26157 = state_26090;(statearr_26131_26157[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26090);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26130;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26158 = state_26090;
state_26090 = G__26158;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26090){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_26132 = f__9126__auto__.call(null);(statearr_26132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_26132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26255 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26255,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26255,out){
return (function (state_26230){var state_val_26231 = (state_26230[(1)]);if((state_val_26231 === (7)))
{var inst_26225 = (state_26230[(2)]);var state_26230__$1 = state_26230;var statearr_26232_26256 = state_26230__$1;(statearr_26232_26256[(2)] = inst_26225);
(statearr_26232_26256[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26231 === (1)))
{var inst_26207 = null;var state_26230__$1 = (function (){var statearr_26233 = state_26230;(statearr_26233[(7)] = inst_26207);
return statearr_26233;
})();var statearr_26234_26257 = state_26230__$1;(statearr_26234_26257[(2)] = null);
(statearr_26234_26257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26231 === (4)))
{var inst_26210 = (state_26230[(8)]);var inst_26210__$1 = (state_26230[(2)]);var inst_26211 = (inst_26210__$1 == null);var inst_26212 = cljs.core.not.call(null,inst_26211);var state_26230__$1 = (function (){var statearr_26235 = state_26230;(statearr_26235[(8)] = inst_26210__$1);
return statearr_26235;
})();if(inst_26212)
{var statearr_26236_26258 = state_26230__$1;(statearr_26236_26258[(1)] = (5));
} else
{var statearr_26237_26259 = state_26230__$1;(statearr_26237_26259[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26231 === (6)))
{var state_26230__$1 = state_26230;var statearr_26238_26260 = state_26230__$1;(statearr_26238_26260[(2)] = null);
(statearr_26238_26260[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26231 === (3)))
{var inst_26227 = (state_26230[(2)]);var inst_26228 = cljs.core.async.close_BANG_.call(null,out);var state_26230__$1 = (function (){var statearr_26239 = state_26230;(statearr_26239[(9)] = inst_26227);
return statearr_26239;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26230__$1,inst_26228);
} else
{if((state_val_26231 === (2)))
{var state_26230__$1 = state_26230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26230__$1,(4),ch);
} else
{if((state_val_26231 === (11)))
{var inst_26210 = (state_26230[(8)]);var inst_26219 = (state_26230[(2)]);var inst_26207 = inst_26210;var state_26230__$1 = (function (){var statearr_26240 = state_26230;(statearr_26240[(10)] = inst_26219);
(statearr_26240[(7)] = inst_26207);
return statearr_26240;
})();var statearr_26241_26261 = state_26230__$1;(statearr_26241_26261[(2)] = null);
(statearr_26241_26261[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26231 === (9)))
{var inst_26210 = (state_26230[(8)]);var state_26230__$1 = state_26230;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26230__$1,(11),out,inst_26210);
} else
{if((state_val_26231 === (5)))
{var inst_26207 = (state_26230[(7)]);var inst_26210 = (state_26230[(8)]);var inst_26214 = cljs.core._EQ_.call(null,inst_26210,inst_26207);var state_26230__$1 = state_26230;if(inst_26214)
{var statearr_26243_26262 = state_26230__$1;(statearr_26243_26262[(1)] = (8));
} else
{var statearr_26244_26263 = state_26230__$1;(statearr_26244_26263[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26231 === (10)))
{var inst_26222 = (state_26230[(2)]);var state_26230__$1 = state_26230;var statearr_26245_26264 = state_26230__$1;(statearr_26245_26264[(2)] = inst_26222);
(statearr_26245_26264[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26231 === (8)))
{var inst_26207 = (state_26230[(7)]);var tmp26242 = inst_26207;var inst_26207__$1 = tmp26242;var state_26230__$1 = (function (){var statearr_26246 = state_26230;(statearr_26246[(7)] = inst_26207__$1);
return statearr_26246;
})();var statearr_26247_26265 = state_26230__$1;(statearr_26247_26265[(2)] = null);
(statearr_26247_26265[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___26255,out))
;return ((function (switch__9110__auto__,c__9125__auto___26255,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26251 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26251[(0)] = state_machine__9111__auto__);
(statearr_26251[(1)] = (1));
return statearr_26251;
});
var state_machine__9111__auto____1 = (function (state_26230){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26230);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26252){if((e26252 instanceof Object))
{var ex__9114__auto__ = e26252;var statearr_26253_26266 = state_26230;(statearr_26253_26266[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26230);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26252;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26267 = state_26230;
state_26230 = G__26267;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26230){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26255,out))
})();var state__9127__auto__ = (function (){var statearr_26254 = f__9126__auto__.call(null);(statearr_26254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26255);
return statearr_26254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26255,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26402 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26402,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26402,out){
return (function (state_26372){var state_val_26373 = (state_26372[(1)]);if((state_val_26373 === (7)))
{var inst_26368 = (state_26372[(2)]);var state_26372__$1 = state_26372;var statearr_26374_26403 = state_26372__$1;(statearr_26374_26403[(2)] = inst_26368);
(statearr_26374_26403[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (1)))
{var inst_26335 = (new Array(n));var inst_26336 = inst_26335;var inst_26337 = (0);var state_26372__$1 = (function (){var statearr_26375 = state_26372;(statearr_26375[(7)] = inst_26336);
(statearr_26375[(8)] = inst_26337);
return statearr_26375;
})();var statearr_26376_26404 = state_26372__$1;(statearr_26376_26404[(2)] = null);
(statearr_26376_26404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (4)))
{var inst_26340 = (state_26372[(9)]);var inst_26340__$1 = (state_26372[(2)]);var inst_26341 = (inst_26340__$1 == null);var inst_26342 = cljs.core.not.call(null,inst_26341);var state_26372__$1 = (function (){var statearr_26377 = state_26372;(statearr_26377[(9)] = inst_26340__$1);
return statearr_26377;
})();if(inst_26342)
{var statearr_26378_26405 = state_26372__$1;(statearr_26378_26405[(1)] = (5));
} else
{var statearr_26379_26406 = state_26372__$1;(statearr_26379_26406[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (15)))
{var inst_26362 = (state_26372[(2)]);var state_26372__$1 = state_26372;var statearr_26380_26407 = state_26372__$1;(statearr_26380_26407[(2)] = inst_26362);
(statearr_26380_26407[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (13)))
{var state_26372__$1 = state_26372;var statearr_26381_26408 = state_26372__$1;(statearr_26381_26408[(2)] = null);
(statearr_26381_26408[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (6)))
{var inst_26337 = (state_26372[(8)]);var inst_26358 = (inst_26337 > (0));var state_26372__$1 = state_26372;if(cljs.core.truth_(inst_26358))
{var statearr_26382_26409 = state_26372__$1;(statearr_26382_26409[(1)] = (12));
} else
{var statearr_26383_26410 = state_26372__$1;(statearr_26383_26410[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (3)))
{var inst_26370 = (state_26372[(2)]);var state_26372__$1 = state_26372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26372__$1,inst_26370);
} else
{if((state_val_26373 === (12)))
{var inst_26336 = (state_26372[(7)]);var inst_26360 = cljs.core.vec.call(null,inst_26336);var state_26372__$1 = state_26372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26372__$1,(15),out,inst_26360);
} else
{if((state_val_26373 === (2)))
{var state_26372__$1 = state_26372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26372__$1,(4),ch);
} else
{if((state_val_26373 === (11)))
{var inst_26352 = (state_26372[(2)]);var inst_26353 = (new Array(n));var inst_26336 = inst_26353;var inst_26337 = (0);var state_26372__$1 = (function (){var statearr_26384 = state_26372;(statearr_26384[(10)] = inst_26352);
(statearr_26384[(7)] = inst_26336);
(statearr_26384[(8)] = inst_26337);
return statearr_26384;
})();var statearr_26385_26411 = state_26372__$1;(statearr_26385_26411[(2)] = null);
(statearr_26385_26411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (9)))
{var inst_26336 = (state_26372[(7)]);var inst_26350 = cljs.core.vec.call(null,inst_26336);var state_26372__$1 = state_26372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26372__$1,(11),out,inst_26350);
} else
{if((state_val_26373 === (5)))
{var inst_26345 = (state_26372[(11)]);var inst_26336 = (state_26372[(7)]);var inst_26340 = (state_26372[(9)]);var inst_26337 = (state_26372[(8)]);var inst_26344 = (inst_26336[inst_26337] = inst_26340);var inst_26345__$1 = (inst_26337 + (1));var inst_26346 = (inst_26345__$1 < n);var state_26372__$1 = (function (){var statearr_26386 = state_26372;(statearr_26386[(12)] = inst_26344);
(statearr_26386[(11)] = inst_26345__$1);
return statearr_26386;
})();if(cljs.core.truth_(inst_26346))
{var statearr_26387_26412 = state_26372__$1;(statearr_26387_26412[(1)] = (8));
} else
{var statearr_26388_26413 = state_26372__$1;(statearr_26388_26413[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (14)))
{var inst_26365 = (state_26372[(2)]);var inst_26366 = cljs.core.async.close_BANG_.call(null,out);var state_26372__$1 = (function (){var statearr_26390 = state_26372;(statearr_26390[(13)] = inst_26365);
return statearr_26390;
})();var statearr_26391_26414 = state_26372__$1;(statearr_26391_26414[(2)] = inst_26366);
(statearr_26391_26414[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (10)))
{var inst_26356 = (state_26372[(2)]);var state_26372__$1 = state_26372;var statearr_26392_26415 = state_26372__$1;(statearr_26392_26415[(2)] = inst_26356);
(statearr_26392_26415[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26373 === (8)))
{var inst_26345 = (state_26372[(11)]);var inst_26336 = (state_26372[(7)]);var tmp26389 = inst_26336;var inst_26336__$1 = tmp26389;var inst_26337 = inst_26345;var state_26372__$1 = (function (){var statearr_26393 = state_26372;(statearr_26393[(7)] = inst_26336__$1);
(statearr_26393[(8)] = inst_26337);
return statearr_26393;
})();var statearr_26394_26416 = state_26372__$1;(statearr_26394_26416[(2)] = null);
(statearr_26394_26416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___26402,out))
;return ((function (switch__9110__auto__,c__9125__auto___26402,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26398[(0)] = state_machine__9111__auto__);
(statearr_26398[(1)] = (1));
return statearr_26398;
});
var state_machine__9111__auto____1 = (function (state_26372){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26372);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26399){if((e26399 instanceof Object))
{var ex__9114__auto__ = e26399;var statearr_26400_26417 = state_26372;(statearr_26400_26417[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26372);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26399;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26418 = state_26372;
state_26372 = G__26418;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26372){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26402,out))
})();var state__9127__auto__ = (function (){var statearr_26401 = f__9126__auto__.call(null);(statearr_26401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26402);
return statearr_26401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26402,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__9125__auto___26561 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___26561,out){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___26561,out){
return (function (state_26531){var state_val_26532 = (state_26531[(1)]);if((state_val_26532 === (7)))
{var inst_26527 = (state_26531[(2)]);var state_26531__$1 = state_26531;var statearr_26533_26562 = state_26531__$1;(statearr_26533_26562[(2)] = inst_26527);
(statearr_26533_26562[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (1)))
{var inst_26490 = [];var inst_26491 = inst_26490;var inst_26492 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_26531__$1 = (function (){var statearr_26534 = state_26531;(statearr_26534[(7)] = inst_26492);
(statearr_26534[(8)] = inst_26491);
return statearr_26534;
})();var statearr_26535_26563 = state_26531__$1;(statearr_26535_26563[(2)] = null);
(statearr_26535_26563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (4)))
{var inst_26495 = (state_26531[(9)]);var inst_26495__$1 = (state_26531[(2)]);var inst_26496 = (inst_26495__$1 == null);var inst_26497 = cljs.core.not.call(null,inst_26496);var state_26531__$1 = (function (){var statearr_26536 = state_26531;(statearr_26536[(9)] = inst_26495__$1);
return statearr_26536;
})();if(inst_26497)
{var statearr_26537_26564 = state_26531__$1;(statearr_26537_26564[(1)] = (5));
} else
{var statearr_26538_26565 = state_26531__$1;(statearr_26538_26565[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (15)))
{var inst_26521 = (state_26531[(2)]);var state_26531__$1 = state_26531;var statearr_26539_26566 = state_26531__$1;(statearr_26539_26566[(2)] = inst_26521);
(statearr_26539_26566[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (13)))
{var state_26531__$1 = state_26531;var statearr_26540_26567 = state_26531__$1;(statearr_26540_26567[(2)] = null);
(statearr_26540_26567[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (6)))
{var inst_26491 = (state_26531[(8)]);var inst_26516 = inst_26491.length;var inst_26517 = (inst_26516 > (0));var state_26531__$1 = state_26531;if(cljs.core.truth_(inst_26517))
{var statearr_26541_26568 = state_26531__$1;(statearr_26541_26568[(1)] = (12));
} else
{var statearr_26542_26569 = state_26531__$1;(statearr_26542_26569[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (3)))
{var inst_26529 = (state_26531[(2)]);var state_26531__$1 = state_26531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26531__$1,inst_26529);
} else
{if((state_val_26532 === (12)))
{var inst_26491 = (state_26531[(8)]);var inst_26519 = cljs.core.vec.call(null,inst_26491);var state_26531__$1 = state_26531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26531__$1,(15),out,inst_26519);
} else
{if((state_val_26532 === (2)))
{var state_26531__$1 = state_26531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26531__$1,(4),ch);
} else
{if((state_val_26532 === (11)))
{var inst_26499 = (state_26531[(10)]);var inst_26495 = (state_26531[(9)]);var inst_26509 = (state_26531[(2)]);var inst_26510 = [];var inst_26511 = inst_26510.push(inst_26495);var inst_26491 = inst_26510;var inst_26492 = inst_26499;var state_26531__$1 = (function (){var statearr_26543 = state_26531;(statearr_26543[(7)] = inst_26492);
(statearr_26543[(11)] = inst_26511);
(statearr_26543[(8)] = inst_26491);
(statearr_26543[(12)] = inst_26509);
return statearr_26543;
})();var statearr_26544_26570 = state_26531__$1;(statearr_26544_26570[(2)] = null);
(statearr_26544_26570[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (9)))
{var inst_26491 = (state_26531[(8)]);var inst_26507 = cljs.core.vec.call(null,inst_26491);var state_26531__$1 = state_26531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26531__$1,(11),out,inst_26507);
} else
{if((state_val_26532 === (5)))
{var inst_26492 = (state_26531[(7)]);var inst_26499 = (state_26531[(10)]);var inst_26495 = (state_26531[(9)]);var inst_26499__$1 = f.call(null,inst_26495);var inst_26500 = cljs.core._EQ_.call(null,inst_26499__$1,inst_26492);var inst_26501 = cljs.core.keyword_identical_QMARK_.call(null,inst_26492,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_26502 = (inst_26500) || (inst_26501);var state_26531__$1 = (function (){var statearr_26545 = state_26531;(statearr_26545[(10)] = inst_26499__$1);
return statearr_26545;
})();if(cljs.core.truth_(inst_26502))
{var statearr_26546_26571 = state_26531__$1;(statearr_26546_26571[(1)] = (8));
} else
{var statearr_26547_26572 = state_26531__$1;(statearr_26547_26572[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (14)))
{var inst_26524 = (state_26531[(2)]);var inst_26525 = cljs.core.async.close_BANG_.call(null,out);var state_26531__$1 = (function (){var statearr_26549 = state_26531;(statearr_26549[(13)] = inst_26524);
return statearr_26549;
})();var statearr_26550_26573 = state_26531__$1;(statearr_26550_26573[(2)] = inst_26525);
(statearr_26550_26573[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (10)))
{var inst_26514 = (state_26531[(2)]);var state_26531__$1 = state_26531;var statearr_26551_26574 = state_26531__$1;(statearr_26551_26574[(2)] = inst_26514);
(statearr_26551_26574[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26532 === (8)))
{var inst_26499 = (state_26531[(10)]);var inst_26495 = (state_26531[(9)]);var inst_26491 = (state_26531[(8)]);var inst_26504 = inst_26491.push(inst_26495);var tmp26548 = inst_26491;var inst_26491__$1 = tmp26548;var inst_26492 = inst_26499;var state_26531__$1 = (function (){var statearr_26552 = state_26531;(statearr_26552[(14)] = inst_26504);
(statearr_26552[(7)] = inst_26492);
(statearr_26552[(8)] = inst_26491__$1);
return statearr_26552;
})();var statearr_26553_26575 = state_26531__$1;(statearr_26553_26575[(2)] = null);
(statearr_26553_26575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto___26561,out))
;return ((function (switch__9110__auto__,c__9125__auto___26561,out){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_26557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26557[(0)] = state_machine__9111__auto__);
(statearr_26557[(1)] = (1));
return statearr_26557;
});
var state_machine__9111__auto____1 = (function (state_26531){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_26531);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e26558){if((e26558 instanceof Object))
{var ex__9114__auto__ = e26558;var statearr_26559_26576 = state_26531;(statearr_26559_26576[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26531);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e26558;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26577 = state_26531;
state_26531 = G__26577;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_26531){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_26531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___26561,out))
})();var state__9127__auto__ = (function (){var statearr_26560 = f__9126__auto__.call(null);(statearr_26560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___26561);
return statearr_26560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___26561,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
