// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19792 = {};return obj19792;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19796 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19796 = (function (evt,f,create_listener_function,meta19797){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19797 = meta19797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19796.cljs$lang$type = true;
domina.events.t19796.cljs$lang$ctorStr = "domina.events/t19796";
domina.events.t19796.cljs$lang$ctorPrWriter = (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"domina.events/t19796");
});
domina.events.t19796.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19796.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3639__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return not_found;
}
});
domina.events.t19796.prototype.domina$events$Event$ = true;
domina.events.t19796.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19796.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19796.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19796.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19796.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19796.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19798){var self__ = this;
var _19798__$1 = this;return self__.meta19797;
});
domina.events.t19796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19798,meta19797__$1){var self__ = this;
var _19798__$1 = this;return (new domina.events.t19796(self__.evt,self__.f,self__.create_listener_function,meta19797__$1));
});
domina.events.__GT_t19796 = (function __GT_t19796(evt__$1,f__$1,create_listener_function__$1,meta19797){return (new domina.events.t19796(evt__$1,f__$1,create_listener_function__$1,meta19797));
});
}
return (new domina.events.t19796(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4377__auto__ = ((function (f,t){
return (function iter__19803(s__19804){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19804__$1 = s__19804;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19804__$1);if(temp__4126__auto__)
{var s__19804__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19804__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19804__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19806 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19805 = (0);while(true){
if((i__19805 < size__4376__auto__))
{var node = cljs.core._nth.call(null,c__4375__auto__,i__19805);cljs.core.chunk_append.call(null,b__19806,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19807 = (i__19805 + (1));
i__19805 = G__19807;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19806),iter__19803.call(null,cljs.core.chunk_rest.call(null,s__19804__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19806),null);
}
} else
{var node = cljs.core.first.call(null,s__19804__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19803.call(null,cljs.core.rest.call(null,s__19804__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__19816 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19817 = null;var count__19818 = (0);var i__19819 = (0);while(true){
if((i__19819 < count__19818))
{var node = cljs.core._nth.call(null,chunk__19817,i__19819);goog.events.removeAll(node);
{
var G__19824 = seq__19816;
var G__19825 = chunk__19817;
var G__19826 = count__19818;
var G__19827 = (i__19819 + (1));
seq__19816 = G__19824;
chunk__19817 = G__19825;
count__19818 = G__19826;
i__19819 = G__19827;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19816);if(temp__4126__auto__)
{var seq__19816__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19816__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19816__$1);{
var G__19828 = cljs.core.chunk_rest.call(null,seq__19816__$1);
var G__19829 = c__4408__auto__;
var G__19830 = cljs.core.count.call(null,c__4408__auto__);
var G__19831 = (0);
seq__19816 = G__19828;
chunk__19817 = G__19829;
count__19818 = G__19830;
i__19819 = G__19831;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19816__$1);goog.events.removeAll(node);
{
var G__19832 = cljs.core.next.call(null,seq__19816__$1);
var G__19833 = null;
var G__19834 = (0);
var G__19835 = (0);
seq__19816 = G__19832;
chunk__19817 = G__19833;
count__19818 = G__19834;
i__19819 = G__19835;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19820 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19821 = null;var count__19822 = (0);var i__19823 = (0);while(true){
if((i__19823 < count__19822))
{var node = cljs.core._nth.call(null,chunk__19821,i__19823);goog.events.removeAll(node,type__$1);
{
var G__19836 = seq__19820;
var G__19837 = chunk__19821;
var G__19838 = count__19822;
var G__19839 = (i__19823 + (1));
seq__19820 = G__19836;
chunk__19821 = G__19837;
count__19822 = G__19838;
i__19823 = G__19839;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19820);if(temp__4126__auto__)
{var seq__19820__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19820__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19820__$1);{
var G__19840 = cljs.core.chunk_rest.call(null,seq__19820__$1);
var G__19841 = c__4408__auto__;
var G__19842 = cljs.core.count.call(null,c__4408__auto__);
var G__19843 = (0);
seq__19820 = G__19840;
chunk__19821 = G__19841;
count__19822 = G__19842;
i__19823 = G__19843;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19820__$1);goog.events.removeAll(node,type__$1);
{
var G__19844 = cljs.core.next.call(null,seq__19820__$1);
var G__19845 = null;
var G__19846 = (0);
var G__19847 = (0);
seq__19820 = G__19844;
chunk__19821 = G__19845;
count__19822 = G__19846;
i__19823 = G__19847;
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
var G__19848 = parent;
var G__19849 = cljs.core.cons.call(null,parent,so_far);
n = G__19848;
so_far = G__19849;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19858_19866 = cljs.core.seq.call(null,ancestors);var chunk__19859_19867 = null;var count__19860_19868 = (0);var i__19861_19869 = (0);while(true){
if((i__19861_19869 < count__19860_19868))
{var n_19870 = cljs.core._nth.call(null,chunk__19859_19867,i__19861_19869);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19870;
goog.events.fireListeners(n_19870,evt.type,true,evt);
}
{
var G__19871 = seq__19858_19866;
var G__19872 = chunk__19859_19867;
var G__19873 = count__19860_19868;
var G__19874 = (i__19861_19869 + (1));
seq__19858_19866 = G__19871;
chunk__19859_19867 = G__19872;
count__19860_19868 = G__19873;
i__19861_19869 = G__19874;
continue;
}
} else
{var temp__4126__auto___19875 = cljs.core.seq.call(null,seq__19858_19866);if(temp__4126__auto___19875)
{var seq__19858_19876__$1 = temp__4126__auto___19875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19858_19876__$1))
{var c__4408__auto___19877 = cljs.core.chunk_first.call(null,seq__19858_19876__$1);{
var G__19878 = cljs.core.chunk_rest.call(null,seq__19858_19876__$1);
var G__19879 = c__4408__auto___19877;
var G__19880 = cljs.core.count.call(null,c__4408__auto___19877);
var G__19881 = (0);
seq__19858_19866 = G__19878;
chunk__19859_19867 = G__19879;
count__19860_19868 = G__19880;
i__19861_19869 = G__19881;
continue;
}
} else
{var n_19882 = cljs.core.first.call(null,seq__19858_19876__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19882;
goog.events.fireListeners(n_19882,evt.type,true,evt);
}
{
var G__19883 = cljs.core.next.call(null,seq__19858_19876__$1);
var G__19884 = null;
var G__19885 = (0);
var G__19886 = (0);
seq__19858_19866 = G__19883;
chunk__19859_19867 = G__19884;
count__19860_19868 = G__19885;
i__19861_19869 = G__19886;
continue;
}
}
} else
{}
}
break;
}
var seq__19862_19887 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19863_19888 = null;var count__19864_19889 = (0);var i__19865_19890 = (0);while(true){
if((i__19865_19890 < count__19864_19889))
{var n_19891 = cljs.core._nth.call(null,chunk__19863_19888,i__19865_19890);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19891;
goog.events.fireListeners(n_19891,evt.type,false,evt);
}
{
var G__19892 = seq__19862_19887;
var G__19893 = chunk__19863_19888;
var G__19894 = count__19864_19889;
var G__19895 = (i__19865_19890 + (1));
seq__19862_19887 = G__19892;
chunk__19863_19888 = G__19893;
count__19864_19889 = G__19894;
i__19865_19890 = G__19895;
continue;
}
} else
{var temp__4126__auto___19896 = cljs.core.seq.call(null,seq__19862_19887);if(temp__4126__auto___19896)
{var seq__19862_19897__$1 = temp__4126__auto___19896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19862_19897__$1))
{var c__4408__auto___19898 = cljs.core.chunk_first.call(null,seq__19862_19897__$1);{
var G__19899 = cljs.core.chunk_rest.call(null,seq__19862_19897__$1);
var G__19900 = c__4408__auto___19898;
var G__19901 = cljs.core.count.call(null,c__4408__auto___19898);
var G__19902 = (0);
seq__19862_19887 = G__19899;
chunk__19863_19888 = G__19900;
count__19864_19889 = G__19901;
i__19865_19890 = G__19902;
continue;
}
} else
{var n_19903 = cljs.core.first.call(null,seq__19862_19897__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19903;
goog.events.fireListeners(n_19903,evt.type,false,evt);
}
{
var G__19904 = cljs.core.next.call(null,seq__19862_19897__$1);
var G__19905 = null;
var G__19906 = (0);
var G__19907 = (0);
seq__19862_19887 = G__19904;
chunk__19863_19888 = G__19905;
count__19864_19889 = G__19906;
i__19865_19890 = G__19907;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19914_19920 = cljs.core.seq.call(null,evt_map);var chunk__19915_19921 = null;var count__19916_19922 = (0);var i__19917_19923 = (0);while(true){
if((i__19917_19923 < count__19916_19922))
{var vec__19918_19924 = cljs.core._nth.call(null,chunk__19915_19921,i__19917_19923);var k_19925 = cljs.core.nth.call(null,vec__19918_19924,(0),null);var v_19926 = cljs.core.nth.call(null,vec__19918_19924,(1),null);(evt[k_19925] = v_19926);
{
var G__19927 = seq__19914_19920;
var G__19928 = chunk__19915_19921;
var G__19929 = count__19916_19922;
var G__19930 = (i__19917_19923 + (1));
seq__19914_19920 = G__19927;
chunk__19915_19921 = G__19928;
count__19916_19922 = G__19929;
i__19917_19923 = G__19930;
continue;
}
} else
{var temp__4126__auto___19931 = cljs.core.seq.call(null,seq__19914_19920);if(temp__4126__auto___19931)
{var seq__19914_19932__$1 = temp__4126__auto___19931;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19914_19932__$1))
{var c__4408__auto___19933 = cljs.core.chunk_first.call(null,seq__19914_19932__$1);{
var G__19934 = cljs.core.chunk_rest.call(null,seq__19914_19932__$1);
var G__19935 = c__4408__auto___19933;
var G__19936 = cljs.core.count.call(null,c__4408__auto___19933);
var G__19937 = (0);
seq__19914_19920 = G__19934;
chunk__19915_19921 = G__19935;
count__19916_19922 = G__19936;
i__19917_19923 = G__19937;
continue;
}
} else
{var vec__19919_19938 = cljs.core.first.call(null,seq__19914_19932__$1);var k_19939 = cljs.core.nth.call(null,vec__19919_19938,(0),null);var v_19940 = cljs.core.nth.call(null,vec__19919_19938,(1),null);(evt[k_19939] = v_19940);
{
var G__19941 = cljs.core.next.call(null,seq__19914_19932__$1);
var G__19942 = null;
var G__19943 = (0);
var G__19944 = (0);
seq__19914_19920 = G__19941;
chunk__19915_19921 = G__19942;
count__19916_19922 = G__19943;
i__19917_19923 = G__19944;
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
return (function (p1__19945_SHARP_){return goog.events.getListeners(p1__19945_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
