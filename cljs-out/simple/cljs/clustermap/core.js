// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.boundarylines');
goog.require('clustermap.components.company_info');
goog.require('clustermap.components.map');
goog.require('schema.core');
goog.require('clustermap.components.action_link');
goog.require('clustermap.components.timeline_chart');
goog.require('weasel.repl');
goog.require('clustermap.components.text');
goog.require('clustermap.components.action_link');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('figwheel.client');
goog.require('clustermap.components.table');
goog.require('clustermap.components.ranges_table');
goog.require('clustermap.components.table');
goog.require('clustermap.api');
goog.require('clustermap.components.tag_histogram');
goog.require('clustermap.components.action_button');
goog.require('cljs.core.async');
goog.require('clustermap.components.ranges_table');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.company_info');
goog.require('clustermap.filters');
goog.require('clustermap.components.action_button');
goog.require('clustermap.components.select_chooser');
goog.require('clustermap.components.checkbox_boolean');
goog.require('clustermap.components.geo_sponsors');
goog.require('clustermap.boundarylines');
goog.require('clustermap.app');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.search');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.filter_component_description');
goog.require('clustermap.components.filter');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.text');
goog.require('figwheel.client');
goog.require('clustermap.components.search');
goog.require('schema.core');
goog.require('clustermap.components.filter_description');
goog.require('clustermap.components.filter_component_description');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.nav_button');
goog.require('clustermap.formats.time');
goog.require('clustermap.components.color_scale');
goog.require('clustermap.components.filter');
goog.require('clojure.string');
goog.require('clustermap.components.timeline_chart');
goog.require('clustermap.components.checkbox_boolean');
goog.require('clojure.string');
goog.require('clustermap.components.tag_histogram');
goog.require('clustermap.app');
goog.require('clustermap.components.map');
goog.require('clustermap.components.ranges_chart');
goog.require('clustermap.components.nav_button');
goog.require('clustermap.formats.money');
goog.require('clustermap.filters');
goog.require('clustermap.api');
goog.require('weasel.repl');
goog.require('clustermap.components.geo_sponsors');
goog.require('clustermap.components.filter_description');
goog.require('clustermap.components.ranges_chart');
clustermap.core.dev_mode = (function (){var G__20191 = window;var G__20191__$1 = (((G__20191 == null))?null:G__20191.config);var G__20191__$2 = (((G__20191__$1 == null))?null:G__20191__$1.repl);return G__20191__$2;
})();
clustermap.core.app_instance = cljs.core.atom.call(null,null);
clustermap.core.get_app_state_atom = (function get_app_state_atom(){return clustermap.app.get_state.call(null,cljs.core.deref.call(null,clustermap.core.app_instance));
});
clustermap.core.max_lag_months = (22);
clustermap.core.current_filter = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["rank",(1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["accounts_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),clustermap.formats.time.format_date.call(null,clustermap.formats.time.months_ago.call(null,clustermap.core.max_lag_months))], null)], null)], null)], null)], null)], null)], null)], null);
clustermap.core.scaleup_rank_filter = (function scaleup_rank_filter(n){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["rank",n], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["accounts_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),clustermap.formats.time.format_date.call(null,clustermap.formats.time.months_ago.call(null,(clustermap.core.max_lag_months + ((12) * (n - (1))))))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["turnover_delta_norm",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),0.2], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["rank",(n + (1))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["accounts_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),clustermap.formats.time.format_date.call(null,clustermap.formats.time.months_ago.call(null,(clustermap.core.max_lag_months + ((12) * n))))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["turnover_delta_norm",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),0.2], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["employee_count",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),(10)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["turnover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),(1000000)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
clustermap.core.scaleup_filter = clustermap.core.scaleup_rank_filter.call(null,(1));
clustermap.core.previous_scaleup_filter = clustermap.core.scaleup_rank_filter.call(null,(2));
clustermap.core.boundaryline_filter = (function boundaryline_filter(boundaryline_id){if(cljs.core.truth_(boundaryline_id))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?boundarylines",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["boundaryline_id",boundaryline_id], null)], null)], null)], null);
} else
{return null;
}
});
clustermap.core.make_boundaryline_selection = (function make_boundaryline_selection(boundaryline_id){var app_state = clustermap.app.get_state.call(null,cljs.core.deref.call(null,clustermap.core.app_instance));var ch = (cljs.core.truth_(boundaryline_id)?clustermap.boundarylines.get_or_fetch_boundaryline.call(null,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id):null);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,app_state,ch){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,app_state,ch){
return (function (state_20276){var state_val_20277 = (state_20276[(1)]);if((state_val_20277 === (7)))
{var state_20276__$1 = state_20276;var statearr_20278_20300 = state_20276__$1;(statearr_20278_20300[(2)] = null);
(statearr_20278_20300[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20277 === (1)))
{var state_20276__$1 = state_20276;if(cljs.core.truth_(ch))
{var statearr_20279_20301 = state_20276__$1;(statearr_20279_20301[(1)] = (2));
} else
{var statearr_20280_20302 = state_20276__$1;(statearr_20280_20302[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20277 === (4)))
{var inst_20251 = (state_20276[(7)]);var inst_20251__$1 = (state_20276[(2)]);var inst_20252 = console.log(inst_20251__$1);var state_20276__$1 = (function (){var statearr_20281 = state_20276;(statearr_20281[(8)] = inst_20252);
(statearr_20281[(7)] = inst_20251__$1);
return statearr_20281;
})();if(cljs.core.truth_(boundaryline_id))
{var statearr_20282_20303 = state_20276__$1;(statearr_20282_20303[(1)] = (6));
} else
{var statearr_20283_20304 = state_20276__$1;(statearr_20283_20304[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20277 === (6)))
{var inst_20254 = clustermap.core.boundaryline_filter.call(null,boundaryline_id);var state_20276__$1 = state_20276;var statearr_20284_20305 = state_20276__$1;(statearr_20284_20305[(2)] = inst_20254);
(statearr_20284_20305[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20277 === (3)))
{var state_20276__$1 = state_20276;var statearr_20285_20306 = state_20276__$1;(statearr_20285_20306[(2)] = null);
(statearr_20285_20306[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20277 === (2)))
{var state_20276__$1 = state_20276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20276__$1,(5),ch);
} else
{if((state_val_20277 === (11)))
{var inst_20257 = (state_20276[(9)]);var inst_20262 = (state_20276[(2)]);var inst_20263 = cljs.core.deref.call(null,app_state);var inst_20264 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20265 = [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)];var inst_20266 = (new cljs.core.PersistentVector(null,1,(5),inst_20264,inst_20265,null));var inst_20267 = cljs.core.get_in.call(null,inst_20263,inst_20266);var inst_20268 = clustermap.filters.update_filter_component.call(null,inst_20267,new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712),inst_20257,inst_20262,boundaryline_id);var inst_20269 = cljs.core.clj__GT_js.call(null,inst_20268);var inst_20270 = console.log(inst_20269);var inst_20271 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20272 = [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)];var inst_20273 = (new cljs.core.PersistentVector(null,1,(5),inst_20271,inst_20272,null));var inst_20274 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,inst_20273,inst_20268);var state_20276__$1 = (function (){var statearr_20286 = state_20276;(statearr_20286[(10)] = inst_20270);
return statearr_20286;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20276__$1,inst_20274);
} else
{if((state_val_20277 === (9)))
{var inst_20251 = (state_20276[(7)]);var inst_20259 = (inst_20251["compact_name"]);var state_20276__$1 = state_20276;var statearr_20287_20307 = state_20276__$1;(statearr_20287_20307[(2)] = inst_20259);
(statearr_20287_20307[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20277 === (5)))
{var inst_20248 = (state_20276[(2)]);var state_20276__$1 = state_20276;var statearr_20288_20308 = state_20276__$1;(statearr_20288_20308[(2)] = inst_20248);
(statearr_20288_20308[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20277 === (10)))
{var state_20276__$1 = state_20276;var statearr_20289_20309 = state_20276__$1;(statearr_20289_20309[(2)] = null);
(statearr_20289_20309[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20277 === (8)))
{var inst_20257 = (state_20276[(2)]);var state_20276__$1 = (function (){var statearr_20290 = state_20276;(statearr_20290[(9)] = inst_20257);
return statearr_20290;
})();if(cljs.core.truth_(boundaryline_id))
{var statearr_20291_20310 = state_20276__$1;(statearr_20291_20310[(1)] = (9));
} else
{var statearr_20292_20311 = state_20276__$1;(statearr_20292_20311[(1)] = (10));
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
});})(c__9125__auto__,app_state,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,app_state,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20296 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20296[(0)] = state_machine__9111__auto__);
(statearr_20296[(1)] = (1));
return statearr_20296;
});
var state_machine__9111__auto____1 = (function (state_20276){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20276);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20297){if((e20297 instanceof Object))
{var ex__9114__auto__ = e20297;var statearr_20298_20312 = state_20276;(statearr_20298_20312[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20276);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20297;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20313 = state_20276;
state_20276 = G__20313;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20276){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,app_state,ch))
})();var state__9127__auto__ = (function (){var statearr_20299 = f__9126__auto__.call(null);(statearr_20299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,app_state,ch))
);
return c__9125__auto__;
});
clustermap.core.make_company_selection = (function make_company_selection(natural_id){var state_atom = clustermap.core.get_app_state_atom.call(null);var components = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"components","components",-1073188942)], null));var components__$1 = cljs.core.assoc_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"natural-id","natural-id",1706763483)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["?natural_id",natural_id], null)], null));var base_filters = cljs.core.get_in.call(null,cljs.core.deref.call(null,state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964)], null));var composed = clustermap.filters.compose_filters.call(null,components__$1,base_filters);return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),components__$1,new cljs.core.Keyword(null,"composed","composed",-1510693384),composed], null));
});
clustermap.core.company_link_render_fn = (function company_link_render_fn(name,record){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){e.preventDefault();
clustermap.core.make_company_selection.call(null,new cljs.core.Keyword(null,"?natural_id","?natural_id",-1454211689).cljs$core$IFn$_invoke$arity$1(record));
return clustermap.app.navigate.call(null,cljs.core.deref.call(null,clustermap.core.app_instance),"company");
})], null),name], null);
});
clustermap.core.sign_icon = (function sign_icon(n){if((n > (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-positive","i.icon-positive",1320612420)], null);
} else
{if((n < (0)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-negative","i.icon-negative",1168365176)], null);
} else
{return null;

}
}
});
clustermap.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"revenue-bands","revenue-bands",-33104862),new cljs.core.Keyword(null,"company-close","company-close",-1678145918),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"company-info","company-info",-854288729),new cljs.core.Keyword(null,"company-name","company-name",1213910953),new cljs.core.Keyword(null,"company-search","company-search",-2146533206),new cljs.core.Keyword(null,"headline-stats","headline-stats",630690411),new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691),new cljs.core.Keyword(null,"employment-bands","employment-bands",-829969104),new cljs.core.Keyword(null,"dynamic-filter-description-components","dynamic-filter-description-components",-281677520),new cljs.core.Keyword(null,"reset-all","reset-all",315619250),new cljs.core.Keyword(null,"trends-timeline","trends-timeline",909305491),new cljs.core.Keyword(null,"reset-map-view","reset-map-view",2044975955),new cljs.core.Keyword(null,"company-turnover-timeline","company-turnover-timeline",-996483945),new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"company-employment-timeline","company-employment-timeline",1293857343)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"selection-filter","selection-filter",1191734461),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"natural_id","natural_id",-322974786),null], null),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"companies","companies",-447793417),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reverse_nested","reverse_nested",-218199250),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"aggs","aggs",-442886220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"?natural_id"], null)], null)], null)], null)], null),"#28828a","companies",(function (v){return clustermap.formats.number.fnum.call(null,v);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"turnover",new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"lt50k",new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(50000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"50k",new cljs.core.Keyword(null,"from","from",1815293044),(50000),new cljs.core.Keyword(null,"to","to",192099007),(100000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"100k",new cljs.core.Keyword(null,"from","from",1815293044),(100000),new cljs.core.Keyword(null,"to","to",192099007),(250000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"250k",new cljs.core.Keyword(null,"from","from",1815293044),(250000),new cljs.core.Keyword(null,"to","to",192099007),(500000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"500k",new cljs.core.Keyword(null,"from","from",1815293044),(500000),new cljs.core.Keyword(null,"to","to",192099007),(1000000)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"1m",new cljs.core.Keyword(null,"from","from",1815293044),(1000000),new cljs.core.Keyword(null,"to","to",192099007),(5000000)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"5m",new cljs.core.Keyword(null,"from","from",1815293044),(5000000)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"2013",new cljs.core.Keyword(null,"label","label",1718410804),"2013"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"lt50k",new cljs.core.Keyword(null,"label","label",1718410804),"Less than \u00A350k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"50k",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A350k - \u00A3100k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"100k",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A3100k - \u00A3250k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"250k",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A3250k - \u00A3500k"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"500k",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A3500k - \u00A31m"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"1m",new cljs.core.Keyword(null,"label","label",1718410804),"\u00A31m - \u00A35m"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"5m",new cljs.core.Keyword(null,"label","label",1718410804),"More than \u00A35m"], null)], null),"company",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts"], null),new cljs.core.Keyword(null,"aggs","aggs",-442886220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"accounts_date",new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"2013",new cljs.core.Keyword(null,"from","from",1815293044),"2013-01-01",new cljs.core.Keyword(null,"to","to",192099007),"2014-01-01"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"companies","companies",-447793417),new cljs.core.Keyword(null,"metric","metric",408798077)], null)]),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Close",new cljs.core.Keyword(null,"target-view","target-view",-2032886926),"main",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),"desc"], null)], null),new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!name","!name",1164538490),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),clustermap.core.company_link_render_fn], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!formation_date","!formation_date",-1967327335),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Formation date",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__20315_SHARP_){return clustermap.formats.time.format_date.call(null,p1__20315_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Turnover",new cljs.core.Keyword(null,"right-align","right-align",-604982650),true,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__20316_SHARP_){return clustermap.formats.number.mixed.call(null,p1__20316_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover_delta","!latest_turnover_delta",426854981),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Turn. change",new cljs.core.Keyword(null,"right-align","right-align",-604982650),true,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v,r){var pv = clustermap.formats.number.__BANG_.call(null,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972).cljs$core$IFn$_invoke$arity$1(r),v);var v__$1 = clustermap.formats.number._STAR__BANG_.call(null,(100),clustermap.formats.number.div_BANG_.call(null,v,pv));if(cljs.core.truth_(v__$1))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.formats.number.mixed.call(null,v__$1),"%",clustermap.core.sign_icon.call(null,v__$1)], null);
} else
{return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Employees",new cljs.core.Keyword(null,"right-align","right-align",-604982650),true,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__20317_SHARP_){return clustermap.formats.number.mixed.call(null,p1__20317_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count_delta","!latest_employee_count_delta",-328358407),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"label","label",1718410804),"Emp. change",new cljs.core.Keyword(null,"right-align","right-align",-604982650),true,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v,r){var pv = clustermap.formats.number.__BANG_.call(null,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938).cljs$core$IFn$_invoke$arity$1(r),v);var v__$1 = clustermap.formats.number._STAR__BANG_.call(null,(100),clustermap.formats.number.div_BANG_.call(null,v,pv));if(cljs.core.truth_(v__$1))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),clustermap.formats.number.mixed.call(null,v__$1),"%",clustermap.core.sign_icon.call(null,v__$1)], null);
} else
{return null;
}
})], null)], null)], null),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),null,new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"title-field","title-field",402861939),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"formation_date","formation_date",-1475761548),new cljs.core.Keyword(null,"label","label",1718410804),"Formation date",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (p1__20314_SHARP_){return clustermap.formats.time.format_date.call(null,p1__20314_SHARP_);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"web_url","web_url",2107881046),new cljs.core.Keyword(null,"label","label",1718410804),"Web",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (w){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),w,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),w], null);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"funding_rounds","funding_rounds",-1158649947),new cljs.core.Keyword(null,"label","label",1718410804),"Funding",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (frs){var iter__4377__auto__ = (function iter__20318(s__20319){return (new cljs.core.LazySeq(null,(function (){var s__20319__$1 = s__20319;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20319__$1);if(temp__4126__auto__)
{var s__20319__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20319__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20319__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20321 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20320 = (0);while(true){
if((i__20320 < size__4376__auto__))
{var fr = cljs.core._nth.call(null,c__4375__auto__,i__20320);cljs.core.chunk_append.call(null,b__20321,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))," : ",clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"raised_amount_usd","raised_amount_usd",252697530).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.join.call(null,", ",(function (){var iter__4377__auto__ = ((function (i__20320,fr,c__4375__auto__,size__4376__auto__,b__20321,s__20319__$2,temp__4126__auto__){
return (function iter__20330(s__20331){return (new cljs.core.LazySeq(null,((function (i__20320,fr,c__4375__auto__,size__4376__auto__,b__20321,s__20319__$2,temp__4126__auto__){
return (function (){var s__20331__$1 = s__20331;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20331__$1);if(temp__4126__auto____$1)
{var s__20331__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20331__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20331__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20333 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20332 = (0);while(true){
if((i__20332 < size__4376__auto____$1))
{var inv = cljs.core._nth.call(null,c__4375__auto____$1,i__20332);cljs.core.chunk_append.call(null,b__20333,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv));
{
var G__20377 = (i__20332 + (1));
i__20332 = G__20377;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20333),iter__20330.call(null,cljs.core.chunk_rest.call(null,s__20331__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20333),null);
}
} else
{var inv = cljs.core.first.call(null,s__20331__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv),iter__20330.call(null,cljs.core.rest.call(null,s__20331__$2)));
}
} else
{return null;
}
break;
}
});})(i__20320,fr,c__4375__auto__,size__4376__auto__,b__20321,s__20319__$2,temp__4126__auto__))
,null,null));
});})(i__20320,fr,c__4375__auto__,size__4376__auto__,b__20321,s__20319__$2,temp__4126__auto__))
;return iter__4377__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null));
{
var G__20378 = (i__20320 + (1));
i__20320 = G__20378;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20321),iter__20318.call(null,cljs.core.chunk_rest.call(null,s__20319__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20321),null);
}
} else
{var fr = cljs.core.first.call(null,s__20319__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clustermap.formats.time.format_date.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341).cljs$core$IFn$_invoke$arity$1(fr))," : ",clustermap.formats.number.mixed.call(null,new cljs.core.Keyword(null,"raised_amount_usd","raised_amount_usd",252697530).cljs$core$IFn$_invoke$arity$1(fr),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.join.call(null,", ",(function (){var iter__4377__auto__ = ((function (fr,s__20319__$2,temp__4126__auto__){
return (function iter__20334(s__20335){return (new cljs.core.LazySeq(null,((function (fr,s__20319__$2,temp__4126__auto__){
return (function (){var s__20335__$1 = s__20335;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20335__$1);if(temp__4126__auto____$1)
{var s__20335__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20335__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20335__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20337 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20336 = (0);while(true){
if((i__20336 < size__4376__auto__))
{var inv = cljs.core._nth.call(null,c__4375__auto__,i__20336);cljs.core.chunk_append.call(null,b__20337,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv));
{
var G__20379 = (i__20336 + (1));
i__20336 = G__20379;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20337),iter__20334.call(null,cljs.core.chunk_rest.call(null,s__20335__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20337),null);
}
} else
{var inv = cljs.core.first.call(null,s__20335__$2);return cljs.core.cons.call(null,new cljs.core.Keyword(null,"investor_name","investor_name",505116183).cljs$core$IFn$_invoke$arity$1(inv),iter__20334.call(null,cljs.core.rest.call(null,s__20335__$2)));
}
} else
{return null;
}
break;
}
});})(fr,s__20319__$2,temp__4126__auto__))
,null,null));
});})(fr,s__20319__$2,temp__4126__auto__))
;return iter__4377__auto__.call(null,new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(fr));
})())], null)], null),iter__20318.call(null,cljs.core.rest.call(null,s__20319__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"raised_date","raised_date",-677179341),frs));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"directorships","directorships",1218259884),new cljs.core.Keyword(null,"label","label",1718410804),"Directors",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (ds){var iter__4377__auto__ = (function iter__20338(s__20339){return (new cljs.core.LazySeq(null,(function (){var s__20339__$1 = s__20339;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20339__$1);if(temp__4126__auto__)
{var s__20339__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20339__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20339__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20341 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20340 = (0);while(true){
if((i__20340 < size__4376__auto__))
{var d = cljs.core._nth.call(null,c__4375__auto__,i__20340);cljs.core.chunk_append.call(null,b__20341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null));
{
var G__20380 = (i__20340 + (1));
i__20340 = G__20380;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20341),iter__20338.call(null,cljs.core.chunk_rest.call(null,s__20339__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20341),null);
}
} else
{var d = cljs.core.first.call(null,s__20339__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d)], null),iter__20338.call(null,cljs.core.rest.call(null,s__20339__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,ds);
})], null)], null)], null),new cljs.core.Keyword(null,"record","record",-779106859),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),clustermap.api.company_search,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (r){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(r)], null)], null);
}),new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),null,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),(function (r){clustermap.core.make_company_selection.call(null,new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(r));
return clustermap.app.navigate.call(null,cljs.core.deref.call(null,clustermap.core.app_instance),"company");
})], null),new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"fill-report-button","fill-report-button",-2098144961),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"variables","variables",1563680814),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"?counter","?counter",-1780233491),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032),new cljs.core.Keyword(null,"label","label",1718410804),"Companies",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return clustermap.formats.number.mixed.call(null,v);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Total turnover",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return clustermap.formats.number.mixed.call(null,v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"curr","curr",-1092372808),"\u00A3"], null));
})], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_turnover_delta","!latest_turnover_delta",426854981),new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Turnover change",new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (btv,v){return ((100) * (v / btv));
}),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.core.sign_icon.call(null,v),clustermap.formats.number.mixed.call(null,v),"%"], null);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Total employees",new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return clustermap.formats.number.mixed.call(null,v);
})], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"!latest_employee_count_delta","!latest_employee_count_delta",-328358407),new cljs.core.Keyword(null,"belongs-to","belongs-to",-872005948),new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938),new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"label","label",1718410804),"Employment change",new cljs.core.Keyword(null,"value-fn","value-fn",544624790),(function (btv,v){return ((100) * (v / btv));
}),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),(function (v){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stat-change","div.stat-change",-1654405476),clustermap.core.sign_icon.call(null,v),clustermap.formats.number.mixed.call(null,v),"%"], null);
})], null)], null)], null)], null),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),null], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),"?tags",new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864),"tag",new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"broad_12_sectors"], null)], null),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548),"!latest_turnover"], null),new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"title","title",636505583),"Total turnover (\u00A3)",new cljs.core.Keyword(null,"label-formatter","label-formatter",328763955),(function (){var this$ = this;return clustermap.formats.number.mixed.call(null,this$.value);
})], null)], null),new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),(20),new cljs.core.Keyword(null,"bar-color","bar-color",-208849612),"#28828a",new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"broad_12_sectors",new cljs.core.Keyword(null,"tag-data","tag-data",1007525109),null,new cljs.core.Keyword(null,"tag-agg-data","tag-agg-data",431166949),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"companies","companies",-447793417),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reverse_nested","reverse_nested",-218199250),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"aggs","aggs",-442886220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),"?natural_id"], null)], null)], null)], null)], null),"#28828a","companies",(function (v){return clustermap.formats.number.fnum.call(null,v);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"employee_count",new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"l",new cljs.core.Keyword(null,"from","from",1815293044),(0),new cljs.core.Keyword(null,"to","to",192099007),(5)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"5",new cljs.core.Keyword(null,"from","from",1815293044),(5),new cljs.core.Keyword(null,"to","to",192099007),(10)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"10",new cljs.core.Keyword(null,"from","from",1815293044),(10),new cljs.core.Keyword(null,"to","to",192099007),(20)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"20",new cljs.core.Keyword(null,"from","from",1815293044),(20),new cljs.core.Keyword(null,"to","to",192099007),(50)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"50",new cljs.core.Keyword(null,"from","from",1815293044),(50),new cljs.core.Keyword(null,"to","to",192099007),(100)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"100",new cljs.core.Keyword(null,"from","from",1815293044),(100),new cljs.core.Keyword(null,"to","to",192099007),(250)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"250",new cljs.core.Keyword(null,"from","from",1815293044),(250),new cljs.core.Keyword(null,"to","to",192099007),(500)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"500",new cljs.core.Keyword(null,"from","from",1815293044),(500),new cljs.core.Keyword(null,"to","to",192099007),(2500)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"2500",new cljs.core.Keyword(null,"from","from",1815293044),(2500)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"2013",new cljs.core.Keyword(null,"label","label",1718410804),"2013"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"l",new cljs.core.Keyword(null,"label","label",1718410804),"1-4"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"5",new cljs.core.Keyword(null,"label","label",1718410804),"5-9"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"10",new cljs.core.Keyword(null,"label","label",1718410804),"10-19"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"20",new cljs.core.Keyword(null,"label","label",1718410804),"20-49"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"50",new cljs.core.Keyword(null,"label","label",1718410804),"50-99"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"100",new cljs.core.Keyword(null,"label","label",1718410804),"100-249"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"250",new cljs.core.Keyword(null,"label","label",1718410804),"250-499"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"500",new cljs.core.Keyword(null,"label","label",1718410804),"500-2499"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"2500",new cljs.core.Keyword(null,"label","label",1718410804),"2500 or more"], null)], null),"company",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),"?accounts"], null),new cljs.core.Keyword(null,"aggs","aggs",-442886220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),"accounts_date",new cljs.core.Keyword(null,"ranges","ranges",1887686682),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),"2013",new cljs.core.Keyword(null,"from","from",1815293044),"2013-01-01",new cljs.core.Keyword(null,"to","to",192099007),"2014-01-01"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"companies","companies",-447793417),new cljs.core.Keyword(null,"metric","metric",408798077)], null)]),new cljs.core.Keyword(null,"table-data","table-data",-1783738205),null], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundaryline","boundaryline",95022712),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"total-funding","total-funding",-1874345268),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"ds","ds",-257415859),new cljs.core.Keyword(null,"hub","hub",1977768006),new cljs.core.Keyword(null,"latest-turnover","latest-turnover",-1943662305),new cljs.core.Keyword(null,"highgrowth","highgrowth",-759844423)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.logo","h1.logo",1020109157),"Cambridge"], null)),new cljs.core.Keyword(null,"action","action",-811238024),(function (e){console.log("reset all");
e.preventDefault();
return cljs.core.reset_BANG_.call(null,clustermap.core.get_app_state_atom.call(null),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,clustermap.core.get_app_state_atom.call(null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,clustermap.core.get_app_state_atom.call(null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)], null),clustermap.filters.reset_filter.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,clustermap.core.get_app_state_atom.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)], null)))));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!turnover","!turnover",1658808771),new cljs.core.Keyword(null,"title","title",636505583),"Turnover (\u00A3)",new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword(null,"sum","sum",136986814)], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),"2014-01-01"], null),new cljs.core.Keyword(null,"color","color",1011675173),"#28828a",new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Reset view",new cljs.core.Keyword(null,"action","action",-811238024),(function (e){return cljs.core.swap_BANG_.call(null,clustermap.core.get_app_state_atom.call(null),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,clustermap.core.get_app_state_atom.call(null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542)], null)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!turnover","!turnover",1658808771),new cljs.core.Keyword(null,"title","title",636505583),"Turnover (\u00A3)"], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),clustermap.formats.time.today_str.call(null)], null),new cljs.core.Keyword(null,"color","color",1011675173),"#28828a",new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),(1)], null),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.PersistentArrayMap(null, 3, ["uk_boroughs",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_wards",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),"uk_regions",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"rtree","rtree",-82448827),null,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"geoport","geoport",534549910),new cljs.core.Keyword(null,"datasource","datasource",-246060221),"companies",new cljs.core.Keyword(null,"boundaryline-collections","boundaryline-collections",1750591980),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"cambridge_ahead"], null)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"map-options","map-options",-379251610),new cljs.core.Keyword(null,"geotag-aggs","geotag-aggs",-1861538617),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"boundaryline-collection","boundaryline-collection",853329936),new cljs.core.Keyword(null,"show-points","show-points",-480527088),new cljs.core.Keyword(null,"geohash-aggs","geohash-aggs",-2132368493),new cljs.core.Keyword(null,"boundaryline-agg","boundaryline-agg",1246510775),new cljs.core.Keyword(null,"colorchooser","colorchooser",1990432729),new cljs.core.Keyword(null,"initial-bounds","initial-bounds",-1404401542),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"boundaryline-fill-opacity","boundaryline-fill-opacity",386588575)],[null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"zoomControl","zoomControl",-2137430217),true,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true,new cljs.core.Keyword(null,"touchZoom","touchZoom",1236110738),true,new cljs.core.Keyword(null,"scrollWheelZoom","scrollWheelZoom",1775177212),false,new cljs.core.Keyword(null,"doubleClickZoom","doubleClickZoom",-1569471619),true,new cljs.core.Keyword(null,"boxZoom","boxZoom",-1994664913),true], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908),"?tags",new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864),"tag",new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"cambridge_ahead"], null)], null),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548),"?count"], null),new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"cambridge_ahead",new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031),(function (z){return (z <= (5));
}),new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307),(function (geotag_aggs){var chooser_fn = clustermap.formats.number.table_chooser_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,0.9], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"nested_attr_doc_count","nested_attr_doc_count",-1994600244),geotag_aggs));return ((function (chooser_fn){
return (function (geotag_agg){return chooser_fn.call(null,new cljs.core.Keyword(null,"nested_attr_doc_count","nested_attr_doc_count",-1994600244).cljs$core$IFn$_invoke$arity$1(geotag_agg));
});
;})(chooser_fn))
}),new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915),(function (tag,stats){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clustermap.formats.number.compact.call(null,new cljs.core.Keyword(null,"nested_attr_doc_count","nested_attr_doc_count",-1994600244).cljs$core$IFn$_invoke$arity$1(stats),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sf","sf",-1949491738),(2)], null))], null);
}),new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),(function (geotag,geotag_agg,e){var boundaryline_id = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(geotag);var ch = clustermap.boundarylines.get_or_fetch_boundaryline.call(null,clustermap.core.get_app_state_atom.call(null),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundaryline_id,ch){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundaryline_id,ch){
return (function (state_20359){var state_val_20360 = (state_20359[(1)]);if((state_val_20360 === (5)))
{var inst_20357 = (state_20359[(2)]);var state_20359__$1 = state_20359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20359__$1,inst_20357);
} else
{if((state_val_20360 === (4)))
{var state_20359__$1 = state_20359;var statearr_20361_20381 = state_20359__$1;(statearr_20361_20381[(2)] = null);
(statearr_20361_20381[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (3)))
{var inst_20346 = (state_20359[(7)]);var inst_20348 = cljs.core.deref.call(null,clustermap.core.app_instance);var inst_20349 = clustermap.app.get_state.call(null,inst_20348);var inst_20350 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20351 = [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"bounds","bounds",1691609455)];var inst_20352 = (new cljs.core.PersistentVector(null,3,(5),inst_20350,inst_20351,null));var inst_20353 = cljs.core.swap_BANG_.call(null,inst_20349,cljs.core.assoc_in,inst_20352,inst_20346);var inst_20354 = clustermap.core.make_boundaryline_selection.call(null,boundaryline_id);var state_20359__$1 = (function (){var statearr_20362 = state_20359;(statearr_20362[(8)] = inst_20353);
return statearr_20362;
})();var statearr_20363_20382 = state_20359__$1;(statearr_20363_20382[(2)] = inst_20354);
(statearr_20363_20382[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (2)))
{var inst_20346 = (state_20359[(7)]);var inst_20343 = (state_20359[(2)]);var inst_20344 = (inst_20343["envelope"]);var inst_20345 = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,inst_20344);var inst_20346__$1 = cljs.core.js__GT_clj.call(null,inst_20345);var state_20359__$1 = (function (){var statearr_20364 = state_20359;(statearr_20364[(7)] = inst_20346__$1);
return statearr_20364;
})();if(cljs.core.truth_(inst_20346__$1))
{var statearr_20365_20383 = state_20359__$1;(statearr_20365_20383[(1)] = (3));
} else
{var statearr_20366_20384 = state_20359__$1;(statearr_20366_20384[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20360 === (1)))
{var state_20359__$1 = state_20359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20359__$1,(2),ch);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundaryline_id,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,boundaryline_id,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_20370 = [null,null,null,null,null,null,null,null,null];(statearr_20370[(0)] = state_machine__9111__auto__);
(statearr_20370[(1)] = (1));
return statearr_20370;
});
var state_machine__9111__auto____1 = (function (state_20359){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_20359);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e20371){if((e20371 instanceof Object))
{var ex__9114__auto__ = e20371;var statearr_20372_20385 = state_20359;(statearr_20372_20385[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20359);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20371;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20386 = state_20359;
state_20359 = G__20386;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_20359){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_20359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundaryline_id,ch))
})();var state__9127__auto__ = (function (){var statearr_20373 = f__9126__auto__.call(null);(statearr_20373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_20373;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundaryline_id,ch))
);
return c__9125__auto__;
}),new cljs.core.Keyword(null,"geotag-data","geotag-data",148130976),null,new cljs.core.Keyword(null,"geotag-agg-data","geotag-agg-data",639601391),null], null),null,null,true,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),"!location"], null),new cljs.core.Keyword(null,"show-at-zoom-fn","show-at-zoom-fn",1745894031),(function (z){return (z > (5));
}),new cljs.core.Keyword(null,"precision-fn","precision-fn",1742300693),(function (z){return ((z / (2)) - 0.0);
}),new cljs.core.Keyword(null,"colorchooser-factory-fn","colorchooser-factory-fn",1503617307),(function (geohash_aggs){var chooser_fn = clustermap.formats.number.table_chooser_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,0.9], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"geohash-grid_doc_count","geohash-grid_doc_count",-2130054834),geohash_aggs));return ((function (chooser_fn){
return (function (geohash_agg){return chooser_fn.call(null,new cljs.core.Keyword(null,"geohash-grid_doc_count","geohash-grid_doc_count",-2130054834).cljs$core$IFn$_invoke$arity$1(geohash_agg));
});
;})(chooser_fn))
}),new cljs.core.Keyword(null,"icon-render-fn","icon-render-fn",-1288556915),(function (geohash_agg){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clustermap.formats.number.compact.call(null,new cljs.core.Keyword(null,"geohash-grid_doc_count","geohash-grid_doc_count",-2130054834).cljs$core$IFn$_invoke$arity$1(geohash_agg),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sf","sf",-1949491738),(2)], null))], null);
}),new cljs.core.Keyword(null,"geohash-agg-data","geohash-agg-data",-1996805620),null], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"index","index",-1531685915),"companies",new cljs.core.Keyword(null,"index-type","index-type",500383962),"company",new cljs.core.Keyword(null,"key","key",-1516042587),"boundaryline_id",new cljs.core.Keyword(null,"variable","variable",-281346492),"!latest_employee_count"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#990000"], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"boundaryline_id_doc_count","boundaryline_id_doc_count",1461854746)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [51.82,-0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [52.58,0.72], null)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cluster","cluster",535175621),false,new cljs.core.Keyword(null,"location-attr","location-attr",-1350680971),"!location",new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?natural_id","!name","!location","!latest_employee_count","!latest_turnover"], null),new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover","desc"], null),new cljs.core.PersistentArrayMap(null, 1, ["!latest_employment","desc"], null)], null),new cljs.core.Keyword(null,"marker-opts","marker-opts",-1133147105),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-turnover","display-turnover",541232720),true,new cljs.core.Keyword(null,"display-employee-count","display-employee-count",2141387142),false,new cljs.core.Keyword(null,"display-principal-name","display-principal-name",1477353605),false], null),new cljs.core.Keyword(null,"marker-render-fn","marker-render-fn",2094237716),(function (location_sites,location_spec){var display_turnover = cljs.core.get_in.call(null,location_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker-opts","marker-opts",-1133147105),new cljs.core.Keyword(null,"display-turnover","display-turnover",541232720)], null));var display_employee_count = cljs.core.get_in.call(null,location_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker-opts","marker-opts",-1133147105),new cljs.core.Keyword(null,"display-employee-count","display-employee-count",2141387142)], null));var display_principal_name = cljs.core.get_in.call(null,location_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker-opts","marker-opts",-1133147105),new cljs.core.Keyword(null,"display-principal-name","display-principal-name",1477353605)], null));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs20374 = (((cljs.core.count.call(null,location_sites) > (1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),clustermap.formats.number.compact.call(null,cljs.core.count.call(null,location_sites),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sf","sf",-1949491738),(2)], null))], null)], null):null);if(cljs.core.map_QMARK_.call(null,attrs20374))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs20374)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs20375 = (cljs.core.truth_(display_principal_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name","div.name",1027675228),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,location_sites))], null)], null):null);if(cljs.core.map_QMARK_.call(null,attrs20375))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"marker-info"], null),attrs20375)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(cljs.core.truth_(display_turnover)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minichart","div.minichart",129292452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minibar.metric-1","div.minibar.metric-1",1173525180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.formats.number.table_percent_scale.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1000000),(10000000)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),location_sites))))+"%")], null)], null)], null):null)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(cljs.core.truth_(display_employee_count)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minichart","div.minichart",129292452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minibar.metric-2","div.minibar.metric-2",-536275843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.formats.number.table_percent_scale.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(100)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589),location_sites))))+"%")], null)], null)], null):null)))+"</div>");
} else
{return ("<div class=\"marker-info\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs20375))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(cljs.core.truth_(display_turnover)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minichart","div.minichart",129292452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minibar.metric-1","div.minibar.metric-1",1173525180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.formats.number.table_percent_scale.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1000000),(10000000)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),location_sites))))+"%")], null)], null)], null):null)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(cljs.core.truth_(display_employee_count)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minichart","div.minichart",129292452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minibar.metric-2","div.minibar.metric-2",-536275843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.formats.number.table_percent_scale.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(100)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589),location_sites))))+"%")], null)], null)], null):null)))+"</div>");
}
})())+"</div>");
} else
{return ("<div>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs20374))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs20376 = (cljs.core.truth_(display_principal_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name","div.name",1027675228),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,location_sites))], null)], null):null);if(cljs.core.map_QMARK_.call(null,attrs20376))
{return ("<div"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"marker-info"], null),attrs20376)))+">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(cljs.core.truth_(display_turnover)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minichart","div.minichart",129292452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minibar.metric-1","div.minibar.metric-1",1173525180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.formats.number.table_percent_scale.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1000000),(10000000)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),location_sites))))+"%")], null)], null)], null):null)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(cljs.core.truth_(display_employee_count)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minichart","div.minichart",129292452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minibar.metric-2","div.minibar.metric-2",-536275843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.formats.number.table_percent_scale.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(100)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589),location_sites))))+"%")], null)], null)], null):null)))+"</div>");
} else
{return ("<div class=\"marker-info\">"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs20376))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(cljs.core.truth_(display_turnover)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minichart","div.minichart",129292452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minibar.metric-1","div.minibar.metric-1",1173525180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.formats.number.table_percent_scale.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1000000),(10000000)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),location_sites))))+"%")], null)], null)], null):null)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,(cljs.core.truth_(display_employee_count)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minichart","div.minichart",129292452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.minibar.metric-2","div.minibar.metric-2",-536275843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.formats.number.table_percent_scale.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(100)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589),location_sites))))+"%")], null)], null)], null):null)))+"</div>");
}
})())+"</div>");
}
})()));
}),new cljs.core.Keyword(null,"item-render-fn","item-render-fn",1029375916),(function (i){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name","div.name",1027675228),cljs.core.get.call(null,i,new cljs.core.Keyword(null,"name","name",1843675177))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.metrics","div.metrics",366955775),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.metric.metric-1","div.metric.metric-1",650386546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.name","span.name",-230739013),"Tur"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),clustermap.formats.number.compact.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(i))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.metric.metric-2","div.metric.metric-2",1989522151),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.name","span.name",-230739013),"Emp"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),clustermap.formats.number.compact.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(i))], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"item-click-fn","item-click-fn",-803336079),(function (r,e){clustermap.core.make_company_selection.call(null,new cljs.core.Keyword(null,"natural_id","natural_id",-322974786).cljs$core$IFn$_invoke$arity$1(r));
clustermap.app.navigate.call(null,cljs.core.deref.call(null,clustermap.core.app_instance),"company");
return console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CLICK",r,e], null)));
})], null),0.05]),new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coll","coll",1647737163),new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),new cljs.core.Keyword(null,"label","label",1718410804),"Sector",new cljs.core.Keyword(null,"sorted","sorted",-896746253),false,new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),"broad_12_sectors",new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"construction_and_utilities",new cljs.core.Keyword(null,"label","label",1718410804),"Construction and utilities"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"education_arts_charities_social_care",new cljs.core.Keyword(null,"label","label",1718410804),"Education, arts, charities, social care"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"information_technology_and_telecoms",new cljs.core.Keyword(null,"label","label",1718410804),"Information Technology and Telecoms"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"knowledge_intensive_professional_services",new cljs.core.Keyword(null,"label","label",1718410804),"Knowledge Intensive Professional Services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"life_science_and_healthcare",new cljs.core.Keyword(null,"label","label",1718410804),"Life Science and Healthcare"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manufacturing",new cljs.core.Keyword(null,"label","label",1718410804),"Manufacturing"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"other_business_services",new cljs.core.Keyword(null,"label","label",1718410804),"Other Business Services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"personal_services",new cljs.core.Keyword(null,"label","label",1718410804),"Personal services"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"primary",new cljs.core.Keyword(null,"label","label",1718410804),"Primary"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"property_and_finance",new cljs.core.Keyword(null,"label","label",1718410804),"Property and finance"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"transport_and_travel",new cljs.core.Keyword(null,"label","label",1718410804),"Transport and travel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"wholesale_and_retail_distribution",new cljs.core.Keyword(null,"label","label",1718410804),"Wholesale and retail distribution"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"not_known",new cljs.core.Keyword(null,"label","label",1718410804),"Unknown"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"highgrowth","highgrowth",-759844423),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),new cljs.core.Keyword(null,"label","label",1718410804),"Scaleups",new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"latest",new cljs.core.Keyword(null,"label","label",1718410804),"Scaleup companies",new cljs.core.Keyword(null,"filter","filter",-948537934),clustermap.core.scaleup_filter], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"trends","trends",193200459),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),"company-accounts",new cljs.core.Keyword(null,"index-type","index-type",500383962),"accounts",new cljs.core.Keyword(null,"time-variable","time-variable",-1643449307),"?accounts_date",new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"!employee_count","!employee_count",-1454063472),new cljs.core.Keyword(null,"title","title",636505583),"Employees"], null),new cljs.core.Keyword(null,"interval","interval",1708495417),"year",new cljs.core.Keyword(null,"before","before",-1633692388),clustermap.formats.time.today_str.call(null)], null),new cljs.core.Keyword(null,"color","color",1011675173),"#28828a",new cljs.core.Keyword(null,"timeline-data","timeline-data",-163143548),null], null)]);
clustermap.core.components = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.filter.filter_component,new cljs.core.Keyword(null,"target","target",253001721),"filter-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-search","company-search",-2146533206),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.search.search_component,new cljs.core.Keyword(null,"target","target",253001721),"company-search-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-search","company-search",-2146533206)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-description","filter-description",2074900015),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.filter_description.filter_description_component,new cljs.core.Keyword(null,"target","target",253001721),"filter-description-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-description-components","dynamic-filter-description-components",-281677520)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"headline-stats","headline-stats",630690411),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map_report.map_report_component,new cljs.core.Keyword(null,"target","target",253001721),"headline-stats-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-report","map-report",-254073588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headline-stats","headline-stats",630690411)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.map.map_component,new cljs.core.Keyword(null,"target","target",253001721),"map-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-state","map-state",-1227493550),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-close","company-close",-1678145918),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.nav_button.nav_button_component,new cljs.core.Keyword(null,"target","target",253001721),"company-close",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-close","company-close",-1678145918)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reset-map-view","reset-map-view",2044975955),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.action_button.action_button_component,new cljs.core.Keyword(null,"target","target",253001721),"reset-map-view-button-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-map-view","reset-map-view",2044975955)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reset-all","reset-all",315619250),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.action_link.action_link_component,new cljs.core.Keyword(null,"target","target",253001721),"reset-all-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-link","action-link",1595094845),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-all","reset-all",315619250)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"display-minichart-turnover","display-minichart-turnover",-31361958),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.checkbox_boolean.checkbox_boolean_component,new cljs.core.Keyword(null,"display-turnover","display-turnover",541232720)),new cljs.core.Keyword(null,"target","target",253001721),"display-minichart-turnover-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"marker-opts","marker-opts",-1133147105)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"display-minichart-employee-count","display-minichart-employee-count",-1884741939),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.checkbox_boolean.checkbox_boolean_component,new cljs.core.Keyword(null,"display-employee-count","display-employee-count",2141387142)),new cljs.core.Keyword(null,"target","target",253001721),"display-minichart-employee-count-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"marker-opts","marker-opts",-1133147105)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"display-principal-name","display-principal-name",1477353605),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.checkbox_boolean.checkbox_boolean_component,new cljs.core.Keyword(null,"display-principal-name","display-principal-name",1477353605)),new cljs.core.Keyword(null,"target","target",253001721),"display-principal-name-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"marker-opts","marker-opts",-1133147105)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sector-histogram-var-select","sector-histogram-var-select",509957660),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Variable",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"!latest_turnover",new cljs.core.Keyword(null,"label","label",1718410804),"Total turnover (\u00A3)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"!latest_employee_count",new cljs.core.Keyword(null,"label","label",1718410804),"Total employees"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"?counter",new cljs.core.Keyword(null,"label","label",1718410804),"Number of companies"], null)], null),(function() {
var G__20387 = null;
var G__20387__1 = (function (cursor){return cljs.core.get_in.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548)], null));
});
var G__20387__2 = (function (cursor,record){om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(record));
return om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metrics","metrics",394093469),(0),new cljs.core.Keyword(null,"title","title",636505583)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(record));
});
G__20387 = function(cursor,record){
switch(arguments.length){
case 1:
return G__20387__1.call(this,cursor);
case 2:
return G__20387__2.call(this,cursor,record);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20387.cljs$core$IFn$_invoke$arity$1 = G__20387__1;
G__20387.cljs$core$IFn$_invoke$arity$2 = G__20387__2;
return G__20387;
})()
),new cljs.core.Keyword(null,"target","target",253001721),"sector-histogram-var-select-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.tag_histogram.tag_histogram,new cljs.core.Keyword(null,"target","target",253001721),"sector-histogram-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag-histogram","tag-histogram",37903269),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sector-histogram","sector-histogram",-465160691)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.table.table_component,new cljs.core.Keyword(null,"target","target",253001721),"table-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"trends-timeline","trends-timeline",909305491),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.timeline_chart.timeline_chart,new cljs.core.Keyword(null,"target","target",253001721),"trends-timeline-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline-chart","timeline-chart",494939956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trends-timeline","trends-timeline",909305491)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"trends-timeline-var-select","trends-timeline-var-select",151865182),new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.partial.call(null,clustermap.components.select_chooser.select_chooser_component,"Variable",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"!turnover","!turnover",1658808771),new cljs.core.Keyword(null,"label","label",1718410804),"Turnover (\u00A3)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"!employee_count","!employee_count",-1454063472),new cljs.core.Keyword(null,"label","label",1718410804),"Employees"], null)], null),(function() {
var G__20388 = null;
var G__20388__1 = (function (cursor){return cljs.core.get_in.call(null,cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.Keyword(null,"variable","variable",-281346492)], null));
});
var G__20388__2 = (function (cursor,record){om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.Keyword(null,"variable","variable",-281346492)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(record));
return om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.Keyword(null,"title","title",636505583)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(record));
});
G__20388 = function(cursor,record){
switch(arguments.length){
case 1:
return G__20388__1.call(this,cursor);
case 2:
return G__20388__2.call(this,cursor,record);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20388.cljs$core$IFn$_invoke$arity$1 = G__20388__1;
G__20388.cljs$core$IFn$_invoke$arity$2 = G__20388__2;
return G__20388;
})()
),new cljs.core.Keyword(null,"target","target",253001721),"trends-timeline-var-select-component",new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trends-timeline","trends-timeline",909305491)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"revenue-bands-chart","revenue-bands-chart",-2114746014),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.ranges_chart.ranges_chart_component,new cljs.core.Keyword(null,"target","target",253001721),"revenue-bands-chart-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revenue-bands","revenue-bands",-33104862)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"employment-bands-chart","employment-bands-chart",-1578612584),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.ranges_chart.ranges_chart_component,new cljs.core.Keyword(null,"target","target",253001721),"employment-bands-chart-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-state","table-state",-1662785974),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"employment-bands","employment-bands",-829969104)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic-filter-spec","dynamic-filter-spec",-46238338),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-name","company-name",1213910953),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.text.text_component,new cljs.core.Keyword(null,"target","target",253001721),"company-name-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-info","company-info",-854288729),new cljs.core.Keyword(null,"record","record",-779106859)], null),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-name","company-name",1213910953)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"company-info","company-info",-854288729),new cljs.core.Keyword(null,"f","f",-1597136552),clustermap.components.company_info.company_info_component,new cljs.core.Keyword(null,"target","target",253001721),"company-info-component",new cljs.core.Keyword(null,"paths","paths",-1807389588),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-info","company-info",-854288729)], null),new cljs.core.Keyword(null,"turnover-timeline","turnover-timeline",905445027),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-turnover-timeline","company-turnover-timeline",-996483945)], null),new cljs.core.Keyword(null,"employment-timeline","employment-timeline",1129470418),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"company-employment-timeline","company-employment-timeline",1293857343)], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection-filter-spec","selection-filter-spec",898605089),new cljs.core.Keyword(null,"composed","composed",-1510693384),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)], null)], null);
clustermap.core.bl_collections = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["uk_counties"], null);
clustermap.core.load_boundaryline_collection_indexes = (function load_boundaryline_collection_indexes(state){var seq__20393 = cljs.core.seq.call(null,clustermap.core.bl_collections);var chunk__20394 = null;var count__20395 = (0);var i__20396 = (0);while(true){
if((i__20396 < count__20395))
{var blcoll = cljs.core._nth.call(null,chunk__20394,i__20396);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__20397 = seq__20393;
var G__20398 = chunk__20394;
var G__20399 = count__20395;
var G__20400 = (i__20396 + (1));
seq__20393 = G__20397;
chunk__20394 = G__20398;
count__20395 = G__20399;
i__20396 = G__20400;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20393);if(temp__4126__auto__)
{var seq__20393__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20393__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__20393__$1);{
var G__20401 = cljs.core.chunk_rest.call(null,seq__20393__$1);
var G__20402 = c__4408__auto__;
var G__20403 = cljs.core.count.call(null,c__4408__auto__);
var G__20404 = (0);
seq__20393 = G__20401;
chunk__20394 = G__20402;
count__20395 = G__20403;
i__20396 = G__20404;
continue;
}
} else
{var blcoll = cljs.core.first.call(null,seq__20393__$1);clustermap.boundarylines.fetch_boundaryline_collection_index.call(null,state,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),blcoll);
{
var G__20405 = cljs.core.next.call(null,seq__20393__$1);
var G__20406 = null;
var G__20407 = (0);
var G__20408 = (0);
seq__20393 = G__20405;
chunk__20394 = G__20406;
count__20395 = G__20407;
i__20396 = G__20408;
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
clustermap.core.create_app_service = (function create_app_service(){var event_handlers = cljs.core.atom.call(null,null);if(typeof clustermap.core.t20412 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.core.t20412 = (function (event_handlers,create_app_service,meta20413){
this.event_handlers = event_handlers;
this.create_app_service = create_app_service;
this.meta20413 = meta20413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.core.t20412.cljs$lang$type = true;
clustermap.core.t20412.cljs$lang$ctorStr = "clustermap.core/t20412";
clustermap.core.t20412.cljs$lang$ctorPrWriter = ((function (event_handlers){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.core/t20412");
});})(event_handlers))
;
clustermap.core.t20412.prototype.clustermap$app$IAppService$ = true;
clustermap.core.t20412.prototype.clustermap$app$IAppService$init$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;clustermap.core.load_boundaryline_collection_indexes.call(null,clustermap.app.get_state.call(null,app));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fetch-boundarylines-fn","fetch-boundarylines-fn",1291845393),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundarylines,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"get-cached-boundaryline-fn","get-cached-boundaryline-fn",-1176244331),cljs.core.partial.call(null,clustermap.boundarylines.get_cached_boundaryline,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)),new cljs.core.Keyword(null,"point-in-boundarylines-fn","point-in-boundarylines-fn",-1836497614),cljs.core.partial.call(null,clustermap.boundarylines.point_in_boundarylines,clustermap.app.get_state.call(null,app),new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),new cljs.core.Keyword(null,"uk_boroughs","uk_boroughs",800727440)),new cljs.core.Keyword(null,"path-marker-click-fn","path-marker-click-fn",1610649696),clustermap.core.make_boundaryline_selection], null);
});})(event_handlers))
;
clustermap.core.t20412.prototype.clustermap$app$IAppService$destroy$arity$2 = ((function (event_handlers){
return (function (this$,app){var self__ = this;
var this$__$1 = this;return console.log("DESTROY APP!");
});})(event_handlers))
;
clustermap.core.t20412.prototype.clustermap$app$IAppService$handle_event$arity$4 = ((function (event_handlers){
return (function (this$,app,type,val){var self__ = this;
var this$__$1 = this;return null;
});})(event_handlers))
;
clustermap.core.t20412.prototype.clustermap$app$IAppService$dev_mode_QMARK_$arity$1 = ((function (event_handlers){
return (function (this$){var self__ = this;
var this$__$1 = this;return clustermap.core.dev_mode;
});})(event_handlers))
;
clustermap.core.t20412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (event_handlers){
return (function (_20414){var self__ = this;
var _20414__$1 = this;return self__.meta20413;
});})(event_handlers))
;
clustermap.core.t20412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (event_handlers){
return (function (_20414,meta20413__$1){var self__ = this;
var _20414__$1 = this;return (new clustermap.core.t20412(self__.event_handlers,self__.create_app_service,meta20413__$1));
});})(event_handlers))
;
clustermap.core.__GT_t20412 = ((function (event_handlers){
return (function __GT_t20412(event_handlers__$1,create_app_service__$1,meta20413){return (new clustermap.core.t20412(event_handlers__$1,create_app_service__$1,meta20413));
});})(event_handlers))
;
}
return (new clustermap.core.t20412(event_handlers,create_app_service,null));
});
clustermap.core.init = (function init(){return clustermap.app.start_or_restart_app.call(null,clustermap.core.app_instance,clustermap.core.initial_state,clustermap.core.components,clustermap.core.create_app_service.call(null));
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){clustermap.core.init.call(null);
return console.log("restarted");
}));
clustermap.core.init.call(null);
} else
{clustermap.core.init.call(null);

}
