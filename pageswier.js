/**
 * Created by zhangxu on 2016/7/19.
 */
(function ($) {
    var privateFun = function () {
        
    }
    var PageSwitch=(function () {
        function PageSwich(element,options){
            this.setting= $.extend(true, $.fn.PageSwitch.default,options||{});
            this.element=element;
        }
        PageSwich.prototype={
            init: function () {

            }
        }
        return PageSwich;
    })();
    $.fn.PageSwitch= function (options) {
        return this.each(function () {
            var me=$(this),
                instance=me.data("PageSwitch");
            if(!instance){
                instance=new PageSwitch(me,options);
                me.data("PageSwitch",instance);
            }
            if($.type(options==="string")) return instance[options]();
        });
    }
    $.fn.PageSwich.default={
        selectors:{
            sections:".sections",
            section:".section",
            page:".pages",
            active:".active"
        },
        index:0,
        easing:"ease",
        duration:500,
        loop:false,
        pagination:true,
        keyboard:true,
        direction:"vertival",
        callback:""
    }
})(jQuery);