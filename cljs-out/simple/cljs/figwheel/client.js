// Compiled by ClojureScript 0.0-2356
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__31575,args){var map__31577 = p__31575;var map__31577__$1 = ((cljs.core.seq_QMARK_.call(null,map__31577))?cljs.core.apply.call(null,cljs.core.hash_map,map__31577):map__31577);var debug = cljs.core.get.call(null,map__31577__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31575,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31575,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31578){
var p__31575 = cljs.core.first(arglist__31578);
var args = cljs.core.rest(arglist__31578);
return log__delegate(p__31575,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31579){var map__31581 = p__31579;var map__31581__$1 = ((cljs.core.seq_QMARK_.call(null,map__31581))?cljs.core.apply.call(null,cljs.core.hash_map,map__31581):map__31581);var websocket_url = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31582,callback){var map__31584 = p__31582;var map__31584__$1 = ((cljs.core.seq_QMARK_.call(null,map__31584))?cljs.core.apply.call(null,cljs.core.hash_map,map__31584):map__31584);var msg = map__31584__$1;var dependency_file = cljs.core.get.call(null,map__31584__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31584__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31584__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31584,map__31584__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31584,map__31584__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__31585,p__31586){var map__31589 = p__31585;var map__31589__$1 = ((cljs.core.seq_QMARK_.call(null,map__31589))?cljs.core.apply.call(null,cljs.core.hash_map,map__31589):map__31589);var opts = map__31589__$1;var url_rewriter = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31590 = p__31586;var map__31590__$1 = ((cljs.core.seq_QMARK_.call(null,map__31590))?cljs.core.apply.call(null,cljs.core.hash_map,map__31590):map__31590);var d = map__31590__$1;var file = cljs.core.get.call(null,map__31590__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31591,p__31592){var map__31634 = p__31591;var map__31634__$1 = ((cljs.core.seq_QMARK_.call(null,map__31634))?cljs.core.apply.call(null,cljs.core.hash_map,map__31634):map__31634);var opts = map__31634__$1;var on_jsload = cljs.core.get.call(null,map__31634__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31634__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31635 = p__31592;var map__31635__$1 = ((cljs.core.seq_QMARK_.call(null,map__31635))?cljs.core.apply.call(null,cljs.core.hash_map,map__31635):map__31635);var files = cljs.core.get.call(null,map__31635__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31634,map__31634__$1,opts,on_jsload,before_jsload,map__31635,map__31635__$1,files){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31634,map__31634__$1,opts,on_jsload,before_jsload,map__31635,map__31635__$1,files){
return (function (state_31658){var state_val_31659 = (state_31658[(1)]);if((state_val_31659 === (6)))
{var inst_31640 = (state_31658[(7)]);var inst_31649 = (state_31658[(2)]);var inst_31650 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31651 = [inst_31640];var inst_31652 = (new cljs.core.PersistentVector(null,1,(5),inst_31650,inst_31651,null));var inst_31653 = cljs.core.apply.call(null,on_jsload,inst_31652);var state_31658__$1 = (function (){var statearr_31660 = state_31658;(statearr_31660[(8)] = inst_31649);
return statearr_31660;
})();var statearr_31661_31675 = state_31658__$1;(statearr_31661_31675[(2)] = inst_31653);
(statearr_31661_31675[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31659 === (5)))
{var inst_31656 = (state_31658[(2)]);var state_31658__$1 = state_31658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31658__$1,inst_31656);
} else
{if((state_val_31659 === (4)))
{var state_31658__$1 = state_31658;var statearr_31662_31676 = state_31658__$1;(statearr_31662_31676[(2)] = null);
(statearr_31662_31676[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31659 === (3)))
{var inst_31640 = (state_31658[(7)]);var inst_31643 = console.debug("Figwheel: loaded these files");var inst_31644 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31640);var inst_31645 = cljs.core.prn_str.call(null,inst_31644);var inst_31646 = console.log(inst_31645);var inst_31647 = cljs.core.async.timeout.call(null,(10));var state_31658__$1 = (function (){var statearr_31663 = state_31658;(statearr_31663[(9)] = inst_31646);
(statearr_31663[(10)] = inst_31643);
return statearr_31663;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31658__$1,(6),inst_31647);
} else
{if((state_val_31659 === (2)))
{var inst_31640 = (state_31658[(7)]);var inst_31640__$1 = (state_31658[(2)]);var inst_31641 = cljs.core.not_empty.call(null,inst_31640__$1);var state_31658__$1 = (function (){var statearr_31664 = state_31658;(statearr_31664[(7)] = inst_31640__$1);
return statearr_31664;
})();if(cljs.core.truth_(inst_31641))
{var statearr_31665_31677 = state_31658__$1;(statearr_31665_31677[(1)] = (3));
} else
{var statearr_31666_31678 = state_31658__$1;(statearr_31666_31678[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31659 === (1)))
{var inst_31636 = before_jsload.call(null,files);var inst_31637 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31638 = figwheel.client.load_all_js_files.call(null,inst_31637);var state_31658__$1 = (function (){var statearr_31667 = state_31658;(statearr_31667[(11)] = inst_31636);
return statearr_31667;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31658__$1,(2),inst_31638);
} else
{return null;
}
}
}
}
}
}
});})(c__9125__auto__,map__31634,map__31634__$1,opts,on_jsload,before_jsload,map__31635,map__31635__$1,files))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31634,map__31634__$1,opts,on_jsload,before_jsload,map__31635,map__31635__$1,files){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31671 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31671[(0)] = state_machine__9111__auto__);
(statearr_31671[(1)] = (1));
return statearr_31671;
});
var state_machine__9111__auto____1 = (function (state_31658){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31658);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31672){if((e31672 instanceof Object))
{var ex__9114__auto__ = e31672;var statearr_31673_31679 = state_31658;(statearr_31673_31679[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31658);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31672;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31680 = state_31658;
state_31658 = G__31680;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31658){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31634,map__31634__$1,opts,on_jsload,before_jsload,map__31635,map__31635__$1,files))
})();var state__9127__auto__ = (function (){var statearr_31674 = f__9126__auto__.call(null);(statearr_31674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31634,map__31634__$1,opts,on_jsload,before_jsload,map__31635,map__31635__$1,files))
);
return c__9125__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31681,link_href){var map__31683 = p__31681;var map__31683__$1 = ((cljs.core.seq_QMARK_.call(null,map__31683))?cljs.core.apply.call(null,cljs.core.hash_map,map__31683):map__31683);var request_url = cljs.core.get.call(null,map__31683__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31683__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,parent){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,parent){
return (function (state_31704){var state_val_31705 = (state_31704[(1)]);if((state_val_31705 === (2)))
{var inst_31701 = (state_31704[(2)]);var inst_31702 = parent.removeChild(orig_link);var state_31704__$1 = (function (){var statearr_31706 = state_31704;(statearr_31706[(7)] = inst_31701);
return statearr_31706;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31704__$1,inst_31702);
} else
{if((state_val_31705 === (1)))
{var inst_31699 = cljs.core.async.timeout.call(null,(200));var state_31704__$1 = state_31704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(2),inst_31699);
} else
{return null;
}
}
});})(c__9125__auto__,parent))
;return ((function (switch__9110__auto__,c__9125__auto__,parent){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31710 = [null,null,null,null,null,null,null,null];(statearr_31710[(0)] = state_machine__9111__auto__);
(statearr_31710[(1)] = (1));
return statearr_31710;
});
var state_machine__9111__auto____1 = (function (state_31704){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31704);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31711){if((e31711 instanceof Object))
{var ex__9114__auto__ = e31711;var statearr_31712_31714 = state_31704;(statearr_31712_31714[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31704);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31711;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31715 = state_31704;
state_31704 = G__31715;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31704){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,parent))
})();var state__9127__auto__ = (function (){var statearr_31713 = f__9126__auto__.call(null);(statearr_31713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,parent))
);
return c__9125__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__31716){var map__31718 = p__31716;var map__31718__$1 = ((cljs.core.seq_QMARK_.call(null,map__31718))?cljs.core.apply.call(null,cljs.core.hash_map,map__31718):map__31718);var f_data = map__31718__$1;var request_url = cljs.core.get.call(null,map__31718__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31718__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31719,files_msg){var map__31741 = p__31719;var map__31741__$1 = ((cljs.core.seq_QMARK_.call(null,map__31741))?cljs.core.apply.call(null,cljs.core.hash_map,map__31741):map__31741);var opts = map__31741__$1;var on_cssload = cljs.core.get.call(null,map__31741__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31742_31762 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31743_31763 = null;var count__31744_31764 = (0);var i__31745_31765 = (0);while(true){
if((i__31745_31765 < count__31744_31764))
{var f_31766 = cljs.core._nth.call(null,chunk__31743_31763,i__31745_31765);figwheel.client.reload_css_file.call(null,f_31766);
{
var G__31767 = seq__31742_31762;
var G__31768 = chunk__31743_31763;
var G__31769 = count__31744_31764;
var G__31770 = (i__31745_31765 + (1));
seq__31742_31762 = G__31767;
chunk__31743_31763 = G__31768;
count__31744_31764 = G__31769;
i__31745_31765 = G__31770;
continue;
}
} else
{var temp__4126__auto___31771 = cljs.core.seq.call(null,seq__31742_31762);if(temp__4126__auto___31771)
{var seq__31742_31772__$1 = temp__4126__auto___31771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31742_31772__$1))
{var c__4408__auto___31773 = cljs.core.chunk_first.call(null,seq__31742_31772__$1);{
var G__31774 = cljs.core.chunk_rest.call(null,seq__31742_31772__$1);
var G__31775 = c__4408__auto___31773;
var G__31776 = cljs.core.count.call(null,c__4408__auto___31773);
var G__31777 = (0);
seq__31742_31762 = G__31774;
chunk__31743_31763 = G__31775;
count__31744_31764 = G__31776;
i__31745_31765 = G__31777;
continue;
}
} else
{var f_31778 = cljs.core.first.call(null,seq__31742_31772__$1);figwheel.client.reload_css_file.call(null,f_31778);
{
var G__31779 = cljs.core.next.call(null,seq__31742_31772__$1);
var G__31780 = null;
var G__31781 = (0);
var G__31782 = (0);
seq__31742_31762 = G__31779;
chunk__31743_31763 = G__31780;
count__31744_31764 = G__31781;
i__31745_31765 = G__31782;
continue;
}
}
} else
{}
}
break;
}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,map__31741,map__31741__$1,opts,on_cssload){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,map__31741,map__31741__$1,opts,on_cssload){
return (function (state_31752){var state_val_31753 = (state_31752[(1)]);if((state_val_31753 === (2)))
{var inst_31748 = (state_31752[(2)]);var inst_31749 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31750 = on_cssload.call(null,inst_31749);var state_31752__$1 = (function (){var statearr_31754 = state_31752;(statearr_31754[(7)] = inst_31748);
return statearr_31754;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31752__$1,inst_31750);
} else
{if((state_val_31753 === (1)))
{var inst_31746 = cljs.core.async.timeout.call(null,(100));var state_31752__$1 = state_31752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31752__$1,(2),inst_31746);
} else
{return null;
}
}
});})(c__9125__auto__,map__31741,map__31741__$1,opts,on_cssload))
;return ((function (switch__9110__auto__,c__9125__auto__,map__31741,map__31741__$1,opts,on_cssload){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31758 = [null,null,null,null,null,null,null,null];(statearr_31758[(0)] = state_machine__9111__auto__);
(statearr_31758[(1)] = (1));
return statearr_31758;
});
var state_machine__9111__auto____1 = (function (state_31752){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31752);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31759){if((e31759 instanceof Object))
{var ex__9114__auto__ = e31759;var statearr_31760_31783 = state_31752;(statearr_31760_31783[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31759;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31784 = state_31752;
state_31752 = G__31784;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31752){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,map__31741,map__31741__$1,opts,on_cssload))
})();var state__9127__auto__ = (function (){var statearr_31761 = f__9126__auto__.call(null);(statearr_31761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,map__31741,map__31741__$1,opts,on_cssload))
);
return c__9125__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31785){var map__31790 = p__31785;var map__31790__$1 = ((cljs.core.seq_QMARK_.call(null,map__31790))?cljs.core.apply.call(null,cljs.core.hash_map,map__31790):map__31790);var opts = map__31790__$1;var on_compile_fail = cljs.core.get.call(null,map__31790__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31790__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31790__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31790__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31791 = cljs.core._EQ_;var expr__31792 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31791.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31792)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31791.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31792)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31791.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31792)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31790,map__31790__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31797 = {"detail":url};return obj31797;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31798){var map__31800 = p__31798;var map__31800__$1 = ((cljs.core.seq_QMARK_.call(null,map__31800))?cljs.core.apply.call(null,cljs.core.hash_map,map__31800):map__31800);var class$ = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31801){var map__31807 = p__31801;var map__31807__$1 = ((cljs.core.seq_QMARK_.call(null,map__31807))?cljs.core.apply.call(null,cljs.core.hash_map,map__31807):map__31807);var ed = map__31807__$1;var exception_data = cljs.core.get.call(null,map__31807__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31807__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31808_31812 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31809_31813 = null;var count__31810_31814 = (0);var i__31811_31815 = (0);while(true){
if((i__31811_31815 < count__31810_31814))
{var msg_31816 = cljs.core._nth.call(null,chunk__31809_31813,i__31811_31815);console.log(msg_31816);
{
var G__31817 = seq__31808_31812;
var G__31818 = chunk__31809_31813;
var G__31819 = count__31810_31814;
var G__31820 = (i__31811_31815 + (1));
seq__31808_31812 = G__31817;
chunk__31809_31813 = G__31818;
count__31810_31814 = G__31819;
i__31811_31815 = G__31820;
continue;
}
} else
{var temp__4126__auto___31821 = cljs.core.seq.call(null,seq__31808_31812);if(temp__4126__auto___31821)
{var seq__31808_31822__$1 = temp__4126__auto___31821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31808_31822__$1))
{var c__4408__auto___31823 = cljs.core.chunk_first.call(null,seq__31808_31822__$1);{
var G__31824 = cljs.core.chunk_rest.call(null,seq__31808_31822__$1);
var G__31825 = c__4408__auto___31823;
var G__31826 = cljs.core.count.call(null,c__4408__auto___31823);
var G__31827 = (0);
seq__31808_31812 = G__31824;
chunk__31809_31813 = G__31825;
count__31810_31814 = G__31826;
i__31811_31815 = G__31827;
continue;
}
} else
{var msg_31828 = cljs.core.first.call(null,seq__31808_31822__$1);console.log(msg_31828);
{
var G__31829 = cljs.core.next.call(null,seq__31808_31822__$1);
var G__31830 = null;
var G__31831 = (0);
var G__31832 = (0);
seq__31808_31812 = G__31829;
chunk__31809_31813 = G__31830;
count__31810_31814 = G__31831;
i__31811_31815 = G__31832;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__31833){var map__31835 = p__31833;var map__31835__$1 = ((cljs.core.seq_QMARK_.call(null,map__31835))?cljs.core.apply.call(null,cljs.core.hash_map,map__31835):map__31835);var opts = map__31835__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31833 = null;if (arguments.length > 0) {
  p__31833 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31833);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31836){
var p__31833 = cljs.core.seq(arglist__31836);
return watch_and_reload__delegate(p__31833);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
