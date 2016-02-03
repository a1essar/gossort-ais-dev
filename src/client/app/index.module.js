/* global malarkey:false, moment:false */

import { config } from './index.config.js';
import { routerConfig } from './index.route.js';
import { runBlock } from './index.run.js';
import { MainController } from './main/main.controller.js';
import { ProductionController } from './production/production.controller.js';
import { formFieldsetDirective } from './production/form-fieldset.directive.js';
import { LoginController } from './login/login.controller.js';
import { NavbarDirective } from './components/navbar/navbar.directive.js';
import { select2Directive } from './components/select2.directive.js';
import { datepickerDirective } from './components/datepicker.directive.js';
import { inputMaskDirective } from './components/input-mask.directive.js';
import { dataService } from './components/data.service.js';

angular.module('aisTemplates', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ngTable', 'ngStorage', 'angular.filter', 'irontec.simpleChat'])
    .constant('moment', window.moment)
    .constant('$', window.$)
    .constant('_', window._)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .controller('ProductionController', ProductionController)
    .directive('formFieldset', formFieldsetDirective)
    .controller('LoginController', LoginController)
    .directive('aisNavbar', NavbarDirective)
    .directive('select2', select2Directive)
    .directive('datepicker', datepickerDirective)
    .directive('inputMask', inputMaskDirective)
    .service('appData', dataService);
