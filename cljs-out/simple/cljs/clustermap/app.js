// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.boundarylines');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('secretary.core');
goog.require('schema.core');
goog.require('clustermap.nav');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.ganalytics');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clustermap.boundarylines');
goog.require('clustermap.ganalytics');
goog.require('clustermap.data.colorchooser');
goog.require('clustermap.components.mount');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clustermap.nav');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clustermap.api');
if(typeof clustermap.app.history_STAR_ !== 'undefined')
{} else
{clustermap.app.history_STAR_ = (new goog.History());
}
clustermap.app.IAppService = (function (){var obj29226 = {};return obj29226;
})();
clustermap.app.init = (function init(this$,app){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$init$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$init$arity$2(this$,app);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.init[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.init["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.init",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.destroy = (function destroy(this$,app){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$destroy$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$destroy$arity$2(this$,app);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.destroy[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.destroy["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.destroy",this$);
}
}
})().call(null,this$,app);
}
});
clustermap.app.handle_event = (function handle_event(this$,app,type,val){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$handle_event$arity$4;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$handle_event$arity$4(this$,app,type,val);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.handle_event[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.handle_event["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.handle-event",this$);
}
}
})().call(null,this$,app,type,val);
}
});
clustermap.app.dev_mode_QMARK_ = (function dev_mode_QMARK_(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppService$dev_mode_QMARK_$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.dev_mode_QMARK_[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.dev_mode_QMARK_["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppService.dev-mode?",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IAppControl = (function (){var obj29228 = {};return obj29228;
})();
clustermap.app.start = (function start(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppControl$start$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppControl$start$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.start[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.start["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.start",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.stop = (function stop(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IAppControl$stop$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IAppControl$stop$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.stop[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.stop["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAppControl.stop",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.IApp = (function (){var obj29230 = {};return obj29230;
})();
clustermap.app.get_state = (function get_state(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_state$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_state$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_state[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_state["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-state",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_comm = (function get_comm(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_comm$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_comm$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_comm[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_comm["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-comm",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_filter_rq = (function get_filter_rq(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_filter_rq$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_filter_rq$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_filter_rq[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_filter_rq["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-filter-rq",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_history = (function get_history(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_history$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_history$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_history[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_history["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-history",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.get_navigator_fn = (function get_navigator_fn(this$){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$get_navigator_fn$arity$1(this$);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.get_navigator_fn[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.get_navigator_fn["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.get-navigator-fn",this$);
}
}
})().call(null,this$);
}
});
clustermap.app.navigate = (function navigate(this$,view){if((function (){var and__3627__auto__ = this$;if(and__3627__auto__)
{return this$.clustermap$app$IApp$navigate$arity$2;
} else
{return and__3627__auto__;
}
})())
{return this$.clustermap$app$IApp$navigate$arity$2(this$,view);
} else
{var x__4275__auto__ = (((this$ == null))?null:this$);return (function (){var or__3639__auto__ = (clustermap.app.navigate[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (clustermap.app.navigate["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IApp.navigate",this$);
}
}
})().call(null,this$,view);
}
});
clustermap.app.create_app_instance = (function create_app_instance(initial_state_value,component_defs,app_service){var comm = cljs.core.async.chan.call(null);var filter_rq = cljs.core.async.chan.call(null);var filter_rq_pub = cljs.core.async.pub.call(null,filter_rq,cljs.core.first);var state = cljs.core.atom.call(null,initial_state_value);var nav_fn = clustermap.nav.init.call(null,clustermap.app.history_STAR_,filter_rq,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),"main");if(typeof clustermap.app.t29287 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.app.t29287 = (function (nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,meta29288){
this.nav_fn = nav_fn;
this.state = state;
this.filter_rq_pub = filter_rq_pub;
this.filter_rq = filter_rq;
this.comm = comm;
this.app_service = app_service;
this.component_defs = component_defs;
this.initial_state_value = initial_state_value;
this.create_app_instance = create_app_instance;
this.meta29288 = meta29288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.app.t29287.cljs$lang$type = true;
clustermap.app.t29287.cljs$lang$ctorStr = "clustermap.app/t29287";
clustermap.app.t29287.cljs$lang$ctorPrWriter = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.app/t29287");
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.clustermap$app$IApp$ = true;
clustermap.app.t29287.prototype.clustermap$app$IApp$get_state$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.clustermap$app$IApp$get_comm$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.comm;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.clustermap$app$IApp$get_filter_rq$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.filter_rq;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.clustermap$app$IApp$get_history$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.app.history_STAR_;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.clustermap$app$IApp$get_navigator_fn$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_){var self__ = this;
var ___$1 = this;return self__.nav_fn;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.clustermap$app$IApp$navigate$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_,view){var self__ = this;
var ___$1 = this;return self__.nav_fn.call(null,view);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.clustermap$app$IAppControl$ = true;
clustermap.app.t29287.prototype.clustermap$app$IAppControl$start$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var shared = cljs.core.merge.call(null,clustermap.app.init.call(null,self__.app_service,this$__$1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),self__.filter_rq_pub,new cljs.core.Keyword(null,"history","history",-247395220),clustermap.app.history_STAR_,new cljs.core.Keyword(null,"app","app",-560961707),this$__$1], null));var initial_token = clustermap.app.history_STAR_.getToken();goog.events.listen(clustermap.app.history_STAR_,goog.history.EventType.NAVIGATE,((function (shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (e){var token = e.token;return secretary.core.dispatch_BANG_.call(null,token);
});})(shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
clustermap.app.history_STAR_.setEnabled(true);
var seq__29290_29343 = cljs.core.seq.call(null,self__.component_defs);var chunk__29291_29344 = null;var count__29292_29345 = (0);var i__29293_29346 = (0);while(true){
if((i__29293_29346 < count__29292_29345))
{var map__29294_29347 = cljs.core._nth.call(null,chunk__29291_29344,i__29293_29346);var map__29294_29348__$1 = ((cljs.core.seq_QMARK_.call(null,map__29294_29347))?cljs.core.apply.call(null,cljs.core.hash_map,map__29294_29347):map__29294_29347);var paths_29349 = cljs.core.get.call(null,map__29294_29348__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29350 = cljs.core.get.call(null,map__29294_29348__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29351 = cljs.core.get.call(null,map__29294_29348__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29352 = cljs.core.get.call(null,map__29294_29348__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29353 = cljs.core.get.call(null,map__29294_29348__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29353,f_29352,target_29351,paths_29349], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29353,f_29352,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29351,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29350,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29349);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29353,f_29352,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29351,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29350,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29349);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29353,f_29352,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29351,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29350,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29349);
}
{
var G__29354 = seq__29290_29343;
var G__29355 = chunk__29291_29344;
var G__29356 = count__29292_29345;
var G__29357 = (i__29293_29346 + (1));
seq__29290_29343 = G__29354;
chunk__29291_29344 = G__29355;
count__29292_29345 = G__29356;
i__29293_29346 = G__29357;
continue;
}
} else
{var temp__4126__auto___29358 = cljs.core.seq.call(null,seq__29290_29343);if(temp__4126__auto___29358)
{var seq__29290_29359__$1 = temp__4126__auto___29358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29290_29359__$1))
{var c__4408__auto___29360 = cljs.core.chunk_first.call(null,seq__29290_29359__$1);{
var G__29361 = cljs.core.chunk_rest.call(null,seq__29290_29359__$1);
var G__29362 = c__4408__auto___29360;
var G__29363 = cljs.core.count.call(null,c__4408__auto___29360);
var G__29364 = (0);
seq__29290_29343 = G__29361;
chunk__29291_29344 = G__29362;
count__29292_29345 = G__29363;
i__29293_29346 = G__29364;
continue;
}
} else
{var map__29295_29365 = cljs.core.first.call(null,seq__29290_29359__$1);var map__29295_29366__$1 = ((cljs.core.seq_QMARK_.call(null,map__29295_29365))?cljs.core.apply.call(null,cljs.core.hash_map,map__29295_29365):map__29295_29365);var paths_29367 = cljs.core.get.call(null,map__29295_29366__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));var path_29368 = cljs.core.get.call(null,map__29295_29366__$1,new cljs.core.Keyword(null,"path","path",-188191168));var target_29369 = cljs.core.get.call(null,map__29295_29366__$1,new cljs.core.Keyword(null,"target","target",253001721));var f_29370 = cljs.core.get.call(null,map__29295_29366__$1,new cljs.core.Keyword(null,"f","f",-1597136552));var name_29371 = cljs.core.get.call(null,map__29295_29366__$1,new cljs.core.Keyword(null,"name","name",1843675177));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",name_29371,f_29370,target_29369,paths_29367], null)));
if(cljs.core.truth_(clustermap.app.dev_mode_QMARK_.call(null,self__.app_service)))
{if(cljs.core.truth_(schema.core.fn_validation_QMARK_.call(null)))
{clustermap.components.mount.mount.call(null,name_29371,f_29370,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29369,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29368,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29367);
} else
{schema.core.set_fn_validation_BANG_.call(null,true);
try{clustermap.components.mount.mount.call(null,name_29371,f_29370,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29369,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29368,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29367);
}finally {schema.core.set_fn_validation_BANG_.call(null,false);
}}
} else
{clustermap.components.mount.mount.call(null,name_29371,f_29370,self__.state,new cljs.core.Keyword(null,"target","target",253001721),target_29369,new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"path","path",-188191168),path_29368,new cljs.core.Keyword(null,"paths","paths",-1807389588),paths_29367);
}
{
var G__29372 = cljs.core.next.call(null,seq__29290_29359__$1);
var G__29373 = null;
var G__29374 = (0);
var G__29375 = (0);
seq__29290_29343 = G__29372;
chunk__29291_29344 = G__29373;
count__29292_29345 = G__29374;
i__29293_29346 = G__29375;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto___29376 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___29376,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___29376,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (state_29316){var state_val_29317 = (state_29316[(1)]);if((state_val_29317 === (7)))
{var inst_29300 = (state_29316[(7)]);var inst_29300__$1 = (state_29316[(2)]);var inst_29301 = cljs.core.seq_QMARK_.call(null,inst_29300__$1);var state_29316__$1 = (function (){var statearr_29318 = state_29316;(statearr_29318[(7)] = inst_29300__$1);
return statearr_29318;
})();if(inst_29301)
{var statearr_29319_29377 = state_29316__$1;(statearr_29319_29377[(1)] = (8));
} else
{var statearr_29320_29378 = state_29316__$1;(statearr_29320_29378[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (1)))
{var state_29316__$1 = state_29316;var statearr_29321_29379 = state_29316__$1;(statearr_29321_29379[(2)] = null);
(statearr_29321_29379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (4)))
{var state_29316__$1 = state_29316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29316__$1,(7),self__.comm);
} else
{if((state_val_29317 === (6)))
{var inst_29312 = (state_29316[(2)]);var state_29316__$1 = state_29316;var statearr_29322_29380 = state_29316__$1;(statearr_29322_29380[(2)] = inst_29312);
(statearr_29322_29380[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (3)))
{var inst_29314 = (state_29316[(2)]);var state_29316__$1 = state_29316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29316__$1,inst_29314);
} else
{if((state_val_29317 === (2)))
{var state_29316__$1 = state_29316;var statearr_29323_29381 = state_29316__$1;(statearr_29323_29381[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (9)))
{var inst_29300 = (state_29316[(7)]);var state_29316__$1 = state_29316;var statearr_29325_29382 = state_29316__$1;(statearr_29325_29382[(2)] = inst_29300);
(statearr_29325_29382[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (5)))
{var state_29316__$1 = state_29316;var statearr_29326_29383 = state_29316__$1;(statearr_29326_29383[(2)] = null);
(statearr_29326_29383[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (10)))
{var inst_29306 = (state_29316[(2)]);var inst_29307 = cljs.core.get.call(null,inst_29306,new cljs.core.Keyword(null,"type","type",1174270348));var inst_29308 = clustermap.app.handle_event.call(null,self__.app_service,this$__$1,inst_29307,inst_29306);var state_29316__$1 = (function (){var statearr_29327 = state_29316;(statearr_29327[(8)] = inst_29308);
return statearr_29327;
})();var statearr_29328_29384 = state_29316__$1;(statearr_29328_29384[(2)] = null);
(statearr_29328_29384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (8)))
{var inst_29300 = (state_29316[(7)]);var inst_29303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29300);var state_29316__$1 = state_29316;var statearr_29329_29385 = state_29316__$1;(statearr_29329_29385[(2)] = inst_29303);
(statearr_29329_29385[(1)] = (10));
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
});})(c__9125__auto___29376,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
;return ((function (switch__9110__auto__,c__9125__auto___29376,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29333 = [null,null,null,null,null,null,null,null,null];(statearr_29333[(0)] = state_machine__9111__auto__);
(statearr_29333[(1)] = (1));
return statearr_29333;
});
var state_machine__9111__auto____1 = (function (state_29316){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29316);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29334){if((e29334 instanceof Object))
{var ex__9114__auto__ = e29334;var statearr_29335_29386 = state_29316;(statearr_29335_29386[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29334;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29387 = state_29316;
state_29316 = G__29387;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29316){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___29376,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
})();var state__9127__auto__ = (function (){var statearr_29336 = f__9126__auto__.call(null);(statearr_29336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___29376);
return statearr_29336;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___29376,shared,initial_token,this$__$1,comm,filter_rq,filter_rq_pub,state,nav_fn))
);
return secretary.core.dispatch_BANG_.call(null,initial_token);
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.clustermap$app$IAppControl$stop$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (this$){var self__ = this;
var this$__$1 = this;var seq__29337_29388 = cljs.core.seq.call(null,self__.component_defs);var chunk__29338_29389 = null;var count__29339_29390 = (0);var i__29340_29391 = (0);while(true){
if((i__29340_29391 < count__29339_29390))
{var map__29341_29392 = cljs.core._nth.call(null,chunk__29338_29389,i__29340_29391);var map__29341_29393__$1 = ((cljs.core.seq_QMARK_.call(null,map__29341_29392))?cljs.core.apply.call(null,cljs.core.hash_map,map__29341_29392):map__29341_29392);var target_29394 = cljs.core.get.call(null,map__29341_29393__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29394);
{
var G__29395 = seq__29337_29388;
var G__29396 = chunk__29338_29389;
var G__29397 = count__29339_29390;
var G__29398 = (i__29340_29391 + (1));
seq__29337_29388 = G__29395;
chunk__29338_29389 = G__29396;
count__29339_29390 = G__29397;
i__29340_29391 = G__29398;
continue;
}
} else
{var temp__4126__auto___29399 = cljs.core.seq.call(null,seq__29337_29388);if(temp__4126__auto___29399)
{var seq__29337_29400__$1 = temp__4126__auto___29399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29337_29400__$1))
{var c__4408__auto___29401 = cljs.core.chunk_first.call(null,seq__29337_29400__$1);{
var G__29402 = cljs.core.chunk_rest.call(null,seq__29337_29400__$1);
var G__29403 = c__4408__auto___29401;
var G__29404 = cljs.core.count.call(null,c__4408__auto___29401);
var G__29405 = (0);
seq__29337_29388 = G__29402;
chunk__29338_29389 = G__29403;
count__29339_29390 = G__29404;
i__29340_29391 = G__29405;
continue;
}
} else
{var map__29342_29406 = cljs.core.first.call(null,seq__29337_29400__$1);var map__29342_29407__$1 = ((cljs.core.seq_QMARK_.call(null,map__29342_29406))?cljs.core.apply.call(null,cljs.core.hash_map,map__29342_29406):map__29342_29406);var target_29408 = cljs.core.get.call(null,map__29342_29407__$1,new cljs.core.Keyword(null,"target","target",253001721));clustermap.components.mount.unmount.call(null,target_29408);
{
var G__29409 = cljs.core.next.call(null,seq__29337_29400__$1);
var G__29410 = null;
var G__29411 = (0);
var G__29412 = (0);
seq__29337_29388 = G__29409;
chunk__29338_29389 = G__29410;
count__29339_29390 = G__29411;
i__29340_29391 = G__29412;
continue;
}
}
} else
{}
}
break;
}
clustermap.app.destroy.call(null,self__.app_service,this$__$1);
clustermap.nav.destroy.call(null);
return clustermap.app.history_STAR_.removeAllListeners();
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29289){var self__ = this;
var _29289__$1 = this;return self__.meta29288;
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.t29287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function (_29289,meta29288__$1){var self__ = this;
var _29289__$1 = this;return (new clustermap.app.t29287(self__.nav_fn,self__.state,self__.filter_rq_pub,self__.filter_rq,self__.comm,self__.app_service,self__.component_defs,self__.initial_state_value,self__.create_app_instance,meta29288__$1));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
clustermap.app.__GT_t29287 = ((function (comm,filter_rq,filter_rq_pub,state,nav_fn){
return (function __GT_t29287(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29288){return (new clustermap.app.t29287(nav_fn__$1,state__$1,filter_rq_pub__$1,filter_rq__$1,comm__$1,app_service__$1,component_defs__$1,initial_state_value__$1,create_app_instance__$1,meta29288));
});})(comm,filter_rq,filter_rq_pub,state,nav_fn))
;
}
return (new clustermap.app.t29287(nav_fn,state,filter_rq_pub,filter_rq,comm,app_service,component_defs,initial_state_value,create_app_instance,null));
});
clustermap.app.start_or_restart_app = (function start_or_restart_app(app_instance_atom,initial_state,components,app_service){return cljs.core.swap_BANG_.call(null,app_instance_atom,(function (a,initial_state__$1,components__$1,app_service__$1){if(cljs.core.truth_(a))
{clustermap.app.stop.call(null,a);
} else
{}
var new_app = clustermap.app.create_app_instance.call(null,initial_state__$1,components__$1,app_service__$1);clustermap.app.start.call(null,new_app);
return new_app;
}),initial_state,components,app_service);
});
