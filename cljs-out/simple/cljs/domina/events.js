// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj20910 = {};return obj20910;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.prevent_default[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.prevent_default["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.target[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.target["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.current_target[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.current_target["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.event_type[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.event_type["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3627__auto__ = evt;if(and__3627__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3627__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4275__auto__ = (((evt == null))?null:evt);return (function (){var or__3639__auto__ = (domina.events.raw_event[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.events.raw_event["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t20914 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t20914 = (function (evt,f,create_listener_function,meta20915){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta20915 = meta20915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t20914.cljs$lang$type = true;
domina.events.t20914.cljs$lang$ctorStr = "domina.events/t20914";
domina.events.t20914.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t20914");
});
domina.events.t20914.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t20914.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t20914.prototype.domina$events$Event$ = true;
domina.events.t20914.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t20914.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t20914.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t20914.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t20914.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t20914.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t20914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20916){var self__ = this;
var _20916__$1 = this;return self__.meta20915;
});
domina.events.t20914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20916,meta20915__$1){var self__ = this;
var _20916__$1 = this;return (new domina.events.t20914(self__.evt,self__.f,self__.create_listener_function,meta20915__$1));
});
domina.events.__GT_t20914 = (function __GT_t20914(evt__$1,f__$1,create_listener_function__$1,meta20915){return (new domina.events.t20914(evt__$1,f__$1,create_listener_function__$1,meta20915));
});
}
return (new domina.events.t20914(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__20921(s__20922){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__20922__$1 = s__20922;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20922__$1);if(temp__4126__auto__)
{var s__20922__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20922__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20922__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20924 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20923 = (0);while(true){
if((i__20923 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__20923);cljs.core.chunk_append.call(null,b__20924,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__20925 = (i__20923 + (1));
i__20923 = G__20925;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20924),iter__20921.call(null,cljs.core.chunk_rest.call(null,s__20922__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20924),null);
}
} else
{var node = cljs.core.first.call(null,s__20922__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__20921.call(null,cljs.core.rest.call(null,s__20922__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4377__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__20934 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20935 = null;var count__20936 = (0);var i__20937 = (0);while(true){
if((i__20937 < count__20936))
{var node = cljs.core._nth.call(null,chunk__20935,i__20937);goog.events.removeAll(node);
{
var G__20942 = seq__20934;
var G__20943 = chunk__20935;
var G__20944 = count__20936;
var G__20945 = (i__20937 + (1));
seq__20934 = G__20942;
chunk__20935 = G__20943;
count__20936 = G__20944;
i__20937 = G__20945;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20934);if(temp__4126__auto__)
{var seq__20934__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20934__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20934__$1);{
var G__20946 = cljs.core.chunk_rest.call(null,seq__20934__$1);
var G__20947 = c__4408__auto__;
var G__20948 = cljs.core.count.call(null,c__4408__auto__);
var G__20949 = (0);
seq__20934 = G__20946;
chunk__20935 = G__20947;
count__20936 = G__20948;
i__20937 = G__20949;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20934__$1);goog.events.removeAll(node);
{
var G__20950 = cljs.core.next.call(null,seq__20934__$1);
var G__20951 = null;
var G__20952 = (0);
var G__20953 = (0);
seq__20934 = G__20950;
chunk__20935 = G__20951;
count__20936 = G__20952;
i__20937 = G__20953;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__20938 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20939 = null;var count__20940 = (0);var i__20941 = (0);while(true){
if((i__20941 < count__20940))
{var node = cljs.core._nth.call(null,chunk__20939,i__20941);goog.events.removeAll(node,type__$1);
{
var G__20954 = seq__20938;
var G__20955 = chunk__20939;
var G__20956 = count__20940;
var G__20957 = (i__20941 + (1));
seq__20938 = G__20954;
chunk__20939 = G__20955;
count__20940 = G__20956;
i__20941 = G__20957;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20938);if(temp__4126__auto__)
{var seq__20938__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20938__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20938__$1);{
var G__20958 = cljs.core.chunk_rest.call(null,seq__20938__$1);
var G__20959 = c__4408__auto__;
var G__20960 = cljs.core.count.call(null,c__4408__auto__);
var G__20961 = (0);
seq__20938 = G__20958;
chunk__20939 = G__20959;
count__20940 = G__20960;
i__20941 = G__20961;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__20938__$1);goog.events.removeAll(node,type__$1);
{
var G__20962 = cljs.core.next.call(null,seq__20938__$1);
var G__20963 = null;
var G__20964 = (0);
var G__20965 = (0);
seq__20938 = G__20962;
chunk__20939 = G__20963;
count__20940 = G__20964;
i__20941 = G__20965;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__20966 = parent;
var G__20967 = cljs.core.cons.call(null,parent,so_far);
n = G__20966;
so_far = G__20967;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node.call(null,source);
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__20976_20984 = cljs.core.seq.call(null,ancestors);var chunk__20977_20985 = null;var count__20978_20986 = (0);var i__20979_20987 = (0);while(true){
if((i__20979_20987 < count__20978_20986))
{var n_20988 = cljs.core._nth.call(null,chunk__20977_20985,i__20979_20987);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_20988;
goog.events.fireListeners(n_20988,evt.type,true,evt);
}
{
var G__20989 = seq__20976_20984;
var G__20990 = chunk__20977_20985;
var G__20991 = count__20978_20986;
var G__20992 = (i__20979_20987 + (1));
seq__20976_20984 = G__20989;
chunk__20977_20985 = G__20990;
count__20978_20986 = G__20991;
i__20979_20987 = G__20992;
continue;
}
} else
{var temp__4126__auto___20993 = cljs.core.seq.call(null,seq__20976_20984);if(temp__4126__auto___20993)
{var seq__20976_20994__$1 = temp__4126__auto___20993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20976_20994__$1))
{var c__4408__auto___20995 = cljs.core.chunk_first.call(null,seq__20976_20994__$1);{
var G__20996 = cljs.core.chunk_rest.call(null,seq__20976_20994__$1);
var G__20997 = c__4408__auto___20995;
var G__20998 = cljs.core.count.call(null,c__4408__auto___20995);
var G__20999 = (0);
seq__20976_20984 = G__20996;
chunk__20977_20985 = G__20997;
count__20978_20986 = G__20998;
i__20979_20987 = G__20999;
continue;
}
} else
{var n_21000 = cljs.core.first.call(null,seq__20976_20994__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21000;
goog.events.fireListeners(n_21000,evt.type,true,evt);
}
{
var G__21001 = cljs.core.next.call(null,seq__20976_20994__$1);
var G__21002 = null;
var G__21003 = (0);
var G__21004 = (0);
seq__20976_20984 = G__21001;
chunk__20977_20985 = G__21002;
count__20978_20986 = G__21003;
i__20979_20987 = G__21004;
continue;
}
}
} else
{}
}
break;
}
var seq__20980_21005 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__20981_21006 = null;var count__20982_21007 = (0);var i__20983_21008 = (0);while(true){
if((i__20983_21008 < count__20982_21007))
{var n_21009 = cljs.core._nth.call(null,chunk__20981_21006,i__20983_21008);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21009;
goog.events.fireListeners(n_21009,evt.type,false,evt);
}
{
var G__21010 = seq__20980_21005;
var G__21011 = chunk__20981_21006;
var G__21012 = count__20982_21007;
var G__21013 = (i__20983_21008 + (1));
seq__20980_21005 = G__21010;
chunk__20981_21006 = G__21011;
count__20982_21007 = G__21012;
i__20983_21008 = G__21013;
continue;
}
} else
{var temp__4126__auto___21014 = cljs.core.seq.call(null,seq__20980_21005);if(temp__4126__auto___21014)
{var seq__20980_21015__$1 = temp__4126__auto___21014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20980_21015__$1))
{var c__4408__auto___21016 = cljs.core.chunk_first.call(null,seq__20980_21015__$1);{
var G__21017 = cljs.core.chunk_rest.call(null,seq__20980_21015__$1);
var G__21018 = c__4408__auto___21016;
var G__21019 = cljs.core.count.call(null,c__4408__auto___21016);
var G__21020 = (0);
seq__20980_21005 = G__21017;
chunk__20981_21006 = G__21018;
count__20982_21007 = G__21019;
i__20983_21008 = G__21020;
continue;
}
} else
{var n_21021 = cljs.core.first.call(null,seq__20980_21015__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21021;
goog.events.fireListeners(n_21021,evt.type,false,evt);
}
{
var G__21022 = cljs.core.next.call(null,seq__20980_21015__$1);
var G__21023 = null;
var G__21024 = (0);
var G__21025 = (0);
seq__20980_21005 = G__21022;
chunk__20981_21006 = G__21023;
count__20982_21007 = G__21024;
i__20983_21008 = G__21025;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3627__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3627__auto__))
{return o.dispatchEvent;
} else
{return and__3627__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21032_21038 = cljs.core.seq.call(null,evt_map);var chunk__21033_21039 = null;var count__21034_21040 = (0);var i__21035_21041 = (0);while(true){
if((i__21035_21041 < count__21034_21040))
{var vec__21036_21042 = cljs.core._nth.call(null,chunk__21033_21039,i__21035_21041);var k_21043 = cljs.core.nth.call(null,vec__21036_21042,(0),null);var v_21044 = cljs.core.nth.call(null,vec__21036_21042,(1),null);(evt[k_21043] = v_21044);
{
var G__21045 = seq__21032_21038;
var G__21046 = chunk__21033_21039;
var G__21047 = count__21034_21040;
var G__21048 = (i__21035_21041 + (1));
seq__21032_21038 = G__21045;
chunk__21033_21039 = G__21046;
count__21034_21040 = G__21047;
i__21035_21041 = G__21048;
continue;
}
} else
{var temp__4126__auto___21049 = cljs.core.seq.call(null,seq__21032_21038);if(temp__4126__auto___21049)
{var seq__21032_21050__$1 = temp__4126__auto___21049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21032_21050__$1))
{var c__4408__auto___21051 = cljs.core.chunk_first.call(null,seq__21032_21050__$1);{
var G__21052 = cljs.core.chunk_rest.call(null,seq__21032_21050__$1);
var G__21053 = c__4408__auto___21051;
var G__21054 = cljs.core.count.call(null,c__4408__auto___21051);
var G__21055 = (0);
seq__21032_21038 = G__21052;
chunk__21033_21039 = G__21053;
count__21034_21040 = G__21054;
i__21035_21041 = G__21055;
continue;
}
} else
{var vec__21037_21056 = cljs.core.first.call(null,seq__21032_21050__$1);var k_21057 = cljs.core.nth.call(null,vec__21037_21056,(0),null);var v_21058 = cljs.core.nth.call(null,vec__21037_21056,(1),null);(evt[k_21057] = v_21058);
{
var G__21059 = cljs.core.next.call(null,seq__21032_21050__$1);
var G__21060 = null;
var G__21061 = (0);
var G__21062 = (0);
seq__21032_21038 = G__21059;
chunk__21033_21039 = G__21060;
count__21034_21040 = G__21061;
i__21035_21041 = G__21062;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__21063_SHARP_){return goog.events.getListeners(p1__21063_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
