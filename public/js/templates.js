(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var has = ({}).hasOwnProperty;

  var aliases = {};

  var endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  var unalias = function(alias, loaderPath) {
    var start = 0;
    if (loaderPath) {
      if (loaderPath.indexOf('components/' === 0)) {
        start = 'components/'.length;
      }
      if (loaderPath.indexOf('/', start) > 0) {
        loaderPath = loaderPath.substring(start, loaderPath.indexOf('/', start));
      }
    }
    var result = aliases[alias + '/index.js'] || aliases[loaderPath + '/deps/' + alias + '/index.js'];
    if (result) {
      return 'components/' + result.substring(0, result.length - '.js'.length);
    }
    return alias;
  };

  var expand = (function() {
    var reg = /^\.\.?(\/|$)/;
    return function(root, name) {
      var results = [], parts, part;
      parts = (reg.test(name) ? root + '/' + name : name).split('/');
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part === '..') {
          results.pop();
        } else if (part !== '.' && part !== '') {
          results.push(part);
        }
      }
      return results.join('/');
    };
  })();
  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';
    path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  globals.require = require;
})();
require.register("index.static", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html lang=\"en\">\n  <head style=\"margin-bottom:-300px;\">\n    <!--begin-static-app-name-->\n    <title>clustermap</title>\n    <!--end-static-app-name-->\n    <!--app-name\n    <title>{{{app-name}}}</title>\n    \n    -->\n    <meta charset=\"utf-8\">\n    <!--if IEmeta(http-equiv=\"X-UA-Compatible\", content=\"IE=edge,chrome=1\")\n    -->\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0\">\n    <!--begin-static-app-name-->\n    <meta name=\"description\" content=\"clustermap\">\n    <!--end-static-app-name-->\n    <!--app-name\n    <meta name=\"description\" content=\"{{{app-name}}}\"/>\n    \n    -->\n    <meta name=\"author\" content=\"Trampoline Systems Ltd\">\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"http://api.tiles.mapbox.com/mapbox.js/v1.6.4/mapbox.css\">\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"css/app.css\">\n    <script type=\"text/javascript\" src=\"js/polyfills.js\"></script>\n    <script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-1.11.2.min.js\"></script><!--[if lte IE 7]>\n    <script type=\"text/javascript\">$(document).ready(function(){ $('html').addClass('ie7'); });</script><![endif]-->\n    <!--[if IE 8]>\n    <script type=\"text/javascript\">$(document).ready(function(){ $('html').addClass('ie8'); });</script><![endif]-->\n    <!--[if IE 9]>\n    <script type=\"text/javascript\">$(document).ready(function(){ $('html').addClass('ie9'); });</script><![endif]-->\n    <!--[if IE 10]>\n    <script type=\"text/javascript\">$(document).ready(function(){ $('html').addClass('ie10'); });</script><![endif]-->\n    <script type=\"text/javascript\">\n      $(document).ready(function(){\n        if ($('html').hasClass('ie8')) {\n          $('#browser-support').modal();\n        }\n      });\n      \n    </script>\n    <script type=\"text/javascript\" src=\"http://api.tiles.mapbox.com/mapbox.js/v1.6.4/mapbox.js\"></script>\n    <script type=\"text/javascript\" src=\"js/vendor.js\"></script>\n    <script type=\"text/javascript\" src=\"http://fb.me/react-0.9.0.js\"></script>\n    <!--begin-static-app-config-->\n    <script type=\"text/javascript\">window.config={\"api\":{\"prefix\": \"\"}}</script>\n    <!--end-static-app-config-->\n    <!--app-config\n    <script type=\"text/javascript\">window.config={{{app-config}}}</script>\n    \n    -->\n    <script>\n      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n      \n      if (window.config.ua && window.config.ua.code) {\n        ga('create', window.config.ua.code, 'auto');\n        ga('send', 'pageview');\n      }\n      \n    </script>\n  </head>\n  <body>\n    <div class=\"grd grdh\">\n      <div class=\"grdr\">\n        <div class=\"grdc\">\n          <header class=\"page-header\">\n            <h1 class=\"logo\">EC</h1>\n            <ul class=\"nav-links\">\n              <li class=\"link-intro\"><a href=\"#\">Introduction</a></li>\n              <li class=\"link-login\">\n                <!-- a(href=\"#\") Login-->\n              </li>\n              <li class=\"link-register\">\n                <!-- a(href=\"#\") Register-->\n              </li>\n            </ul>\n            <div id=\"company-search-component\" class=\"company-search\">\n              <input type=\"text\" placeholder=\"Company Search\">\n            </div>\n          </header>\n        </div>\n      </div>\n      <div class=\"grdr\">\n        <div id=\"intro\" class=\"grdc intro\">\n          <h2>Cambridge Cluster Map</h2>\n          <p>\n            Cambridge Cluster Map is a big data resource highlighting the cluster of businesses located \n            within 25 miles of Cambridge UK. Underlying research by&nbsp;<a href=\"http://www.cbr.cam.ac.uk/home/\" target=\"_blank\">Cambridge University Centre for Business Research</a>&nbsp;on behalf of&nbsp;<a href=\"http://www.cambridgeahead.co.uk\" target=\"_blank\">Cambridge Ahead</a>. Business data sourced from Companies House. Platform and mapping analytics created by&nbsp;<a href=\"http://trampolinesystems.com\" target=\"_blank\">Trampoline Systems</a>. Thanks to our supporters.\n          </p>\n        </div>\n      </div>\n      <div class=\"grdr\">\n        <div class=\"grdc\">\n          <div class=\"view view-main\">\n            <div id=\"filter-description-component\">\n              <div class=\"filter-settings\">\n                <div class=\"filter-buttons\">\n                  <button type=\"button\" id=\"filter-toggle\" class=\"btn btn-primary\">Open Filter</button>\n                  <button type=\"button\" id=\"filter-reset\" class=\"btn btn-default\">Reset</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"grdr\">\n        <div class=\"grdc\">\n          <div class=\"view view-company hide\">\n            <div class=\"company-header\">\n              <h3 id=\"company-name-component\">Company Name</h3>\n              <div class=\"company-buttons\"><span id=\"company-close\">\n                  <button type=\"button\" class=\"btn btn-primary\">Close</button></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"grdr\">\n        <div class=\"grdc grdh\">\n          <div id=\"data-container\" class=\"grd\">\n            <div class=\"grdr\">\n              <div id=\"filters\" class=\"grdc grdh filters view view-main\">\n                <div class=\"grd\">\n                  <div class=\"grdr\">\n                    <div class=\"grdc\">\n                      <header class=\"filters-header\">Filters</header>\n                    </div>\n                  </div>\n                  <div class=\"grdr\">\n                    <div class=\"grdc grdh\">\n                      <div id=\"filter-col\" class=\"grdp grdh\">\n                        <div id=\"filter-component\" class=\"grdh grdw grda\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"grdc grdh\">\n                <div class=\"grd\">\n                  <div class=\"grdr view view-main\">\n                    <div class=\"grdc\">\n                      <ul id=\"section-nav\" class=\"section-nav nav\">\n                        <li><a href=\"#headlines\">At a glance</a></li>\n                        <li><a href=\"#map\">Map</a></li>\n                        <li><a href=\"#charts\">Charts</a></li>\n                        <li><a href=\"#index\">Companies</a></li>\n                        <li><a href=\"#credits\">Supporters</a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"grdr\">\n                    <div class=\"grdc grdh grdw\">\n                      <div id=\"data-col\" data-spy=\"scroll\" data-target=\"#section-nav\" class=\"grdp grdh\">\n                        <div class=\"grdh grdw grda\">\n                          <div id=\"data-details\" class=\"main-content\">\n                            <section id=\"headlines\" class=\"section section-headlines view view-main\">\n                              <h3>At a glance</h3>\n                              <div id=\"headline-stats-component\"></div>\n                            </section>\n                            <section id=\"map\" class=\"section section-map view view-main\">\n                              <header>\n                                <h3>Map</h3>\n                                <!-- p Intro text...-->\n                              </header>\n                              <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">\n                                  <div class=\"heat-map-key\">\n                                    <div id=\"color-scale-component\">\n                                    </div>\n                                    <p>Companies appear when fewer than 1000 on the map</p>\n                                  </div>\n                                  <div class=\"panel-settings\">\n                                    <div>\n                                    </div>\n                                    <div>\n                                    </div>\n                                  </div>\n                                  <div id=\"advanced-options\" class=\"panel-options collapse\">\n                                  </div>\n                                </div>\n                                <div class=\"panel-body\">\n                                  <div id=\"map-component\"></div>\n                                </div>\n                              </div>\n                            </section>\n                            <section id=\"charts\" class=\"section section-charts view view-main\">\n                              <header>\n                                <h3>Charts</h3>\n                                <!-- p Intro text...-->\n                              </header>\n                              <div class=\"panel\">\n                                <div class=\"panel-heading\">\n                                  <h4>Company size - turnover</h4>\n                                </div>\n                                <div class=\"panel-body\">\n                                  <div id=\"revenue-bands-table-component\"></div>\n                                </div>\n                              </div>\n                            </section>\n                            <section id=\"index\" class=\"section section-index view view-main\">\n                              <header>\n                                <h3>Companies</h3>\n                                <!-- p Intro text...-->\n                              </header>\n                              <div id=\"table-component\"> \n                              </div>\n                            </section>\n                            <section id=\"credits\" class=\"section section-credits view view-main\">\n                              <header>\n                                <h3>Supporters</h3>\n                                <h4>Thanks to the following organisations</h4><img src=\"/img/supporter_logos.png\" class=\"center\">\n                              </header>\n                            </section>\n                            <section id=\"company-info\" class=\"section section-company-info view view-company hide\">\n                              <div id=\"company-info-component\">\n                                <div class=\"panel-grid-container\">\n                                  <div class=\"panel-grid\">\n                                    <div class=\"panel-row\">\n                                      <div class=\"panel\">\n                                        <div class=\"panel-body\">\n                                          <div class=\"company-logo\"></div>\n                                          <div class=\"company-details\">\n                                            <ul>\n                                              <li>\n                                                <h4>Description</h4>\n                                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum distinctio aliquid voluptatum temporibus suscipit at, quae ea facilis nobis! Facilis quia, repellendus sunt numquam, aut distinctio placeat commodi quisquam eius.</p>\n                                              </li>\n                                              <li>\n                                                <h4>Sector</h4>\n                                                <p><a href=\"#\">Other service activities</a></p>\n                                                <p>SIC 1234 5678 - Other Business Activities</p>\n                                                <p>SIC 1234 5678 - Other Business Activities</p>\n                                              </li>\n                                              <li>\n                                                <h4>Registration Number</h4>\n                                                <p>0123456789</p>\n                                              </li>\n                                              <li>\n                                                <h4>Website</h4>\n                                                <p><a href=\"#\">abcdefghijk.com</a></p>\n                                              </li>\n                                              <li>\n                                                <p><a href=\"#\"><i class=\"icon-twitter\"></i></a>&nbsp;<a href=\"#\"><i class=\"icon-linkedin\"></i></a>&nbsp;<a href=\"#\"><i class=\"icon-crunch\"></i></a>&nbsp;<a href=\"#\"><i class=\"icon-angel\"></i></a></p>\n                                              </li>\n                                            </ul>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <div class=\"panel\">\n                                        <div class=\"panel-body\">\n                                          <div class=\"company-address\">\n                                            <div class=\"row\">\n                                              <div class=\"col-sm-6\">\n                                                <address>\n                                                  <h4>Registered Address</h4>\n                                                  <div>110 Fulbourn Rd</div>\n                                                  <div>Cambridge</div>\n                                                  <div>Cambridgeshire</div>\n                                                  <div>CB1 9NJ</div>\n                                                  <div>UK</div>\n                                                </address>\n                                              </div>\n                                              <div class=\"col-sm-6\">\n                                                <address>\n                                                  <h4>Second Address</h4>\n                                                  <div>110 Fulbourn Rd</div>\n                                                  <div>Cambridge</div>\n                                                  <div>Cambridgeshire</div>\n                                                  <div>CB1 9NJ</div>\n                                                  <div>UK</div>\n                                                </address>\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <div class=\"company-map\">\n                                            <div class=\"map-container\"></div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"panel-row\">\n                                    <div class=\"panel\">\n                                      <div class=\"panel-body\">\n                                        <div class=\"chart-heading\">\n                                          <h4 class=\"stat-title\">Turnover (2013)</h4>\n                                          <div class=\"stat-amount\">43.3M<small>GBP</small></div>\n                                          <div class=\"stat-change\"><i class=\"icon-positive\"></i><span>15.6%</span></div>\n                                        </div>\n                                        <div class=\"chart-container-lg\"></div>\n                                      </div>\n                                    </div>\n                                    <div class=\"panel\">\n                                      <div class=\"panel-body\">\n                                        <div class=\"chart-heading\">\n                                          <h4 class=\"stat-title\">Employees (2013)</h4>\n                                          <div class=\"stat-amount\">43,367</div>\n                                          <div class=\"stat-change\"><i class=\"icon-positive\"></i><span>15.6%</span></div>\n                                        </div>\n                                        <div class=\"chart-container-lg\"></div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"panel-row\">\n                                    <div class=\"panel\">\n                                      <div class=\"panel-body\">\n                                        <h3>Directors</h3>\n                                        <div class=\"table-responsive\">\n                                          <table class=\"table\">\n                                            <thead>\n                                              <tr>\n                                                <th>Name</th>\n                                                <th>Start Date</th>\n                                                <th>ZZZ</th>\n                                              </tr>\n                                            </thead>\n                                            <tbody>\n                                              <tr>\n                                                <td>Mr Joe Blogs</td>\n                                                <td>19<sup>th</sup> May 1998</td>\n                                                <td>--</td>\n                                              </tr>\n                                              <tr>\n                                                <td>Ms Mary Smith</td>\n                                                <td>3<sup>rd</sup> Jan 1999</td>\n                                                <td>--</td>\n                                              </tr>\n                                              <tr>\n                                                <td>Mr Alan Robertson</td>\n                                                <td>21<sup>st</sup> Aug 2001</td>\n                                                <td>--</td>\n                                              </tr>\n                                            </tbody>\n                                          </table>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </section>\n                          </div>\n                          <footer class=\"page-footer\">\n                            <div>Platform and analytics by &nbsp;<a href=\"http://www.trampolinesystems.com/\" target=\"_blank\">Trampoline Systems</a></div>\n                            <div class=\"report-issue\"><a href=\"mailto:clustermap-issues@trampolinesystems.com?subject=Cambridge Cluster Map issue report\">Report issue</a></div>\n                          </footer>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--begin-static-base-js-->\n    <script type=\"text/javascript\" src=\"cljs/goog/base.js\"></script>\n    <!--end-static-base-js-->\n    <!--base-js\n    {{{base-js}}}\n    \n    -->\n    <!--begin-static-dynamic-js--><script type=\"text/javascript\" src=\"clustermap.js\"></script><script type=\"text/javascript\">goog.require(\"clustermap.core\");</script>\n    <!--end-static-dynamic-js-->\n    <!--dynamic-js\n    <script type=\"text/javascript\" src=\"clustermap.js\"></script><script type=\"text/javascript\">goog.require(\"clustermap.core\");</script>\n    \n    -->\n    <!--begin-static-repl-js-->\n    <!--end-static-repl-js-->\n    <!--repl-js\n    <script type=\"text/javascript\">{{{repl-js}}}</script>\n    \n    \n    -->\n    <script type=\"text/javascript\">\n      $(function(){\n      \n        $(window).scroll(function() {\n          var $intro = $('#intro');\n          \n          if ($intro.is(':visible')) {\n            var $win = $(this),\n                height = parseInt($intro.outerHeight(),10);\n                \n            if ($win.scrollTop() > height) {\n            \n              $('body').addClass('page-condensed');\n              \n            }\n          }\n        });\n        \n        $('[data-spy=\"scroll\"]').each(function () {\n          var $spy = $(this).scrollspy('refresh');\n        });\n        \n        $('#data-col').scrollspy({ target: '#section-nav' })\n        \n        \n        $('#section-nav').on('click','a', function(){\n          if (!$('body').hasClass('page-condensed')) {\n            $('body').addClass('page-condensed');\n          }\n          \n          var $target = $(this.hash);\n          $('#data-col').animate({\n            scrollTop: $target.parent().scrollTop() + $target.offset().top - $target.parent().offset().top\n          }, 1000);\n          return false;\n        });\n        \n        \n        $('.link-intro').on('click', function(e){\n          e.preventDefault();\n          \n          $('body').removeClass('page-condensed');\n          \n          $('#section-nav').find('li.active').removeClass('active').end().find('li:first').addClass('active');\n          \n        });\n        \n        \n        $(document).on('click', '#filter-toggle', function(){\n          $('#data-container').toggleClass('show-filters');\n        });\n        \n        $(document).on('click', '.filter-header', function(){\n          var $t = $(this), $o = $t.next('.filter-body'), $p = $t.parent('.filter-group'), active = $p.hasClass('active') ? true : false;\n          \n          if (active) {\n            $o.slideUp(function(){\n              $p.removeClass('active');\n            });\n          }\n          else {\n            $o.slideDown(function(){\n              $p.addClass('active');\n            });\n          }\n        });\n        \n      });\n      \n    </script>\n  </body>\n</html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("unsupported.static", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <!--begin-static-app-name-->\n    <title>clustermap</title>\n    <!--end-static-app-name-->\n    <!--app-name\n    <title>{{{app-name}}}</title>\n    \n    -->\n    <meta charset=\"utf-8\">\n  </head>\n  <body>\n    <!--begin-static-app-name-->\n    <h1>clustermap</h1>\n    <!--end-static-app-name-->\n    <!--app-name\n    <h1>{{{app-name}}}</h1>\n    \n    -->\n    <h2>Unsupported browser</h2>\n    <h3>This browser is completely unsupported. it will not work at all</h3>\n    <p>Please try one of :\n      <ul>\n        <li><a href=\"http://www.google.com/chrome/\">Chrome</a></li>\n        <li><a href=\"http://www.mozilla.org/en-US/firefox/new/\">Firefox</a></li>\n        <li><a href=\"http://windows.microsoft.com/en-us/internet-explorer/download-ie\">Internet Explorer v9 or newer</a></li>\n      </ul>\n    </p>\n  </body>\n</html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=templates.js.map