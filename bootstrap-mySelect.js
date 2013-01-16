/* ============================================================
 * bootstrap-mySelect.js v0.1.0
 * ============================================================
 * Copyright 2013 John Brittain III (Yohn).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;

 /* mySelect PUBLIC CLASS DEFINITION
  * ============================== */

  var MySelect = function (element, options) {
    this.init(element, options)
  }
  
  MySelect.prototype = {

    constructor: MySelect

  , init: function (element, options) {
      var build = ''
        , selected
        , ele = $(element)
        , parent = ele.closest('.input-prepend, input-append')
        , b4 = ''
        , after = ''

  	this.id = this.randString(5)
        this.$element = ele
        this.options = this.getOptions(options)

      this.$element.children('option').each(function(e){
        var th = $(this)
          , htm = th.html()
        if(selected == '' || selected == null || th.is(':selected')) selected = htm
        build += "<li><a href='#' class='my-select-value' data-value='"+th.val()+"'>"+htm+"</a></li>"
      })
    
      if(parent.length > 0){
        parent.addClass('dropdown')
      } else {
        b4 = "<div class='btn-group'>"
        after = "</div>"
      }

      this.$element.after(b4+"<a class='btn dropdown-toggle "
        +this.options.style+
        "' data-toggle='dropdown' href='#'><span id='selected_"+this.id+"'>"
        +selected+
        "</span> <span class='caret'></span></a><ul class='dropdown-menu' id='"+this.id+"'>"
        +build+
        "</ul>"+after)
      this.$element.hide()
      this.listen()
    }

    // http://stackoverflow.com/questions/6967975/how-to-generate-and-append-a-random-string-using-jquery
  , randString: function(n){
      var text = ''
        , possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      for(var i=0; i < n; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      return text
    }
  
  , getOptions: function (options) {
      options = $.extend({}, $.fn['mySelect'].defaults, options, this.$element.data())
      return options
    }

  , listen: function(){
      var ele = this.$element
        , drops = $('#selected_'+this.id)

      $('#'+this.id).find('a.my-select-value').on('click', function(e){
        e.preventDefault()
        var th = $(this)
          , val = th.data('value')
        drops.html(th.html())
        ele.val(val)
        ele.trigger({type: 'changed', val:val})
      })
    }
  }

  /* mySelect PLUGIN DEFINITION
   * ======================== */

  $.fn.mySelect = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('myselect')
        , options = typeof option == 'object' && option
      if (!data) $this.data('myselect', (data = new MySelect(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.mySelect.Constructor = MySelect

  /* mySelect DATA-API
   * =============== */

  $.fn.mySelect.defaults = {
    style: 'btn-inverse'
  }

}(window.jQuery);
