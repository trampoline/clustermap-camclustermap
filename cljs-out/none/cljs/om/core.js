// Compiled by ClojureScript 0.0-2356
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;
om.core.IDisplayName = (function (){var obj33110 = {};return obj33110;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.display_name[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.display_name["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj33112 = {};return obj33112;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.init_state[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.init_state["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj33114 = {};return obj33114;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.should_update[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.should_update["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj33116 = {};return obj33116;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.will_mount[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.will_mount["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj33118 = {};return obj33118;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.did_mount[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.did_mount["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj33120 = {};return obj33120;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.will_unmount[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.will_unmount["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj33122 = {};return obj33122;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.will_update[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.will_update["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj33124 = {};return obj33124;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.did_update[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.did_update["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj33126 = {};return obj33126;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.will_receive_props[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.will_receive_props["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj33128 = {};return obj33128;
})();
om.core.render = (function render(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.render[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.render["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderProps = (function (){var obj33130 = {};return obj33130;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.render_props[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.render_props["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});
om.core.IRenderState = (function (){var obj33132 = {};return obj33132;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core.render_state[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core.render_state["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.ICheckState = (function (){var obj33134 = {};return obj33134;
})();
om.core.IOmSwap = (function (){var obj33136 = {};return obj33136;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj33138 = {};return obj33138;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._get_state[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._get_state["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._get_state[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._get_state["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj33140 = {};return obj33140;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._get_render_state[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._get_render_state["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._get_render_state[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._get_render_state["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj33142 = {};return obj33142;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj33144 = {};return obj33144;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._get_queue[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._get_queue["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj33146 = {};return obj33146;
})();
om.core._value = (function _value(x){if((function (){var and__11502__auto__ = x;if(and__11502__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__11502__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__12150__auto__ = (((x == null))?null:x);return (function (){var or__11514__auto__ = (om.core._value[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._value["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj33148 = {};return obj33148;
})();
om.core._path = (function _path(cursor){if((function (){var and__11502__auto__ = cursor;if(and__11502__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__11502__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__12150__auto__ = (((cursor == null))?null:cursor);return (function (){var or__11514__auto__ = (om.core._path[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._path["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__11502__auto__ = cursor;if(and__11502__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__11502__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__12150__auto__ = (((cursor == null))?null:cursor);return (function (){var or__11514__auto__ = (om.core._state[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._state["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj33150 = {};return obj33150;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__11502__auto__ = value;if(and__11502__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__11502__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__12150__auto__ = (((value == null))?null:value);return (function (){var or__11514__auto__ = (om.core._to_cursor[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._to_cursor["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__11502__auto__ = value;if(and__11502__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__11502__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__12150__auto__ = (((value == null))?null:value);return (function (){var or__11514__auto__ = (om.core._to_cursor[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._to_cursor["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj33152 = {};return obj33152;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__11502__auto__ = cursor;if(and__11502__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__11502__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__12150__auto__ = (((cursor == null))?null:cursor);return (function (){var or__11514__auto__ = (om.core._derive[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._derive["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){return om.core._state.call(null,cursor);
});
om.core.ITransact = (function (){var obj33154 = {};return obj33154;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__11502__auto__ = cursor;if(and__11502__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__11502__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__12150__auto__ = (((cursor == null))?null:cursor);return (function (){var or__11514__auto__ = (om.core._transact_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._transact_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj33156 = {};return obj33156;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__11502__auto__ = x;if(and__11502__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__11502__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__12150__auto__ = (((x == null))?null:x);return (function (){var or__11514__auto__ = (om.core._listen_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._listen_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__11502__auto__ = x;if(and__11502__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__12150__auto__ = (((x == null))?null:x);return (function (){var or__11514__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__11502__auto__ = x;if(and__11502__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__11502__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__12150__auto__ = (((x == null))?null:x);return (function (){var or__11514__auto__ = (om.core._notify_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._notify_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.IRootProperties = (function (){var obj33158 = {};return obj33158;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._set_property_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});
om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._remove_property_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._remove_properties_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});
om.core._get_property = (function _get_property(this$,id,p){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IRootProperties$_get_property$arity$3;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._get_property[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._get_property["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core.IRootKey = (function (){var obj33160 = {};return obj33160;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__11502__auto__ = cursor;if(and__11502__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__11502__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__12150__auto__ = (((cursor == null))?null:cursor);return (function (){var or__11514__auto__ = (om.core._root_key[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._root_key["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IAdapt = (function (){var obj33162 = {};return obj33162;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._adapt[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._adapt["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});
(om.core.IAdapt["_"] = true);
(om.core._adapt["_"] = (function (_,other){return other;
}));
om.core.adapt = (function adapt(x,other){return om.core._adapt.call(null,x,other);
});
om.core.IOmRef = (function (){var obj33164 = {};return obj33164;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._add_dep_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._remove_dep_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._refresh_deps_BANG_["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});
om.core._get_deps = (function _get_deps(this$){if((function (){var and__11502__auto__ = this$;if(and__11502__auto__)
{return this$.om$core$IOmRef$_get_deps$arity$1;
} else
{return and__11502__auto__;
}
})())
{return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else
{var x__12150__auto__ = (((this$ == null))?null:this$);return (function (){var or__11514__auto__ = (om.core._get_deps[goog.typeOf(x__12150__auto__)]);if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (om.core._get_deps["_"]);if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__33166 = state;if(G__33166)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33166.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__33166.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__33166);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__33166);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__33168 = x;if(G__33168)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33168.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__33168.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__33168);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__33168);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = c.call(null,node);
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__33170 = state;(G__33170["__om_prev_state"] = (state["__om_state"]));
(G__33170["__om_state"] = pending_state);
(G__33170["__om_pending_state"] = null);
return G__33170;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__11514__auto__ = props;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__11514__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value.call(null,ref);var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count.call(null,refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){var ref_val = om.core.value.call(null,ref);var ref_state = om.core.state.call(null,ref);var ref_path = om.core.path.call(null,ref);var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))
{if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else
{return ref;
}
} else
{return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__33172 = c;if(G__33172)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33172.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__33172.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__33172);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__33172);
}
})())
{var state_33193 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__11514__auto__ = (state_33193["__om_prev_state"]);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return (state_33193["__om_state"]);
}
})());
} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__33173 = c;if(G__33173)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33173.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__33173.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__33173);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__33173);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__33174 = cljs.core.seq.call(null,refs);var chunk__33175 = null;var count__33176 = (0);var i__33177 = (0);while(true){
if((i__33177 < count__33176))
{var ref = cljs.core._nth.call(null,chunk__33175,i__33177);om.core.unobserve.call(null,this$,ref);
{
var G__33194 = seq__33174;
var G__33195 = chunk__33175;
var G__33196 = count__33176;
var G__33197 = (i__33177 + (1));
seq__33174 = G__33194;
chunk__33175 = G__33195;
count__33176 = G__33196;
i__33177 = G__33197;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__33174);if(temp__4126__auto____$1)
{var seq__33174__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33174__$1))
{var c__12283__auto__ = cljs.core.chunk_first.call(null,seq__33174__$1);{
var G__33198 = cljs.core.chunk_rest.call(null,seq__33174__$1);
var G__33199 = c__12283__auto__;
var G__33200 = cljs.core.count.call(null,c__12283__auto__);
var G__33201 = (0);
seq__33174 = G__33198;
chunk__33175 = G__33199;
count__33176 = G__33200;
i__33177 = G__33201;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__33174__$1);om.core.unobserve.call(null,this$,ref);
{
var G__33202 = cljs.core.next.call(null,seq__33174__$1);
var G__33203 = null;
var G__33204 = (0);
var G__33205 = (0);
seq__33174 = G__33202;
chunk__33175 = G__33203;
count__33176 = G__33204;
i__33177 = G__33205;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__33178 = c;if(G__33178)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33178.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__33178.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__33178);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__33178);
}
})())
{return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__33179 = c;if(G__33179)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33179.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__33179.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__33179);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__33179);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor))))
{return true;
} else
{if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$)))
{return true;
} else
{if(cljs.core.truth_((function (){var and__11502__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));if(and__11502__auto__)
{return cljs.core.some.call(null,((function (and__11502__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__33171_SHARP_){return om.core.ref_changed_QMARK_.call(null,p1__33171_SHARP_);
});})(and__11502__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else
{return and__11502__auto__;
}
})()))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{return false;

}
}
}
}
}
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_parent_STAR_33180 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_33181 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_33182 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_33183 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_33184 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
if((function (){var G__33185 = c;if(G__33185)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33185.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__33185.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__33185);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__33185);
}
})())
{return om.core.render.call(null,c);
} else
{if((function (){var G__33186 = c;if(G__33186)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33186.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__33186.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__33186);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__33186);
}
})())
{return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else
{if((function (){var G__33187 = c;if(G__33187)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33187.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__33187.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__33187);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__33187);
}
})())
{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_33184;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_33183;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_33182;
om.core._STAR_state_STAR_ = _STAR_state_STAR_33181;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_33180;
}}),(function (next_props,next_state){var this$ = this;var c_33206 = om.core.children.call(null,this$);if((function (){var G__33188 = c_33206;if(G__33188)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33188.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__33188.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__33188);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__33188);
}
})())
{var state_33207 = this$.state;om.core.will_update.call(null,c_33206,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__11514__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__33189 = c;if(G__33189)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33189.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__33189.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__33189);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__33189);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__11514__auto__ = id;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__33190 = c;if(G__33190)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33190.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__33190.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__33190);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__33190);
}
})())
{return om.core.did_mount.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__33191 = c;if(G__33191)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33191.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__33191.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__33191);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__33191);
}
})())
{return om.core.display_name.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_33208 = om.core.children.call(null,this$);if((function (){var G__33192 = c_33208;if(G__33192)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33192.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__33192.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__33192);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__33192);
}
})())
{om.core.will_mount.call(null,c_33208);
} else
{}
return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x33210 = obj;x33210.om$core$IGetState$ = true;
x33210.om$core$IGetState$_get_state$arity$1 = ((function (x33210){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__11514__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return (state["__om_state"]);
}
});})(x33210))
;
x33210.om$core$IGetState$_get_state$arity$2 = ((function (x33210){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x33210))
;
x33210.om$core$IGetRenderState$ = true;
x33210.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x33210){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x33210))
;
x33210.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x33210){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x33210))
;
x33210.om$core$ISetState$ = true;
x33210.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x33210){
return (function (this$,val,render){var this$__$1 = this;var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__11502__auto__ = !((app_state == null));if(and__11502__auto__)
{return render;
} else
{return and__11502__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x33210))
;
x33210.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x33210){
return (function (this$,ks,val,render){var this$__$1 = this;var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
if(cljs.core.truth_((function (){var and__11502__auto__ = !((app_state == null));if(and__11502__auto__)
{return render;
} else
{return and__11502__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x33210))
;
return x33210;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){var id = (x["_rootNodeID"]);if(cljs.core.truth_(id))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null))))));
}
return id;
});
om.core.get_gstate = (function get_gstate(owner){return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate.call(null,owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__11514__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__11514__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__33211 = c;if(G__33211)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33211.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__33211.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__33211);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__33211);
}
})())?om.core.init_state.call(null,c):null));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_33220 = om.core.children.call(null,this$);if((function (){var G__33212 = c_33220;if(G__33212)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33212.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__33212.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__33212);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__33212);
}
})())
{om.core.will_mount.call(null,c_33220);
} else
{}
return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){var this$ = this;var c = om.core.children.call(null,this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__33213 = c;if(G__33213)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33213.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__33213.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__33213);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__33213);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,spath,cljs.core.dissoc);
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__33214 = cljs.core.seq.call(null,refs);var chunk__33215 = null;var count__33216 = (0);var i__33217 = (0);while(true){
if((i__33217 < count__33216))
{var ref = cljs.core._nth.call(null,chunk__33215,i__33217);om.core.unobserve.call(null,this$,ref);
{
var G__33221 = seq__33214;
var G__33222 = chunk__33215;
var G__33223 = count__33216;
var G__33224 = (i__33217 + (1));
seq__33214 = G__33221;
chunk__33215 = G__33222;
count__33216 = G__33223;
i__33217 = G__33224;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__33214);if(temp__4126__auto____$1)
{var seq__33214__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33214__$1))
{var c__12283__auto__ = cljs.core.chunk_first.call(null,seq__33214__$1);{
var G__33225 = cljs.core.chunk_rest.call(null,seq__33214__$1);
var G__33226 = c__12283__auto__;
var G__33227 = cljs.core.count.call(null,c__12283__auto__);
var G__33228 = (0);
seq__33214 = G__33225;
chunk__33215 = G__33226;
count__33216 = G__33227;
i__33217 = G__33228;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__33214__$1);om.core.unobserve.call(null,this$,ref);
{
var G__33229 = cljs.core.next.call(null,seq__33214__$1);
var G__33230 = null;
var G__33231 = (0);
var G__33232 = (0);
seq__33214 = G__33229;
chunk__33215 = G__33230;
count__33216 = G__33231;
i__33217 = G__33232;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){var this$ = this;var props_33233 = this$.props;var c_33234 = om.core.children.call(null,this$);if((function (){var G__33218 = c_33234;if(G__33218)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33218.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__33218.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__33218);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__33218);
}
})())
{var state_33235 = this$.state;om.core.will_update.call(null,c_33234,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.no_local_merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);var gstate = om.core.get_gstate.call(null,this$);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__33219 = c;if(G__33219)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33219.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__33219.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__33219);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__33219);
}
})())
{var state_33236 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__11514__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else
{return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x33238 = cljs.core.clj__GT_js.call(null,methods$);x33238.om$core$IGetState$ = true;
x33238.om$core$IGetState$_get_state$arity$1 = ((function (x33238){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);var or__11514__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x33238))
;
x33238.om$core$IGetState$_get_state$arity$2 = ((function (x33238){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x33238))
;
x33238.om$core$IGetRenderState$ = true;
x33238.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x33238){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x33238))
;
x33238.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x33238){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x33238))
;
x33238.om$core$ISetState$ = true;
x33238.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x33238){
return (function (this$,val,render){var this$__$1 = this;var gstate = om.core.get_gstate.call(null,this$__$1);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.truth_((function (){var and__11502__auto__ = !((gstate == null));if(and__11502__auto__)
{return render;
} else
{return and__11502__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else
{return null;
}
});})(x33238))
;
x33238.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x33238){
return (function (this$,ks,val,render){var this$__$1 = this;return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x33238))
;
return x33238;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){if((function (){var G__33240 = x;if(G__33240)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33240.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__33240.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__33240);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__33240);
}
})())
{return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else
{return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))))
{return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (p__33242){var vec__33243 = p__33242;var k = cljs.core.nth.call(null,vec__33243,(0),null);var v = cljs.core.nth.call(null,vec__33243,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.MapCursor.prototype.call = (function() {
var G__33244 = null;
var G__33244__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__33244__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__33244 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__33244__2.call(this,self__,k);
case 3:
return G__33244__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33244.cljs$core$IFn$_invoke$arity$2 = G__33244__2;
G__33244.cljs$core$IFn$_invoke$arity$3 = G__33244__3;
return G__33244;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args33241){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33241)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,null);
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if((n < cljs.core._count.call(null,self__.value)))
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else
{return null;
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.call = (function() {
var G__33246 = null;
var G__33246__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__33246__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__33246 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__33246__2.call(this,self__,k);
case 3:
return G__33246__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33246.cljs$core$IFn$_invoke$arity$2 = G__33246__2;
G__33246.cljs$core$IFn$_invoke$arity$3 = G__33246__3;
return G__33246;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args33245){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args33245)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x33248 = cljs.core.clone.call(null,val);x33248.cljs$core$IEquiv$ = true;
x33248.cljs$core$IEquiv$_equiv$arity$2 = ((function (x33248){
return (function (_,other){var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
});})(x33248))
;
x33248.om$core$ITransact$ = true;
x33248.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x33248){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x33248))
;
x33248.om$core$ICursor$ = true;
x33248.om$core$ICursor$_path$arity$1 = ((function (x33248){
return (function (_){var ___$1 = this;return path;
});})(x33248))
;
x33248.om$core$ICursor$_state$arity$1 = ((function (x33248){
return (function (_){var ___$1 = this;return state;
});})(x33248))
;
x33248.cljs$core$IDeref$ = true;
x33248.cljs$core$IDeref$_deref$arity$1 = ((function (x33248){
return (function (this$){var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x33248))
;
return x33248;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__33251 = val;if(G__33251)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33251.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__33251.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__33251);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__33251);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__33252 = val;if(G__33252)
{var bit__12177__auto__ = (G__33252.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__12177__auto__) || (G__33252.cljs$core$ICloneable$))
{return true;
} else
{if((!G__33252.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__33252);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__33252);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x33254 = cljs.core.clone.call(null,x);x33254.om$core$ITransact$ = true;
x33254.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x33254){
return (function (cursor,korks,f,tag){var cursor__$1 = this;om.core.commit_BANG_.call(null,cursor__$1,korks,f);
return om.core._refresh_deps_BANG_.call(null,parent);
});})(x33254))
;
x33254.om$core$ICursorDerive$ = true;
x33254.om$core$ICursorDerive$_derive$arity$4 = ((function (x33254){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x33254))
;
x33254.om$core$IAdapt$ = true;
x33254.om$core$IAdapt$_adapt$arity$2 = ((function (x33254){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x33254))
;
x33254.cljs$core$ICloneable$ = true;
x33254.cljs$core$ICloneable$_clone$arity$1 = ((function (x33254){
return (function (this$){var this$__$1 = this;return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x33254))
;
return x33254;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){if((function (){var G__33261 = cursor;if(G__33261)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33261.om$core$IOmRef$;
}
})()))
{return true;
} else
{if((!G__33261.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__33261);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__33261);
}
})())
{return cursor;
} else
{var path = om.core.path.call(null,cursor);var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);var x33262 = cljs.core.clone.call(null,cursor);x33262.om$core$ITransact$ = true;
x33262.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x33262,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;om.core.commit_BANG_.call(null,cursor__$2,korks,f);
return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x33262,path,storage))
;
x33262.om$core$IOmRef$ = true;
x33262.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x33262,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x33262,path,storage))
;
x33262.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x33262,path,storage){
return (function (_,c){var ___$1 = this;var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));if((cljs.core.count.call(null,m) === (0)))
{return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else
{return null;
}
});})(x33262,path,storage))
;
x33262.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x33262,path,storage){
return (function (_){var ___$1 = this;var seq__33263 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));var chunk__33264 = null;var count__33265 = (0);var i__33266 = (0);while(true){
if((i__33266 < count__33265))
{var c = cljs.core._nth.call(null,chunk__33264,i__33266);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__33267 = seq__33263;
var G__33268 = chunk__33264;
var G__33269 = count__33265;
var G__33270 = (i__33266 + (1));
seq__33263 = G__33267;
chunk__33264 = G__33268;
count__33265 = G__33269;
i__33266 = G__33270;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33263);if(temp__4126__auto__)
{var seq__33263__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33263__$1))
{var c__12283__auto__ = cljs.core.chunk_first.call(null,seq__33263__$1);{
var G__33271 = cljs.core.chunk_rest.call(null,seq__33263__$1);
var G__33272 = c__12283__auto__;
var G__33273 = cljs.core.count.call(null,c__12283__auto__);
var G__33274 = (0);
seq__33263 = G__33271;
chunk__33264 = G__33272;
count__33265 = G__33273;
i__33266 = G__33274;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__33263__$1);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__33275 = cljs.core.next.call(null,seq__33263__$1);
var G__33276 = null;
var G__33277 = (0);
var G__33278 = (0);
seq__33263 = G__33275;
chunk__33264 = G__33276;
count__33265 = G__33277;
i__33266 = G__33278;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x33262,path,storage))
;
x33262.om$core$IOmRef$_get_deps$arity$1 = ((function (x33262,path,storage){
return (function (_){var ___$1 = this;return cljs.core.deref.call(null,storage);
});})(x33262,path,storage))
;
x33262.om$core$ICursorDerive$ = true;
x33262.om$core$ICursorDerive$_derive$arity$4 = ((function (x33262,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x33262,path,storage))
;
return x33262;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){var state = c.state;var refs = (function (){var or__11514__auto__ = (state["__om_refs"]);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})();if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return null;
} else
{return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){var state = c.state;var refs = (state["__om_refs"]);if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else
{return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){om.core.add_ref_to_component_BANG_.call(null,c,ref);
om.core._add_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.unobserve = (function unobserve(c,ref){om.core.remove_ref_from_component_BANG_.call(null,c,ref);
om.core._remove_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){var or__11514__auto__ = state.om$render$T;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return (0);
}
});
om.core.render_all = (function render_all(state){om.core.refresh_queued = false;
var seq__33283_33287 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__33284_33288 = null;var count__33285_33289 = (0);var i__33286_33290 = (0);while(true){
if((i__33286_33290 < count__33285_33289))
{var f_33291 = cljs.core._nth.call(null,chunk__33284_33288,i__33286_33290);f_33291.call(null);
{
var G__33292 = seq__33283_33287;
var G__33293 = chunk__33284_33288;
var G__33294 = count__33285_33289;
var G__33295 = (i__33286_33290 + (1));
seq__33283_33287 = G__33292;
chunk__33284_33288 = G__33293;
count__33285_33289 = G__33294;
i__33286_33290 = G__33295;
continue;
}
} else
{var temp__4126__auto___33296 = cljs.core.seq.call(null,seq__33283_33287);if(temp__4126__auto___33296)
{var seq__33283_33297__$1 = temp__4126__auto___33296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33283_33297__$1))
{var c__12283__auto___33298 = cljs.core.chunk_first.call(null,seq__33283_33297__$1);{
var G__33299 = cljs.core.chunk_rest.call(null,seq__33283_33297__$1);
var G__33300 = c__12283__auto___33298;
var G__33301 = cljs.core.count.call(null,c__12283__auto___33298);
var G__33302 = (0);
seq__33283_33287 = G__33299;
chunk__33284_33288 = G__33300;
count__33285_33289 = G__33301;
i__33286_33290 = G__33302;
continue;
}
} else
{var f_33303 = cljs.core.first.call(null,seq__33283_33297__$1);f_33303.call(null);
{
var G__33304 = cljs.core.next.call(null,seq__33283_33297__$1);
var G__33305 = null;
var G__33306 = (0);
var G__33307 = (0);
seq__33283_33287 = G__33304;
chunk__33284_33288 = G__33305;
count__33285_33289 = G__33306;
i__33286_33290 = G__33307;
continue;
}
}
} else
{}
}
break;
}
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__11514__auto__ = (function (){var G__33314 = x;if(G__33314)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33314.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__33314.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__33314);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__33314);
}
})();if(or__11514__auto__)
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = (function (){var G__33316 = x;if(G__33316)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto____$1 = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto____$1))
{return or__11514__auto____$1;
} else
{return G__33316.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__33316.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__33316);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__33316);
}
})();if(or__11514__auto____$1)
{return or__11514__auto____$1;
} else
{var G__33317 = x;if(G__33317)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto____$2 = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto____$2))
{return or__11514__auto____$2;
} else
{return G__33317.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__33317.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__33317);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__33317);
}
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))))));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = React.createClass((function (){var or__11514__auto__ = descriptor;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__11514__auto____$1))
{return or__11514__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})()));
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_opts_QMARK_.call(null,m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))));
}
if((m == null))
{var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.call(null,f);return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){var ret = f.call(null,cursor,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else
{var map__33319 = m;var map__33319__$1 = ((cljs.core.seq_QMARK_.call(null,map__33319))?cljs.core.apply.call(null,cljs.core.hash_map,map__33319):map__33319);var opts = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var init_state = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));var state = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var key = cljs.core.get.call(null,map__33319__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;return dataf.call(null,cursor,i);
} else
{return dataf.call(null,cursor);
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348)));var shared = (function (){var or__11514__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.call(null,f,new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__33319,map__33319__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__33319,map__33319__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__33319,map__33319__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__33319,map__33319__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268)))
{return om.core.build_STAR_.call(null,f,x,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__33328 = state;if(G__33328)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33328.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__33328.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__33328);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__33328);
}
})())
{} else
{var properties_33336 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var listeners_33337 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_33338 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x33329_33339 = state;x33329_33339.om$core$IRenderQueue$ = true;
x33329_33339.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_33338);
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
x33329_33339.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_33338),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_33338,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
x33329_33339.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_33338,cljs.core.empty);
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
x33329_33339.om$core$INotify$ = true;
x33329_33339.om$core$INotify$_listen_BANG_$arity$3 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_33337,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
x33329_33339.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_33337,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
x33329_33339.om$core$INotify$_notify_BANG_$arity$3 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__33330_33340 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_33337));var chunk__33331_33341 = null;var count__33332_33342 = (0);var i__33333_33343 = (0);while(true){
if((i__33333_33343 < count__33332_33342))
{var vec__33334_33344 = cljs.core._nth.call(null,chunk__33331_33341,i__33333_33343);var __33345 = cljs.core.nth.call(null,vec__33334_33344,(0),null);var f_33346 = cljs.core.nth.call(null,vec__33334_33344,(1),null);f_33346.call(null,tx_data,root_cursor);
{
var G__33347 = seq__33330_33340;
var G__33348 = chunk__33331_33341;
var G__33349 = count__33332_33342;
var G__33350 = (i__33333_33343 + (1));
seq__33330_33340 = G__33347;
chunk__33331_33341 = G__33348;
count__33332_33342 = G__33349;
i__33333_33343 = G__33350;
continue;
}
} else
{var temp__4126__auto___33351 = cljs.core.seq.call(null,seq__33330_33340);if(temp__4126__auto___33351)
{var seq__33330_33352__$1 = temp__4126__auto___33351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33330_33352__$1))
{var c__12283__auto___33353 = cljs.core.chunk_first.call(null,seq__33330_33352__$1);{
var G__33354 = cljs.core.chunk_rest.call(null,seq__33330_33352__$1);
var G__33355 = c__12283__auto___33353;
var G__33356 = cljs.core.count.call(null,c__12283__auto___33353);
var G__33357 = (0);
seq__33330_33340 = G__33354;
chunk__33331_33341 = G__33355;
count__33332_33342 = G__33356;
i__33333_33343 = G__33357;
continue;
}
} else
{var vec__33335_33358 = cljs.core.first.call(null,seq__33330_33352__$1);var __33359 = cljs.core.nth.call(null,vec__33335_33358,(0),null);var f_33360 = cljs.core.nth.call(null,vec__33335_33358,(1),null);f_33360.call(null,tx_data,root_cursor);
{
var G__33361 = cljs.core.next.call(null,seq__33330_33352__$1);
var G__33362 = null;
var G__33363 = (0);
var G__33364 = (0);
seq__33330_33340 = G__33361;
chunk__33331_33341 = G__33362;
count__33332_33342 = G__33363;
i__33333_33343 = G__33364;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
x33329_33339.om$core$IRootProperties$ = true;
x33329_33339.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_33336,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
x33329_33339.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_33336,cljs.core.dissoc,id,k);
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
x33329_33339.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_33336,cljs.core.dissoc,id);
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
x33329_33339.om$core$IRootProperties$_get_property$arity$3 = ((function (x33329_33339,properties_33336,listeners_33337,render_queue_33338){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_33336),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x33329_33339,properties_33336,listeners_33337,render_queue_33338))
;
}
return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_.call(null,cursor))
{var x33366 = cljs.core.clone.call(null,cursor);x33366.om$core$IRootKey$ = true;
x33366.om$core$IRootKey$_root_key$arity$1 = ((function (x33366){
return (function (this$){var this$__$1 = this;return root_key;
});})(x33366))
;
x33366.om$core$IAdapt$ = true;
x33366.om$core$IAdapt$_adapt$arity$2 = ((function (x33366){
return (function (this$,other){var this$__$1 = this;return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x33366))
;
x33366.cljs$core$ICloneable$ = true;
x33366.cljs$core$ICloneable$_clone$arity$1 = ((function (x33366){
return (function (this$){var this$__$1 = this;return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x33366))
;
return x33366;
} else
{return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__33367){var map__33430 = p__33367;var map__33430__$1 = ((cljs.core.seq_QMARK_.call(null,map__33430))?cljs.core.apply.call(null,cljs.core.hash_map,map__33430):map__33430);var options = map__33430__$1;var adapt = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var descriptor = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));var instrument = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));var path = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"path","path",-188191168));var tx_listen = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));var target = cljs.core.get.call(null,map__33430__$1,new cljs.core.Keyword(null,"target","target",253001721));if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))))));
}
var roots_SINGLEQUOTE__33492 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__33492,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__33492,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__33431 = value;if(G__33431)
{var bit__12177__auto__ = (G__33431.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__12177__auto__) || (G__33431.cljs$core$IAtom$))
{return true;
} else
{if((!G__33431.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__33431);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__33431);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var adapt__$1 = (function (){var or__11514__auto__ = adapt;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var ret = cljs.core.atom.call(null,null);var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643))))
{} else
{var c_33493 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_33462 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_33463 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_33464 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_33465 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_33465;
om.core._STAR_state_STAR_ = _STAR_state_STAR_33464;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_33463;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_33462;
}})(),target);if((cljs.core.deref.call(null,ret) == null))
{cljs.core.reset_BANG_.call(null,ret,c_33493);
} else
{}
}
var queue_33494 = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue_33494))
{} else
{var seq__33466_33495 = cljs.core.seq.call(null,queue_33494);var chunk__33467_33496 = null;var count__33468_33497 = (0);var i__33469_33498 = (0);while(true){
if((i__33469_33498 < count__33468_33497))
{var c_33499 = cljs.core._nth.call(null,chunk__33467_33496,i__33469_33498);if(cljs.core.truth_(c_33499.isMounted()))
{var temp__4126__auto___33500 = (c_33499.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___33500))
{var next_props_33501 = temp__4126__auto___33500;(c_33499.props["__om_cursor"] = next_props_33501);
(c_33499.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__11514__auto__ = !((function (){var G__33471 = om.core.children.call(null,c_33499);if(G__33471)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33471.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__33471.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__33471);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__33471);
}
})());if(or__11514__auto__)
{return or__11514__auto__;
} else
{return c_33499.shouldComponentUpdate(c_33499.props,c_33499.state);
}
})()))
{c_33499.forceUpdate();
} else
{}
} else
{}
{
var G__33502 = seq__33466_33495;
var G__33503 = chunk__33467_33496;
var G__33504 = count__33468_33497;
var G__33505 = (i__33469_33498 + (1));
seq__33466_33495 = G__33502;
chunk__33467_33496 = G__33503;
count__33468_33497 = G__33504;
i__33469_33498 = G__33505;
continue;
}
} else
{var temp__4126__auto___33506 = cljs.core.seq.call(null,seq__33466_33495);if(temp__4126__auto___33506)
{var seq__33466_33507__$1 = temp__4126__auto___33506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33466_33507__$1))
{var c__12283__auto___33508 = cljs.core.chunk_first.call(null,seq__33466_33507__$1);{
var G__33509 = cljs.core.chunk_rest.call(null,seq__33466_33507__$1);
var G__33510 = c__12283__auto___33508;
var G__33511 = cljs.core.count.call(null,c__12283__auto___33508);
var G__33512 = (0);
seq__33466_33495 = G__33509;
chunk__33467_33496 = G__33510;
count__33468_33497 = G__33511;
i__33469_33498 = G__33512;
continue;
}
} else
{var c_33513 = cljs.core.first.call(null,seq__33466_33507__$1);if(cljs.core.truth_(c_33513.isMounted()))
{var temp__4126__auto___33514__$1 = (c_33513.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___33514__$1))
{var next_props_33515 = temp__4126__auto___33514__$1;(c_33513.props["__om_cursor"] = next_props_33515);
(c_33513.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__11514__auto__ = !((function (){var G__33473 = om.core.children.call(null,c_33513);if(G__33473)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33473.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__33473.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__33473);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__33473);
}
})());if(or__11514__auto__)
{return or__11514__auto__;
} else
{return c_33513.shouldComponentUpdate(c_33513.props,c_33513.state);
}
})()))
{c_33513.forceUpdate();
} else
{}
} else
{}
{
var G__33516 = cljs.core.next.call(null,seq__33466_33507__$1);
var G__33517 = null;
var G__33518 = (0);
var G__33519 = (0);
seq__33466_33495 = G__33516;
chunk__33467_33496 = G__33517;
count__33468_33497 = G__33518;
i__33469_33498 = G__33519;
continue;
}
}
} else
{}
}
break;
}
om.core._empty_queue_BANG_.call(null,state__$1);
}
var _refs_33520 = cljs.core.deref.call(null,om.core._refs);if(cljs.core.empty_QMARK_.call(null,_refs_33520))
{} else
{var seq__33474_33521 = cljs.core.seq.call(null,_refs_33520);var chunk__33475_33522 = null;var count__33476_33523 = (0);var i__33477_33524 = (0);while(true){
if((i__33477_33524 < count__33476_33523))
{var vec__33478_33525 = cljs.core._nth.call(null,chunk__33475_33522,i__33477_33524);var path_33526__$1 = cljs.core.nth.call(null,vec__33478_33525,(0),null);var cs_33527 = cljs.core.nth.call(null,vec__33478_33525,(1),null);var cs_33528__$1 = cljs.core.deref.call(null,cs_33527);var seq__33479_33529 = cljs.core.seq.call(null,cs_33528__$1);var chunk__33480_33530 = null;var count__33481_33531 = (0);var i__33482_33532 = (0);while(true){
if((i__33482_33532 < count__33481_33531))
{var vec__33483_33533 = cljs.core._nth.call(null,chunk__33480_33530,i__33482_33532);var id_33534 = cljs.core.nth.call(null,vec__33483_33533,(0),null);var c_33535 = cljs.core.nth.call(null,vec__33483_33533,(1),null);if(cljs.core.truth_(c_33535.shouldComponentUpdate(c_33535.props,c_33535.state)))
{c_33535.forceUpdate();
} else
{}
{
var G__33536 = seq__33479_33529;
var G__33537 = chunk__33480_33530;
var G__33538 = count__33481_33531;
var G__33539 = (i__33482_33532 + (1));
seq__33479_33529 = G__33536;
chunk__33480_33530 = G__33537;
count__33481_33531 = G__33538;
i__33482_33532 = G__33539;
continue;
}
} else
{var temp__4126__auto___33540 = cljs.core.seq.call(null,seq__33479_33529);if(temp__4126__auto___33540)
{var seq__33479_33541__$1 = temp__4126__auto___33540;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33479_33541__$1))
{var c__12283__auto___33542 = cljs.core.chunk_first.call(null,seq__33479_33541__$1);{
var G__33543 = cljs.core.chunk_rest.call(null,seq__33479_33541__$1);
var G__33544 = c__12283__auto___33542;
var G__33545 = cljs.core.count.call(null,c__12283__auto___33542);
var G__33546 = (0);
seq__33479_33529 = G__33543;
chunk__33480_33530 = G__33544;
count__33481_33531 = G__33545;
i__33482_33532 = G__33546;
continue;
}
} else
{var vec__33484_33547 = cljs.core.first.call(null,seq__33479_33541__$1);var id_33548 = cljs.core.nth.call(null,vec__33484_33547,(0),null);var c_33549 = cljs.core.nth.call(null,vec__33484_33547,(1),null);if(cljs.core.truth_(c_33549.shouldComponentUpdate(c_33549.props,c_33549.state)))
{c_33549.forceUpdate();
} else
{}
{
var G__33550 = cljs.core.next.call(null,seq__33479_33541__$1);
var G__33551 = null;
var G__33552 = (0);
var G__33553 = (0);
seq__33479_33529 = G__33550;
chunk__33480_33530 = G__33551;
count__33481_33531 = G__33552;
i__33482_33532 = G__33553;
continue;
}
}
} else
{}
}
break;
}
{
var G__33554 = seq__33474_33521;
var G__33555 = chunk__33475_33522;
var G__33556 = count__33476_33523;
var G__33557 = (i__33477_33524 + (1));
seq__33474_33521 = G__33554;
chunk__33475_33522 = G__33555;
count__33476_33523 = G__33556;
i__33477_33524 = G__33557;
continue;
}
} else
{var temp__4126__auto___33558 = cljs.core.seq.call(null,seq__33474_33521);if(temp__4126__auto___33558)
{var seq__33474_33559__$1 = temp__4126__auto___33558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33474_33559__$1))
{var c__12283__auto___33560 = cljs.core.chunk_first.call(null,seq__33474_33559__$1);{
var G__33561 = cljs.core.chunk_rest.call(null,seq__33474_33559__$1);
var G__33562 = c__12283__auto___33560;
var G__33563 = cljs.core.count.call(null,c__12283__auto___33560);
var G__33564 = (0);
seq__33474_33521 = G__33561;
chunk__33475_33522 = G__33562;
count__33476_33523 = G__33563;
i__33477_33524 = G__33564;
continue;
}
} else
{var vec__33485_33565 = cljs.core.first.call(null,seq__33474_33559__$1);var path_33566__$1 = cljs.core.nth.call(null,vec__33485_33565,(0),null);var cs_33567 = cljs.core.nth.call(null,vec__33485_33565,(1),null);var cs_33568__$1 = cljs.core.deref.call(null,cs_33567);var seq__33486_33569 = cljs.core.seq.call(null,cs_33568__$1);var chunk__33487_33570 = null;var count__33488_33571 = (0);var i__33489_33572 = (0);while(true){
if((i__33489_33572 < count__33488_33571))
{var vec__33490_33573 = cljs.core._nth.call(null,chunk__33487_33570,i__33489_33572);var id_33574 = cljs.core.nth.call(null,vec__33490_33573,(0),null);var c_33575 = cljs.core.nth.call(null,vec__33490_33573,(1),null);if(cljs.core.truth_(c_33575.shouldComponentUpdate(c_33575.props,c_33575.state)))
{c_33575.forceUpdate();
} else
{}
{
var G__33576 = seq__33486_33569;
var G__33577 = chunk__33487_33570;
var G__33578 = count__33488_33571;
var G__33579 = (i__33489_33572 + (1));
seq__33486_33569 = G__33576;
chunk__33487_33570 = G__33577;
count__33488_33571 = G__33578;
i__33489_33572 = G__33579;
continue;
}
} else
{var temp__4126__auto___33580__$1 = cljs.core.seq.call(null,seq__33486_33569);if(temp__4126__auto___33580__$1)
{var seq__33486_33581__$1 = temp__4126__auto___33580__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33486_33581__$1))
{var c__12283__auto___33582 = cljs.core.chunk_first.call(null,seq__33486_33581__$1);{
var G__33583 = cljs.core.chunk_rest.call(null,seq__33486_33581__$1);
var G__33584 = c__12283__auto___33582;
var G__33585 = cljs.core.count.call(null,c__12283__auto___33582);
var G__33586 = (0);
seq__33486_33569 = G__33583;
chunk__33487_33570 = G__33584;
count__33488_33571 = G__33585;
i__33489_33572 = G__33586;
continue;
}
} else
{var vec__33491_33587 = cljs.core.first.call(null,seq__33486_33581__$1);var id_33588 = cljs.core.nth.call(null,vec__33491_33587,(0),null);var c_33589 = cljs.core.nth.call(null,vec__33491_33587,(1),null);if(cljs.core.truth_(c_33589.shouldComponentUpdate(c_33589.props,c_33589.state)))
{c_33589.forceUpdate();
} else
{}
{
var G__33590 = cljs.core.next.call(null,seq__33486_33581__$1);
var G__33591 = null;
var G__33592 = (0);
var G__33593 = (0);
seq__33486_33569 = G__33590;
chunk__33487_33570 = G__33591;
count__33488_33571 = G__33592;
i__33489_33572 = G__33593;
continue;
}
}
} else
{}
}
break;
}
{
var G__33594 = cljs.core.next.call(null,seq__33474_33559__$1);
var G__33595 = null;
var G__33596 = (0);
var G__33597 = (0);
seq__33474_33521 = G__33594;
chunk__33475_33522 = G__33595;
count__33476_33523 = G__33596;
i__33477_33524 = G__33597;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);
return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n))))
{om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else
{}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
} else
{return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_.call(null,state__$1,watch_key);
cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__33430,map__33430__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null);
} else
{return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error("First argument to commit! must be a cursor"));
}
var key = (((function (){var G__33599 = cursor;if(G__33599)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__33599.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__33599.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__33599);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__33599);
}
})())?om.core._root_key.call(null,cursor):null);var app_state = om.core.state.call(null,cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = om.core.path.call(null,cursor);var rpath = cljs.core.into.call(null,cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else
{}
if(cljs.core.empty_QMARK_.call(null,rpath))
{return cljs.core.swap_BANG_.call(null,app_state,f);
} else
{return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;

//# sourceMappingURL=core.js.map