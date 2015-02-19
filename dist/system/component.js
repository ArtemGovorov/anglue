System.register(["angular", "./annotation"], function (_export) {
    "use strict";

    var angular, Annotation, _get, _prototypeProperties, _inherits, _classCallCheck, Component;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }, function (_annotation) {
            Annotation = _annotation["default"];
        }],
        execute: function () {
            _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

            _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

            _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            Component = _export("Component", (function (Annotation) {
                function Component() {
                    _classCallCheck(this, Component);

                    if (Annotation != null) {
                        Annotation.apply(this, arguments);
                    }
                }

                _inherits(Component, Annotation);

                _prototypeProperties(Component, null, {
                    controllerCls: {
                        get: function () {
                            var annotation = this;

                            return (function (_targetCls) {
                                function controllerCls() {
                                    _classCallCheck(this, controllerCls);

                                    var injected = Array.from(arguments);

                                    annotation.applyInjectionBindings(this, injected);
                                    annotation.applyDecorators(this);

                                    _get(Object.getPrototypeOf(controllerCls.prototype), "constructor", this).apply(this, injected);

                                    if (this.activate instanceof Function) {
                                        this.activate();
                                    }
                                }

                                _inherits(controllerCls, _targetCls);

                                return controllerCls;
                            })(this.targetCls);
                        },
                        configurable: true
                    },
                    dependencies: {
                        get: function () {
                            var targetCls = this.targetCls;
                            return [].concat(targetCls.dependencies || [], this.getModuleNames(targetCls.components));
                        },
                        configurable: true
                    },
                    module: {
                        get: function () {
                            var _this = this;
                            if (!this._module) {
                                var name = this.name;

                                this._module = angular.module("components." + name, this.dependencies);

                                this._module.directive(name, function () {
                                    return {
                                        restrict: "E",
                                        controllerAs: name,
                                        bindToController: true,
                                        controller: _this.getInjectionTokens().concat([_this.controllerCls])
                                    };
                                });

                                this.configure(this._module);
                            }

                            return this._module;
                        },
                        configurable: true
                    }
                });

                return Component;
            })(Annotation));
            _export("default", Component);
        }
    };
});
//# sourceMappingURL=component.js.map