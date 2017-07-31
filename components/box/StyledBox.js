'use strict';

exports.__esModule = true;

var _FLEX_MAP;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ALIGN_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignStyle = (0, _styledComponents.css)(['align-items:', ';'], function (props) {
  return ALIGN_MAP[props.align];
});

var ALIGN_CONTENT_MAP = {
  around: 'around',
  between: 'between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignContentStyle = (0, _styledComponents.css)(['align-content:', ';'], function (props) {
  return ALIGN_CONTENT_MAP[props.alignContent];
});

var ALIGN_SELF_MAP = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

var alignSelfStyle = (0, _styledComponents.css)(['align-self:', ';'], function (props) {
  return ALIGN_SELF_MAP[props.alignSelf];
});

var BASIS_MAP = {
  'full': '100%',
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var basisStyle = (0, _styledComponents.css)(['flex-basis:', ';'], function (props) {
  return BASIS_MAP[props.basis] || props.theme.brand.size[props.basis];
});

var directionStyle = (0, _styledComponents.css)(['flex-direction:', ';'], function (props) {
  if (props.direction) {
    return props.reverse ? props.direction + '-reverse' : props.direction;
  }
  return 'column-reverse';
});

var FLEX_MAP = (_FLEX_MAP = {}, _FLEX_MAP[true] = '1 1', _FLEX_MAP[false] = '0 0 auto', _FLEX_MAP.grow = '1 0', _FLEX_MAP.shrink = '0 1', _FLEX_MAP);

var flexStyle = (0, _styledComponents.css)(['flex:', ';'], function (props) {
  return FLEX_MAP[props.flex];
});

var JUSTIFY_MAP = {
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
};

var justifyStyle = (0, _styledComponents.css)(['justify-content:', ';'], function (props) {
  return JUSTIFY_MAP[props.justify];
});

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};

var textAlignStyle = (0, _styledComponents.css)(['text-align:', ';'], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});

var wrapStyle = 'flex-wrap: true;';

var edgeStyle = function edgeStyle(kind, data, theme) {
  if (typeof data === 'string') {
    return kind + ': ' + theme.brand.edgeSize[data] + ';';
  }
  if (data.horizontal) {
    return '\n      ' + kind + '-left: ' + theme.brand.edgeSize[data.horizontal] + ';\n      ' + kind + '-right: ' + theme.brand.edgeSize[data.horizontal] + ';\n    ';
  }
  if (data.vertical) {
    return '\n      ' + kind + '-top: ' + theme.brand.edgeSize[data.vertical] + ';\n      ' + kind + '-bottom: ' + theme.brand.edgeSize[data.vertical] + ';\n    ';
  }
  if (data.top) {
    return kind + '-top: ' + theme.brand.edgeSize[data.top] + ';';
  }
  if (data.bottom) {
    return kind + '-bottom: ' + theme.brand.edgeSize[data.bottom] + ';';
  }
  if (data.left) {
    return kind + '-left: ' + theme.brand.edgeSize[data.left] + ';';
  }
  if (data.right) {
    return kind + '-right: ' + theme.brand.edgeSize[data.right] + ';';
  }
  return '';
};

var StyledBox = _styledComponents2.default.div.withConfig({
  displayName: 'StyledBox__StyledBox'
})(['display:flex;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.align && alignStyle;
}, function (props) {
  return props.alignContent && alignContentStyle;
}, function (props) {
  return props.alignSelf && alignSelfStyle;
}, function (props) {
  return props.basis && basisStyle;
}, function (props) {
  return (props.direction || props.reverse) && directionStyle;
}, function (props) {
  return props.flex !== undefined && flexStyle;
}, function (props) {
  return props.justify && justifyStyle;
}, function (props) {
  return props.margin && edgeStyle('margin', props.margin, props.theme);
}, function (props) {
  return props.pad && edgeStyle('padding', props.pad, props.theme);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.wrap && wrapStyle;
});

exports.default = StyledBox.extend(_templateObject, function (props) {
  return props.theme.box && props.theme.box.extend;
});