// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21745 = p1__6064__6065__auto__;if(G__21745)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21745.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21745.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21745);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21745);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21746_SHARP_){return (cljs.core.val.call(null,p1__21746_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__21748 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21748,(0),null);var v = cljs.core.nth.call(null,vec__21748,(1),null);var p = vec__21748;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___21754 = schema.utils.use_fn_validation;var output_schema21749_21755 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21750_21756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21751_21757 = schema.core.checker.call(null,input_schema21750_21756);var output_checker21752_21758 = schema.core.checker.call(null,output_schema21749_21755);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21754,output_schema21749_21755,input_schema21750_21756,input_checker21751_21757,output_checker21752_21758){
return (function unwrap_schema_form_key(G__21753){var validate__6034__auto__ = ufv___21754.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21753], null);var temp__4126__auto___21760 = input_checker21751_21757.call(null,args__6035__auto___21759);if(cljs.core.truth_(temp__4126__auto___21760))
{var error__6036__auto___21761 = temp__4126__auto___21760;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21761)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21761,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21759,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21750_21756,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21753;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21762 = output_checker21752_21758.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21762))
{var error__6036__auto___21763 = temp__4126__auto___21762;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21763)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21763,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21749_21755,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21754,output_schema21749_21755,input_schema21750_21756,input_checker21751_21757,output_checker21752_21758))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21749_21755,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21750_21756], null)));
var ufv___21769 = schema.utils.use_fn_validation;var output_schema21764_21770 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21765_21771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21766_21772 = schema.core.checker.call(null,input_schema21765_21771);var output_checker21767_21773 = schema.core.checker.call(null,output_schema21764_21770);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21769,output_schema21764_21770,input_schema21765_21771,input_checker21766_21772,output_checker21767_21773){
return (function explicit_schema_key_map(G__21768){var validate__6034__auto__ = ufv___21769.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21774 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21768], null);var temp__4126__auto___21775 = input_checker21766_21772.call(null,args__6035__auto___21774);if(cljs.core.truth_(temp__4126__auto___21775))
{var error__6036__auto___21776 = temp__4126__auto___21775;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21776)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21776,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21774,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21765_21771,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21768;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21777 = output_checker21767_21773.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21777))
{var error__6036__auto___21778 = temp__4126__auto___21777;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21778)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21778,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21764_21770,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21769,output_schema21764_21770,input_schema21765_21771,input_checker21766_21772,output_checker21767_21773))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21764_21770,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21765_21771], null)));
var ufv___21784 = schema.utils.use_fn_validation;var output_schema21779_21785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21780_21786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21781_21787 = schema.core.checker.call(null,input_schema21780_21786);var output_checker21782_21788 = schema.core.checker.call(null,output_schema21779_21785);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21784,output_schema21779_21785,input_schema21780_21786,input_checker21781_21787,output_checker21782_21788){
return (function split_schema_keys(G__21783){var validate__6034__auto__ = ufv___21784.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21783], null);var temp__4126__auto___21790 = input_checker21781_21787.call(null,args__6035__auto___21789);if(cljs.core.truth_(temp__4126__auto___21790))
{var error__6036__auto___21791 = temp__4126__auto___21790;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21791)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21791,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21789,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21780_21786,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21783;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21792 = output_checker21782_21788.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21792))
{var error__6036__auto___21793 = temp__4126__auto___21792;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21793)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21793,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21779_21785,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21784,output_schema21779_21785,input_schema21780_21786,input_checker21781_21787,output_checker21782_21788))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21779_21785,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21780_21786], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21797){var vec__21798 = p__21797;var k = cljs.core.nth.call(null,vec__21798,(0),null);var v = cljs.core.nth.call(null,vec__21798,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21799 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21799,(0),null);var ov = cljs.core.nth.call(null,vec__21799,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__21800){
var key_project = cljs.core.first(arglist__21800);
arglist__21800 = cljs.core.next(arglist__21800);
var key_combine = cljs.core.first(arglist__21800);
arglist__21800 = cljs.core.next(arglist__21800);
var val_combine = cljs.core.first(arglist__21800);
var maps = cljs.core.rest(arglist__21800);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21808 = schema.utils.use_fn_validation;var output_schema21802_21809 = plumbing.fnk.schema.InputSchema;var input_schema21803_21810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21804_21811 = schema.core.checker.call(null,input_schema21803_21810);var output_checker21805_21812 = schema.core.checker.call(null,output_schema21802_21809);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21808,output_schema21802_21809,input_schema21803_21810,input_checker21804_21811,output_checker21805_21812){
return (function union_input_schemata(G__21806,G__21807){var validate__6034__auto__ = ufv___21808.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21806,G__21807], null);var temp__4126__auto___21814 = input_checker21804_21811.call(null,args__6035__auto___21813);if(cljs.core.truth_(temp__4126__auto___21814))
{var error__6036__auto___21815 = temp__4126__auto___21814;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21815)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21815,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21813,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21803_21810,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21806;var i2 = G__21807;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21808,output_schema21802_21809,input_schema21803_21810,input_checker21804_21811,output_checker21805_21812){
return (function (p1__21801_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21801_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21801_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21808,output_schema21802_21809,input_schema21803_21810,input_checker21804_21811,output_checker21805_21812))
,((function (validate__6034__auto__,ufv___21808,output_schema21802_21809,input_schema21803_21810,input_checker21804_21811,output_checker21805_21812){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__6034__auto__,ufv___21808,output_schema21802_21809,input_schema21803_21810,input_checker21804_21811,output_checker21805_21812))
,((function (validate__6034__auto__,ufv___21808,output_schema21802_21809,input_schema21803_21810,input_checker21804_21811,output_checker21805_21812){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21808,output_schema21802_21809,input_schema21803_21810,input_checker21804_21811,output_checker21805_21812))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21816 = output_checker21805_21812.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21816))
{var error__6036__auto___21817 = temp__4126__auto___21816;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21817)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21817,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21802_21809,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21808,output_schema21802_21809,input_schema21803_21810,input_checker21804_21811,output_checker21805_21812))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21802_21809,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21803_21810], null)));
var ufv___21823 = schema.utils.use_fn_validation;var output_schema21818_21824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21819_21825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21820_21826 = schema.core.checker.call(null,input_schema21819_21825);var output_checker21821_21827 = schema.core.checker.call(null,output_schema21818_21824);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21823,output_schema21818_21824,input_schema21819_21825,input_checker21820_21826,output_checker21821_21827){
return (function required_toplevel_keys(G__21822){var validate__6034__auto__ = ufv___21823.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21822], null);var temp__4126__auto___21829 = input_checker21820_21826.call(null,args__6035__auto___21828);if(cljs.core.truth_(temp__4126__auto___21829))
{var error__6036__auto___21830 = temp__4126__auto___21829;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21830)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21830,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21828,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21819_21825,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21822;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21823,output_schema21818_21824,input_schema21819_21825,input_checker21820_21826,output_checker21821_21827){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21823,output_schema21818_21824,input_schema21819_21825,input_checker21820_21826,output_checker21821_21827))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21831 = output_checker21821_21827.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21831))
{var error__6036__auto___21832 = temp__4126__auto___21831;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21832)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21832,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21818_21824,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21823,output_schema21818_21824,input_schema21819_21825,input_checker21820_21826,output_checker21821_21827))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21818_21824,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21819_21825], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21841(s__21842){return (new cljs.core.LazySeq(null,(function (){var s__21842__$1 = s__21842;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21842__$1);if(temp__4126__auto__)
{var s__21842__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21842__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21842__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21844 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21843 = (0);while(true){
if((i__21843 < size__4376__auto__))
{var vec__21847 = cljs.core._nth.call(null,c__4375__auto__,i__21843);var k = cljs.core.nth.call(null,vec__21847,(0),null);var v = cljs.core.nth.call(null,vec__21847,(1),null);cljs.core.chunk_append.call(null,b__21844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21849 = (i__21843 + (1));
i__21843 = G__21849;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21844),iter__21841.call(null,cljs.core.chunk_rest.call(null,s__21842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21844),null);
}
} else
{var vec__21848 = cljs.core.first.call(null,s__21842__$2);var k = cljs.core.nth.call(null,vec__21848,(0),null);var v = cljs.core.nth.call(null,vec__21848,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21841.call(null,cljs.core.rest.call(null,s__21842__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21858(s__21859){return (new cljs.core.LazySeq(null,(function (){var s__21859__$1 = s__21859;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21859__$1);if(temp__4126__auto__)
{var s__21859__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21859__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21859__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21861 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21860 = (0);while(true){
if((i__21860 < size__4376__auto__))
{var vec__21864 = cljs.core._nth.call(null,c__4375__auto__,i__21860);var k = cljs.core.nth.call(null,vec__21864,(0),null);var v = cljs.core.nth.call(null,vec__21864,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21861,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21866 = (i__21860 + (1));
i__21860 = G__21866;
continue;
}
} else
{{
var G__21867 = (i__21860 + (1));
i__21860 = G__21867;
continue;
}
}
} else
{{
var G__21868 = (i__21860 + (1));
i__21860 = G__21868;
continue;
}
}
} else
{{
var G__21869 = (i__21860 + (1));
i__21860 = G__21869;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21861),iter__21858.call(null,cljs.core.chunk_rest.call(null,s__21859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21861),null);
}
} else
{var vec__21865 = cljs.core.first.call(null,s__21859__$2);var k = cljs.core.nth.call(null,vec__21865,(0),null);var v = cljs.core.nth.call(null,vec__21865,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21858.call(null,cljs.core.rest.call(null,s__21859__$2)));
} else
{{
var G__21870 = cljs.core.rest.call(null,s__21859__$2);
s__21859__$1 = G__21870;
continue;
}
}
} else
{{
var G__21871 = cljs.core.rest.call(null,s__21859__$2);
s__21859__$1 = G__21871;
continue;
}
}
} else
{{
var G__21872 = cljs.core.rest.call(null,s__21859__$2);
s__21859__$1 = G__21872;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___21895 = schema.utils.use_fn_validation;var output_schema21873_21896 = schema.core.Any;var input_schema21874_21897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21875_21898 = schema.core.checker.call(null,input_schema21874_21897);var output_checker21876_21899 = schema.core.checker.call(null,output_schema21873_21896);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21895,output_schema21873_21896,input_schema21874_21897,input_checker21875_21898,output_checker21876_21899){
return (function compose_schemata(G__21877,G__21878){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21877,G__21878], null);var temp__4126__auto___21901 = input_checker21875_21898.call(null,args__6035__auto___21900);if(cljs.core.truth_(temp__4126__auto___21901))
{var error__6036__auto___21902 = temp__4126__auto___21901;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21902)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21902,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21900,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21874_21897,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21889 = G__21877;var vec__21891 = G__21889;var i2 = cljs.core.nth.call(null,vec__21891,(0),null);var o2 = cljs.core.nth.call(null,vec__21891,(1),null);var G__21890 = G__21878;var vec__21892 = G__21890;var i1 = cljs.core.nth.call(null,vec__21892,(0),null);var o1 = cljs.core.nth.call(null,vec__21892,(1),null);var G__21889__$1 = G__21889;var G__21890__$1 = G__21890;while(true){
var vec__21893 = G__21889__$1;var i2__$1 = cljs.core.nth.call(null,vec__21893,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21893,(1),null);var vec__21894 = G__21890__$1;var i1__$1 = cljs.core.nth.call(null,vec__21894,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21894,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21903 = output_checker21876_21899.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21903))
{var error__6036__auto___21904 = temp__4126__auto___21903;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21904)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21904,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21873_21896,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21895,output_schema21873_21896,input_schema21874_21897,input_checker21875_21898,output_checker21876_21899))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21873_21896,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21874_21897], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___21983 = schema.utils.use_fn_validation;var output_schema21905_21984 = schema.core.Any;var input_schema21906_21985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21907_21986 = schema.core.checker.call(null,input_schema21906_21985);var output_checker21908_21987 = schema.core.checker.call(null,output_schema21905_21984);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987){
return (function split_schema(G__21909,G__21910){var validate__6034__auto__ = ufv___21983.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21909,G__21910], null);var temp__4126__auto___21989 = input_checker21907_21986.call(null,args__6035__auto___21988);if(cljs.core.truth_(temp__4126__auto___21989))
{var error__6036__auto___21990 = temp__4126__auto___21989;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21990)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21990,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21988,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21906_21985,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21909;var ks = G__21910;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987){
return (function iter__21947(s__21948){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987){
return (function (){var s__21948__$1 = s__21948;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21948__$1);if(temp__4126__auto__)
{var s__21948__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21948__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21948__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21950 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21949 = (0);while(true){
if((i__21949 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21949);cljs.core.chunk_append.call(null,b__21950,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21949,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21950,s__21948__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987){
return (function iter__21967(s__21968){return (new cljs.core.LazySeq(null,((function (i__21949,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21950,s__21948__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987){
return (function (){var s__21968__$1 = s__21968;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21968__$1);if(temp__4126__auto____$1)
{var s__21968__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21968__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21968__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21970 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21969 = (0);while(true){
if((i__21969 < size__4376__auto____$1))
{var vec__21973 = cljs.core._nth.call(null,c__4375__auto____$1,i__21969);var k = cljs.core.nth.call(null,vec__21973,(0),null);var v = cljs.core.nth.call(null,vec__21973,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21991 = (i__21969 + (1));
i__21969 = G__21991;
continue;
}
} else
{{
var G__21992 = (i__21969 + (1));
i__21969 = G__21992;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21970),iter__21967.call(null,cljs.core.chunk_rest.call(null,s__21968__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21970),null);
}
} else
{var vec__21974 = cljs.core.first.call(null,s__21968__$2);var k = cljs.core.nth.call(null,vec__21974,(0),null);var v = cljs.core.nth.call(null,vec__21974,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21967.call(null,cljs.core.rest.call(null,s__21968__$2)));
} else
{{
var G__21993 = cljs.core.rest.call(null,s__21968__$2);
s__21968__$1 = G__21993;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21949,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21950,s__21948__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987))
,null,null));
});})(i__21949,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21950,s__21948__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21994 = (i__21949 + (1));
i__21949 = G__21994;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21950),iter__21947.call(null,cljs.core.chunk_rest.call(null,s__21948__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21950),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21948__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21948__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987){
return (function iter__21975(s__21976){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21948__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987){
return (function (){var s__21976__$1 = s__21976;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21976__$1);if(temp__4126__auto____$1)
{var s__21976__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21976__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21976__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21978 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21977 = (0);while(true){
if((i__21977 < size__4376__auto__))
{var vec__21981 = cljs.core._nth.call(null,c__4375__auto__,i__21977);var k = cljs.core.nth.call(null,vec__21981,(0),null);var v = cljs.core.nth.call(null,vec__21981,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21978,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21995 = (i__21977 + (1));
i__21977 = G__21995;
continue;
}
} else
{{
var G__21996 = (i__21977 + (1));
i__21977 = G__21996;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21978),iter__21975.call(null,cljs.core.chunk_rest.call(null,s__21976__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21978),null);
}
} else
{var vec__21982 = cljs.core.first.call(null,s__21976__$2);var k = cljs.core.nth.call(null,vec__21982,(0),null);var v = cljs.core.nth.call(null,vec__21982,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21975.call(null,cljs.core.rest.call(null,s__21976__$2)));
} else
{{
var G__21997 = cljs.core.rest.call(null,s__21976__$2);
s__21976__$1 = G__21997;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21948__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987))
,null,null));
});})(in_QMARK_,s__21948__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987))
;return iter__4377__auto__.call(null,s);
})()),iter__21947.call(null,cljs.core.rest.call(null,s__21948__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21998 = output_checker21908_21987.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21998))
{var error__6036__auto___21999 = temp__4126__auto___21998;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21999)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21999,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21905_21984,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21983,output_schema21905_21984,input_schema21906_21985,input_checker21907_21986,output_checker21908_21987))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21905_21984,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21906_21985], null)));
var ufv___22030 = schema.utils.use_fn_validation;var output_schema22000_22031 = plumbing.fnk.schema.GraphIOSchemata;var input_schema22001_22032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22002_22033 = schema.core.checker.call(null,input_schema22001_22032);var output_checker22003_22034 = schema.core.checker.call(null,output_schema22000_22031);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22030,output_schema22000_22031,input_schema22001_22032,input_checker22002_22033,output_checker22003_22034){
return (function sequence_schemata(G__22004,G__22005){var validate__6034__auto__ = ufv___22030.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22004,G__22005], null);var temp__4126__auto___22036 = input_checker22002_22033.call(null,args__6035__auto___22035);if(cljs.core.truth_(temp__4126__auto___22036))
{var error__6036__auto___22037 = temp__4126__auto___22036;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22037)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22037,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22035,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22001_22032,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__22021 = G__22004;var vec__22023 = G__22021;var i1 = cljs.core.nth.call(null,vec__22023,(0),null);var o1 = cljs.core.nth.call(null,vec__22023,(1),null);var G__22022 = G__22005;var vec__22024 = G__22022;var k = cljs.core.nth.call(null,vec__22024,(0),null);var vec__22025 = cljs.core.nth.call(null,vec__22024,(1),null);var i2 = cljs.core.nth.call(null,vec__22025,(0),null);var o2 = cljs.core.nth.call(null,vec__22025,(1),null);var G__22021__$1 = G__22021;var G__22022__$1 = G__22022;while(true){
var vec__22026 = G__22021__$1;var i1__$1 = cljs.core.nth.call(null,vec__22026,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22026,(1),null);var vec__22027 = G__22022__$1;var k__$1 = cljs.core.nth.call(null,vec__22027,(0),null);var vec__22028 = cljs.core.nth.call(null,vec__22027,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__22028,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22028,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__22029 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__22029,(0),null);var unused = cljs.core.nth.call(null,vec__22029,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22038 = output_checker22003_22034.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22038))
{var error__6036__auto___22039 = temp__4126__auto___22038;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22039)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22039,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22000_22031,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___22030,output_schema22000_22031,input_schema22001_22032,input_checker22002_22033,output_checker22003_22034))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema22000_22031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22001_22032], null)));
