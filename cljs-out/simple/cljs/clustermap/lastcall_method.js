// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.lastcall_method');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* implements last-call-wins aync api-call semantics, discarding results from
* any earlier api calls
* - in-flight-atom : an atom used to match received results to calls
* - valch : a single-value channel eventually containing one api-call result
*/
clustermap.lastcall_method.lastcall_method_impl = (function lastcall_method_impl(in_flight_atom,valch){var rx = cljs.core.async.chan.call(null);cljs.core.reset_BANG_.call(null,in_flight_atom,valch);
var c__9125__auto___28057 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___28057,rx){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___28057,rx){
return (function (state_28038){var state_val_28039 = (state_28038[(1)]);if((state_val_28039 === (8)))
{var inst_28034 = (state_28038[(2)]);var inst_28035 = cljs.core.async.close_BANG_.call(null,valch);var inst_28036 = cljs.core.async.close_BANG_.call(null,rx);var state_28038__$1 = (function (){var statearr_28040 = state_28038;(statearr_28040[(7)] = inst_28035);
(statearr_28040[(8)] = inst_28034);
return statearr_28040;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28038__$1,inst_28036);
} else
{if((state_val_28039 === (7)))
{var state_28038__$1 = state_28038;var statearr_28041_28058 = state_28038__$1;(statearr_28041_28058[(2)] = null);
(statearr_28041_28058[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28039 === (6)))
{var inst_28023 = (state_28038[(9)]);var inst_28031 = cljs.core.async.put_BANG_.call(null,rx,inst_28023);var state_28038__$1 = state_28038;var statearr_28042_28059 = state_28038__$1;(statearr_28042_28059[(2)] = inst_28031);
(statearr_28042_28059[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28039 === (5)))
{var inst_28029 = (state_28038[(2)]);var state_28038__$1 = state_28038;if(cljs.core.truth_(inst_28029))
{var statearr_28043_28060 = state_28038__$1;(statearr_28043_28060[(1)] = (6));
} else
{var statearr_28044_28061 = state_28038__$1;(statearr_28044_28061[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28039 === (4)))
{var inst_28023 = (state_28038[(9)]);var state_28038__$1 = state_28038;var statearr_28045_28062 = state_28038__$1;(statearr_28045_28062[(2)] = inst_28023);
(statearr_28045_28062[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28039 === (3)))
{var inst_28025 = cljs.core.deref.call(null,in_flight_atom);var inst_28026 = cljs.core._EQ_.call(null,inst_28025,valch);var state_28038__$1 = state_28038;var statearr_28046_28063 = state_28038__$1;(statearr_28046_28063[(2)] = inst_28026);
(statearr_28046_28063[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28039 === (2)))
{var inst_28023 = (state_28038[(9)]);var inst_28023__$1 = (state_28038[(2)]);var state_28038__$1 = (function (){var statearr_28047 = state_28038;(statearr_28047[(9)] = inst_28023__$1);
return statearr_28047;
})();if(cljs.core.truth_(inst_28023__$1))
{var statearr_28048_28064 = state_28038__$1;(statearr_28048_28064[(1)] = (3));
} else
{var statearr_28049_28065 = state_28038__$1;(statearr_28049_28065[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28039 === (1)))
{var state_28038__$1 = state_28038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28038__$1,(2),valch);
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
});})(c__9125__auto___28057,rx))
;return ((function (switch__9110__auto__,c__9125__auto___28057,rx){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28053 = [null,null,null,null,null,null,null,null,null,null];(statearr_28053[(0)] = state_machine__9111__auto__);
(statearr_28053[(1)] = (1));
return statearr_28053;
});
var state_machine__9111__auto____1 = (function (state_28038){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28038);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28054){if((e28054 instanceof Object))
{var ex__9114__auto__ = e28054;var statearr_28055_28066 = state_28038;(statearr_28055_28066[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28038);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28054;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28067 = state_28038;
state_28038 = G__28067;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28038){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___28057,rx))
})();var state__9127__auto__ = (function (){var statearr_28056 = f__9126__auto__.call(null);(statearr_28056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___28057);
return statearr_28056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___28057,rx))
);
return rx;
});
