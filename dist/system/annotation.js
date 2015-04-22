System.register([], function (_export) {
    var _classCallCheck, _createClass, Annotation;

    return {
        setters: [],
        execute: function () {
            'use strict';

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

            _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            Annotation = (function () {
                function Annotation(name, targetCls) {
                    _classCallCheck(this, Annotation);

                    this.name = name;
                    this.targetCls = targetCls;

                    // We allow the decorators to decorate the targetCls
                    // before we create and configure the module
                    this.applyClassDecorators(targetCls);
                }

                _createClass(Annotation, [{
                    key: 'getInjectionTokens',
                    value: function getInjectionTokens() {
                        var tokens = [];
                        var injections = this.injections;
                        Object.keys(injections).forEach(function (binding) {
                            tokens.push(injections[binding]);
                        });
                        return tokens;
                    }
                }, {
                    key: 'injections',
                    get: function () {
                        return this.targetCls.injections || {};
                    }
                }, {
                    key: 'decorators',
                    get: function () {
                        return this.targetCls.decorators || [];
                    }
                }, {
                    key: 'dependencies',
                    get: function () {
                        return this.targetCls.dependencies || [];
                    }
                }, {
                    key: 'configure',

                    /**
                     * This method can be overriden by child classes to
                     * configure the angular module after it is created
                     * @param {module} module The created angular module
                     */
                    value: function configure(module) {}
                }, {
                    key: 'applyInjectionBindings',

                    /**
                     * This method applies all the requested injection bindings
                     * from the targetCls to the created instance
                     * @param  {Object} instance The created instance that
                     * wants the bindings
                     * @param  {Array<>} injected An array with the injected
                     * instances that we will apply on the class instance
                     */
                    value: function applyInjectionBindings(instance, injected) {
                        var injections = this.injections;

                        Object.keys(injections).forEach(function (binding, index) {
                            Object.defineProperty(instance, binding, {
                                value: injected[index]
                            });
                        });

                        Object.defineProperty(instance, '_annotation', {
                            value: this
                        });
                    }
                }, {
                    key: 'applyDecorators',

                    /**
                     * This method decorates the created instance with all the
                     * targetCls decorators
                     * @param  {Object} instance The created instance to be decorated
                     */
                    value: function applyDecorators(instance) {
                        var decorators = this.decorators;
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = decorators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var decorator = _step.value;

                                if (decorator.decorate instanceof Function) {
                                    decorator.decorate(instance);
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator['return']) {
                                    _iterator['return']();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                }, {
                    key: 'applyClassDecorators',

                    /**
                     * This method decorates the class with all the targetCls decorators
                     * @param  {Object} targetCls The targetCls to be decorated
                     */
                    value: function applyClassDecorators(targetCls) {
                        var decorators = this.decorators;
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = decorators[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var decorator = _step2.value;

                                if (decorator.decorateClass instanceof Function) {
                                    decorator.decorateClass(targetCls);
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                    _iterator2['return']();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                }], [{
                    key: 'getModuleNames',

                    /**
                     * Returns all the angular module names for an array of classes
                     * @param  {Array} classes An array of classes you want to module names for
                     * @return {Array} The name of the angular modules for these classes
                     */
                    value: function getModuleNames() {
                        var classes = arguments[0] === undefined ? [] : arguments[0];

                        var names = [];
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = classes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var cls = _step3.value;

                                var annotation = cls.annotation;
                                if (annotation) {
                                    names.push(annotation.module.name);
                                }
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                                    _iterator3['return']();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }

                        return names;
                    }
                }]);

                return Annotation;
            })();

            _export('Annotation', Annotation);

            _export('default', Annotation);
        }
    };
});
//# sourceMappingURL=annotation.js.map