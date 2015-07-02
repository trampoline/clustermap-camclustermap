// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('secretary.core');
goog.require('domina');
goog.require('jayq.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('secretary.core');
goog.require('domina.xpath');
goog.require('clustermap.formats.url');
goog.require('clustermap.formats.url');
goog.require('clustermap.filters');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){var view__$1 = (function (){var or__3639__auto__ = cljs.core.not_empty.call(null,view);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "main";
}
})();var view_class = (".view-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view__$1));var hide_sections = domina.css.sel.call(null,".view");var show_sections = domina.css.sel.call(null,view_class);domina.add_class_BANG_.call(null,hide_sections,"hide");
domina.remove_class_BANG_.call(null,show_sections,"hide");
return domina.events.dispatch_BANG_.call(null,"clustermap-change-view",cljs.core.PersistentArrayMap.EMPTY);
});
clustermap.nav.set_route = (function set_route(history,view){var token = history.getToken();var new_token = (cljs.core.truth_(view)?clustermap.formats.url.change_token_path.call(null,token,("/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view)))):clustermap.formats.url.change_token_path.call(null,token,(""))
);return history.setToken(new_token);
});
clustermap.nav.set_view = (function set_view(app_state,path,view){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-view",view], null)));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,path,view);
return clustermap.nav.change_view.call(null,view);
});
clustermap.nav.send_filter_rqs = (function send_filter_rqs(filter_rq,query_params){console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ROUTE-PARAMS",query_params], null))));
var seq__29419 = cljs.core.seq.call(null,query_params);var chunk__29420 = null;var count__29421 = (0);var i__29422 = (0);while(true){
if((i__29422 < count__29421))
{var vec__29423 = cljs.core._nth.call(null,chunk__29420,i__29422);var filter_id = cljs.core.nth.call(null,vec__29423,(0),null);var filter_str = cljs.core.nth.call(null,vec__29423,(1),null);var f_29425 = clustermap.filters.parse_url_param_value.call(null,filter_str);cljs.core.async.put_BANG_.call(null,filter_rq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_id,f_29425], null));
{
var G__29426 = seq__29419;
var G__29427 = chunk__29420;
var G__29428 = count__29421;
var G__29429 = (i__29422 + (1));
seq__29419 = G__29426;
chunk__29420 = G__29427;
count__29421 = G__29428;
i__29422 = G__29429;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29419);if(temp__4126__auto__)
{var seq__29419__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29419__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__29419__$1);{
var G__29430 = cljs.core.chunk_rest.call(null,seq__29419__$1);
var G__29431 = c__4408__auto__;
var G__29432 = cljs.core.count.call(null,c__4408__auto__);
var G__29433 = (0);
seq__29419 = G__29430;
chunk__29420 = G__29431;
count__29421 = G__29432;
i__29422 = G__29433;
continue;
}
} else
{var vec__29424 = cljs.core.first.call(null,seq__29419__$1);var filter_id = cljs.core.nth.call(null,vec__29424,(0),null);var filter_str = cljs.core.nth.call(null,vec__29424,(1),null);var f_29434 = clustermap.filters.parse_url_param_value.call(null,filter_str);cljs.core.async.put_BANG_.call(null,filter_rq,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_id,f_29434], null));
{
var G__29435 = cljs.core.next.call(null,seq__29419__$1);
var G__29436 = null;
var G__29437 = (0);
var G__29438 = (0);
seq__29419 = G__29435;
chunk__29420 = G__29436;
count__29421 = G__29437;
i__29422 = G__29438;
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
clustermap.nav.init_routes = (function init_routes(filter_rq,app_state,path,default_view){var action__16870__auto___29451 = (function (params__16871__auto__){if(cljs.core.map_QMARK_.call(null,params__16871__auto__))
{var map__29445 = params__16871__auto__;var map__29445__$1 = ((cljs.core.seq_QMARK_.call(null,map__29445))?cljs.core.apply.call(null,cljs.core.hash_map,map__29445):map__29445);var query_params = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__16871__auto__))
{var vec__29446 = params__16871__auto__;var query_params = cljs.core.nth.call(null,vec__29446,(0),null);clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__16870__auto___29451);
var action__16870__auto___29452 = (function (params__16871__auto__){if(cljs.core.map_QMARK_.call(null,params__16871__auto__))
{var map__29447 = params__16871__auto__;var map__29447__$1 = ((cljs.core.seq_QMARK_.call(null,map__29447))?cljs.core.apply.call(null,cljs.core.hash_map,map__29447):map__29447);var query_params = cljs.core.get.call(null,map__29447__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__16871__auto__))
{var vec__29448 = params__16871__auto__;var query_params = cljs.core.nth.call(null,vec__29448,(0),null);clustermap.nav.set_view.call(null,app_state,path,"main");
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__16870__auto___29452);
var action__16870__auto__ = (function (params__16871__auto__){if(cljs.core.map_QMARK_.call(null,params__16871__auto__))
{var map__29449 = params__16871__auto__;var map__29449__$1 = ((cljs.core.seq_QMARK_.call(null,map__29449))?cljs.core.apply.call(null,cljs.core.hash_map,map__29449):map__29449);var query_params = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));var view = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"view","view",1247994814));clustermap.nav.set_view.call(null,app_state,path,view);
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{if(cljs.core.vector_QMARK_.call(null,params__16871__auto__))
{var vec__29450 = params__16871__auto__;var view = cljs.core.nth.call(null,vec__29450,(0),null);var query_params = cljs.core.nth.call(null,vec__29450,(1),null);clustermap.nav.set_view.call(null,app_state,path,view);
return clustermap.nav.send_filter_rqs.call(null,filter_rq,query_params);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__16870__auto__);
return ((function (action__16870__auto__){
return (function() { 
var G__29453__delegate = function (args__16869__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:view",args__16869__auto__);
};
var G__29453 = function (var_args){
var args__16869__auto__ = null;if (arguments.length > 0) {
  args__16869__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29453__delegate.call(this,args__16869__auto__);};
G__29453.cljs$lang$maxFixedArity = 0;
G__29453.cljs$lang$applyTo = (function (arglist__29454){
var args__16869__auto__ = cljs.core.seq(arglist__29454);
return G__29453__delegate(args__16869__auto__);
});
G__29453.cljs$core$IFn$_invoke$arity$variadic = G__29453__delegate;
return G__29453;
})()
;
;})(action__16870__auto__))
});
/**
* initialise navigation and routing
* 
* history : the History object
* filter-rq : core.async channel for filter request messages
* app-state : the app state atom
* path : the path to update with the current view
* default-view : default-view to be applied
* 
* returns a function of a single param, thew view, which
* can be used to navigate to that view
*/
clustermap.nav.init = (function init(history,filter_rq,app_state,path,default_view){var navigator_fn = cljs.core.partial.call(null,clustermap.nav.set_route,history);clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.init_routes.call(null,filter_rq,app_state,path,default_view);
return navigator_fn;
});
clustermap.nav.destroy = (function destroy(){secretary.core.reset_routes_BANG_.call(null);
domina.events.unlisten_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"));
return domina.events.unlisten_BANG_.call(null,domina.css.sel.call(null,".nav-links a"));
});
