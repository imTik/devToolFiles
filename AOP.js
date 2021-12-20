Function.prototype.before = function(beforeFn) {
  const _this = this;
  return function() {
    let result = beforeFn.apply(this, arguments);
    if (!result) return false;
    return _this.apply(this, arguments);
  };
};

Function.prototype.after = function(afterFn) {
  const _this = this;

  return function() {
    let result = _this.apply(this, arguments);
    afterFn.apply(this, arguments);
    return result;
  };
};

function AopFactory(fn, before, after) {
  return function() {
    if (typeof before === 'function') before.apply(this, arguments);
    if (typeof fn === 'function') fn.apply(this, arguments);
    if (typeof after === 'function') after.apply(this, arguments);
  };
}

export default AopFactory;
