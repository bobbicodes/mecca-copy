goog.provide('mecca.music');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.core');
mecca.music.mario_jump = (function mecca$music$mario_jump(){
var beat = (function (){var G__49555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49555) : re_frame.core.subscribe.call(null,G__49555));
})();
var notes = (function (){var G__49556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49556) : re_frame.core.subscribe.call(null,G__49556));
})();
var jump = (function (){var G__49557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mario-jump","mario-jump",253829289)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49557) : re_frame.core.subscribe.call(null,G__49557));
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.deref((function (){var G__49560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49560) : re_frame.core.subscribe.call(null,G__49560));
})());
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.deref(jump) === (0));
} else {
return and__4174__auto__;
}
})())){
if(((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49554_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__49554_SHARP_),(cljs.core.deref(beat) + (1)));
}),cljs.core.deref(notes))))){
var G__49561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump!","jump!",-1168155200)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49561) : re_frame.core.dispatch.call(null,G__49561));
} else {
return null;
}
} else {
return null;
}
});
mecca.music.mario_move = (function mecca$music$mario_move(){
var notes = (function (){var G__49563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49563) : re_frame.core.subscribe.call(null,G__49563));
})();
var playing_QMARK_ = cljs.core.deref((function (){var G__49564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49564) : re_frame.core.subscribe.call(null,G__49564));
})());
var now = cljs.core.deref((function (){var G__49565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49565) : re_frame.core.subscribe.call(null,G__49565));
})()).currentTime;
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49562_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__49562_SHARP_);
}),cljs.core.deref(notes)));
var started = (function (){var G__49566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49566) : re_frame.core.subscribe.call(null,G__49566));
})();
var elapsed = (now - cljs.core.deref(started));
var beat_length = ((60) / cljs.core.deref((function (){var G__49567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49567) : re_frame.core.subscribe.call(null,G__49567));
})()));
var end_time = (cljs.core.deref(started) + (beat_length * (4)));
var current_beat = (elapsed / beat_length);
var last_drawn_pos = (function (){var G__49568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-position","current-position",2031348254)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49568) : re_frame.core.subscribe.call(null,G__49568));
})();
if(cljs.core.truth_(playing_QMARK_)){
if((length < current_beat)){
var G__49569_49849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-off","play-off",2116693509)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49569_49849) : re_frame.core.dispatch.call(null,G__49569_49849));
} else {
if((cljs.core.deref(last_drawn_pos) < current_beat)){
var G__49570_49853 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-mario","move-mario",-317739908)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49570_49853) : re_frame.core.dispatch.call(null,G__49570_49853));

var G__49571_49855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"advance-position","advance-position",-23796893)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49571_49855) : re_frame.core.dispatch.call(null,G__49571_49855));
} else {
}
}
} else {
}

return mecca.music.mario_jump();
});
mecca.music.dispatch_timer_event = (function mecca$music$dispatch_timer_event(){
var G__49572_49860 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick!","tick!",68058958)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49572_49860) : re_frame.core.dispatch.call(null,G__49572_49860));

return mecca.music.mario_move();
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.do_timer !== 'undefined')){
} else {
mecca.music.do_timer = setInterval(mecca.music.dispatch_timer_event,(60));
}
mecca.music.load_sound = (function mecca$music$load_sound(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new XMLHttpRequest());
(req.responseType = "arraybuffer");

(req.onload = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(req.status,(200))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"buffer","buffer",617295198),req.response));

return cljs.core.async.close_BANG_(out);
} else {
return cljs.core.async.close_BANG_(out);
}
}));

req.open("GET",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(named_url),true);

req.send();

return out;
});
mecca.music.decode = (function mecca$music$decode(named_url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url))){
cljs.core.deref((function (){var G__49573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49573) : re_frame.core.subscribe.call(null,G__49573));
})()).decodeAudioData(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(named_url),(function (decoded_buffer){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(named_url,new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700),decoded_buffer));

return cljs.core.async.close_BANG_(out);
}),(function (){
console.error("Error loading file ",cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([named_url], 0)));

return cljs.core.async.close_BANG_(out);
}));
} else {
cljs.core.async.close_BANG_(out);
}

return out;
});
mecca.music.buffer_source = (function mecca$music$buffer_source(buffer){
var source = cljs.core.deref((function (){var G__49574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49574) : re_frame.core.subscribe.call(null,G__49574));
})()).createBufferSource();
(source.buffer = buffer);

return source;
});
mecca.music.get_and_decode = (function mecca$music$get_and_decode(named_url){
var c__30223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_49586){
var state_val_49587 = (state_49586[(1)]);
if((state_val_49587 === (1))){
var inst_49575 = mecca.music.load_sound(named_url);
var state_49586__$1 = state_49586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49586__$1,(2),inst_49575);
} else {
if((state_val_49587 === (2))){
var inst_49577 = (state_49586[(7)]);
var inst_49577__$1 = (state_49586[(2)]);
var state_49586__$1 = (function (){var statearr_49588 = state_49586;
(statearr_49588[(7)] = inst_49577__$1);

return statearr_49588;
})();
if(cljs.core.truth_(inst_49577__$1)){
var statearr_49589_49917 = state_49586__$1;
(statearr_49589_49917[(1)] = (3));

} else {
var statearr_49590_49919 = state_49586__$1;
(statearr_49590_49919[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49587 === (3))){
var inst_49577 = (state_49586[(7)]);
var inst_49579 = mecca.music.decode(inst_49577);
var state_49586__$1 = state_49586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49586__$1,(6),inst_49579);
} else {
if((state_val_49587 === (4))){
var state_49586__$1 = state_49586;
var statearr_49591_49924 = state_49586__$1;
(statearr_49591_49924[(2)] = null);

(statearr_49591_49924[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49587 === (5))){
var inst_49584 = (state_49586[(2)]);
var state_49586__$1 = state_49586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49586__$1,inst_49584);
} else {
if((state_val_49587 === (6))){
var inst_49581 = (state_49586[(2)]);
var state_49586__$1 = state_49586;
var statearr_49592_49928 = state_49586__$1;
(statearr_49592_49928[(2)] = inst_49581);

(statearr_49592_49928[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var mecca$music$get_and_decode_$_state_machine__29914__auto__ = null;
var mecca$music$get_and_decode_$_state_machine__29914__auto____0 = (function (){
var statearr_49593 = [null,null,null,null,null,null,null,null];
(statearr_49593[(0)] = mecca$music$get_and_decode_$_state_machine__29914__auto__);

(statearr_49593[(1)] = (1));

return statearr_49593;
});
var mecca$music$get_and_decode_$_state_machine__29914__auto____1 = (function (state_49586){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_49586);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e49594){if((e49594 instanceof Object)){
var ex__29917__auto__ = e49594;
var statearr_49595_49974 = state_49586;
(statearr_49595_49974[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49975 = state_49586;
state_49586 = G__49975;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
mecca$music$get_and_decode_$_state_machine__29914__auto__ = function(state_49586){
switch(arguments.length){
case 0:
return mecca$music$get_and_decode_$_state_machine__29914__auto____0.call(this);
case 1:
return mecca$music$get_and_decode_$_state_machine__29914__auto____1.call(this,state_49586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$get_and_decode_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$get_and_decode_$_state_machine__29914__auto____0;
mecca$music$get_and_decode_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$get_and_decode_$_state_machine__29914__auto____1;
return mecca$music$get_and_decode_$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_49596 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_49596[(6)] = c__30223__auto__);

return statearr_49596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));

return c__30223__auto__;
});
mecca.music.zero_pad = (function mecca$music$zero_pad(n){
if((n < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return n;
}
});
mecca.music.measures = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49597_SHARP_){
return ["tub-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.zero_pad(p1__49597_SHARP_))].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(21)));
mecca.music.sax = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49598_SHARP_){
return ["sax-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mecca.music.zero_pad(p1__49598_SHARP_))].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(14)));
mecca.music.load_samples = (function mecca$music$load_samples(){
var c__30223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_49629){
var state_val_49630 = (state_49629[(1)]);
if((state_val_49630 === (1))){
var inst_49599 = cljs.core.PersistentHashMap.EMPTY;
var inst_49600 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(19));
var inst_49601 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.measures,inst_49600);
var inst_49602 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(mecca.music.sax,inst_49601);
var inst_49603 = inst_49599;
var inst_49604 = inst_49602;
var state_49629__$1 = (function (){var statearr_49631 = state_49629;
(statearr_49631[(7)] = inst_49604);

(statearr_49631[(8)] = inst_49603);

return statearr_49631;
})();
var statearr_49632_49977 = state_49629__$1;
(statearr_49632_49977[(2)] = null);

(statearr_49632_49977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49630 === (2))){
var inst_49604 = (state_49629[(7)]);
var inst_49606 = cljs.core.first(inst_49604);
var inst_49607 = (inst_49606 == null);
var inst_49608 = cljs.core.not(inst_49607);
var state_49629__$1 = state_49629;
if(inst_49608){
var statearr_49633_49978 = state_49629__$1;
(statearr_49633_49978[(1)] = (4));

} else {
var statearr_49634_49979 = state_49629__$1;
(statearr_49634_49979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49630 === (3))){
var inst_49627 = (state_49629[(2)]);
var state_49629__$1 = state_49629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49629__$1,inst_49627);
} else {
if((state_val_49630 === (4))){
var inst_49610 = (state_49629[(9)]);
var inst_49604 = (state_49629[(7)]);
var inst_49610__$1 = cljs.core.first(inst_49604);
var inst_49611 = [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"sound","sound",-2127407070)];
var inst_49612 = ["/audio/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49610__$1),".wav"].join('');
var inst_49613 = [inst_49612,inst_49610__$1];
var inst_49614 = cljs.core.PersistentHashMap.fromArrays(inst_49611,inst_49613);
var inst_49615 = mecca.music.get_and_decode(inst_49614);
var state_49629__$1 = (function (){var statearr_49635 = state_49629;
(statearr_49635[(9)] = inst_49610__$1);

return statearr_49635;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49629__$1,(7),inst_49615);
} else {
if((state_val_49630 === (5))){
var inst_49603 = (state_49629[(8)]);
var state_49629__$1 = state_49629;
var statearr_49636_49980 = state_49629__$1;
(statearr_49636_49980[(2)] = inst_49603);

(statearr_49636_49980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49630 === (6))){
var inst_49625 = (state_49629[(2)]);
var state_49629__$1 = state_49629;
var statearr_49637_49981 = state_49629__$1;
(statearr_49637_49981[(2)] = inst_49625);

(statearr_49637_49981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49630 === (7))){
var inst_49610 = (state_49629[(9)]);
var inst_49604 = (state_49629[(7)]);
var inst_49603 = (state_49629[(8)]);
var inst_49617 = (state_49629[(2)]);
var inst_49618 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49610], 0));
var inst_49619 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49617], 0));
var inst_49620 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_49603,inst_49610,inst_49617);
var inst_49621 = cljs.core.rest(inst_49604);
var inst_49603__$1 = inst_49620;
var inst_49604__$1 = inst_49621;
var state_49629__$1 = (function (){var statearr_49638 = state_49629;
(statearr_49638[(10)] = inst_49619);

(statearr_49638[(11)] = inst_49618);

(statearr_49638[(7)] = inst_49604__$1);

(statearr_49638[(8)] = inst_49603__$1);

return statearr_49638;
})();
var statearr_49639_49982 = state_49629__$1;
(statearr_49639_49982[(2)] = null);

(statearr_49639_49982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var mecca$music$load_samples_$_state_machine__29914__auto__ = null;
var mecca$music$load_samples_$_state_machine__29914__auto____0 = (function (){
var statearr_49640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49640[(0)] = mecca$music$load_samples_$_state_machine__29914__auto__);

(statearr_49640[(1)] = (1));

return statearr_49640;
});
var mecca$music$load_samples_$_state_machine__29914__auto____1 = (function (state_49629){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_49629);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e49641){if((e49641 instanceof Object)){
var ex__29917__auto__ = e49641;
var statearr_49642_49983 = state_49629;
(statearr_49642_49983[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49641;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49984 = state_49629;
state_49629 = G__49984;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
mecca$music$load_samples_$_state_machine__29914__auto__ = function(state_49629){
switch(arguments.length){
case 0:
return mecca$music$load_samples_$_state_machine__29914__auto____0.call(this);
case 1:
return mecca$music$load_samples_$_state_machine__29914__auto____1.call(this,state_49629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$load_samples_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$load_samples_$_state_machine__29914__auto____0;
mecca$music$load_samples_$_state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$load_samples_$_state_machine__29914__auto____1;
return mecca$music$load_samples_$_state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_49643 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_49643[(6)] = c__30223__auto__);

return statearr_49643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));

return c__30223__auto__;
});
if((typeof mecca !== 'undefined') && (typeof mecca.music !== 'undefined') && (typeof mecca.music.loading_samples !== 'undefined')){
} else {
mecca.music.loading_samples = (function (){var c__30223__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30224__auto__ = (function (){var switch__29913__auto__ = (function (state_49653){
var state_val_49654 = (state_49653[(1)]);
if((state_val_49654 === (1))){
var inst_49644 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49645 = mecca.music.load_samples();
var state_49653__$1 = (function (){var statearr_49655 = state_49653;
(statearr_49655[(7)] = inst_49644);

return statearr_49655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49653__$1,(2),inst_49645);
} else {
if((state_val_49654 === (2))){
var inst_49644 = (state_49653[(7)]);
var inst_49647 = (state_49653[(2)]);
var inst_49648 = [new cljs.core.Keyword(null,"load-samples","load-samples",-40877701),inst_49647];
var inst_49649 = (new cljs.core.PersistentVector(null,2,(5),inst_49644,inst_49648,null));
var inst_49650 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_49649) : re_frame.core.dispatch.call(null,inst_49649));
var inst_49651 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Samples loaded"], 0));
var state_49653__$1 = (function (){var statearr_49656 = state_49653;
(statearr_49656[(8)] = inst_49650);

return statearr_49656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49653__$1,inst_49651);
} else {
return null;
}
}
});
return (function() {
var mecca$music$state_machine__29914__auto__ = null;
var mecca$music$state_machine__29914__auto____0 = (function (){
var statearr_49657 = [null,null,null,null,null,null,null,null,null];
(statearr_49657[(0)] = mecca$music$state_machine__29914__auto__);

(statearr_49657[(1)] = (1));

return statearr_49657;
});
var mecca$music$state_machine__29914__auto____1 = (function (state_49653){
while(true){
var ret_value__29915__auto__ = (function (){try{while(true){
var result__29916__auto__ = switch__29913__auto__(state_49653);
if(cljs.core.keyword_identical_QMARK_(result__29916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29916__auto__;
}
break;
}
}catch (e49658){if((e49658 instanceof Object)){
var ex__29917__auto__ = e49658;
var statearr_49659_49985 = state_49653;
(statearr_49659_49985[(5)] = ex__29917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49986 = state_49653;
state_49653 = G__49986;
continue;
} else {
return ret_value__29915__auto__;
}
break;
}
});
mecca$music$state_machine__29914__auto__ = function(state_49653){
switch(arguments.length){
case 0:
return mecca$music$state_machine__29914__auto____0.call(this);
case 1:
return mecca$music$state_machine__29914__auto____1.call(this,state_49653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mecca$music$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$0 = mecca$music$state_machine__29914__auto____0;
mecca$music$state_machine__29914__auto__.cljs$core$IFn$_invoke$arity$1 = mecca$music$state_machine__29914__auto____1;
return mecca$music$state_machine__29914__auto__;
})()
})();
var state__30225__auto__ = (function (){var statearr_49660 = (f__30224__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30224__auto__.cljs$core$IFn$_invoke$arity$0() : f__30224__auto__.call(null));
(statearr_49660[(6)] = c__30223__auto__);

return statearr_49660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30225__auto__);
}));

return c__30223__auto__;
})();
}
mecca.music.add_semitone = (function mecca$music$add_semitone(rate){
return (rate * Math.pow((2),((1) / (12))));
});
mecca.music.sub_semitone = (function mecca$music$sub_semitone(rate){
return (rate * Math.pow((2),((-1) / (12))));
});
mecca.music.inc_rate = (function mecca$music$inc_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.add_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.dec_rate = (function mecca$music$dec_rate(semis){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(mecca.music.sub_semitone,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(semis,(1)));
});
mecca.music.pitch__GT_rate = (function mecca$music$pitch__GT_rate(midi_num){
if(((66) < midi_num)){
return mecca.music.inc_rate((midi_num - (66)));
} else {
return mecca.music.dec_rate(((68) - midi_num));
}
});
mecca.music.play_note = (function mecca$music$play_note(pitch){
var context = cljs.core.deref((function (){var G__49661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49661) : re_frame.core.subscribe.call(null,G__49661));
})());
var samples = (function (){var G__49662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49662) : re_frame.core.subscribe.call(null,G__49662));
})();
var instrument = (function (){var G__49663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49663) : re_frame.core.subscribe.call(null,G__49663));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),cljs.core.deref(instrument)));
var sample_source = context.createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),context.currentTime);

sample_source.connect(context.destination);

sample_source.start();

return sample_source;
});
mecca.music.play_sample = (function mecca$music$play_sample(instrument,pitch){
var context = (function (){var G__49664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49664) : re_frame.core.subscribe.call(null,G__49664));
})();
var samples = (function (){var G__49665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49665) : re_frame.core.subscribe.call(null,G__49665));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
var compressor = cljs.core.deref(context).createDynamicsCompressor();
var analyser = cljs.core.deref(context).createAnalyser();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),cljs.core.deref(context).currentTime);

sample_source.connect(analyser);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start();

return sample_source;
});
mecca.music.play_at = (function mecca$music$play_at(instrument,pitch,time){
var context = (function (){var G__49666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49666) : re_frame.core.subscribe.call(null,G__49666));
})();
var samples = (function (){var G__49667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49667) : re_frame.core.subscribe.call(null,G__49667));
})();
var audio_buffer = new cljs.core.Keyword(null,"decoded-buffer","decoded-buffer",598746700).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(samples),instrument));
var sample_source = cljs.core.deref(context).createBufferSource();
(sample_source.buffer = audio_buffer);

sample_source.playbackRate.setValueAtTime(mecca.music.pitch__GT_rate(pitch),time);

sample_source.connect(cljs.core.deref(context).destination);

sample_source.start(time);

return sample_source;
});
mecca.music.delay_note = (function mecca$music$delay_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__49668_SHARP_){
return (beats + p1__49668_SHARP_);
}));
});
mecca.music.advance_note = (function mecca$music$advance_note(beats,note){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(note,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__49669_SHARP_){
return (p1__49669_SHARP_ - beats);
}));
});
mecca.music.queue_section = (function mecca$music$queue_section(from,to){
var notes = (function (){var G__49672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49672) : re_frame.core.subscribe.call(null,G__49672));
})();
var started = (function (){var G__49673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"play-start","play-start",-898241782)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49673) : re_frame.core.subscribe.call(null,G__49673));
})();
var tempo = (function (){var G__49674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49674) : re_frame.core.subscribe.call(null,G__49674));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49670_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__49670_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__49670_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49671_SHARP_){
return mecca.music.advance_note(from,p1__49671_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$queue_section_$_iter__49675(s__49676){
return (new cljs.core.LazySeq(null,(function (){
var s__49676__$1 = s__49676;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49676__$1);
if(temp__5735__auto__){
var s__49676__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49676__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49676__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49678 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49677 = (0);
while(true){
if((i__49677 < size__4581__auto__)){
var map__49679 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49677);
var map__49679__$1 = (((((!((map__49679 == null))))?(((((map__49679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49679):map__49679);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49679__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49679__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49679__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__49678,mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))));

var G__50007 = (i__49677 + (1));
i__49677 = G__50007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49678),mecca$music$queue_section_$_iter__49675(cljs.core.chunk_rest(s__49676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49678),null);
}
} else {
var map__49681 = cljs.core.first(s__49676__$2);
var map__49681__$1 = (((((!((map__49681 == null))))?(((((map__49681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49681):map__49681);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49681__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49681__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49681__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(cljs.core.deref(started) + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$queue_section_$_iter__49675(cljs.core.rest(s__49676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(section);
})());
});
mecca.music.play_section = (function mecca$music$play_section(from,to){
var notes = (function (){var G__49685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49685) : re_frame.core.subscribe.call(null,G__49685));
})();
var now = cljs.core.deref((function (){var G__49686 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49686) : re_frame.core.subscribe.call(null,G__49686));
})()).currentTime;
var tempo = (function (){var G__49687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49687) : re_frame.core.subscribe.call(null,G__49687));
})();
var section = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49683_SHARP_){
return (((from <= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__49683_SHARP_))) && ((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__49683_SHARP_) <= to)));
}),cljs.core.deref(notes));
var advanced = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49684_SHARP_){
return mecca.music.advance_note(from,p1__49684_SHARP_);
}),section);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_section_$_iter__49688(s__49689){
return (new cljs.core.LazySeq(null,(function (){
var s__49689__$1 = s__49689;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49689__$1);
if(temp__5735__auto__){
var s__49689__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49689__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49689__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49691 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49690 = (0);
while(true){
if((i__49690 < size__4581__auto__)){
var map__49692 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49690);
var map__49692__$1 = (((((!((map__49692 == null))))?(((((map__49692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49692):map__49692);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__49691,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__50008 = (i__49690 + (1));
i__49690 = G__50008;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49691),mecca$music$play_section_$_iter__49688(cljs.core.chunk_rest(s__49689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49691),null);
}
} else {
var map__49694 = cljs.core.first(s__49689__$2);
var map__49694__$1 = (((((!((map__49694 == null))))?(((((map__49694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49694):map__49694);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_section_$_iter__49688(cljs.core.rest(s__49689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(advanced);
})());
});
mecca.music.play_notes = (function mecca$music$play_notes(n){
var editor_start = (function (){var G__49696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49696) : re_frame.core.subscribe.call(null,G__49696));
})();
var tempo = (function (){var G__49697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49697) : re_frame.core.subscribe.call(null,G__49697));
})();
var beat_length = ((60) / cljs.core.deref((function (){var G__49698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49698) : re_frame.core.subscribe.call(null,G__49698));
})()));
var play_pos = (((cljs.core.deref(editor_start) < (4)))?cljs.core.deref(editor_start):((4) + cljs.core.deref((function (){var G__49699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49699) : re_frame.core.subscribe.call(null,G__49699));
})())));
return mecca.music.play_section((play_pos - (1)),((play_pos - (1)) + (n * 0.5)));
});
mecca.music.play_from_here = (function mecca$music$play_from_here(){
var notes = (function (){var G__49701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49701) : re_frame.core.subscribe.call(null,G__49701));
})();
var editor_start = (function (){var G__49702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-beat-start","editor-beat-start",-334408415)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49702) : re_frame.core.subscribe.call(null,G__49702));
})();
var play_pos = cljs.core.deref(editor_start);
var length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49700_SHARP_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__49700_SHARP_);
}),cljs.core.deref(notes)));
return mecca.music.play_section((play_pos - (1)),((16) + play_pos));
});
mecca.music.play_song_BANG_ = (function mecca$music$play_song_BANG_(){
var notes = (function (){var G__49703 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notes","notes",-1039600523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49703) : re_frame.core.subscribe.call(null,G__49703));
})();
var now = cljs.core.deref((function (){var G__49704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-context","audio-context",1642559898)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49704) : re_frame.core.subscribe.call(null,G__49704));
})()).currentTime;
var tempo = (function (){var G__49705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49705) : re_frame.core.subscribe.call(null,G__49705));
})();
var G__49706_50015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-position","reset-position",-804750860)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49706_50015) : re_frame.core.dispatch.call(null,G__49706_50015));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function mecca$music$play_song_BANG__$_iter__49707(s__49708){
return (new cljs.core.LazySeq(null,(function (){
var s__49708__$1 = s__49708;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49708__$1);
if(temp__5735__auto__){
var s__49708__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49708__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49708__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49710 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49709 = (0);
while(true){
if((i__49709 < size__4581__auto__)){
var map__49711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49709);
var map__49711__$1 = (((((!((map__49711 == null))))?(((((map__49711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49711):map__49711);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49711__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
cljs.core.chunk_append(b__49710,mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))));

var G__50016 = (i__49709 + (1));
i__49709 = G__50016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49710),mecca$music$play_song_BANG__$_iter__49707(cljs.core.chunk_rest(s__49708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49710),null);
}
} else {
var map__49713 = cljs.core.first(s__49708__$2);
var map__49713__$1 = (((((!((map__49713 == null))))?(((((map__49713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49713):map__49713);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49713__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49713__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var pitch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49713__$1,new cljs.core.Keyword(null,"pitch","pitch",1495126700));
return cljs.core.cons(mecca.music.play_at(instrument,pitch,(now + (((60) / cljs.core.deref(tempo)) * time))),mecca$music$play_song_BANG__$_iter__49707(cljs.core.rest(s__49708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(notes));
})());
});
mecca.music.get_bytes_BANG_ = (function mecca$music$get_bytes_BANG_(analyser,freq_data){
analyser.getByteFrequencyData(freq_data);

return freq_data;
});

//# sourceMappingURL=mecca.music.js.map
