// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.external_filter');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('plumbing.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.filters');
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31144 = schema.core.Any;var input_schema31145 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31146 = schema.core.checker.call(null,input_schema31145);var output_checker31147 = schema.core.checker.call(null,output_schema31144);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31144,input_schema31145,input_checker31146,output_checker31147){
return (function render_STAR_(G__31148){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31151 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31148], null);var temp__4126__auto___31152 = input_checker31146.call(null,args__6035__auto___31151);if(cljs.core.truth_(temp__4126__auto___31152))
{var error__6036__auto___31153 = temp__4126__auto___31152;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31153)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31153,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31151,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31145,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31148;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs31150 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31144,input_schema31145,input_checker31146,output_checker31147){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31144,input_schema31145,input_checker31146,output_checker31147))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs31150))?sablono.interpreter.attributes.call(null,attrs31150):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31150))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31150)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31154 = output_checker31147.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31154))
{var error__6036__auto___31155 = temp__4126__auto___31154;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31155)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31155,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31144,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31144,input_schema31145,input_checker31146,output_checker31147))
,schema.core.make_fn_schema.call(null,output_schema31144,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31145], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___31297 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31161 = schema.core.Any;var input_schema31162 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31159","map31159",-1933617658,null))], null);var input_checker31163 = schema.core.checker.call(null,input_schema31162);var output_checker31164 = schema.core.checker.call(null,output_schema31161);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function constructor31157(G__31165){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31165], null);var temp__4126__auto___31299 = input_checker31163.call(null,args__6035__auto___31298);if(cljs.core.truth_(temp__4126__auto___31299))
{var error__6036__auto___31300 = temp__4126__auto___31299;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31157","constructor31157",-2071561099,null),cljs.core.pr_str.call(null,error__6036__auto___31300)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31300,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31298,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31162,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31159 = G__31165;while(true){
if(cljs.core.map_QMARK_.call(null,map31159))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31159)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31159,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31160 = plumbing.fnk.schema.safe_get.call(null,map31159,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31160,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31159,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t31230 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t31230 = (function (component_spec,component_filter_rq_chan,owner,data,map31159,output_schema31161,G__31165,set_filter_for_url,filter_spec,constructor31157,input_schema31162,input_checker31163,map31160,validate__6034__auto__,output_checker31164,id,ufv__,meta31231){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.map31159 = map31159;
this.output_schema31161 = output_schema31161;
this.G__31165 = G__31165;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.constructor31157 = constructor31157;
this.input_schema31162 = input_schema31162;
this.input_checker31163 = input_checker31163;
this.map31160 = map31160;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker31164 = output_checker31164;
this.id = id;
this.ufv__ = ufv__;
this.meta31231 = meta31231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t31230.cljs$lang$type = true;
clustermap.components.filters.external_filter.t31230.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t31230";
clustermap.components.filters.external_filter.t31230.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t31230");
});})(owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
;
clustermap.components.filters.external_filter.t31230.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t31230.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
;
clustermap.components.filters.external_filter.t31230.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t31230.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
;
clustermap.components.filters.external_filter.t31230.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t31230.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function (state_31268){var state_val_31269 = (state_31268[(1)]);if((state_val_31269 === (7)))
{var inst_31259 = (state_31268[(2)]);var state_31268__$1 = state_31268;if(cljs.core.truth_(inst_31259))
{var statearr_31270_31301 = state_31268__$1;(statearr_31270_31301[(1)] = (11));
} else
{var statearr_31271_31302 = state_31268__$1;(statearr_31271_31302[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (1)))
{var state_31268__$1 = state_31268;var statearr_31272_31303 = state_31268__$1;(statearr_31272_31303[(2)] = null);
(statearr_31272_31303[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (4)))
{var inst_31235 = (state_31268[(7)]);var inst_31235__$1 = (state_31268[(2)]);var state_31268__$1 = (function (){var statearr_31273 = state_31268;(statearr_31273[(7)] = inst_31235__$1);
return statearr_31273;
})();if(cljs.core.truth_(inst_31235__$1))
{var statearr_31274_31304 = state_31268__$1;(statearr_31274_31304[(1)] = (5));
} else
{var statearr_31275_31305 = state_31268__$1;(statearr_31275_31305[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (13)))
{var inst_31264 = (state_31268[(2)]);var state_31268__$1 = state_31268;var statearr_31276_31306 = state_31268__$1;(statearr_31276_31306[(2)] = inst_31264);
(statearr_31276_31306[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (6)))
{var state_31268__$1 = state_31268;var statearr_31277_31307 = state_31268__$1;(statearr_31277_31307[(2)] = null);
(statearr_31277_31307[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (3)))
{var inst_31266 = (state_31268[(2)]);var state_31268__$1 = state_31268;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31268__$1,inst_31266);
} else
{if((state_val_31269 === (12)))
{var state_31268__$1 = state_31268;var statearr_31278_31308 = state_31268__$1;(statearr_31278_31308[(2)] = null);
(statearr_31278_31308[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (2)))
{var state_31268__$1 = state_31268;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31268__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31269 === (11)))
{var state_31268__$1 = state_31268;var statearr_31279_31309 = state_31268__$1;(statearr_31279_31309[(2)] = null);
(statearr_31279_31309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (9)))
{var inst_31241 = (state_31268[(8)]);var state_31268__$1 = state_31268;var statearr_31280_31310 = state_31268__$1;(statearr_31280_31310[(2)] = inst_31241);
(statearr_31280_31310[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (5)))
{var inst_31241 = (state_31268[(8)]);var inst_31235 = (state_31268[(7)]);var inst_31238 = cljs.core.nth.call(null,inst_31235,(0),null);var inst_31239 = cljs.core.nth.call(null,inst_31235,(1),null);var inst_31241__$1 = om.core.get_props.call(null,self__.owner);var inst_31242 = cljs.core.seq_QMARK_.call(null,inst_31241__$1);var state_31268__$1 = (function (){var statearr_31281 = state_31268;(statearr_31281[(8)] = inst_31241__$1);
(statearr_31281[(9)] = inst_31238);
(statearr_31281[(10)] = inst_31239);
return statearr_31281;
})();if(inst_31242)
{var statearr_31282_31311 = state_31268__$1;(statearr_31282_31311[(1)] = (8));
} else
{var statearr_31283_31312 = state_31268__$1;(statearr_31283_31312[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (10)))
{var inst_31235 = (state_31268[(7)]);var inst_31238 = (state_31268[(9)]);var inst_31239 = (state_31268[(10)]);var inst_31247 = (state_31268[(2)]);var inst_31248 = cljs.core.get.call(null,inst_31247,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31249 = cljs.core.get.call(null,inst_31247,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31250 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31251 = ["EXTERNAL-FILTER-RQ",self__.id,inst_31239];var inst_31252 = (new cljs.core.PersistentVector(null,3,(5),inst_31250,inst_31251,null));var inst_31253 = cljs.core.clj__GT_js.call(null,inst_31252);var inst_31254 = console.log(inst_31253);var inst_31255 = (function (){var filter_spec__$2 = inst_31249;var component_spec__$2 = inst_31248;var map__31240 = inst_31247;var rq = inst_31239;var component_id = inst_31238;var vec__31237 = inst_31235;var temp__4126__auto__ = inst_31235;return ((function (filter_spec__$2,component_spec__$2,map__31240,rq,component_id,vec__31237,temp__4126__auto__,inst_31235,inst_31238,inst_31239,inst_31247,inst_31248,inst_31249,inst_31250,inst_31251,inst_31252,inst_31253,inst_31254,state_val_31269,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__31240,rq,component_id,vec__31237,temp__4126__auto__,inst_31235,inst_31238,inst_31239,inst_31247,inst_31248,inst_31249,inst_31250,inst_31251,inst_31252,inst_31253,inst_31254,state_val_31269,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
})();var inst_31256 = self__.set_filter_for_url.call(null,inst_31239,inst_31255);var state_31268__$1 = (function (){var statearr_31284 = state_31268;(statearr_31284[(11)] = inst_31256);
(statearr_31284[(12)] = inst_31254);
return statearr_31284;
})();var statearr_31285_31313 = state_31268__$1;(statearr_31285_31313[(2)] = true);
(statearr_31285_31313[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31269 === (8)))
{var inst_31241 = (state_31268[(8)]);var inst_31244 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31241);var state_31268__$1 = state_31268;var statearr_31286_31314 = state_31268__$1;(statearr_31286_31314[(2)] = inst_31244);
(statearr_31286_31314[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31290 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31290[(0)] = state_machine__9111__auto__);
(statearr_31290[(1)] = (1));
return statearr_31290;
});
var state_machine__9111__auto____1 = (function (state_31268){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31268);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31291){if((e31291 instanceof Object))
{var ex__9114__auto__ = e31291;var statearr_31292_31315 = state_31268;(statearr_31292_31315[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31268);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31291;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31316 = state_31268;
state_31268 = G__31316;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31268){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
})();var state__9127__auto__ = (function (){var statearr_31293 = f__9126__auto__.call(null);(statearr_31293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
;
clustermap.components.filters.external_filter.t31230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function (_31232){var self__ = this;
var _31232__$1 = this;return self__.meta31231;
});})(owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
;
clustermap.components.filters.external_filter.t31230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function (_31232,meta31231__$1){var self__ = this;
var _31232__$1 = this;return (new clustermap.components.filters.external_filter.t31230(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.map31159,self__.output_schema31161,self__.G__31165,self__.set_filter_for_url,self__.filter_spec,self__.constructor31157,self__.input_schema31162,self__.input_checker31163,self__.map31160,self__.validate__6034__auto__,self__.output_checker31164,self__.id,self__.ufv__,meta31231__$1));
});})(owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
;
clustermap.components.filters.external_filter.__GT_t31230 = ((function (owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164){
return (function __GT_t31230(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,map31159__$1,output_schema31161__$1,G__31165__$1,set_filter_for_url__$1,filter_spec__$1,constructor31157__$1,input_schema31162__$1,input_checker31163__$1,map31160__$1,validate__6034__auto____$1,output_checker31164__$1,id__$1,ufv____$1,meta31231){return (new clustermap.components.filters.external_filter.t31230(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,map31159__$1,output_schema31161__$1,G__31165__$1,set_filter_for_url__$1,filter_spec__$1,constructor31157__$1,input_schema31162__$1,input_checker31163__$1,map31160__$1,validate__6034__auto____$1,output_checker31164__$1,id__$1,ufv____$1,meta31231));
});})(owner,component_filter_rq_chan,map31160,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
;
}
return (new clustermap.components.filters.external_filter.t31230(component_spec,component_filter_rq_chan,owner,data,map31159,output_schema31161,G__31165,set_filter_for_url,filter_spec,constructor31157,input_schema31162,input_checker31163,map31160,validate__6034__auto__,output_checker31164,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31317 = output_checker31164.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31317))
{var error__6036__auto___31318 = temp__4126__auto___31317;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31157","constructor31157",-2071561099,null),cljs.core.pr_str.call(null,error__6036__auto___31318)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31318,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31161,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31161,input_schema31162,input_checker31163,output_checker31164))
,schema.core.make_fn_schema.call(null,output_schema31161,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31162], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___31297){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner31156,p__31294){var vec__31296 = p__31294;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31296,(0),null);return component_fnk__7881__auto___31297.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31156,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner31156,var_args){
var p__31294 = null;if (arguments.length > 2) {
  p__31294 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner31156,p__31294);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31319){
var data__7882__auto__ = cljs.core.first(arglist__31319);
arglist__31319 = cljs.core.next(arglist__31319);
var owner31156 = cljs.core.first(arglist__31319);
var p__31294 = cljs.core.rest(arglist__31319);
return external_filter_component__delegate(data__7882__auto__,owner31156,p__31294);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___31297))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m31158){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m31158);
});
__GT_external_filter_component = function(cursor__7850__auto__,m31158){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m31158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
