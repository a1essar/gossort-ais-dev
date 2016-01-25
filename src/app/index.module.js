/* global malarkey:false, moment:false */

import { config } from './index.config';
import { data } from './data';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ProductionController } from './production/production.controller';
import { LoginController } from './login/login.controller';
import { NavbarDirective } from './components/navbar/navbar.directive';

angular.module('aisTemplates', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ngTable', 'datetimepicker', 'irontec.simpleChat'])
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .controller('ProductionController', ProductionController)
    .controller('LoginController', LoginController)
    .directive('aisNavbar', NavbarDirective)
    .value('appData', data);
