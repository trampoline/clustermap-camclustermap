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
var log__delegate = function (p__30029,args){var map__30031 = p__30029;var map__30031__$1 = ((cljs.core.seq_QMARK_.call(null,map__30031))?cljs.core.apply.call(null,cljs.core.hash_map,map__30031):map__30031);var debug = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__30029,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__30029,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30032){
var p__30029 = cljs.core.first(arglist__30032);
var args = cljs.core.rest(arglist__30032);
return log__delegate(p__30029,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30033){var map__30035 = p__30033;var map__30035__$1 = ((cljs.core.seq_QMARK_.call(null,map__30035))?cljs.core.apply.call(null,cljs.core.hash_map,map__30035):map__30035);var websocket_url = cljs.core.get.call(null,map__30035__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__30036,callback){var map__30038 = p__30036;var map__30038__$1 = ((cljs.core.seq_QMARK_.call(null,map__30038))?cljs.core.apply.call(null,cljs.core.hash_map,map__30038):map__30038);var msg = map__30038__$1;var dependency_file = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3639__auto__ = dependency_file;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30038,map__30038__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30038,map__30038__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30039,p__30040){var map__30043 = p__30039;var map__30043__$1 = ((cljs.core.seq_QMARK_.call(null,map__30043))?cljs.core.apply.call(null,cljs.core.hash_map,map__30043):map__30043);var opts = map__30043__$1;var url_rewriter = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__30044 = p__30040;var map__30044__$1 = ((cljs.core.seq_QMARK_.call(null,map__30044))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);var d = map__30044__$1;var file = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30045,p__30046){var map__30088 = p__30045;var map__30088__$1 = ((cljs.core.seq_QMARK_.call(null,map__30088))?cljs.core.apply.call(null,cljs.core.hash_map,map__30088):map__30088);var opts = map__30088__$1;var on_jsload = cljs.core.get.call(null,map__30088__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__30088__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__30089 = p__30046;var map__30089__$1 = ((cljs.core.seq_QMARK_.call(null,map__30089))?cljs.core.apply.call(null,cljs.core.hash_map,map__30089):map__30089);var files = cljs.core.get.call(null,map__30089__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30088,map__30088__$1,opts,on_jsload,before_jsload,map__30089,map__30089__$1,files){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30088,map__30088__$1,opts,on_jsload,before_jsload,map__30089,map__30089__$1,files){
return (function (state_30112){var state_val_30113 = (state_30112[(1)]);if((state_val_30113 === (6)))
{var inst_30094 = (state_30112[(7)]);var inst_30103 = (state_30112[(2)]);var inst_30104 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30105 = [inst_30094];var inst_30106 = (new cljs.core.PersistentVector(null,1,(5),inst_30104,inst_30105,null));var inst_30107 = cljs.core.apply.call(null,on_jsload,inst_30106);var state_30112__$1 = (function (){var statearr_30114 = state_30112;(statearr_30114[(8)] = inst_30103);
return statearr_30114;
})();var statearr_30115_30129 = state_30112__$1;(statearr_30115_30129[(2)] = inst_30107);
(statearr_30115_30129[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30113 === (5)))
{var inst_30110 = (state_30112[(2)]);var state_30112__$1 = state_30112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30112__$1,inst_30110);
} else
{if((state_val_30113 === (4)))
{var state_30112__$1 = state_30112;var statearr_30116_30130 = state_30112__$1;(statearr_30116_30130[(2)] = null);
(statearr_30116_30130[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30113 === (3)))
{var inst_30094 = (state_30112[(7)]);var inst_30097 = console.debug("Figwheel: loaded these files");var inst_30098 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30094);var inst_30099 = cljs.core.prn_str.call(null,inst_30098);var inst_30100 = console.log(inst_30099);var inst_30101 = cljs.core.async.timeout.call(null,(10));var state_30112__$1 = (function (){var statearr_30117 = state_30112;(statearr_30117[(9)] = inst_30097);
(statearr_30117[(10)] = inst_30100);
return statearr_30117;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30112__$1,(6),inst_30101);
} else
{if((state_val_30113 === (2)))
{var inst_30094 = (state_30112[(7)]);var inst_30094__$1 = (state_30112[(2)]);var inst_30095 = cljs.core.not_empty.call(null,inst_30094__$1);var state_30112__$1 = (function (){var statearr_30118 = state_30112;(statearr_30118[(7)] = inst_30094__$1);
return statearr_30118;
})();if(cljs.core.truth_(inst_30095))
{var statearr_30119_30131 = state_30112__$1;(statearr_30119_30131[(1)] = (3));
} else
{var statearr_30120_30132 = state_30112__$1;(statearr_30120_30132[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30113 === (1)))
{var inst_30090 = before_jsload.call(null,files);var inst_30091 = figwheel.client.add_request_urls.call(null,opts,files);var inst_30092 = figwheel.client.load_all_js_files.call(null,inst_30091);var state_30112__$1 = (function (){var statearr_30121 = state_30112;(statearr_30121[(11)] = inst_30090);
return statearr_30121;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30112__$1,(2),inst_30092);
} else
{return null;
}
}
}
}
}
}
});})(c__11517__auto__,map__30088,map__30088__$1,opts,on_jsload,before_jsload,map__30089,map__30089__$1,files))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30088,map__30088__$1,opts,on_jsload,before_jsload,map__30089,map__30089__$1,files){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30125 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30125[(0)] = state_machine__11462__auto__);
(statearr_30125[(1)] = (1));
return statearr_30125;
});
var state_machine__11462__auto____1 = (function (state_30112){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30112);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30126){if((e30126 instanceof Object))
{var ex__11465__auto__ = e30126;var statearr_30127_30133 = state_30112;(statearr_30127_30133[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30126;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30134 = state_30112;
state_30112 = G__30134;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30112){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30088,map__30088__$1,opts,on_jsload,before_jsload,map__30089,map__30089__$1,files))
})();var state__11519__auto__ = (function (){var statearr_30128 = f__11518__auto__.call(null);(statearr_30128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30088,map__30088__$1,opts,on_jsload,before_jsload,map__30089,map__30089__$1,files))
);
return c__11517__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30135,link_href){var map__30137 = p__30135;var map__30137__$1 = ((cljs.core.seq_QMARK_.call(null,map__30137))?cljs.core.apply.call(null,cljs.core.hash_map,map__30137):map__30137);var request_url = cljs.core.get.call(null,map__30137__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30137__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,parent){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,parent){
return (function (state_30158){var state_val_30159 = (state_30158[(1)]);if((state_val_30159 === (2)))
{var inst_30155 = (state_30158[(2)]);var inst_30156 = parent.removeChild(orig_link);var state_30158__$1 = (function (){var statearr_30160 = state_30158;(statearr_30160[(7)] = inst_30155);
return statearr_30160;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30158__$1,inst_30156);
} else
{if((state_val_30159 === (1)))
{var inst_30153 = cljs.core.async.timeout.call(null,(200));var state_30158__$1 = state_30158;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30158__$1,(2),inst_30153);
} else
{return null;
}
}
});})(c__11517__auto__,parent))
;return ((function (switch__11461__auto__,c__11517__auto__,parent){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30164 = [null,null,null,null,null,null,null,null];(statearr_30164[(0)] = state_machine__11462__auto__);
(statearr_30164[(1)] = (1));
return statearr_30164;
});
var state_machine__11462__auto____1 = (function (state_30158){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30158);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30165){if((e30165 instanceof Object))
{var ex__11465__auto__ = e30165;var statearr_30166_30168 = state_30158;(statearr_30166_30168[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30158);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30165;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30169 = state_30158;
state_30158 = G__30169;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30158){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,parent))
})();var state__11519__auto__ = (function (){var statearr_30167 = f__11518__auto__.call(null);(statearr_30167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,parent))
);
return c__11517__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30170){var map__30172 = p__30170;var map__30172__$1 = ((cljs.core.seq_QMARK_.call(null,map__30172))?cljs.core.apply.call(null,cljs.core.hash_map,map__30172):map__30172);var f_data = map__30172__$1;var request_url = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30173,files_msg){var map__30195 = p__30173;var map__30195__$1 = ((cljs.core.seq_QMARK_.call(null,map__30195))?cljs.core.apply.call(null,cljs.core.hash_map,map__30195):map__30195);var opts = map__30195__$1;var on_cssload = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__30196_30216 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__30197_30217 = null;var count__30198_30218 = (0);var i__30199_30219 = (0);while(true){
if((i__30199_30219 < count__30198_30218))
{var f_30220 = cljs.core._nth.call(null,chunk__30197_30217,i__30199_30219);figwheel.client.reload_css_file.call(null,f_30220);
{
var G__30221 = seq__30196_30216;
var G__30222 = chunk__30197_30217;
var G__30223 = count__30198_30218;
var G__30224 = (i__30199_30219 + (1));
seq__30196_30216 = G__30221;
chunk__30197_30217 = G__30222;
count__30198_30218 = G__30223;
i__30199_30219 = G__30224;
continue;
}
} else
{var temp__4126__auto___30225 = cljs.core.seq.call(null,seq__30196_30216);if(temp__4126__auto___30225)
{var seq__30196_30226__$1 = temp__4126__auto___30225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30196_30226__$1))
{var c__4408__auto___30227 = cljs.core.chunk_first.call(null,seq__30196_30226__$1);{
var G__30228 = cljs.core.chunk_rest.call(null,seq__30196_30226__$1);
var G__30229 = c__4408__auto___30227;
var G__30230 = cljs.core.count.call(null,c__4408__auto___30227);
var G__30231 = (0);
seq__30196_30216 = G__30228;
chunk__30197_30217 = G__30229;
count__30198_30218 = G__30230;
i__30199_30219 = G__30231;
continue;
}
} else
{var f_30232 = cljs.core.first.call(null,seq__30196_30226__$1);figwheel.client.reload_css_file.call(null,f_30232);
{
var G__30233 = cljs.core.next.call(null,seq__30196_30226__$1);
var G__30234 = null;
var G__30235 = (0);
var G__30236 = (0);
seq__30196_30216 = G__30233;
chunk__30197_30217 = G__30234;
count__30198_30218 = G__30235;
i__30199_30219 = G__30236;
continue;
}
}
} else
{}
}
break;
}
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,map__30195,map__30195__$1,opts,on_cssload){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,map__30195,map__30195__$1,opts,on_cssload){
return (function (state_30206){var state_val_30207 = (state_30206[(1)]);if((state_val_30207 === (2)))
{var inst_30202 = (state_30206[(2)]);var inst_30203 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_30204 = on_cssload.call(null,inst_30203);var state_30206__$1 = (function (){var statearr_30208 = state_30206;(statearr_30208[(7)] = inst_30202);
return statearr_30208;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30206__$1,inst_30204);
} else
{if((state_val_30207 === (1)))
{var inst_30200 = cljs.core.async.timeout.call(null,(100));var state_30206__$1 = state_30206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30206__$1,(2),inst_30200);
} else
{return null;
}
}
});})(c__11517__auto__,map__30195,map__30195__$1,opts,on_cssload))
;return ((function (switch__11461__auto__,c__11517__auto__,map__30195,map__30195__$1,opts,on_cssload){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30212 = [null,null,null,null,null,null,null,null];(statearr_30212[(0)] = state_machine__11462__auto__);
(statearr_30212[(1)] = (1));
return statearr_30212;
});
var state_machine__11462__auto____1 = (function (state_30206){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30206);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30213){if((e30213 instanceof Object))
{var ex__11465__auto__ = e30213;var statearr_30214_30237 = state_30206;(statearr_30214_30237[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30206);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30213;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30238 = state_30206;
state_30206 = G__30238;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30206){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,map__30195,map__30195__$1,opts,on_cssload))
})();var state__11519__auto__ = (function (){var statearr_30215 = f__11518__auto__.call(null);(statearr_30215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,map__30195,map__30195__$1,opts,on_cssload))
);
return c__11517__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30239){var map__30244 = p__30239;var map__30244__$1 = ((cljs.core.seq_QMARK_.call(null,map__30244))?cljs.core.apply.call(null,cljs.core.hash_map,map__30244):map__30244);var opts = map__30244__$1;var on_compile_fail = cljs.core.get.call(null,map__30244__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__30244__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__30244__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__30244__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__30245 = cljs.core._EQ_;var expr__30246 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__30245.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30246)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30245.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30246)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__30245.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30246)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30244,map__30244__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30251 = {"detail":url};return obj30251;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30252){var map__30254 = p__30252;var map__30254__$1 = ((cljs.core.seq_QMARK_.call(null,map__30254))?cljs.core.apply.call(null,cljs.core.hash_map,map__30254):map__30254);var class$ = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30255){var map__30261 = p__30255;var map__30261__$1 = ((cljs.core.seq_QMARK_.call(null,map__30261))?cljs.core.apply.call(null,cljs.core.hash_map,map__30261):map__30261);var ed = map__30261__$1;var exception_data = cljs.core.get.call(null,map__30261__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__30261__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__30262_30266 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__30263_30267 = null;var count__30264_30268 = (0);var i__30265_30269 = (0);while(true){
if((i__30265_30269 < count__30264_30268))
{var msg_30270 = cljs.core._nth.call(null,chunk__30263_30267,i__30265_30269);console.log(msg_30270);
{
var G__30271 = seq__30262_30266;
var G__30272 = chunk__30263_30267;
var G__30273 = count__30264_30268;
var G__30274 = (i__30265_30269 + (1));
seq__30262_30266 = G__30271;
chunk__30263_30267 = G__30272;
count__30264_30268 = G__30273;
i__30265_30269 = G__30274;
continue;
}
} else
{var temp__4126__auto___30275 = cljs.core.seq.call(null,seq__30262_30266);if(temp__4126__auto___30275)
{var seq__30262_30276__$1 = temp__4126__auto___30275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30262_30276__$1))
{var c__4408__auto___30277 = cljs.core.chunk_first.call(null,seq__30262_30276__$1);{
var G__30278 = cljs.core.chunk_rest.call(null,seq__30262_30276__$1);
var G__30279 = c__4408__auto___30277;
var G__30280 = cljs.core.count.call(null,c__4408__auto___30277);
var G__30281 = (0);
seq__30262_30266 = G__30278;
chunk__30263_30267 = G__30279;
count__30264_30268 = G__30280;
i__30265_30269 = G__30281;
continue;
}
} else
{var msg_30282 = cljs.core.first.call(null,seq__30262_30276__$1);console.log(msg_30282);
{
var G__30283 = cljs.core.next.call(null,seq__30262_30276__$1);
var G__30284 = null;
var G__30285 = (0);
var G__30286 = (0);
seq__30262_30266 = G__30283;
chunk__30263_30267 = G__30284;
count__30264_30268 = G__30285;
i__30265_30269 = G__30286;
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
var watch_and_reload__delegate = function (p__30287){var map__30289 = p__30287;var map__30289__$1 = ((cljs.core.seq_QMARK_.call(null,map__30289))?cljs.core.apply.call(null,cljs.core.hash_map,map__30289):map__30289);var opts = map__30289__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30287 = null;if (arguments.length > 0) {
  p__30287 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__30287);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30290){
var p__30287 = cljs.core.seq(arglist__30290);
return watch_and_reload__delegate(p__30287);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
